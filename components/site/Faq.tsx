export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-2xl border border-border bg-card p-6"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-twilight">
            {item.q}
            <span className="text-2xl leading-none text-teal-blue transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-twilight/75">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
