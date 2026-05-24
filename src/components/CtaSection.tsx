export function CtaSection() {
  return (
    <section id="contact" className="bg-[#0B3C6D] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-20">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#92D6D7]">
            Contact
          </p>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Let&apos;s Connect</h2>
          <p className="mt-5 max-w-xl leading-8 text-blue-50/86">
            Speak with Aspen Pharmaceuticals for product enquiries, distribution
            conversations, and manufacturing partnership discussions.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:enquiry@aspenpharma.co.in"
            className="rounded-sm bg-white px-5 py-6 text-[#0B3C6D] transition-transform hover:-translate-y-0.5"
          >
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#0F8B8D]">
              Enquiry
            </span>
            <span className="mt-3 block text-sm font-semibold">enquiry@aspenpharma.co.in</span>
          </a>
          <a
            href="tel:+910000000000"
            className="rounded-sm border border-white/20 px-5 py-6 transition-colors hover:bg-white/8"
          >
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#92D6D7]">
              Phone
            </span>
            <span className="mt-3 block text-sm font-semibold">+91 00000 00000</span>
          </a>
          <a
            href="https://wa.me/910000000000"
            className="rounded-sm border border-white/20 px-5 py-6 transition-colors hover:bg-white/8"
          >
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#92D6D7]">
              WhatsApp
            </span>
            <span className="mt-3 block text-sm font-semibold">Start a conversation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
