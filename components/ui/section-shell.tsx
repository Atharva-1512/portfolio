import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, children, className = "" }: SectionShellProps) {
  return (
    <section
      id={id}
      className={`section-shell glass-panel bg-noise px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 ${className}`}
    >
      {children}
    </section>
  );
}
