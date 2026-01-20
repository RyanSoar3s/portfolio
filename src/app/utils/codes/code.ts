import { CodeBox } from "@models/code-box.model";

const codeBoxHtmlHome: CodeBox<"home", "html"> = {
  id: 0,
  title: "home",
  language: "html",
  code: {
    "home.html": [
     [
        { token: "<", styleClass: "" },
        { token: "section", styleClass: "" },
        { token: " class", styleClass: "" },
        { token: "='", styleClass: "" },
        { token: "home", styleClass: "" },
        { token: "'", styleClass: "" },
        { token: ">", styleClass: "" }

     ],
     [
        { token: "  <", styleClass: "" },
        { token: "h1", styleClass: "" },
        { token: " class", styleClass: "" },
        { token: "='", styleClass: "" },
        { token: "home__title", styleClass: "" },
        { token: "'", styleClass: "" },
        { token: ">", styleClass: "" }

     ],
     [
        { token: "    Olá, eu sou ", styleClass: "" },
        { token: "<", styleClass: "" },
        { token: "span", styleClass: "" },
        { token: ">", styleClass: "" },
        { token: "Ryan Soares", styleClass: "" },
        { token: "</", styleClass: "" },
        { token: "span", styleClass: "" },
        { token: ">", styleClass: "" }

     ],
     [
        { token: "  </", styleClass: "" },
        { token: "h1", styleClass: "" },
        { token: ">", styleClass: "" }

     ],
     [
        { token: "  <", styleClass: "" },
        { token: "p", styleClass: "" },
        { token: " class", styleClass: "" },
        { token: "='", styleClass: "" },
        { token: "home__text", styleClass: "" },
        { token: "'", styleClass: "" },
        { token: ">", styleClass: "" }

     ],
     [
        { token: "    Desenvolvedor Fullstack Júnior focado em aplicações modernas, arquitetura frontend e experiências bem pensadas.", styleClass: "" },

     ],
     [
        { token: "  </", styleClass: "" },
        { token: "p", styleClass: "" },
        { token: ">", styleClass: "" }

     ],
     [
        { token: "</", styleClass: "" },
        { token: "section", styleClass: "" },
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
        { token: ".", styleClass: "" },
        { token: "home ", styleClass: "" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "" },
        { token: "include ", styleClass: "" },
        { token: "dimension", styleClass: "" },
        { token: "(", styleClass: "" },
        { token: "auto", styleClass: "" },
        { token: ", ", styleClass: "" },
        { token: "auto", styleClass: "" },
        { token: ")", styleClass: "" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "" },
        { token: "include ", styleClass: "" },
        { token: "padding", styleClass: "" },
        { token: "(", styleClass: "" },
        { token: "null", styleClass: "" },
        { token: ", ", styleClass: "" },
        { token: "0px 50px", styleClass: "" },
        { token: ")", styleClass: "" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  .", styleClass: "" },
        { token: "home__title ", styleClass: "" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    & ", styleClass: "" },
        { token: "span", styleClass: "" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      @", styleClass: "" },
        { token: "include ", styleClass: "" },
        { token: "highlightColor", styleClass: "" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "  .", styleClass: "" },
        { token: "home__text ", styleClass: "" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    @", styleClass: "" },
        { token: "include ", styleClass: "" },
        { token: "dimension", styleClass: "" },
        { token: "(", styleClass: "" },
        { token: "auto", styleClass: "" },
        { token: ", ", styleClass: "" },
        { token: "(", styleClass: "" },
        { token: "prefix", styleClass: "" },
        { token: ": ", styleClass: "" },
        { token: "max", styleClass: "" },
        { token: ", ", styleClass: "" },
        { token: "pvalue", styleClass: "" },
        { token: ": ", styleClass: "" },
        { token: "500px", styleClass: "" },
        { token: ", ", styleClass: "" },
        { token: "value", styleClass: "" },
        { token: ": ", styleClass: "" },
        { token: "100%", styleClass: "" },
        { token: ")", styleClass: "" },
        { token: ")", styleClass: "" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    @", styleClass: "" },
        { token: "include ", styleClass: "" },
        { token: "text", styleClass: "" },
        { token: "(", styleClass: "" },
        { token: "$textAlign", styleClass: "" },
        { token: ": ", styleClass: "" },
        { token: "center", styleClass: "" },
        { token: ", ", styleClass: "" },
        { token: "$fontSize", styleClass: "" },
        { token: ": ", styleClass: "" },
        { token: "1em", styleClass: "" },
        { token: ", ", styleClass: "" },
        { token: "$fontWeight", styleClass: "" },
        { token: ": ", styleClass: "" },
        { token: "500", styleClass: "" },
        { token: ")", styleClass: "" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    @", styleClass: "" },
        { token: "include ", styleClass: "" },
        { token: "softColor", styleClass: "" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    @", styleClass: "" },
        { token: "include ", styleClass: "" },
        { token: "margin", styleClass: "" },
        { token: "(", styleClass: "" },
        { token: "top", styleClass: "" },
        { token: ", ", styleClass: "" },
        { token: "30px", styleClass: "" },
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
