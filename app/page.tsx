"use client";

export default function Home() {
  return (
    <section className="h-full flex flex-1 flex-col items-center pb-10 gap-10">
      <div className="flex flex-col items-center pt-10">
        <h2>Jesper Ringhög</h2>
        <h1 className="text-4xl font-medium">Portfolio</h1>
      </div>
      <div
        className="xl:max-h-80 flex flex-col-reverse md:flex-row-reverse 
      justify-center items-center md:gap-10 xl:gap-0 md:mx-20 xl:mx-10"
      >
        <img
          src="profilbild.jpg"
          alt="Jesper Ringhög"
          className="h-full w-auto md:h-70 xl:h-full 
          md:rounded-full xl:rounded-l-none xl:rounded-r-xl"
        />
        <div
          className="h-full bg-white p-15 md:p-20 
        md:rounded-xl xl:rounded-r-none xl:rounded-l-xl"
        >
          <p className="text-sm md:text-base">
            <strong>Front End Developer</strong> student med utbildning i modern
            webbutveckling och grafisk design, samt erfarenhet av UX-design. Jag
            kombinerar tekniskt intresse med ett kreativt öga för visuell
            design, användarupplevelse och noggrannhet. Jag trivs i
            skärningspunkten mellan kod och design - där funktionalitet möter
            estetik. Mitt mål är att bidra till hållbar utveckling, med
            människor och struktur i fokus.
          </p>
        </div>
      </div>
    </section>
  );
}
