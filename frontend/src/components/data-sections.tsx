"use client";

import { useEffect, useState } from "react";
import { Building2, RefreshCw, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type TownRead = {
  id: number;
  name: string;
  population: number;
  country: string;
};

type PersonRead = {
  id: number;
  name: string;
  gender: string;
  age: string;
};

const DEMO_TOWNS: TownRead[] = [
  { id: 1, name: "Multan", population: 1871843, country: "Pakistan" },
  { id: 2, name: "Lahore", population: 13095500, country: "Pakistan" },
  { id: 3, name: "Karachi", population: 16459600, country: "Pakistan" },
  { id: 4, name: "Islamabad", population: 1014825, country: "Pakistan" },
  { id: 5, name: "Bahawalpur", population: 762111, country: "Pakistan" },
  { id: 6, name: "Faisalabad", population: 3263000, country: "Pakistan" },
];

const DEMO_PEOPLE: PersonRead[] = [
  { id: 1, name: "Muhammad Moeen Ul Qadir", gender: "Male", age: "27" },
  { id: 2, name: "Ayesha Khan", gender: "Female", age: "31" },
  { id: 3, name: "Hassan Raza", gender: "Male", age: "24" },
  { id: 4, name: "Fatima Noor", gender: "Female", age: "29" },
  { id: 5, name: "Bilal Ahmed", gender: "Male", age: "35" },
  { id: 6, name: "Maryam Javed", gender: "Female", age: "33" },
];

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export default function DataSections() {
  const [towns, setTowns] = useState<TownRead[] | null>(null);
  const [people, setPeople] = useState<PersonRead[] | null>(null);
  const [live, setLive] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadData = () => {
    setLoading(true);
    Promise.all([
      fetch(`${API_BASE}/towns/`).then((r) => r.json()),
      fetch(`${API_BASE}/people/`).then((r) => r.json()),
    ])
      .then(([townRows, peopleRows]) => {
        setTowns(
          Array.isArray(townRows)
            ? townRows
            : Array.isArray(townRows?.items)
              ? townRows.items
              : DEMO_TOWNS
        );
        setPeople(
          Array.isArray(peopleRows)
            ? peopleRows
            : Array.isArray(peopleRows?.items)
              ? peopleRows.items
              : DEMO_PEOPLE
        );
        setLive(true);
      })
      .catch(() => {
        setTowns(DEMO_TOWNS);
        setPeople(DEMO_PEOPLE);
        setLive(false);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  const townsToShow = towns ?? DEMO_TOWNS;
  const peopleToShow = people ?? DEMO_PEOPLE;

  return (
    <>
      <section id="cities" className="container-page py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
              <Building2 size={14} />
              Urban Registry
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cities directory
            </h2>
            <p className="mt-2 max-w-2xl text-slate-400">
              Population data for registered cities, served live from the
              MetroPulse FastAPI backend.
            </p>
          </div>
          <Button
            onClick={loadData}
            variant="outline"
            className="gap-2 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            disabled={loading}
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            {loading ? "Syncing…" : "Refresh data"}
          </Button>
        </div>

        {!live && (
          <p className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
            API not reachable — showing demo dataset. Set{" "}
            <code className="text-amber-200">NEXT_PUBLIC_API_URL</code> to point
            at your deployed backend for live data.
          </p>
        )}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {townsToShow.map((town) => (
            <Card
              key={town.id}
              className="border-white/10 bg-white/5 text-white shadow-none backdrop-blur transition-all hover:-translate-y-1 hover:border-accent-500/50"
            >
              <CardContent className="space-y-3 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {town.name}
                  </h3>
                  <span className="rounded-full bg-brand-500/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-300">
                    #{town.id}
                  </span>
                </div>
                <p className="text-sm text-slate-400">{town.country}</p>
                <p className="text-2xl font-bold text-accent-300">
                  {town.population.toLocaleString()}
                  <span className="ml-1.5 text-xs font-medium text-slate-400">
                    residents
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="people"
        className="border-y border-white/10 bg-night-950/60 py-16 sm:py-20"
      >
        <div className="container-page">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-300">
            <Users size={14} />
            Citizen Registry
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            People directory
          </h2>
          <p className="mt-2 max-w-2xl text-slate-400">
            Registered residents and their profile details, managed through the
            MetroPulse citizen registry.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {peopleToShow.map((person) => (
              <Card
                key={person.id}
                className="border-white/10 bg-white/5 text-white shadow-none backdrop-blur transition-all hover:-translate-y-1 hover:border-accent-500/50"
              >
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{person.name}</h3>
                      <p className="text-xs text-slate-400">
                        Citizen #{person.id}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      {person.gender}
                    </span>
                    <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Age {person.age}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}