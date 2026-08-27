import type { Service } from "@/lib/content";

/**
 * Line-drawn, one accent element each. Deliberately not an icon set —
 * three marks that read as chart, volume and target at a glance. Shared by
 * the home section and the services page, which is why they live here.
 */
const paths: Record<Service["icon"], React.ReactNode> = {
  trend: (
    <>
      <circle cx="14" cy="14" r="13" fill="none" stroke="var(--line-on-base)" />
      <path
        d="M7 18.5 L12 12 L16 15.5 L21.5 8"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      />
    </>
  ),
  bars: (
    <>
      <rect x="1" y="1" width="26" height="26" fill="none" stroke="var(--line-on-base)" />
      <rect x="7" y="16" width="3.5" height="6" fill="var(--color-accent)" />
      <rect x="12.5" y="10" width="3.5" height="12" fill="var(--color-accent)" />
      <rect x="18" y="6" width="3.5" height="16" fill="var(--color-accent-2)" />
    </>
  ),
  target: (
    <>
      <circle cx="14" cy="14" r="13" fill="none" stroke="var(--line-on-base)" />
      <circle cx="14" cy="14" r="4.5" fill="var(--color-accent)" />
    </>
  ),
};

export function ServiceIcon({ icon, size = 28 }: { icon: Service["icon"]; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true">
      {paths[icon]}
    </svg>
  );
}
