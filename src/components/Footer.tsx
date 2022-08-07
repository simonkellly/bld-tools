import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => (
  <footer className="footer footer-center">
    <div className="p-1">
      <a href="https://github.com/simonkellly/bld-tools/">
        <p className=" text-gray-500">
          Simon Kelly -
          <FontAwesomeIcon icon={faGithub} className="pl-1 pt-1" />
        </p>
      </a>
    </div>
  </footer>
);
