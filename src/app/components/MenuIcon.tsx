import clsx from "clsx";

export const MenuIcon = ({
  isOpen,
  setOpen,
  color,
  className,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  color: "white" | "black";
  className?: string;
}) => {
  const buttonClassnames = clsx(
    className,
    "flex flex-col justify-around w-8 h-8 cursor-pointer p-0 z-10 focus:outline-none bg-none"
  );
  const divClassNames = clsx(
    "w-full h-[12.5%] rounded-md transition-all relative origin-[1px]",
    {
      "bg-white": color === "white",
      "bg-black": color === "black",
    }
  );
  return (
    <button className={buttonClassnames} onClick={() => setOpen(!isOpen)}>
      <div
        className={clsx(divClassNames, {
          "rotate-45": isOpen,
          "rotate-0": !isOpen,
        })}
      />
      <div
        className={clsx(divClassNames, {
          "opacity-0": isOpen,
          "opacity-100": !isOpen,
          "translate-x-[20px]": isOpen,
          "translate-x-0": !isOpen,
        })}
      />
      <div
        className={clsx(divClassNames, {
          "-rotate-45": isOpen,
          "rotate-0": !isOpen,
        })}
      />
    </button>
  );
};
