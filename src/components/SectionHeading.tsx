interface Props {
  index: string;
  title: string;
  sub?: string;
}

export default function SectionHeading({ index, title, sub }: Props) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-sm text-accent-500">{index}</p>
      <h2 className="text-2xl font-bold tracking-tight text-ink-100 sm:text-3xl">
        {title}
      </h2>
      {sub && <p className="mt-3 max-w-2xl text-ink-300">{sub}</p>}
    </div>
  );
}
