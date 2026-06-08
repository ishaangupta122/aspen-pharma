import Image from "next/image";

export default function EnvironmentSection() {
  return (
    <section id="environment" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="/banner.png"
              alt="Environment and sustainability"
              width={680}
              height={420}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-[#0B3C6D]">
              Environment & Sustainability
            </h2>
            <p className="text-base leading-7 text-slate-600">
              As much as Aspen is helping the people of our society, we are also
              very conscious of our environment and our daily impacts on
              sustainability. We pursue efficient resource use, cleaner energy,
              and continuous improvements that reduce our carbon footprint while
              maintaining high safety and quality standards.
            </p>

            <p className="text-sm leading-6 text-slate-500">
              Towards this end we have invested in projects focused on renewable
              energy and process efficiencies to reduce dependency on grid
              electricity and lower emissions across our operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
