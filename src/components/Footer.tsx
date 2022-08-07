import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { StatsContext } from "../context/StatsContext";

export const Footer = () => {
  const statsContext = useContext(StatsContext);

  return (
    <footer className="footer footer-center">
      <div className="p-1">
        <a href="https://github.com/simonkellly/bld-tools/">
          <p className=" text-gray-400">
            Completed {statsContext.trainedCount} Cases
          </p>
          <p className=" text-gray-400">
            Simon Kelly -
            <FontAwesomeIcon icon={faGithub} className="pl-1 pt-1" />
          </p>
        </a>
      </div>
    </footer>
  );
};
