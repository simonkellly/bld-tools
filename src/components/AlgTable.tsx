import { useEffect, useState } from "react";
import { AlgSheet, fetchGoogleSheet, SHEET_ID, SHEET_NAME } from "../utils/alg-sheet";
import { getLetterColor } from "../utils/cube";

export const AlgTable = () => {
  const [sheet, setSheet] = useState<AlgSheet | undefined>();

  useEffect(() => {
    fetchGoogleSheet(SHEET_ID, SHEET_NAME).then(setSheet);
  }, []);

  if (sheet == undefined) return <>Loading...</>;

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th className="bg-base-300"></th>
            {sheet.letters.map((letter, i) => (
              <th key={i} className={getLetterColor(letter)}>{letter}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sheet.letters.map((secondLetter) => (
            <tr key={secondLetter}>
              <th className={getLetterColor(secondLetter)}>{secondLetter}</th>
              {sheet.letters.map((firstLetter) => {
                const alg = sheet.getAlg(firstLetter, secondLetter);
                if (!alg) {
                  return <td key={firstLetter} className={getLetterColor(firstLetter)}></td>;
                }
                return (
                  <td key={firstLetter}>
                    <div className="tooltip" data-tip={alg.expanded}>
                      {alg.string}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
