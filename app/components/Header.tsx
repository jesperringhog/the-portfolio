export const Header = () => {
  return (
    <>
      <header className="p-6 border">
        <nav className="flex gap-2 justify-between">
          <div className="flex gap-2">
            <a href="#webshop">Webshop</a>
            <a href="#todos">Todos</a>
          </div>
          <div className="flex gap-1">
            <div className="w-10 h-10 bg-black"></div>
            <div className="">
              <div className="w-10 h-10 bg-black"></div>
              <div className=""></div>
            </div>
          </div>
          <div className="contact-btn-container">
            <a href="/graphicDesign.html">Graphic design</a>
            <a href="#footer">Contact</a>
          </div>

          <div className="menuContainer">
            <button id="menuBtn">Menu</button>
            <ul hidden>
              <li>
                <a href="#webshop">Webshop</a>
              </li>
              <li>
                <a href="#todos">Todos</a>
              </li>
              <li>
                <a href="/graphicdesign.html">Graphic design</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
