"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { navItems } from "@/lib/site-data";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Aspen Pharmaceuticals home">
      <span className="grid size-10 place-items-center rounded-sm bg-[#0B3C6D] text-sm font-semibold tracking-[0.18em] text-white">
        AP
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-semibold text-[#0B3C6D]">
          Aspen Pharmaceuticals
        </span>
        <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-[#64748B]">
          Pvt. Ltd.
        </span>
      </span>
    </Link>
  );
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Lock body scroll while menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="lg:hidden">
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
        aria-label="Close navigation menu"
      />

      {/* Sidebar */}
      <aside className="fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-sm border border-slate-200 p-2 text-[#0B3C6D] transition hover:border-[#0F8B8D] hover:text-[#0F8B8D]"
            aria-label="Close navigation menu">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M6 6l12 12" />
              <path d="M18 6l-12 12" />
            </svg>
          </button>
        </div>

        <div className="flex h-full flex-col gap-2 px-5 py-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="rounded-sm px-3 py-2 text-sm font-medium text-[#0B3C6D] transition hover:bg-[#F5F7FA]">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={onClose}
            className="mt-4 inline-flex justify-center rounded-sm bg-[#0B3C6D] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#082f56]">
            Contact
          </Link>
        </div>
      </aside>
    </div>,
    document.body,
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation">
        <Logo />

        {/* Desktop nav links */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-slate-600 transition-colors hover:text-[#0B3C6D] xl:text-sm">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-sm border border-[#0B3C6D] px-5 py-3 text-sm font-semibold text-[#0B3C6D] transition-colors hover:bg-[#0B3C6D] hover:text-white lg:inline-flex">
          Contact
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center rounded-sm border border-slate-200 p-2 text-[#0B3C6D] transition hover:border-[#0F8B8D] hover:text-[#0F8B8D] lg:hidden"
          aria-label="Open navigation menu">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu rendered via portal to escape sticky stacking context */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
