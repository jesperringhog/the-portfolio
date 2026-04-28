import { useState } from "react";

//kolla över scrollen

const RComponent = () => (
  <div className="flex flex-col gap-1">
    <div className="w-10 h-4.5 bg-black rounded-tr-full"></div>
    <div className="w-10 h-4.5 bg-black rounded-tr-full"></div>
  </div>
);

const HomeComponent = () => (
  <div className="w-10 h-10 bg-black rounded-bl-[50%]"></div>
);

export const JrLogo = () => {
  const [scroll, setScroll] = useState<Boolean>(false);

  return <div className="flex gap-1 justify-center">
    <div className="w-10 h-10 bg-black rounded-br-[50%]"></div>
    <div
      onScroll={() => {
        setScroll(true);
        {
          scroll ? <HomeComponent /> : <RComponent />;
        }
      }}
      className="flex flex-col gap-1"
    >
      <div className="w-10 h-4.5 bg-black rounded-tr-full"></div>
      <div className="w-10 h-4.5 bg-black rounded-tr-full"></div>
    </div>
  </div>;
};
