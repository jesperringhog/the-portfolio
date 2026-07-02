import Link from "next/link";
import { usePathname } from "next/navigation";

type RCompomentProps = {
  isHome: boolean;
};

const RCompoment = ({ isHome }: RCompomentProps) => (
  <div
    className={`w-10 h-4.5 bg-foreground transition-all duration-300 ease-in-out ${
      isHome
        ? "rounded-tr-[100] group-hover:rounded-tr-[0%]"
        : "rounded-[0%] group-hover:rounded-tr-[100]"
    }`}
  ></div>
);

export const JrLogo = () => {
  const pathName = usePathname();

  const isHome = pathName === "/";

  return (
    <Link href="/">
      <div
        className="flex gap-1 justify-center group cursor-pointer" 
      >
        <div
          className={`w-10 h-10 bg-foreground transition-all duration-300 ease-in-out ${
            isHome
              ? "rounded-br-[50%] group-hover:rounded-br-[0%]"
              : "rounded-[0%] group-hover:rounded-br-[50%]"
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
