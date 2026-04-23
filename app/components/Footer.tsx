import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => (
    <footer className="flex h-20">
      <div className="flex flex-1 justify-around items-center">
        <a href="https://github.com/jesperringhog">
          <FaGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/jesper-ringh%C3%B6g-649104125/"

        >
          <FaLinkedin className="w-8 h-8"/>
        </a>
        <a href="mailto:jesper.ringhog@gmail.com" className="">
          <EnvelopeIcon className="w-8 h-8" />
        </a>
        <p>Jesper Ringhög</p>
      </div>
    </footer>
);
