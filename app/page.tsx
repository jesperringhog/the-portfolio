"use client";

import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full flex flex-1 flex-col items-center pb-10 gap-10">
      <div className="flex flex-col items-center pt-10">
        <h2>Jesper Ringhög</h2>
        <h1 className="text-4xl font-sansafe">PORTFOLIO</h1>
      </div>
      <div
        className="max-w-300 xl:max-h-80 flex flex-col-reverse lg:flex-row-reverse
      justify-center items-center gap-10 xl:gap-0 md:mx-20 xl:mx-10"
      >
        <Image
          src="/profile/london-punk-square.jpg"
          alt="Jesper Ringhög"
          width={200}
          height={200}
          loading="eager"
          className="w-auto h-full md:h-70 xl:h-full
          rounded-xl md:rounded-full xl:rounded-l-none xl:rounded-r-xl"
        />
        <div
          className="h-full bg-project p-15
        md:rounded-xl xl:rounded-r-none xl:rounded-l-xl"
        >
          <p className="text-sm md:text-base">
            <strong>Frontend Developer</strong>-student med utbildning inom
            modern webbutveckling, grafisk design och UX. Jag trivs i
            skärningspunkten mellan kod och design — där funktionalitet möter
            estetik. Jag kombinerar ett tekniskt intresse med ett öga för
            detaljer och användarupplevelse, med fokus på att skapa tydliga,
            strukturerade och intuitiva lösningar. Mitt arbetssätt bygger på
            både användbarhet och visuell kvalitet. Jag söker just nu en LIA
            (praktikplats) för perioden vecka 39 - vecka 11, där jag vill
            fortsätta utvecklas, bidra i skarpa projekt och arbeta tillsammans
            med ett team.
          </p>
        </div>
      </div>
    </section>
  );
}
