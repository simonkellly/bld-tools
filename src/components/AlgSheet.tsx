import { useState, useEffect } from "react";
import { Comm, getGoogleSheet, Sheet } from "../utils/google-sheets";

export const SHEET_ID = "1NEYh8MeTqHwnwA4s_CAYBGWU76pqdlutxR0SA2hNZKk";
export const SHEET_NAME = "OldAlgs";

interface AlgSheetSheet {
  headings: string[];
  rows: Comm[][];
}

export const AlgSheet = () => {
  const [sheet, setSheet] = useState<AlgSheetSheet | undefined>(undefined);
  const [request, setRequest] = useState<Promise<Sheet> | undefined>(undefined);
  useEffect(() => {
    if (request) return;

    const req = getGoogleSheet(SHEET_ID, SHEET_NAME);
    req.then(handleRequest);
    setRequest(req);
  }, []);

  const handleRequest = (req: Sheet) => {
    const headings = req.rows[0].map((comm) => comm.original);
    const rows = req.rows.slice(1);
    const newSheet = { headings, rows };
    setSheet(newSheet);
  };

  if (sheet == undefined) return <>Loading...</>;

  const getCell = (item: Comm, i: number) => {
    if (i == 0) {
      return (
        <th key={i} className={item ? "bg-base-200" : "bg-base-200"}>
          {item.original}
        </th>
      );
    }

    if (!item) {
      return  <td key={i} className="bg-base-200" ></td>
    }

    return (
      <td key={i}>
        <div className="tooltip" data-tip={item.expanded}>
          {item.original}
        </div>
      </td>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            {sheet.headings.map((heading, i) => (
              <th key={i}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sheet.rows!.map((x, i) => (
            <tr key={i}>
              {x.map((item, j) => getCell(item, j))}
              {[...Array(Math.max(sheet.headings.length - x.length, 0))].map(
                (x, i) => (
                  <td key={i} className="bg-base-200"></td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
