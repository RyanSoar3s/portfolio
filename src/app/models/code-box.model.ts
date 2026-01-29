export type Language = "html" | "css" | "sass" | "scss" | "js" | "ts";

export type CodeToken = {
  token: string,
  styleClass: string

};

export type CodeBox<
  TTitle extends string,
  TLang extends Language

> = {
  id: number,
  title: TTitle,
  language: TLang,
  code: Record<`${CodeBox<TTitle, TLang>["title"]}.${CodeBox<TTitle, TLang>["language"]}`, CodeToken[][]>

};

export type CodePreview<
 TBoxes extends readonly CodeBox<string, Language>[]

> = {
  tabs: Array<`${TBoxes[number]["title"]}.${TBoxes[number]["language"]}` | "output">,
  codeBoxes: Array<CodeBox<string, Language>>,
  output: string

};
