type CardItem = {
  title: string;
  description: string;
  icon: string;
};

type CardGridProps = {
  items: CardItem[];
};

export function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <article
          key={item.title}
          className="group rounded-sm border border-slate-200 bg-white p-6 transition-colors hover:border-[#0F8B8D]/50">
          <div className="mb-7 grid size-11 place-items-center rounded-sm bg-[#EAF4F4] text-sm font-semibold text-[#0F8B8D] transition-colors group-hover:bg-[#0F8B8D] group-hover:text-white">
            {item.icon}
          </div>
          <h3 className="text-lg font-medium text-[#0B3C6D]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
