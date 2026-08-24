import { credentials } from "@/lib/content";

/**
 * Card row that straddles the hero edge — it overlaps the deep blue above so the
 * two sections interlock rather than simply stacking.
 */
export function CredentialsStrip() {
  return (
    <section aria-label="At a glance" className="relative bg-stone">
      {/* Navy continues behind the top half of the cards. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-deep" />

      <div className="relative mx-auto w-full max-w-[1280px] px-gutter">
        <dl
          className="grid gap-4 py-0"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}
        >
          {credentials.map((item) => (
            <div key={item.label} className="card p-6">
              <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-deep">
                {item.label}
              </dt>
              <dd className="m-0 mt-3 text-[20px] font-extrabold tracking-[-0.02em] text-deep">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
