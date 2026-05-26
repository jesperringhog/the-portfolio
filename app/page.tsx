import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full flex flex-1 flex-col items-center md:pb-10 md:gap-10">
      <div className="w-full xl:w-auto flex flex-col items-center xl:px-40 py-5 bg-primary 
      xl:[clip-path:polygon(0%_0%,100%_0%,80%_100%,20%_100%)]">
        <h2 className="text-xs xl:text-sm">Jesper Ringhög</h2>
        <h1 className="font-brush text-5xl xl:text-6xl">Portfolio</h1>
      </div>
      <div
        className="max-w-300 xl:max-h-80 flex flex-col-reverse lg:flex-row-reverse
      justify-center items-center md:gap-10 xl:gap-0 md:mx-20 xl:mx-10"
      >
        <Image
          src="/profile/london-punk-square.jpg"
          alt="Jesper Ringhög"
          width={200}
          height={200}
          loading="eager"
          className="w-full md:w-auto h-full md:h-70 xl:h-full
          md:rounded-full xl:rounded-l-none xl:rounded-r-xl"
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
