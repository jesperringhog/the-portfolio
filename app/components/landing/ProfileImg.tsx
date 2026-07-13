import Image from "next/image";

export const ProfileImg = () => {
  const imgClass =
    "w-full md:w-auto h-full md:h-70 xl:h-full md:rounded-full xl:rounded-l-none xl:rounded-r-xl";

  return (
    <>
      <Image
        src="/profile/london-punk-square-sm.jpg"
        alt="Jesper Ringhög"
        width={200}
        height={200}
        loading="eager"
        className={`${imgClass} md:hidden dark:hidden`}
      />
      <Image
        src="/profile/london-punk-square.jpg"
        alt="Jesper Ringhög"
        width={200}
        height={200}
        loading="eager"
        className={`${imgClass} hidden md:block md:dark:hidden`}
      />
      <Image
        src="/profile/london-punk-square-invert-sm.jpg"
        alt="Jesper Ringhög"
        width={200}
        height={200}
        loading="eager"
        className={`${imgClass} hidden md:dark:hidden dark:block`}
      />
      <Image
        src="/profile/london-punk-square-invert.jpg"
        alt="Jesper Ringhög"
        width={200}
        height={200}
        loading="eager"
        className={`${imgClass} hidden md:dark:block`}
      />
    </>
  );
};
