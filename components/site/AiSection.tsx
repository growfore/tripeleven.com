import { Sparkles, ListChecks, PenLine, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Sparkles, title: "Prompt", body: "Drop in up to 10 trip topics and a style: “luxury, 12–14 days, family-friendly”." },
  { icon: ListChecks, title: "Generate", body: "Claude drafts full day-by-day itineraries in one batch, with day counts and retries." },
  { icon: PenLine, title: "Polish", body: "Every draft opens in the same 11-step builder for a human edit." },
  { icon: Rocket, title: "Publish", body: "Submit straight into your catalog as a draft or a live, ready-to-sell trip." },
];

export function AiSection() {
  return (
    <section id="ai" className="bg-twilight px-6 py-24 text-primary-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold tracking-widest text-surf uppercase">AI generation</p>
          <h2 className="text-4xl sm:text-5xl">From topic to ready-to-sell trip in minutes.</h2>
          <p className="mt-6 text-lg text-primary-foreground/75">
            Batch-generate complete itineraries with AI, then refine them in the same 11-step
            builder your team already uses. AI drafts, humans polish, travelers book.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7"
            >
              <s.icon className="size-7 text-surf" />
              <p className="mt-6 text-xs font-bold tracking-widest text-surf">
                STEP {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm text-primary-foreground/70">{s.body}</p>
            </div>
          ))}
        </div>
        <Button variant="onDark" size="xl" className="mt-14" asChild>
          <a href="/ai">Try AI trip generation</a>
        </Button>
      </div>
    </section>
  );
}
