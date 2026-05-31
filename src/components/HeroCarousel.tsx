"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDE_INTERVAL_MS = 7000;

type Slide = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

const slides: Slide[] = [
  {
    title: "Explore our consumer healthcare range",
    description:
      "Everyday wellness products designed for families, backed by Aspen's trusted manufacturing standards.",
    ctaLabel: "View Product Tables",
    ctaHref: "/products",
    imageSrc:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "Healthcare products and family care",
  },
  {
    title: "Pharmaceutical manufacturing partners across India",
    description:
      "WHO-GMP aligned manufacturing facilities and quality controls supporting Aspen's nationwide footprint.",
    ctaLabel: "Manufacturing Network",
    ctaHref: "/manufacturing",
    imageSrc: "/home-banner.jpg",
    imageAlt: "Modern pharmaceutical production environment",
  },
  {
    title: "Trusted therapeutic divisions for doctors",
    description:
      "Focused lines across neurology, psychiatry, orthopaedics, and chronic care for long-term outcomes.",
    ctaLabel: "Browse Divisions",
    ctaHref: "/products",
    imageSrc:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "Pharmaceutical research and clinical care",
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length;

  const nextIndex = useMemo(() => {
    return (activeIndex + 1) % totalSlides;
  }, [activeIndex, totalSlides]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? totalSlides - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % totalSlides);
  };

  return (
    <section className="bg-white">
      <div className="w-full">
        <div className="relative overflow-hidden">
          <div className="relative  bg-white min-h-[80vh]">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={slide.title}
                  className={
                    "absolute inset-0 transition-opacity duration-700 " +
                    (isActive ? "opacity-100" : "opacity-0")
                  }
                  aria-hidden={!isActive}>
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#0B3C6D]/70 via-[#0B3C6D]/35 to-transparent" />
                </div>
              );
            })}

            <div className="relative z-10 flex min-h-[80vh] items-center">
              <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
                <div className="max-w-2xl text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#92D6D7]">
                    Aspen Pharmaceuticals
                  </p>
                  <h1 className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
                    {slides[activeIndex].title}
                  </h1>
                  <p className="mt-5 text-base leading-7 text-blue-50/85 sm:text-lg">
                    {slides[activeIndex].description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={slides[activeIndex].ctaHref}
                      className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-[#0B3C6D] transition hover:bg-white/90">
                      {slides[activeIndex].ctaLabel}
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-sm border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
                      Contact Us
                    </Link>
                  </div>

                  <div className="mt-16 flex items-center gap-2">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.title}
                        type="button"
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={
                          "h-2 w-2 rounded-full transition " +
                          (index === activeIndex
                            ? "bg-white"
                            : "bg-white/40 hover:bg-white/70")
                        }
                      />
                    ))}
                  </div>
                </div>

                <div className="hidden items-end justify-end gap-2 text-white lg:flex">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous slide"
                    className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/60 text-white transition hover:border-white hover:bg-white/10">
                    <span className="text-lg">&#8592;</span>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next slide"
                    className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/60 text-white transition hover:border-white hover:bg-white/10">
                    <span className="text-lg">&#8594;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
