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

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/92 backdrop-blur-md">
      <nav
        className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation">
        <Logo />
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {/* {navGroups.map((group) => (
            <div key={group.label} className="group relative py-7">
              <Link
                href={group.href}
                className="text-[13px] font-medium text-slate-600 transition-colors hover:text-[#0B3C6D] xl:text-sm"
              >
                {group.label}
              </Link>
              <div className="invisible absolute left-0 top-full w-64 translate-y-2 rounded-sm border border-slate-200 bg-white p-3 opacity-0 shadow-[0_18px_50px_rgba(15,23,42,0.10)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-sm px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-[#F5F7FA] hover:text-[#0B3C6D]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))} */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-slate-600 transition-colors hover:text-[#0B3C6D] xl:text-sm">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/enquiry"
          className="hidden rounded-sm border border-[#0B3C6D] px-5 py-3 text-sm font-semibold text-[#0B3C6D] transition-colors hover:bg-[#0B3C6D] hover:text-white sm:inline-flex">
          Enquiry
        </Link>
      </nav>
      <div className="border-t border-slate-200/70 px-5 py-3 lg:hidden">
        <div className="flex gap-5 overflow-x-auto text-sm">
          {[...navItems].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="shrink-0 font-medium text-slate-600">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
