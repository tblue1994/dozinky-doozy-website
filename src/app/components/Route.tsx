import clsx from "clsx";
import { DetailedHTMLProps, IframeHTMLAttributes } from "react";

type RouteProps = {
  routeTitle: string;
  routeIframeSrc: string;
  routeDescription: string;
  iframeClassName?: string;
} & Omit<
  DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>,
  "src" | "className"
>;
// TODO: look into lazy loading render issues with loading iframe content
// https://caisy.io/blog/nextjs-iframe-implementation
export const Route = (props: RouteProps) => {
  const { routeTitle, routeIframeSrc, routeDescription } = props;
  const iframeClassName = clsx(
    "w-full h-96 overflow-hidden",
    props.iframeClassName
  );
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold">{routeTitle}</h2>
      <iframe
        src={routeIframeSrc}
        title={`Map for ${routeTitle} route`}
        className={iframeClassName}
        {...props}
      />
      <p className="text-lg">{routeDescription}</p>
    </div>
  );
};
