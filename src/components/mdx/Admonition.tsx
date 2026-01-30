import { ReactElement } from "react";
import { ReactNode } from "react";

// Callout component no longer exported from nextra-theme-docs in v3
// Creating a simple replacement
function Callout({
  children,
  type = "default",
}: {
  children: ReactNode;
  type?: "info" | "warning" | "error" | "default";
}) {
  const colors = {
    default: "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600",
    info: "bg-blue-50 dark:bg-blue-950 border-blue-400 dark:border-blue-600",
    warning: "bg-yellow-50 dark:bg-yellow-950 border-yellow-400 dark:border-yellow-600",
    error: "bg-red-50 dark:bg-red-950 border-red-400 dark:border-red-600",
  };

  return (
    <div className={`my-4 rounded-lg border-l-4 p-4 ${colors[type]}`}>
      {children}
    </div>
  );
}

export function Admonition({
  children,
  title,
  type,
}: {
  title?: string;
  children?: ReactNode;
  type?: "info" | "warning" | "error" | "default";
}) {
  return (
    <Callout type={type}>
      <b>{title}</b>
      <span className="block text-base">{children}</span>
    </Callout>
  );
}

type ShortCut = (props: {
  title?: string;
  children: ReactNode;
}) => ReactElement;

export const Tip: ShortCut = (p) => <Admonition {...p} type="default" />;
export const Info: ShortCut = (p) => <Admonition {...p} type="info" />;
export const Warning: ShortCut = (p) => <Admonition {...p} type="warning" />;
export const Error: ShortCut = (p) => <Admonition {...p} type="error" />;

export default Admonition;
