import type { ComponentProps } from "react";
import { site } from "@/content/site";

type Variant = "primary" | "ghost" | "dark";
type Size = "md" | "sm";

type ButtonProps = ComponentProps<"a"> & {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
};

const variantStyles: Record<Variant, string> = {
  primary: "bg-lime text-lime-ink",
  dark: "bg-stone-ink text-stone",
  ghost: "border border-line text-fg hover:border-muted",
};

const arrowStyles: Record<Variant, string> = {
  primary: "bg-lime-ink text-lime",
  dark: "bg-lime text-lime-ink",
  ghost: "",
};

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  arrow = variant !== "ghost",
  className = "",
  children,
  ...props
}: ButtonProps) {
          const sizeStyles =
    size === "sm" ? "[--a:30px] text-sm" : "[--a:38px] text-[15px]";
  const padding = arrow
    ? size === "sm"
      ? "gap-2.5 py-1 pr-1 pl-4"
      : "gap-3 py-1.5 pr-1.5 pl-[22px]"
    : "px-[22px] py-[13px]";
  const classes = `group inline-flex cursor-pointer items-center rounded-full font-medium no-underline transition-colors duration-300 ease-calm ${sizeStyles} ${padding} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className={`pointer-events-none relative size-(--a) flex-none overflow-hidden rounded-full ${arrowStyles[variant]}`}
        >
          <span className="absolute inset-0 transition-transform duration-450 ease-calm group-hover:translate-x-full group-focus-visible:translate-x-full motion-reduce:transition-none">
            <ArrowIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <ArrowIcon className="absolute top-1/2 -left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </span>
        </span>
      )}
    </>
  );

  if (props.href === site.bookingUrl) {
    return (
      <button
        type="button"
        className={classes}
        data-cal-link={site.booking.calLink}
        data-cal-namespace={site.booking.namespace}
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
      >
        {content}
      </button>
    );
  }

  return (
    <a className={classes} {...props}>
      {content}
    </a>
  );
}