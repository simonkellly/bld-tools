import { Alg } from "cubing/alg";

export class Comm {
  original: string;
  expanded: string;

  constructor(comm: string) {
    this.original = comm;
    this.expanded = comm.startsWith('[') ? new Alg(comm).expand().simplify().toString() : "";
  }
}

export interface Sheet {
  rows: Comm[][];
}

interface SheetResponse {
  table: {
    rows: {
      c: {
        v: string;
      }[]
    }[]
  }
}

const parseText = (text: string) => {
  return JSON.parse(
    text
      .split("\n")[1]
      .replace(/google.visualization.Query.setResponse\(|\);/g, ""),
  );
}

export const getGoogleSheet = async (sheetId: string, sheetName: string) => {
  const response = await fetch(
    `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?sheet=${sheetName}`,
  );

  const resText = await response.text();
  const parsed = parseText(resText) as SheetResponse;

  const mapped = parsed.table.rows.map((row) => row ? row.c.map((cell) => cell && cell.v ? new Comm(cell.v) : null) : []);
  return { rows: mapped } as Sheet;
}
