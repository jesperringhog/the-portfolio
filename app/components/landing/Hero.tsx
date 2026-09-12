import { Heading } from "./Heading";
import Image from "next/image";

export const Hero = () => (
  <section
    id="home"
    className="w-full min-h-[calc(100svh-80px)] 2xl:min-h-0 flex flex-col lg:gap-10 items-center"
  >
    <Heading />
    <article
      className="flex flex-col-reverse lg:flex-row-reverse
      justify-center items-center md:gap-5 xl:gap-0"
    >
      <Image
        src="/profile/london-punk-square.jpg"
        alt="Jesper Ringhög"
        width={200}
        height={200}
        loading="eager"
        className={
          "w-full md:w-auto h-full md:h-70 xl:h-full md:rounded-full xl:rounded-none xl:rounded-r-xl sepia-10"
        }
      />
      <div className="min-h-80 xl:max-h-80 p-10 md:p-15 bg-project lg:rounded-xl xl:rounded-r-none xl:rounded-l-xl">
        <p className="text-sm md:text-base">
          <strong>Frontend Developer</strong>-student med bakgrund inom grafisk
          design och UX. Jag trivs bäst när jag får kombinera teknik med kreativ
          problemlösning och skapa webbupplevelser som är både funktionella och
          genomtänkta. För mig handlar bra frontend om mer än att få något att
          fungera – det handlar om struktur, tillgänglighet, prestanda och
          detaljer som gör skillnad för användaren. Jag lägger lika stor vikt
          vid kodens kvalitet som vid användarens upplevelse och strävar efter
          att bygga lösningar som är hållbara bakom kulisserna, samtidigt som de
          känns enkla, intuitiva och visuellt genomarbetade.
        </p>
      </div>
    </article>
  </section>
);
