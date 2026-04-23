import { JrLogo } from "./JrLogo";

export const Header = () => (
  <header className="p-5">
    <nav className="grid grid-cols-3 items-center w-full">
      <div></div>
      <JrLogo></JrLogo>
      <div className="flex flex-1 justify-start gap-20">
        <a className="">Projects</a> {/* länka till section -> projects */}
        <a>Graphic design</a> {/*onClick -> ändra state för header + main*/}
        <a>Contact</a>
      </div>
      {/* <div className="">
        <button id="menuBtn">Menu</button>
        <ul hidden>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Graphic design</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div> */}
    </nav>
  </header>
);
