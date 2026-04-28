export const Hero = () => (
  <section className="min-h-screen mx-[5%] bg-gray-200">
    <div className="flex flex-col items-center mt-30">
      <h1 className="text-4xl font-bold">Portfolio</h1>
      <div className="flex m-20">
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
