import { useEffect, useState } from "react";
import AlgSheet, { fetchGoogleSheet } from "../../utils/alg-sheet";
import AlgWrapper from "../../utils/alg-wrapper";

export const Timer = () => {
  const [algSheet, setAlgSheet] = useState<AlgSheet>();
  useEffect(() => {
    fetchGoogleSheet().then(setAlgSheet);
  }, []);

  const [alg, setAlg] = useState<AlgWrapper>();
  useEffect(() => setAlg(algSheet?.getAlg("S", "K")), [algSheet]);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div>
          <p>{alg?.string}</p>
          <h1 className="text-9xl font-bold">SK</h1>
          <div className="space-x-3">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
