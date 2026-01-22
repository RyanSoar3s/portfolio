import { CodeBox } from "@models/code-box.model";

const codeBoxHtmlHome: CodeBox<"home", "html"> = {
  id: 0,
  title: "home",
  language: "html",
  code: {
    "home.html": [
     [
        { token: "<", styleClass: "" },
        { token: "section", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'home'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

     ],
     [
        { token: "  <", styleClass: "" },
        { token: "h1", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'home__title'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

     ],
     [
        { token: "    Olá, eu sou ", styleClass: "" },
        { token: "<", styleClass: "" },
        { token: "span", styleClass: "token-identifier" },
        { token: ">", styleClass: "" },
        { token: "Ryan Soares", styleClass: "" },
        { token: "</", styleClass: "" },
        { token: "span", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

     ],
     [
        { token: "  </", styleClass: "" },
        { token: "h1", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

     ],
     [
        { token: "  <", styleClass: "" },
        { token: "p", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'home__text'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

     ],
     [
        { token: "    Desenvolvedor Fullstack Júnior focado em aplicações modernas, arquitetura frontend e experiências bem pensadas.", styleClass: "" },

     ],
     [
        { token: "  </", styleClass: "" },
        { token: "p", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

     ],
     [
        { token: "</", styleClass: "" },
        { token: "section", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

     ]

    ]

  }

};

const codeBoxScssHome: CodeBox<"home", "scss"> = {
  id: 1,
  title: "home",
  language: "scss",
  code: {
    "home.scss": [
      [
        { token: ".home ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "include ", styleClass: "token-string" },
        { token: "dimension", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "auto", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "auto", styleClass: "token-html-property" },
        { token: ")", styleClass: "" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "include ", styleClass: "token-string" },
        { token: "padding", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "null", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "0px 50px", styleClass: "token-html-property" },
        { token: ")", styleClass: "" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  .home__title ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    & span ", styleClass: "token-identifier" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      @", styleClass: "token-at" },
        { token: "include ", styleClass: "token-string" },
        { token: "highlightColor", styleClass: "token-type-function" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "  .home__text ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    @", styleClass: "token-at" },
        { token: "include ", styleClass: "token-string" },
        { token: "dimension", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "auto", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "(", styleClass: "" },
        { token: "prefix", styleClass: "" },
        { token: ": ", styleClass: "" },
        { token: "max", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "pvalue", styleClass: "" },
        { token: ": ", styleClass: "" },
        { token: "500px", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "value", styleClass: "" },
        { token: ": ", styleClass: "" },
        { token: "100%", styleClass: "token-html-property" },
        { token: ")", styleClass: "" },
        { token: ")", styleClass: "" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    @", styleClass: "token-at" },
        { token: "include ", styleClass: "token-string" },
        { token: "text", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "$textAlign", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "center", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "$fontSize", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "1em", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "$fontWeight", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "500", styleClass: "token-html-property" },
        { token: ")", styleClass: "" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    @", styleClass: "token-at" },
        { token: "include ", styleClass: "token-string" },
        { token: "softColor", styleClass: "token-type-function" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    @", styleClass: "token-at" },
        { token: "include ", styleClass: "token-string" },
        { token: "margin", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "top", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "30px", styleClass: "token-html-property" },
        { token: ")", styleClass: "" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ]

    ]

  }

}

export const codeBoxesHome = [ codeBoxHtmlHome, codeBoxScssHome ] as [ typeof codeBoxHtmlHome, typeof codeBoxScssHome ];
