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
          "w-full md:w-auto h-full md:h-70 xl:h-full md:rounded-full xl:rounded-none sepia-10"
        }
      />
      <div className="min-h-80 xl:max-h-80 p-10 md:p-20 bg-project lg:rounded-xl xl:rounded-none">
        <p className="text-sm md:text-base">
          <strong>Frontend Developer</strong>-student med bakgrund inom <strong>grafisk
          design</strong> och <strong>UX</strong>.
          <br />
          <br />
          Jag kombinerar teknik och kreativ problemlösning för
          att skapa funktionella, tillgängliga och genomtänkta webbupplevelser.
        </p>
      </div>
    </article>
    <a
      href="/#frontend"
      className="hidden lg:block px-5 py-2 bg-foreground text-primary font-bold rounded-xl xl:rounded-none 
    hover:bg-background hover:text-foreground border border-foreground focus:rounded-full transition-all duration-300"
    >
      Projekt
    </a>
  </section>
);
