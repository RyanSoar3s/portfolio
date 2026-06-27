import { Type } from "@angular/core";

export type Languages = "html" | "css" | "scss" | "ts" | "js" | "sql" | "Dockerfile";

export type FileName = `${string}.${Languages}` | "Dockerfile" | "output";

export type CodeSnippetModel = {
  tabs: FileName[],
  codes: {
    [lang in FileName]?: {
      type: Languages,
      code: string

    }

  }[],
  render?: () => Promise<Type<unknown>>

};
