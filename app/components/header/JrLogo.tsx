import Link from "next/link";
import { usePathname } from "next/navigation";

type RCompomentProps = {
  isHome: boolean;
};

const RCompoment = ({ isHome }: RCompomentProps) => (
  <div
    className={`w-10 h-4.5 bg-foreground ${
      isHome ? "rounded-tr-full" : "rounded-[0%] hover:rounded-tr-[100] transition-all duration-300 ease-in-out"
    }`}
  ></div>
);

export const JrLogo = () => {
  const pathName = usePathname();

  const isHome = pathName === "/";

  return (
    <Link href="/">
      <div
        className={`flex gap-1 justify-center ${
          isHome ? "cursor-default" : "cursor-pointer"
        }`}
      >
        <div
          className={`w-10 h-10 bg-foreground ${
            isHome ? "rounded-br-[50%]" : "rounded-[0%] hover:rounded-br-[50%] transition-all duration-300 ease-in-out"
          }`}
        ></div>
        <div className="flex flex-col gap-1">
          <RCompoment isHome={isHome} />
          <RCompoment isHome={isHome} />
        </div>
      </div>
    </Link>
  );
};
