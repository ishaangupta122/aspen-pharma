type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  eyebrowClass?: string;
  titleClass?: string;
  descriptionClass?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  eyebrowClass,
  titleClass,
  descriptionClass,
}: SectionHeaderProps) {
  return (
    <div
      className={
        (align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl") +
        (className ? ` ${className}` : "")
      }>
      {eyebrow ? (
        <p
          className={
            (eyebrowClass
              ? eyebrowClass
              : "mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#0F8B8D]") +
            " mb-0"
          }>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={
          titleClass
            ? titleClass
            : "text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl"
        }>
        {title}
      </h2>
      {description ? (
        <p
          className={
            descriptionClass
              ? descriptionClass
              : "mt-5 text-base leading-8 text-slate-600 sm:text-lg"
          }>
          {description}
        </p>
      ) : null}
    </div>
  );
}
