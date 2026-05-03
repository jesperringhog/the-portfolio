"use client";

export default function Home() {
  return (
    <section className="h-full flex flex-1 flex-col justify-center items-center gap-10">
      <div className="flex xl:flex-col items-center bg-amber-200">
      <div className="flex flex-col items-end xl:items-center bg-amber-500">
        <h2>Jesper Ringhög</h2>
        <h1 className="text-4xl font-medium">Portfolio</h1>
      </div>
      <div className="flex flex-col justify-center items-center xl:flex-row-reverse mx-20">
        <img
          src="profilbild.jpg"
          alt="Jesper Ringhög"
          className="size-50 xl:size-70 rounded-t-xl xl:rounded-tl-none xl:rounded-r-xl"
        />
        <div className="bg-white p-20 rounded-l-xl max-h-70">
          <p>
            Front End Developer student med utbildning i modern webbutveckling
            och grafisk design, samt erfarenhet av UX-design. Jag kombinerar
            tekniskt intresse med ett kreativt öga för visuell design,
            användarupplevelse och noggrannhet. Jag trivs i skärningspunkten
            mellan kod och design, där funktionalitet möter estetik. Min
            drivkraft är att lösa problem och förverkliga idéer.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
