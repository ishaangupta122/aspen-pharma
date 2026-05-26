const HomeBanner = ({ eyebrow, title, description }: any) => {
  return (
    <section className="bg-[#0B3C6D] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#92D6D7]">
          {eyebrow}
        </p>
        <h1 className="mt-5 whitespace-pre-line max-w-5xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/82">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HomeBanner;
