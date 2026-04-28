import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconComponent } from "./Icon";

export const Footer = () => (
    <footer id="contact" className="flex items-center footer-shape h-20 bg-white">
      <div className="flex-1"></div>
      <div className="flex gap-20">
        <IconComponent href="https://github.com/jesperringhog" reactIcon={FaGithub} className=""/>
        <IconComponent href="https://www.linkedin.com/in/jesper-ringh%C3%B6g-649104125/" reactIcon={FaLinkedin} className="" />
        <IconComponent href="mailto:jesper.ringhog@gmail.com" reactIcon={FaEnvelope} className=""/>
      </div>
        <p className="flex flex-1 justify-center">Jesper Ringhög</p>
    </footer>
);
