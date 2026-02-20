import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition",
        variant === "primary" &&
          "bg-indigo-600 text-white hover:bg-indigo-500",
        variant === "secondary" &&
          "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
      )}
    >
      {children}
    </Link>
  );
}