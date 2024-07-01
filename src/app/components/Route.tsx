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
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold">{routeTitle}</h2>
      <iframe
        src={routeIframeSrc}
        title={`Map for ${routeTitle} route`}
        className={iframeClassNames}
        {...rest}
      />
      <p className="text-lg">{routeDescription}</p>
    </div>
  );
};
