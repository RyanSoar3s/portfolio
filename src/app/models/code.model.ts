export type Languages = "html" | "scss";

export type FileName = `${string}.${Languages}` | "output";

export type CodeSnippetModel = {
  tabs: FileName[],
  codes: {
    [lang in FileName]?: {
      type: Languages,
      code: string

    }

  }[],
  output: string

};
