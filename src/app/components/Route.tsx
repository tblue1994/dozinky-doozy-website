import clsx from "clsx";
import { DetailedHTMLProps, IframeHTMLAttributes, ReactNode } from "react";

type RouteProps = {
  routeTitle: string;
  routeIframeSrc: string;
  routeDescription: ReactNode;
  iframeClassName?: string;
} & Omit<
  DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>,
  "src" | "className"
>;

export const Route = (props: RouteProps) => {
  const {
    routeTitle,
    routeIframeSrc,
    routeDescription,
    iframeClassName,
    ...rest
  } = props;
  const iframeClassNames = clsx(
    "w-full h-[600px] overflow-hidden col-span-2",
    iframeClassName
  );
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
      <div>
        <h2 className="text-2xl font-bold">{routeTitle}</h2>
        <p>{routeDescription}</p>
      </div>
      <iframe
        src={routeIframeSrc}
        title={`Map for ${routeTitle} route`}
        className={iframeClassNames}
        {...rest}
      />
    </div>
  );
};
