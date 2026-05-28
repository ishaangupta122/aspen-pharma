"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { productDivisions } from "@/lib/site-data";
import { Search } from "lucide-react";

const tabs = [
  { id: "all", label: "All Categories" },
  ...productDivisions.map((division) => ({
    id: division.slug,
    label: division.title,
  })),
];

type ProductRow = {
  brand: string;
  drugStrength: string;
  packing: string;
  dosageForm: string;
};

type ProductTableProps = {
  rows: ProductRow[];
};

type Division = {
  title: string;
  slug: string;
  rows: ProductRow[];
};

function filterRows(rows: ProductRow[], query: string) {
  if (!query) {
    return rows;
  }

  const normalized = query.toLowerCase();

  return rows.filter((row) => {
    return [row.brand, row.drugStrength, row.packing, row.dosageForm].some(
      (value) => value.toLowerCase().includes(normalized),
    );
  });
}

export function ProductTable({ rows }: ProductTableProps) {
  return (
    <div className="overflow-hidden rounded-sm border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-190 border-collapse text-left">
          <thead className="bg-[#0B3C6D] text-white">
            <tr>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em]">
                Brand
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em]">
                Drug & Strength
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em]">
                Packing
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em]">
                Dosage Form
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr
                key={`${row.brand}-${row.drugStrength}`}
                className="align-top">
                <td className="px-5 py-5 text-sm font-semibold text-[#0B3C6D]">
                  {row.brand}
                </td>
                <td className="px-5 py-5 text-sm leading-7 text-slate-600">
                  {row.drugStrength}
                </td>
                <td className="px-5 py-5 text-sm leading-7 text-slate-600">
                  {row.packing}
                </td>
                <td className="px-5 py-5 text-sm leading-7 text-slate-600">
                  {row.dosageForm}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ProductDivisionTabs() {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const headerRef = useRef<HTMLDivElement | null>(null);

  const divisions = useMemo(() => {
    return productDivisions as Division[];
  }, []);

  const divisionSlugs = useMemo(() => {
    return new Set(divisions.map((division) => division.slug));
  }, [divisions]);

  const activeTab = useMemo(() => {
    const requested = searchParams.get("division");
    if (requested && divisionSlugs.has(requested)) {
      return requested;
    }
    return "all";
  }, [divisionSlugs, searchParams]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window.location.hash === "#product-tables") {
      headerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  const filteredDivisions = useMemo(() => {
    if (activeTab === "all") {
      return divisions
        .map((division) => ({
          ...division,
          rows: filterRows(division.rows, search.trim()),
        }))
        .filter((division) => division.rows.length > 0 || search.trim() === "");
    }

    const selected = divisions.find((division) => division.slug === activeTab);
    if (!selected) {
      return [];
    }

    return [
      {
        ...selected,
        rows: filterRows(selected.rows, search.trim()),
      },
    ];
  }, [activeTab, divisions, search]);

  const hasResults = filteredDivisions.some(
    (division) => division.rows.length > 0,
  );

  return (
    <div className="space-y-10">
      <div
        className="space-y-5 scroll-mt-24"
        ref={headerRef}
        id="product-tables">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
              Therapeutic divisions
            </p>
            <h2 className="mt-3 text-3xl font-medium text-[#0B3C6D]">
              Browse the product tables
            </h2>
          </div>

          <div className="w-full lg:max-w-sm">
            {/* <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B3C6D]">
              Search products
            </label> */}
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B3C6D]/50" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by brand, drug, packing, or dosage"
                className="w-full rounded-sm border border-[#0B3C6D]/50 py-3 pl-10 pr-4 text-sm text-[#0B3C6D] outline-none transition focus:border-[#0F8B8D] focus:ring-2 focus:ring-[#0F8B8D]/20"
              />
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-slate-200 bg-white">
          <div className="flex gap-3 overflow-x-auto px-4 py-3">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              const href =
                tab.id === "all"
                  ? "/products#product-tables"
                  : `/products?division=${tab.id}#product-tables`;
              return (
                <Link
                  key={tab.id}
                  href={href}
                  className={
                    "shrink-0 whitespace-nowrap rounded-sm border px-4 py-2 text-sm font-semibold transition-colors cursor-pointer " +
                    (isActive
                      ? "border-[#0B3C6D] bg-[#0B3C6D] text-white"
                      : "border-slate-200 text-[#0B3C6D] hover:border-[#0F8B8D] hover:text-[#0F8B8D]")
                  }>
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {!hasResults && (
          <div className="rounded-sm border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-sm text-slate-600">
            No products match your search. Try a different keyword.
          </div>
        )}

        {filteredDivisions.map((division) => (
          <article key={division.slug} className="space-y-6">
            <div>
              <h2 className="mt-3 text-3xl font-medium text-[#0B3C6D]">
                {division.title}
              </h2>
            </div>
            {division.rows.length > 0 ? (
              <ProductTable rows={division.rows} />
            ) : (
              <div className="rounded-sm border border-dashed border-slate-200 px-6 py-8 text-sm text-slate-600">
                No products found for this division.
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
