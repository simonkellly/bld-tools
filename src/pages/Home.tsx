import { CubeButton } from "../components/CubeButton";
import { LetterSchemeEditor } from "../components/LetterSchemeEditor";
import { AlgTable } from "../components/AlgTable";

export const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">BLD Tools</h1>
            <p className="py-6">
              A collection of tools to improve at solving the 3x3 blindfolded
              Scroll down to see my corner algs
            </p>
            <LetterSchemeEditor text="Edit Letter Scheme" />
            <CubeButton/>
          </div>
        </div>
      </div>
      <AlgTable />
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>
            Simon Kelly -{" "}
            <a href="https://github.com/simonkellly">@simonkellly</a>
          </p>
        </div>
      </footer>
    </div>
  );
};
