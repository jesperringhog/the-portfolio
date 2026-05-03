import Link from "next/link";
import { usePathname } from "next/navigation";

type RCompomentProps = {
  isHome: boolean;
};

const RCompoment = ({ isHome }: RCompomentProps) => (
  <div
    className={`w-10 h-4.5 bg-black ${
      isHome ? "rounded-tr-full" : "rounded-none hover:rounded-tr-full duration-300 ease-in-out"
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
          className={`w-10 h-10 bg-black ${
            isHome ? "rounded-br-[50%]" : "rounded-none hover:rounded-br-[50%] duration-300 ease-in-out"
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
