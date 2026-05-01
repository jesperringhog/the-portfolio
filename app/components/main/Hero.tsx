export const Hero = () => (
  <section className="flex-1 min-h-screen mx-[5%] mt-20 bg-zinc-200">
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mt-10 py-5 px-20 bg-white rounded-xl">
        <h2>Jesper Ringhög</h2>
        <h1 className="text-4xl font-medium">
          Portfolio
        </h1>
      </div>
      <div className="flex my-10 mx-20">
        <div className="h-80 bg-white rounded-l-xl">
          <p className="m-20">
            Front End Developer student med utbildning i modern webbutveckling
            och grafisk design, samt erfarenhet av UX-design. Jag kombinerar
            tekniskt intresse med ett kreativt öga för visuell design,
            användarupplevelse och noggrannhet. Jag trivs i skärningspunkten
            mellan kod och design, där funktionalitet möter estetik - där
            problem kan lösas och idéer förverkligas.
          </p>
        </div>
        <img
          src="profilbild.jpg"
          alt="Jesper Ringhög"
          className="size-80 rounded-r-xl"
        />
      </div>
    </div>
  </section>
);
