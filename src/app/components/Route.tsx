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

export const Route = (props: RouteProps) => {
  const {
    routeTitle,
    routeIframeSrc,
    routeDescription,
    iframeClassName,
    ...rest
  } = props;
  const iframeClassNames = clsx("w-full h-96 overflow-hidden", iframeClassName);
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
      <div>
        <h2 className="text-2xl font-bold">{routeTitle}</h2>
        <p className="text-lg">{routeDescription}</p>
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
