import Image from "next/image";
import Link from "next/link";

export const CvHeader = () => (
  <section className="h-100 mt-[1] 2xl:mx-10 py-10 flex flex-1 gap-10 bg-primary 2xl:rounded-b-xl">
    <div className="flex flex-1 flex-col items-end gap-3">
      <h2 className="flex flex-col items-end text-7xl font-brush">
        Jesper<span>Ringhög</span>
      </h2>
      <p>920206-****</p>
    </div>
    <Image
      src="/profile/cv-portratt.jpg"
      alt="Jesper Ringhög"
      width={500}
      height={500}
      className="w-auto h-full flex-1 rounded-l-xl"
      loading="eager"
    />
  </section>
);
