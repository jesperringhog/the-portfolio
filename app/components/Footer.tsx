import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { LinkComponent } from "./buttons/LinkComponent";

export const Footer = () => (
  <footer
    id="contact"
    className="h-40 md:h-20 pb-10 md:pb-0 flex flex-col md:flex-row justify-center items-center 
    bg-primary xl:[clip-path:polygon(0%_100%,100%_100%,95%_0%,5%_0%)]"
  >
    <div className="hidden: md:flex flex-1"></div>
    <div className="flex gap-10 lg:gap-20">
      <LinkComponent
        href="https://github.com/jesperringhog"
        reactIcon={FaGithub}
      />
      <LinkComponent
        href="https://www.linkedin.com/in/jesper-ringh%C3%B6g-649104125/"
        reactIcon={FaLinkedin}
      />
      <LinkComponent
        href="mailto:jesper.ringhog@gmail.com"
        reactIcon={FaEnvelope}
      />
    </div>
    <div className="flex md:flex-1 justify-center items-center text-center">
      <p className="text-xs">© 2026 Jesper Ringhög</p>
    </div>
  </footer>
);
