import Image from "next/image";
import Link from "next/link";
import { bannerMessages } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid min-h-[calc(100svh-80px)] w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
            Independent Indian Pharmaceutical Company
          </p>
          <h1 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-[#0B3C6D] sm:text-5xl lg:text-6xl">
            {bannerMessages[0]}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Aspen Pharmaceuticals Pvt. Ltd. delivers quality healthcare solutions
            through trusted manufacturing partnerships, ethical practices, and a
            commitment to pharmaceutical excellence across India.
          </p>
          <div className="mt-7 grid max-w-2xl gap-2">
            {bannerMessages.slice(1).map((message) => (
              <p
                key={message}
                className="rounded-sm border border-slate-200 bg-[#F8FAFC]/80 px-4 py-3 text-sm font-medium text-[#0B3C6D] backdrop-blur"
              >
                {message}
              </p>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-sm bg-[#0B3C6D] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#082f56]"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm border border-slate-300 px-6 py-4 text-sm font-semibold text-[#0B3C6D] transition-colors hover:border-[#0F8B8D] hover:text-[#0F8B8D]"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-sm bg-[#F5F7FA]" aria-hidden="true" />
          <Image
            src="/images/aspen-manufacturing-hero.png"
            alt="Clean pharmaceutical manufacturing and quality control environment"
            width={1400}
            height={1000}
            priority
            className="relative aspect-[1.4/1] w-full rounded-sm object-cover shadow-[0_24px_70px_rgba(11,60,109,0.13)]"
          />
        </div>
      </div>
    </section>
  );
}
