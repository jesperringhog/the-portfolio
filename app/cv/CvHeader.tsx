import Image from "next/image";

export const CvHeader = () => (
  <section
    className="h-100 mt-[1] lg:mt-10 pt-10 sm:py-0 flex flex-col sm:flex-row flex-1 
  items-center gap-10 lg:gap-20 bg-primary lg:rounded-xl"
  >
    <div className="sm:pl-10 flex flex-1 flex-col sm:items-end lg:gap-3">
      <h2 className="flex flex-col items-center sm:items-end text-4xl md:text-5xl lg:text-7xl font-brush">
        Jesper<span>Ringhög</span>
      </h2>
      <p>920206-****</p>
    </div>
    <Image
      src="/profile/cv-portratt.jpg"
      alt="Jesper Ringhög"
      width={500}
      height={500}
      className="w-auto h-full lg:rounded-r-xl sepia-10"
      loading="eager"
    />
  </section>
);
