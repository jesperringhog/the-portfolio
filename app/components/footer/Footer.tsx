import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconComponent } from "./Icon";

export const Footer = () => (
    <footer id="contact" className="flex justify-end md:justify-center items-center h-20 bg-white xl:[clip-path:polygon(0%_100%,100%_100%,95%_0%,5%_0%)]">
      <div className="flex gap-7 md:gap-20">
        <div className="flex-1 md:hidden"></div>
        <IconComponent href="https://github.com/jesperringhog" reactIcon={FaGithub} />
        <IconComponent href="https://www.linkedin.com/in/jesper-ringh%C3%B6g-649104125/" reactIcon={FaLinkedin} />
        <IconComponent href="mailto:jesper.ringhog@gmail.com" reactIcon={FaEnvelope} />
      </div>
    </footer>
);
