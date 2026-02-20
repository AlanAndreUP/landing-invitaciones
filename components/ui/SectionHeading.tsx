interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false
}: SectionHeadingProps) {
  return (
    <header className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="chip">{eyebrow}</p>
      <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-ink/80 sm:text-lg">{description}</p>
    </header>
  );
}
