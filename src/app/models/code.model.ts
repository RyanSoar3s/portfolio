export type Languages = "html" | "scss";

export type FileName = `${string}.${Languages}`;

export type CodeSnippetModel = {
  codes: {
    [lang in FileName]?: {
      type: Languages,
      code: string

    }

  }[],
  tabs: FileName[]


};
