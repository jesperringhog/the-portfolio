import Image from "next/image";

export const CvHeader = () => (
  <section
    className="h-100 mt-[1] 2xl:mx-10 pt-10 md:py-0 lg:py-10 flex flex-col md:flex-row flex-1 
  items-center gap-10 lg:gap-20 bg-primary 2xl:rounded-b-xl"
  >
    <div className="flex flex-1 flex-col md:items-end lg:gap-3">
      <h2 className="flex flex-col items-center md:items-end text-4xl md:text-5xl lg:text-7xl font-brush">
        Jesper<span>Ringhög</span>
      </h2>
      <p>920206-****</p>
    </div>
    <Image
      src="/profile/cv-portratt.jpg"
      alt="Jesper Ringhög"
      width={500}
      height={500}
      className="w-auto h-full md:flex-1 lg:rounded-l-xl"
      loading="eager"
    />
  </section>
);
