import { CodeBox, CodePreview } from "@models/code-box.model";

// ------------------------------------------------ Code Box Home ------------------------------------------------//

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

const codePreviewHome: CodePreview<[ typeof codeBoxHtmlHome, typeof codeBoxScssHome ]> = {
  tabs: [ "home.html", "home.scss"  ],
  codeBoxes: [ codeBoxHtmlHome, codeBoxScssHome ],
  output: ""

};

// ------------------------------------------------- Code Box Button ------------------------------------------------- //

const codeBoxButtonHtml: CodeBox<"button", "html"> = {
  id: 0,
  title: "button",
  language: "html",
  code: {
    "button.html": [
      [
        { token: "<", styleClass: "" },
        { token: "img", styleClass: "token-identifier" },
        { token: " src", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'", styleClass: "token-string" },
        { token: "class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'container-html-sass__logo container-html-sass__logo-html'", styleClass: "token-string" },
        { token: " />", styleClass: "" }

      ],
      [
        { token: "<", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'container-html-sass__btn-container'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "    <", styleClass: "" },
        { token: "button", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'container-html-sass__btn-raw'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "      PASSE O CURSOR AQUI", styleClass: "" }

      ],
      [
        { token: "    </", styleClass: "" },
        { token: "button", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "</", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "<", styleClass: "" },
        { token: "img", styleClass: "token-identifier" },
        { token: " src", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg'", styleClass: "token-string" },
        { token: "class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'container-html-sass__logo container-html-sass__logo-sass'", styleClass: "token-string" },
        { token: " />", styleClass: "" }
      ]

    ]

  }


};

const codeBoxButtonScss: CodeBox<"button", "scss"> = {
  id: 1,
  title: "button",
  language: "scss",
  code: {
    "button.scss": [
      [
        { token: ".container-html-sass__logo", styleClass: "token-html-property" },
        { token: " {", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " position", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "absolute", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "    $top", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "calc", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "50%", styleClass: "token-html-property" },
        { token: " - ", styleClass: "" },
        { token: "50px", styleClass: "token-html-property" },
        { token: "),", styleClass: "" }

      ],
      [
        { token: "    $left", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "calc", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "50%", styleClass: "token-html-property" },
        { token: " - ", styleClass: "" },
        { token: "50px", styleClass: "token-html-property" },
        { token: ")", styleClass: "" }

      ],
      [
        { token: "  );", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " dimension", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "100px", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "100px", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " opacity", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }


      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".container-html-sass__logo-html", styleClass: "token-html-property" },
        { token: " {", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " animation-list", styleClass: "token-type-function" },
        { token: "(", styleClass: "" }

      ],
      [
        { token: "    (", styleClass: "" }

      ],
      [
        { token: "      spawn", styleClass: "" },
        { token: " 0.8s", styleClass: "token-html-property" },
        { token: " ease-out", styleClass: "token-html-property" },
        { token: " 0.5s", styleClass: "token-html-property" },
        { token: " forwards", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "      moveToTopLeft", styleClass: "" },
        { token: " 1.5s", styleClass: "token-html-property" },
        { token: " ", styleClass: "" },
        { token: "cubic-bezier", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0.68", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "-0.55", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "0.26", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "1.55", styleClass: "token-html-property" },
        { token: "),", styleClass: "" },
        { token: " 2.5s", styleClass: "token-html-property" },
        { token: " forwards", styleClass: "token-html-property" }

      ],
      [
        { token: "    )", styleClass: "" }

      ],
      [
        { token: "  );", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],
      [
        { token: ".container-html-sass__logo-sass", styleClass: "token-html-property" },
        { token: " {", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " animation-list", styleClass: "token-type-function" },
        { token: "(", styleClass: "" }

      ],
      [
        { token: "    (", styleClass: "" }

      ],
      [
        { token: "      spawn", styleClass: "" },
        { token: " 0.8s", styleClass: "token-html-property" },
        { token: " ease-out", styleClass: "token-html-property" },
        { token: " 5s", styleClass: "token-html-property" },
        { token: " forwards", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "      moveToTopRight", styleClass: "" },
        { token: " 1.5s", styleClass: "token-html-property" },
        { token: " ", styleClass: "" },
        { token: "cubic-bezier", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0.68", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "-0.55", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "0.26", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "1.55", styleClass: "token-html-property" },
        { token: "),", styleClass: "" },
        { token: " 7s", styleClass: "token-html-property" },
        { token: " forwards", styleClass: "token-html-property" }

      ],
      [
        { token: "    )", styleClass: "" }

      ],
      [
        { token: "  );", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".container-html-sass__btn-container", styleClass: "token-html-property" },
        { token: " {", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " flex", styleClass: "token-type-function" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " position", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "relative", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "$top", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "30px", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".container-html-sass__btn-raw", styleClass: "token-html-property" },
        { token: " {", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " opacity", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " transform", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "scale", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ")", styleClass: "" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " pointer-events", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "none", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }

      ],

      [
        { token: "  @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " animation-list", styleClass: "token-type-function" },
        { token: "(", styleClass: "" }

      ],
      [
        { token: "    (", styleClass: "" }

      ],
      [
        { token: "      spawn", styleClass: "" },
        { token: " 0.8s", styleClass: "token-html-property" },
        { token: " ease-out", styleClass: "token-html-property" },
        { token: " 4s", styleClass: "token-html-property" },
        { token: " forwards", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "      beautify", styleClass: "" },
        { token: " 1.2s", styleClass: "token-html-property" },
        { token: " ease-in-out", styleClass: "token-html-property" },
        { token: " 8.5s", styleClass: "token-html-property" },
        { token: " forwards", styleClass: "token-html-property" }

      ],
      [
        { token: "    )", styleClass: "" }

      ],
      [
        { token: "  );", styleClass: "" }

      ],

      [
        { token: "  @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " transition", styleClass: "token-type-function" },
        { token: "(", styleClass: "" }

      ],
      [
        { token: "    (", styleClass: "" }

      ],
      [
        { token: "      background-color", styleClass: "" },
        { token: " 0.35s", styleClass: "token-html-property" },
        { token: " ease", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "      color", styleClass: "" },
        { token: " 0.35s", styleClass: "token-html-property" },
        { token: " ease", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "      box-shadow", styleClass: "" },
        { token: " 0.35s", styleClass: "token-html-property" },
        { token: " ease", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "      transform", styleClass: "" },
        { token: " 0.2s", styleClass: "token-html-property" },
        { token: " ease", styleClass: "token-html-property" }

      ],
      [
        { token: "    )", styleClass: "" }

      ],
      [
        { token: "  );", styleClass: "" }

      ],

      [
        { token: "  &", styleClass: "token-identifier" },
        { token: ":", styleClass: "" },
        { token: "hover", styleClass: "token-type-function" },
        { token: " {", styleClass: "" }

      ],
      [
        { token: "    @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " gradient", styleClass: "token-type-function" },
        { token: "(", styleClass: "" }

      ],
      [
        { token: "      $type", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "linear", styleClass: "" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "      $values", styleClass: "token-identifier" },
        { token: ":", styleClass: "" }

      ],
      [
        { token: "      (", styleClass: "" }

      ],
      [
        { token: "        -135deg", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "        #f7b7d2", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "        #cc6699", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "        #b24a7d", styleClass: "token-html-property" }

      ],
      [
        { token: "      )", styleClass: "" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "      $important", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "true", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "    );", styleClass: "" }

      ],
      [
        { token: "    @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " text", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "$color", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "white !important", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "    @", styleClass: "token-at" },
        { token: "include", styleClass: "token-string" },
        { token: " shadow", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0px 0px 30px 2px #cc6699 !important", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ]

    ]

  }

};

const codePreviewButton: CodePreview<[ typeof codeBoxButtonHtml, typeof codeBoxButtonScss ]> = {
  tabs: [ "button.html", "button.scss", "output" ],
  codeBoxes: [ codeBoxButtonHtml, codeBoxButtonScss ],
  output: `
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" class="container-html-sass__logo container-html-sass__logo-html" />
  <div class="container-html-sass__btn-container">
      <button class="container-html-sass__btn-raw">PASSE O CURSOR AQUI</button>
  </div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" class="container-html-sass__logo container-html-sass__logo-sass" />
  `

};

// ------------------------------------------------- Code Box Loader ------------------------------------------------- //

const codeBoxLoaderHtml: CodeBox<"loader", "html"> = {
  id: 0,
  title: "loader",
  language: "html",
  code: {
    "loader.html": [
      [
        { token: "<", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'relative w-full h-full flex flex-col justify-center items-center'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],

      [
        { token: "  <", styleClass: "" },
        { token: "img", styleClass: "token-identifier" },
        { token: " src", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'", styleClass: "token-string" },
        { token: "  class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'absolute w-[100px] h-[100px] top-[calc(50%-50px)] left-[calc(50%-50px)] z-50 anim-html'", styleClass: "token-string" },
        { token: "  alt", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'HTML5'", styleClass: "token-string" },
        { token: "/>", styleClass: "" }

      ],

      [
        { token: "  <", styleClass: "" },
        { token: "img", styleClass: "token-identifier" },
        { token: " src", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'", styleClass: "token-string" },
        { token: "  class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'absolute w-[100px] h-[100px] top-[calc(50%-50px)] left-[calc(50%-50px)] z-50 anim-tailwind'", styleClass: "token-string" },
        { token: "  alt", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'Tailwind CSS'", styleClass: "token-string" },
        { token: "/>", styleClass: "" }

      ],

      [
        { token: "  <", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'flex flex-col items-center w-full opacity-0 anim-container'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],

      [
        { token: "    <", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'relative flex justify-center items-center mb-0 anim-spacing'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],

      [
        { token: "      <", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'text-[16px] text-black anim-text'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "        baixando", styleClass: "" }

      ],
      [
        { token: "        <", styleClass: "" },
        { token: "span", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'inline-block w-0 overflow-hidden align-bottom anim-dots'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "        ...", styleClass: "" }

      ],
      [
        { token: "        </", styleClass: "" },
        { token: "span", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "      </", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],

      [
        { token: "      <", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'absolute text-emerald-600 font-sans font-bold text-xl whitespace-nowrap anim-success'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "        ✓ Concluído com Sucesso!", styleClass: "" }

      ],
      [
        { token: "      </", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],

      [
        { token: "    </", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],

      [
        { token: "    <", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'relative flex items-center justify-center'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],

      [
        { token: "      <", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'w-[200px] h-[18px] border border-gray-400 bg-white overflow-hidden anim-bar-upgrade'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "        <", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'h-full w-0 bg-gray-400 relative anim-fill'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "        </", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "      </", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],

      [
        { token: "      <", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: " class", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'absolute left-[calc(50%+150px)] text-[14px] text-black opacity-0 anim-percent'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "      </", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],

      [
        { token: "    </", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],

      [
        { token: "  </", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],

      [
        { token: "</", styleClass: "" },
        { token: "div", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ]

    ]

  }

};

const codeBoxLoaderCss: CodeBox<"loader", "css"> = {
  id: 1,
  title: "loader",
  language: "css",
  code: {
    "loader.css": [
      [
        { token: "@", styleClass: "token-at" },
        { token: "import", styleClass: "token-string" },
        { token: " 'tailwindcss'", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],

      [
        { token: ":", styleClass: "" },
        { token: "root", styleClass: "token-type-function" },
        { token: " {", styleClass: "" }

      ],
      [
        { token: "  --tw-light", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "#7dd3fc", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  --tw-main", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "#38bdf8", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  --tw-dark", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "#0284c7", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  --gap", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "40px", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],
      [
        { token: "@", styleClass: "token-at" },
        { token: "property", styleClass: "token-string" },
        { token: " --num", styleClass: "token-identifier" },
        { token: " {", styleClass: "" }

      ],
      [
        { token: "  syntax: ", styleClass: "" },
        { token: "'<integer>'", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  initial-value: ", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  inherits: ", styleClass: "" },
        { token: "false", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],
      [
        { token: "@", styleClass: "token-at" },
        { token: "theme ", styleClass: "token-string" },
        { token: "{", styleClass: "" }

      ],

      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes ", styleClass: "token-string" },
        { token: "spawn ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],

      [
        { token: "    from ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],

      [
        { token: "      opacity:", styleClass: "" },
        { token: " 0", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],

      [
        { token: "      transform:", styleClass: "" },
        { token: " translate", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "-50%", styleClass: "token-html-property" },
        { token: ",", styleClass: "" },
        { token: " -50%", styleClass: "token-html-property" },
        { token: ")", styleClass: "" },
        { token: " scale", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }

      ],

      [
        { token: "    }", styleClass: "" }

      ],

      [
        { token: "    to ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],

      [
        { token: "      opacity:", styleClass: "" },
        { token: " 1", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],

      [
        { token: "      transform:", styleClass: "" },
        { token: " translate", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "-50%", styleClass: "token-html-property" },
        { token: ",", styleClass: "" },
        { token: " -50%", styleClass: "token-html-property" },
        { token: ")", styleClass: "" },
        { token: " scale", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "1", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }

      ],

      [
        { token: "    }", styleClass: "" }

      ],

      [
        { token: "  }", styleClass: "" }

      ],

      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes ", styleClass: "token-string" },
        { token: "moveToTopLeft ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],

      [
        { token: "    to ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],

      [
        { token: "      top: ", styleClass: "" },
        { token: "var", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "--gap", styleClass: "token-identifier" },
        { token: ");", styleClass: "" },

      ],

      [
        { token: "      left: ", styleClass: "" },
        { token: "var", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "--gap", styleClass: "token-identifier" },
        { token: ");", styleClass: "" }

      ],

      [
        { token: "      transform:", styleClass: "" },
        { token: " translate", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ",", styleClass: "" },
        { token: " 0", styleClass: "token-html-property" },
        { token: ")", styleClass: "" },
        { token: " scale", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0.7", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }

      ],

      [
        { token: "    }", styleClass: "" }

      ],

      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes ", styleClass: "token-string" },
        { token: "fadeIn ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    to ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      opacity: ", styleClass: "" },
        { token: "1", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes ", styleClass: "token-string" },
        { token: "fadeOut ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    to ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      opacity: ", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "      visibility: ", styleClass: "" },
        { token: "hidden", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],

      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes ", styleClass: "token-string" },
        { token: "spacingUpgrade ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    to ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      margin-bottom: ", styleClass: "" },
        { token: "25px", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],

      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes ", styleClass: "token-string" },
        { token: "fillProgress ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    from ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      width: ", styleClass: "" },
        { token: "0%", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "    to ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      width: ", styleClass: "" },
        { token: "100%", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],


      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes ", styleClass: "token-string" },
        { token: "countProgress ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    from ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      --num", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "    to ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      --num", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "100", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes ", styleClass: "token-string" },
        { token: "dotsAnim ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    0%", styleClass: "token-type-function" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "    100% ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      width: ", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "    25% ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      width: ", styleClass: "" },
        { token: "0.8em", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "    50% ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      width: ", styleClass: "" },
        { token: "1.2em", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "    75% ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      width: ", styleClass: "" },
        { token: "1.8em", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],

      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes ", styleClass: "token-string" },
        { token: "barStyleUpgrade ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    to ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      border: ", styleClass: "" },
        { token: "none", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "      border-radius: ", styleClass: "" },
        { token: "20px", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "      background: ", styleClass: "" },
        { token: "#f1f5f9", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "      width: ", styleClass: "" },
        { token: "270px", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "      height: ", styleClass: "" },
        { token: "12px", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "      box-shadow: ", styleClass: "" },
        { token: "inset 0px 1px 2px #0000001a", styleClass: "token-html-property" },
        { token: ";", styleClass: "" },

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],

      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes ", styleClass: "token-string" },
        { token: "textStyleUpgrade ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    to ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      color: ", styleClass: "" },
        { token: "var", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "--tw-dark", styleClass: "token-identifier" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "      font-weight: ", styleClass: "" },
        { token: "bold", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "      text-transform: ", styleClass: "" },
        { token: "uppercase", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "      font-size: ", styleClass: "" },
        { token: "18px", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],

      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes ", styleClass: "token-string" },
        { token: "fillStyleUpgrade ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    to ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "      background: ", styleClass: "" },
        { token: "linear-gradient", styleClass: "token-type-function" },
        { token: "(", styleClass: "" }

      ],
      [
        { token: "        90deg", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "        var", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "--tw-dark", styleClass: "token-identifier" },
        { token: ")", styleClass: "" },
        { token: " 0%", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "        var", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "--tw-main", styleClass: "token-identifier" },
        { token: ")", styleClass: "" },
        { token: " 50%", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "        var", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "--tw-light", styleClass: "token-identifier" },
        { token: ")", styleClass: "" },
        { token: " 100%", styleClass: "token-html-property" }

      ],
      [
        { token: "      );", styleClass: "" }

      ],
      [
        { token: "      box-shadow: ", styleClass: "" },
        { token: "0px 4px 12px #0284c766", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes ", styleClass: "token-string" },
        { token: "shine ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token:"     from ", styleClass: "token-type-function" },
        { token: "{ ", styleClass: "" }

      ],
      [
        { token: "       background-position: ", styleClass: "" },
        { token: "200% 0%", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "       opacity: ", styleClass: "" },
        { token: "1", styleClass: "token-html-property" },
        { token: "; ", styleClass: "" }

      ],
      [
        { token: "     }", styleClass: "" }

      ],
      [
        { token:"     to ", styleClass: "token-type-function" },
        { token: "{ ", styleClass: "" }

      ],
      [
        { token: "       background-position: ", styleClass: "" },
        { token: "-200% 0%", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "       opacity: ", styleClass: "" },
        { token: "1", styleClass: "token-html-property" },
        { token: "; ", styleClass: "" }

      ],
      [
        { token: "     }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "keyframes", styleClass: "token-string" },
        { token: " ", styleClass: "" },
        { token: "showSuccess ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],

      [
        { token: "    to ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],

      [
        { token: "      opacity: ", styleClass: "" },
        { token: "1", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],

      [
        { token: "      transform:", styleClass: "" },
        { token: " translateY", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }

      ],

      [
        { token: "    }", styleClass: "" }

      ],

      [
        { token: "  }", styleClass: "" }

      ],

      [
        { token: "}", styleClass: "" }

      ],
      [
        { token: "@", styleClass: "token-at" },
        { token: "utility ", styleClass: "token-string" },
        { token: "anim-html ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  animation:", styleClass: "" }

      ],
      [
        { token: "    spawn ", styleClass: "token-type-function" },
        { token: "0.8s ", styleClass: "token-html-property" },
        { token: "ease-out ", styleClass: "token-html-property" },
        { token: "forwards", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "    moveToTopLeft ", styleClass: "token-type-function" },
        { token: "1.2s ", styleClass: "token-html-property" },
        { token: "cubic-bezier", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0.68", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "-0.55", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "0.26", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "1.55", styleClass: "token-html-property" },
        { token: ") ", styleClass: "" },
        { token: "1.5s ", styleClass: "token-html-property" },
        { token: "forwards", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: "@", styleClass: "token-at" },
        { token: "utility ", styleClass: "token-string" },
        { token: "anim-tailwind ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  animation:", styleClass: "" }

      ],
      [
        { token: "    spawn ", styleClass: "token-type-function" },
        { token: "0.8s ", styleClass: "token-html-property" },
        { token: "ease-out ", styleClass: "token-html-property" },
        { token: "3.5s ", styleClass: "token-html-property" },
        { token: "forwards", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "    moveToTopRight ", styleClass: "token-type-function" },
        { token: "1.2s ", styleClass: "token-html-property" },
        { token: "cubic-bezier", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0.68", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "-0.55", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "0.26", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "1.55", styleClass: "token-html-property" },
        { token: ") ", styleClass: "" },
        { token: "5s ", styleClass: "token-html-property" },
        { token: "forwards", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: "@", styleClass: "token-at" },
        { token: "utility ", styleClass: "token-string" },
        { token: "anim-container ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  animation: ", styleClass: "" },
        { token: "fadeIn ", styleClass: "token-type-function" },
        { token: "0.5s ", styleClass: "token-html-property" },
        { token: "forwards ", styleClass: "token-html-property" },
        { token: "2.5s", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: "@", styleClass: "token-at" },
        { token: "utility ", styleClass: "token-string" },
        { token: "anim-spacing ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  animation: ", styleClass: "" },
        { token: "spacingUpgrade ", styleClass: "token-type-function" },
        { token: "0.5s ", styleClass: "token-html-property" },
        { token: "forwards ", styleClass: "token-html-property" },
        { token: "6.5s", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: "@", styleClass: "token-at" },
        { token: "utility ", styleClass: "token-string" },
        { token: "anim-text ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  animation:", styleClass: "" }

      ],
      [
        { token: "    textStyleUpgrade ", styleClass: "token-type-function" },
        { token: "0.5s ", styleClass: "token-html-property" },
        { token: "forwards ", styleClass: "token-html-property" },
        { token: "6.5s", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "    fadeOut ", styleClass: "token-type-function" },
        { token: "0.3s ", styleClass: "token-html-property" },
        { token: "forwards ", styleClass: "token-html-property" },
        { token: "9.5s", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: "@", styleClass: "token-at" },
        { token: "utility ", styleClass: "token-string" },
        { token: "anim-dots ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  animation: ", styleClass: "" },
        { token: "dotsAnim ", styleClass: "token-type-function" },
        { token: "1.5s ", styleClass: "token-html-property" },
        { token: "steps", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "1", styleClass: "token-html-property" },
        { token: ") ", styleClass: "" },
        { token: "infinite ", styleClass: "token-html-property" },
        { token: "6.5s", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: "@", styleClass: "token-at" },
        { token: "utility ", styleClass: "token-string" },
        { token: "anim-shine ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  animation: ", styleClass: "" },
        { token: "shine ", styleClass: "token-type-function" },
        { token: "2s ", styleClass: "token-html-property" },
        { token: "infinite ", styleClass: "token-html-property" },
        { token: "linear ", styleClass: "token-html-property" },
        { token: "6.5s ", styleClass: "token-html-property" },
        { token: "forwards", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: "@", styleClass: "token-at" },
        { token: "utility ", styleClass: "token-string" },
        { token: "anim-bar-upgrade ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  animation: ", styleClass: "" },
        { token: "barStyleUpgrade ", styleClass: "token-type-function" },
        { token: "0.5s ", styleClass: "token-html-property" },
        { token: "forwards ", styleClass: "token-html-property" },
        { token: "6.5s", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],
      [
        { token: "@", styleClass: "token-at" },
        { token: "utility ", styleClass: "token-string" },
        { token: "anim-fill ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }
      ],
      [
        { token: "  animation:", styleClass: "" }
      ],
      [
        { token: "    fillStyleUpgrade ", styleClass: "token-type-function" },
        { token: "0.1s ", styleClass: "token-html-property" },
        { token: "forwards ", styleClass: "token-html-property" },
        { token: "6.5s", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }
      ],
      [
        { token: "    fillProgress ", styleClass: "token-type-function" },
        { token: "3s ", styleClass: "token-html-property" },
        { token: "ease-in-out ", styleClass: "token-html-property" },
        { token: "forwards ", styleClass: "token-html-property" },
        { token: "6.5s", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }
      ],
      [
        { token: "}", styleClass: "" }
      ],

      [
        { token: "@", styleClass: "token-at" },
        { token: "utility ", styleClass: "token-string" },
        { token: "anim-percent ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }
      ],
      [
        { token: "  animation:", styleClass: "" }
      ],
      [
        { token: "    fadeIn ", styleClass: "token-type-function" },
        { token: "0.5s ", styleClass: "token-html-property" },
        { token: "forwards ", styleClass: "token-html-property" },
        { token: "2.5s", styleClass: "token-html-property" },
        { token: ",", styleClass: "" }
      ],
      [
        { token: "    textStyleUpgrade ", styleClass: "token-type-function" },
        { token: "0.5s ", styleClass: "token-html-property" },
        { token: "forwards ", styleClass: "token-html-property" },
        { token: "6.5s", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }
      ],
      [
        { token: "}", styleClass: "" }
      ],

      [
        { token: "@", styleClass: "token-at" },
        { token: "utility ", styleClass: "token-string" },
        { token: "anim-count ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }
      ],
      [
        { token: "  animation: ", styleClass: "" },
        { token: "countProgress ", styleClass: "token-type-function" },
        { token: "3s ", styleClass: "token-html-property" },
        { token: "linear ", styleClass: "token-html-property" },
        { token: "forwards ", styleClass: "token-html-property" },
        { token: "6.5s", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }
      ],
      [
        { token: "}", styleClass: "" }
      ],

      [
        { token: "@", styleClass: "token-at" },
        { token: "utility ", styleClass: "token-string" },
        { token: "anim-success ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }
      ],
      [
        { token: "  opacity: ", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }
      ],
      [
        { token: "  transform: ", styleClass: "" },
        { token: "translateY", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "0.5rem", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }
      ],
      [
        { token: "  animation: ", styleClass: "" },
        { token: "showSuccess ", styleClass: "token-type-function" },
        { token: "0.5s ", styleClass: "token-html-property" },
        { token: "forwards ", styleClass: "token-html-property" },
        { token: "9.8s", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }
      ],
      [
        { token: "}", styleClass: "" }
      ],
      [
        { token: ".anim-html ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "apply ", styleClass: "token-string" },
        { token: "opacity-0 ", styleClass: "token-html-property" },
        { token: "anim-html", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".anim-tailwind ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "apply ", styleClass: "token-string" },
        { token: "opacity-0 ", styleClass: "token-html-property" },
        { token: "anim-tailwind", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".anim-container ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "apply ", styleClass: "token-string" },
        { token: "anim-container", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".anim-spacing ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "apply ", styleClass: "token-string" },
        { token: "anim-spacing", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".anim-text ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "apply ", styleClass: "token-string" },
        { token: "anim-text", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".anim-dots ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "apply ", styleClass: "token-string" },
        { token: "anim-dots", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".anim-bar-upgrade ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "apply ", styleClass: "token-string" },
        { token: "anim-bar-upgrade", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],
      [
        { token: ".anim-fill", styleClass: "token-html-property" },
        { token: "::", styleClass: "" },
        { token: "before ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "apply ", styleClass: "token-string" },
        { token: "content-[''] ", styleClass: "token-html-property" },
        { token: "absolute ", styleClass: "token-html-property" },
        { token: "inset-0 ", styleClass: "token-html-property" },
        { token: "bg-linear-[90deg,transparent_0%,#ffffff4d_50%,transparent_100%] ", styleClass: "token-html-property" },
        { token: "bg-size-[200%_100%] ", styleClass: "token-html-property" },
        { token: "opacity-0 ", styleClass: "token-html-property" },
        { token: "anim-shine", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".anim-fill ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "apply ", styleClass: "token-string" },
        { token: "relative ", styleClass: "token-html-property" },
        { token: "h-full ", styleClass: "token-html-property" },
        { token: "w-0 ", styleClass: "token-html-property" },
        { token: "bg-[#767676] ", styleClass: "token-html-property" },
        { token: "anim-fill", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".anim-percent ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "apply ", styleClass: "token-string" },
        { token: "anim-percent", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".anim-percent", styleClass: "token-html-property" },
        { token: "::", styleClass: "" },
        { token: "after ", styleClass: "token-type-function" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  counter-reset: ", styleClass: "" },
        { token: "num ", styleClass: "token-identifier" },
        { token: "var", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "--num", styleClass: "token-identifier" },
        { token: ")", styleClass: "" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "apply ", styleClass: "token-string" },
        { token: "content-[counter(num)_\"%\"] ", styleClass: "token-html-property" },
        { token: "anim-count", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ],

      [
        { token: ".anim-success ", styleClass: "token-html-property" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "  @", styleClass: "token-at" },
        { token: "apply ", styleClass: "token-string" },
        { token: "anim-success", styleClass: "token-html-property" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ]

    ]

  }

};

const codePreviewLoader: CodePreview<[ typeof codeBoxLoaderHtml, typeof codeBoxLoaderCss ]> = {
  tabs: [ "loader.html", "loader.css", "output" ],
  codeBoxes: [ codeBoxLoaderHtml, codeBoxLoaderCss ],
  output: `
    <div class="container-loader__wrapper">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" class="container-loader__logo container-loader__html-logo" alt="HTML5" >

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" class="container-loader__logo container-loader__tailwind-logo" alt="Tailwind CSS">

        <div class="container-loader__download-wrapper">
            <div class="container-loader__text-container">
                <div class="container-loader__status-text">baixando<span class="container-loader__dots">...</span></div>
                <div class="container-loader__success-message">
                    ✓ Concluído com Sucesso!
                </div>
            </div>

            <div class="container-loader__progress-area">
                <div class="container-loader__progress-container"><div class="container-loader__progress-fill"></div></div>
                <div class="container-loader__percentage"></div>
            </div>

        </div>
    </div>
  `

};

// ------------------------------------------------ Code Box Reactive Input ------------------------------------------------ //

const codeBoxReactiveInputTs: CodeBox<"reactive-input", "ts"> = {
  id: 0,
  title: "reactive-input",
  language: "ts",
  code: {
    "reactive-input.ts": [
      [
        { token: "import ", styleClass: "token-identifier" },
        { token: "{ Component } ", styleClass: "" },
        { token: "from ", styleClass: "token-identifier" },
        { token: "'@angular/core'", styleClass: "token-string" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "import ", styleClass: "token-identifier" },
        { token: "{ FormsModule } ", styleClass: "" },
        { token: "from ", styleClass: "token-identifier" },
        { token: "'@angular/forms'", styleClass: "token-string" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "@", styleClass: "token-at" },
        { token: "Component", styleClass: "token-type-function" },
        { token: "({", styleClass: "" }

      ],
      [
        { token: "  selector", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "'app-reactive-input'", styleClass: "token-string" },
        { token: ",", styleClass: "" }

      ],
      [
        { token: "  template", styleClass: "token-identifier" },
        { token: ": `", styleClass: "" }

      ],
      [
        { token: "    <", styleClass: "" },
        { token: "label", styleClass: "token-identifier" },
        { token: " for", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'favoriteFood'", styleClass: "token-string" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "      Qual sua comida favorita? ", styleClass: "" }

      ],
      [
        { token: "      <", styleClass: "" },
        { token: "input", styleClass: "token-identifier" },
        { token: " id", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'favoriteFood'", styleClass: "token-string" },
        { token: " type", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'text'", styleClass: "token-string" }
      ],
      [
        { token: "      placeholder", styleClass: "token-html-property" },
        { token: "=", styleClass: "" },
        { token: "'Digite aqui'", styleClass: "token-string" }

      ],
      [
        { token: "      [(", styleClass: "" },
        { token: "ngModel", styleClass: "token-html-property" },
        { token: ")]=", styleClass: "" },
        { token: "'favoriteFood'", styleClass: "token-string" },
        { token: " />", styleClass: "" }

      ],
      [
        { token: "    </", styleClass: "" },
        { token: "label", styleClass: "token-identifier" },
        { token: "> ", styleClass: "" }

      ],
      [
        { token: "    <", styleClass: "" },
        { token: "p", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "      Eu gosto de ", styleClass: "" },
        { token: "{{ favoriteFood }}", styleClass: "" }

      ],
      [
        { token: "    </", styleClass: "" },
        { token: "p", styleClass: "token-identifier" },
        { token: ">", styleClass: "" }

      ],
      [
        { token: "  `,", styleClass: "" }

      ],
      [
        { token: "  imports", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "[ FormsModule ]", styleClass: "" }

      ],
      [
        { token: "})", styleClass: "" }

      ],
      [
        { token: "export ", styleClass: "token-identifier" },
        { token: "class ", styleClass: "token-identifier" },
        { token: "ReactiveInput {", styleClass: "" }

      ],
      [
        { token: "  favoriteFood = ", styleClass: "" },
        { token: "''", styleClass: "token-string" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "}", styleClass: "" }

      ]

    ]

  }

};

const codePreviewReactiveInput: CodePreview<[ typeof codeBoxReactiveInputTs ]> = {
  tabs: [ "reactive-input.ts", "output" ],
  codeBoxes: [ codeBoxReactiveInputTs ],
  output: `
    <label for="favoriteFood">
    Qual sua comida favorita?

    <input id="favoriteFood" type="text" placeholder="Digite aqui" />
    </label><p>    Eu gosto de </p>
  `

};

// ------------------------------------------------- Code Box Tasks ------------------------------------------------- //

const codeBoxTasks: CodeBox<"tasks", "js"> = {
  id: 0,
  title: "tasks",
  language: "js",
  code: {
    "tasks.js": [
      [
        { token: "import ", styleClass: "token-identifier" },
        { token: "express ", styleClass: "t" },
        { token: "from ", styleClass: "token-identifier" },
        { token: "'express'", styleClass: "token-string" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "import ", styleClass: "token-identifier" },
        { token: "{ createClient } ", styleClass: "" },
        { token: "from ", styleClass: "token-identifier" },
        { token: "'redis'", styleClass: "token-string" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "", styleClass: "" }

      ],
      [
        { token: "const ", styleClass: "token-identifier" },
        { token: "app = express()", styleClass: "" }

      ],
      [
        { token: "app.", styleClass: "" },
        { token: "use", styleClass: "token-type-function" },
        { token: "(express.", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "());", styleClass: "" }

      ],
      [
        { token: "", styleClass: "" }

      ],
      [
        { token: "const ", styleClass: "token-identifier" },
        { token: "redis = ", styleClass: "" },
        { token: "createClient", styleClass: "token-type-function" },
        { token: "();", styleClass: "" }

      ],
      [
        { token: "redis.", styleClass: "" },
        { token: "on", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'error'", styleClass: "token-string" },
        { token: ", ", styleClass: "" },
        { token: "err => console.", styleClass: "" },
        { token: "error", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'Redis error:'", styleClass: "token-string" },
        { token: ", err));", styleClass: "" }

      ],
      [
        { token: "await ", styleClass: "token-identifier" },
        { token: "redis.", styleClass: "" },
        { token: "connect", styleClass: "token-type-function" },
        { token: "();", styleClass: "" }

      ],
      [
        { token: "", styleClass: "" }

      ],
      [
        { token: "app.", styleClass: "" },
        { token: "post", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'/tasks'", styleClass: "token-string" },
        { token: ", ", styleClass: "" },
        { token: "async ", styleClass: "token-identifier" },
        { token: "(req, res) => {", styleClass: "" }

      ],
      [
        { token: "  const ", styleClass: "token-identifier" },
        { token: "{ title } = ", styleClass: "" },
        { token: "req.", styleClass: "" },
        { token: "body", styleClass: "token-identifier" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  if ", styleClass: "token-identifier" },
        { token: "(!title) {", styleClass: "" }

      ],
      [
        { token: "    return ", styleClass: "token-identifier" },
        { token: "res.", styleClass: "" },
        { token: "status", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "400", styleClass: "token-html-property" },
        { token: ").", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "({ ", styleClass: "" },
        { token: "error", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "'Título é obrigatório'", styleClass: "token-string" },
        { token: " });", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "  const ", styleClass: "token-identifier" },
        { token: "id = ", styleClass: "" },
        { token: "await ", styleClass: "token-identifier" },
        { token: "redis.", styleClass: "" },
        { token: "incr", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'task:id'", styleClass: "token-string" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "  await ", styleClass: "token-identifier" },
        { token: "redis.", styleClass: "" },
        { token: "hSet", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "`task:${id}`", styleClass: "token-string" },
        { token: ", {", styleClass: "" }

      ],
      [
        { token: "    id,", styleClass: "" }

      ],
      [
        { token: "    title,", styleClass: "" }

      ],
      [
        { token: "    done", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "false", styleClass: "token-html-property" }

      ],
      [
        { token: "  });", styleClass: "" }

      ],
      [
        { token: "  await ", styleClass: "token-identifier" },
        { token: "redis.", styleClass: "" },
        { token: "rPush", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'tasks'", styleClass: "token-string" },
        { token: ", id);", styleClass: "" }

      ],
      [
        { token: "  res.", styleClass: "" },
        { token: "status", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "201", styleClass: "token-html-property" },
        { token: ")", styleClass: "" },
        { token: ".", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "({ ", styleClass: "" },
        { token: "id, title, ", styleClass: "" },
        { token: "done", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "false", styleClass: "token-html-property" },
        { token: " });", styleClass: "" }

      ],
      [
        { token: "});", styleClass: "" }

      ],
      [
        { token: "app.", styleClass: "" },
        { token: "get", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'tasks'", styleClass: "token-string" },
        { token: ", ", styleClass: "" },
        { token: "async ", styleClass: "token-identifier" },
        { token: "(req, res) => {", styleClass: "" }

      ],
      [
        { token: "  const ", styleClass: "token-identifier" },
        { token: "ids = ", styleClass: "" },
        { token: "await ", styleClass: "token-identifier" },
        { token: "redis.", styleClass: "" },
        { token: "lRange", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'tasks'", styleClass: "token-string" },
        { token: ", ", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ", ", styleClass: "" },
        { token: "-1", styleClass: "token-html-property" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "  const ", styleClass: "token-identifier" },
        { token: "tasks = [];", styleClass: "" }

      ],
      [
        { token: "  for ", styleClass: "token-identifier" },
        { token: "(", styleClass: "" },
        { token: "const ", styleClass: "token-identifier" },
        { token: "id ", styleClass: "" },
        { token: "of ", styleClass: "token-identifier" },
        { token: "ids) {", styleClass: "" }

      ],
      [
        { token: "    const ", styleClass: "token-identifier" },
        { token: "task = ", styleClass: "" },
        { token: "await ", styleClass: "token-identifier" },
        { token: "redis.", styleClass: "" },
        { token: "hGetAll", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "`task:${id}`", styleClass: "token-string" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "    if ", styleClass: "token-identifier" },
        { token: "(Object.", styleClass: "" },
        { token: "keys", styleClass: "token-type-function" },
        { token: "(task).", styleClass: "" },
        { token: "length", styleClass: "token-identifier" },
        { token: ") {", styleClass: "" }

      ],
      [
        { token: "      task.", styleClass: "" },
        { token: "done ", styleClass: "token-identifier" },
        { token: "= (task.", styleClass: "" },
        { token: "done ", styleClass: "token-identifier" },
        { token: "=== ", styleClass: "" },
        { token: "'true'", styleClass: "token-string" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "      tasks.", styleClass: "" },
        { token: "push", styleClass: "token-type-function" },
        { token: "(task);", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "  res.", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "(tasks);", styleClass: "" }

      ],
      [
        { token: "});", styleClass: "" }

      ],
      [
        { token: "app.", styleClass: "" },
        { token: "get", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'/tasks/:id'", styleClass: "token-string" },
        { token: ", ", styleClass: "" },
        { token: "async ", styleClass: "token-identifier" },
        { token: "(req, res) => {", styleClass: "" }

      ],
      [
        { token: "  const ", styleClass: "token-identifier" },
        { token: "task = ", styleClass: "" },
        { token: "await ", styleClass: "token-identifier" },
        { token: "redis.", styleClass: "" },
        { token: "hGetAll", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "`task:${req.params.id}`", styleClass: "token-string" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "  if ", styleClass: "token-identifier" },
        { token: "(!Object.", styleClass: "" },
        { token: "keys", styleClass: "token-type-function" },
        { token: "(task).", styleClass: "" },
        { token: "length", styleClass: "token-identifier" },
        { token: ") {", styleClass: "" }

      ],
      [
        { token: "    return ", styleClass: "token-identifier" },
        { token: "res.", styleClass: "" },
        { token: "status", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "404", styleClass: "token-html-property" },
        { token: ").", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "({ ", styleClass: "" },
        { token: "error", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "'Tarefa não encontrada'", styleClass: "token-string" },
        { token: " });", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "  task.", styleClass: "" },
        { token: "done ", styleClass: "token-identifier" },
        { token: "= (task.", styleClass: "" },
        { token: "done ", styleClass: "token-identifier" },
        { token: "=== ", styleClass: "" },
        { token: "'true'", styleClass: "token-string" },
        { token: ");", styleClass: "" }
      ],
      [
        { token: "  res.", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "(task);", styleClass: "" }

      ],
      [
        { token: "});", styleClass: "" }

      ],
      [
        { token: "app.", styleClass: "" },
        { token: "patch", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'tasks/:id'", styleClass: "token-string" },
        { token: ", ", styleClass: "" },
        { token: "async ", styleClass: "token-identifier" },
        { token: "(req, res) => {", styleClass: "" }

      ],
      [
        { token: "  const ", styleClass: "token-identifier" },
        { token: "key = ", styleClass: "" },
        { token: "`task:${req.params.id}`", styleClass: "token-string" },
        { token: ";", styleClass: "" }
      ],
      [
        { token: "  const ", styleClass: "token-identifier" },
        { token: "exists = ", styleClass: "" },
        { token: "await ", styleClass: "token-identifier" },
        { token: "redis.", styleClass: "" },
        { token: "exists", styleClass: "token-type-function" },
        { token: "(key);", styleClass: "" }

      ],
      [
        { token: "  if ", styleClass: "token-identifier" },
        { token: "(!exists) {", styleClass: "" }

      ],
      [
        { token: "    return ", styleClass: "token-identifier" },
        { token: "res.", styleClass: "" },
        { token: "status", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "404", styleClass: "token-html-property" },
        { token: ").", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "({ ", styleClass: "" },
        { token: "error", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "'Tarefa não encontrada'", styleClass: "token-string" },
        { token: " });", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "  const ", styleClass: "token-identifier" },
        { token: "updates = {};", styleClass: "" }

      ],
      [
        { token: "  if ", styleClass: "token-identifier" },
        { token: "(req.", styleClass: "" },
        { token: "body", styleClass: "token-identifier" },
        { token: ".", styleClass: "" },
        { token: "title", styleClass: "token-identifier" },
        { token: ") ", styleClass: "" },
        { token: "updates.", styleClass: "" },
        { token: "title", styleClass: "token-identifier" },
        { token: " = req.", styleClass: "" },
        { token: "body", styleClass: "token-identifier" },
        { token: ".", styleClass: "" },
        { token: "title", styleClass: "token-identifier" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  if ", styleClass: "token-identifier" },
        { token: "(req.", styleClass: "" },
        { token: "body", styleClass: "token-identifier" },
        { token: ".", styleClass: "" },
        { token: "done ", styleClass: "token-identifier" },
        { token: "!== ", styleClass: "" },
        { token: "undefined", styleClass: "token-html-property" },
        { token: ") ", styleClass: "" },
        { token: "updates.", styleClass: "" },
        { token: "done ", styleClass: "token-identifier" },
        { token: "= req.", styleClass: "" },
        { token: "body", styleClass: "token-identifier" },
        { token: ".", styleClass: "" },
        { token: "done", styleClass: "token-identifier" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  await ", styleClass: "token-identifier" },
        { token: "redis.", styleClass: "" },
        { token: "hSet", styleClass: "token-type-function" },
        { token: "(key, updates);", styleClass: "" }

      ],
      [
        { token: "  const ", styleClass: "token-identifier" },
        { token: "updatedTask = ", styleClass: "" },
        { token: "await ", styleClass: "token-identifier" },
        { token: "redis.", styleClass: "" },
        { token: "hGetAll", styleClass: "token-type-function" },
        { token: "(key);", styleClass: "" }

      ],
      [
        { token: "  updatedTask.", styleClass: "" },
        { token: "done ", styleClass: "token-identifier" },
        { token: "= (updatedTask.", styleClass: "" },
        { token: "done ", styleClass: "token-identifier" },
        { token: "=== ", styleClass: "" },
        { token: "'true'", styleClass: "token-string" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "  res.", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "(updatedTask);", styleClass: "" }

      ],
      [
        { token: "});", styleClass: "" }

      ],
      [
        { token: "app.", styleClass: "" },
        { token: "delete", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'tasks/:id'", styleClass: "token-string" },
        { token: ", ", styleClass: "" },
        { token: "async ", styleClass: "token-identifier" },
        { token: "(req, res) => {", styleClass: "" }

      ],
      [
        { token: "  const ", styleClass: "token-identifier" },
        { token: "id = req.", styleClass: "r" },
        { token: "params", styleClass: "token-identifier" },
        { token: ".", styleClass: "" },
        { token: "id", styleClass: "token-identifier" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "  await ", styleClass: "token-identifier" },
        { token: "redis.",  styleClass: "" },
        { token: "del", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "`task:${id}`", styleClass: "token-string" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "  await ", styleClass: "token-identifier" },
        { token: "redis.", styleClass: "" },
        { token: "lRem", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'tasks'", styleClass: "token-string" },
        { token: ", ", styleClass: "" },
        { token: "0", styleClass: "token-html-property" },
        { token: ", id);", styleClass: "" }

      ],
      [
        { token: "  res.", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "({ ", styleClass: "" },
        { token: "message", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "'Tarefa removida'", styleClass: "token-string" },
        { token: " });", styleClass: "" }

      ],
      [
        { token: "});", styleClass: "" }

      ],
      [
        { token: "app.", styleClass: "" },
        { token: "listen", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "3000", styleClass: "token-html-property" },
        { token: ", () => {", styleClass: "" }

      ],
      [
        { token: "  console.", styleClass: "" },
        { token: "log", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'Servidor rodando na porta 3000'", styleClass: "token-string" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "});", styleClass: "" }

      ]

    ]

  }

};

const codePreviewTasks: CodePreview<[ typeof codeBoxTasks ]> = {
  tabs: [ "tasks.js", "output" ],
  codeBoxes: [ codeBoxTasks ],
  output: `
    <div class="container__tasks-wrapper">
      <h2 class="container__tasks-title">Minhas Tarefas</h2>
      <div class="container__tasks-input-group">
          <input type="text" id="task-input" class="container__tasks-input" placeholder="O que precisa ser feito?">
          <button id="add-btn" class="container__tasks-button">Adicionar</button>
      </div>
      <span id="empty-task-msg">Tarefa não pode ser vazia</span>
      <ul id="task-list" class="container__tasks-list"></ul>
    </div>
  `

};

// ------------------------------------------------- Code Box Users ------------------------------------------------- //

const codeBoxUsers: CodeBox<"users", "js"> = {
  id: 0,
  title: "users",
  language: "js",
  code: {
    "users.js": [
      [
        { token: "import ", styleClass: "token-identifier" },
        { token: "express ", styleClass: "t" },
        { token: "from ", styleClass: "token-identifier" },
        { token: "'express'", styleClass: "token-string" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "import ", styleClass: "token-identifier" },
        { token: "mongoose ", styleClass: "t" },
        { token: "from ", styleClass: "token-identifier" },
        { token: "'mongoose'", styleClass: "token-string" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "", styleClass: "" }

      ],
      [
        { token: "const ", styleClass: "token-identifier" },
        { token: "app = express()", styleClass: "" }

      ],
      [
        { token: "app.", styleClass: "" },
        { token: "use", styleClass: "token-type-function" },
        { token: "(express.", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "());", styleClass: "" }

      ],
      [
        { token: "", styleClass: "" }

      ],
      [
        { token: "mongoose.", styleClass: "" },
        { token: "connect", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'mongodb://localhost:27017/exemplo_db'", styleClass: "token-string" },
        { token: ")", styleClass: "" }

      ],
      [
        { token: "  .", styleClass: "" },
        { token: "then", styleClass: "token-type-function" },
        { token: "(() => console.", styleClass: "" },
        { token: "log", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'MongoDB conectado'", styleClass: "token-string" },
        { token: "))", styleClass: "" }

      ],
      [
        { token: "  .", styleClass: "" },
        { token: "catch", styleClass: "token-type-function" },
        { token: "(err => console.", styleClass: "" },
        { token: "error", styleClass: "token-type-function" },
        { token: "(err));", styleClass: "" }

      ],
      [
        { token: "", styleClass: "" }

      ],
      [
        { token: "const ", styleClass: "token-identifier" },
        { token: "UserSchema = ", styleClass: "" },
        { token: "new ", styleClass: "token-identifier" },
        { token: "mongoose.", styleClass: "" },
        { token: "Schema", styleClass: "token-type-function" },
        { token: "({", styleClass: "" }

      ],
      [
        { token: "  name", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "String,", styleClass: "token-type-function" }

      ],
      [
        { token: "  email", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "String", styleClass: "token-type-function" }

      ],
      [
        { token: "});", styleClass: "" }

      ],
      [
        { token: "", styleClass: "" }

      ],
      [
        { token: "const ", styleClass: "token-identifier" },
        { token: "User = ", styleClass: "" },
        { token: "mongoose.", styleClass: "" },
        { token: "model", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'User'", styleClass: "token-string" },
        { token: ", UserSchema);", styleClass: "" }

      ],
      [
        { token: "app.", styleClass: "" },
        { token: "post", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "\"/users\"", styleClass: "token-string" },
        { token: ", ", styleClass: "" },
        { token: "async ", styleClass: "token-identifier" },
        { token: "(req, res) => {", styleClass: "" }

      ],
      [
        { token: "  const ", styleClass: "token-identifier" },
        { token: "user = ", styleClass: "" },
        { token: "await ", styleClass: "token-identifier" },
        { token: "User.", styleClass: "" },
        { token: "create", styleClass: "token-type-function" },
        { token: "(req.", styleClass: "" },
        { token: "body", styleClass: "token-identifier" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "  res.", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "(user);", styleClass: "" }

      ],
      [
        { token: "});", styleClass: "" }

      ],
      [
        { token: "", styleClass: "" }

      ],
      [
        { token: "app.", styleClass: "" },
        { token: "get", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'/users'", styleClass: "token-string" },
        { token: ", ", styleClass: "" },
        { token: "async ", styleClass: "token-identifier" },
        { token: "(req, res) => {", styleClass: "" }

      ],
      [
        { token: "  const ", styleClass: "token-identifier" },
        { token: "users = ", styleClass: "" },
        { token: "await ", styleClass: "token-identifier" },
        { token: "User.", styleClass: "" },
        { token: "find", styleClass: "token-type-function" },
        { token: "();", styleClass: "" }

      ],
      [
        { token: "  res.", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "(users);", styleClass: "" }

      ],
      [
        { token: "});", styleClass: "" }

      ],
      [
        { token: "", styleClass: "" }

      ],
      [
        { token: "app.", styleClass: "" },
        { token: "delete", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'/users/:id'", styleClass: "token-string" },
        { token: ", ", styleClass: "" },
        { token: "async ", styleClass: "token-identifier" },
        { token: "(req, res) => {", styleClass: "" }

      ],
      [
        { token: "  try ", styleClass: "token-identifier" },
        { token: "{", styleClass: "" }

      ],
      [
        { token: "    const ", styleClass: "token-identifier" },
        { token: "{ id } = ", styleClass: "" },
        { token: "req.", styleClass: "" },
        { token: "params", styleClass: "token-identifier" },
        { token: ";", styleClass: "" }

      ],
      [
        { token: "", styleClass: "" }

      ],
      [
        { token: "    const ", styleClass: "token-identifier" },
        { token: "user = ", styleClass: "" },
        { token: "await ", styleClass: "token-identifier" },
        { token: "User.", styleClass: "" },
        { token: "findByIdAndDelete", styleClass: "token-type-function" },
        { token: "(id);", styleClass: "" }

      ],
      [
        { token: "", styleClass: "" }

      ],
      [
        { token: "    if ", styleClass: "token-identifier" },
        { token: "(!user) {", styleClass: "" }

      ],
      [
        { token: "      return ", styleClass: "token-identifier" },
        { token: "res.", styleClass: "" },
        { token: "status", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "404", styleClass: "token-html-property" },
        { token: ").", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "({ ", styleClass: "" },
        { token: "message", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "'Usuário não encontrado'", styleClass: "token-string" },
        { token: " });", styleClass: "" }

      ],
      [
        { token: "    }", styleClass: "" }

      ],
      [
        { token: "", styleClass: "" }

      ],
      [
        { token: "    res.", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "({", styleClass: "" }

      ],
      [
        { token: "      message", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "'Usuário deletado com sucesso',", styleClass: "token-string" }
      ],
      [
        { token: "      user", styleClass: "token-identifier" }

      ],
      [
        { token: "    });", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: " catch ", styleClass: "token-identifier" },
        { token: "(error) {", styleClass: "" }

      ],
      [
        { token: "    res.", styleClass: "" },
        { token: "status", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "400", styleClass: "token-html-property" },
        { token: ").", styleClass: "" },
        { token: "json", styleClass: "token-type-function" },
        { token: "({ ", styleClass: "" },
        { token: "error", styleClass: "token-identifier" },
        { token: ": ", styleClass: "" },
        { token: "\"ID inválido\"", styleClass: "token-string" },
        { token: " });", styleClass: "" }

      ],
      [
        { token: "  }", styleClass: "" }

      ],
      [
        { token: "});", styleClass: "" }

      ],
      [
        { token: "app.", styleClass: "" },
        { token: "listen", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "3000", styleClass: "token-html-property" },
        { token: ", () => {", styleClass: "" }

      ],
      [
        { token: "  console.", styleClass: "" },
        { token: "log", styleClass: "token-type-function" },
        { token: "(", styleClass: "" },
        { token: "'Servidor rodando na porta 3000'", styleClass: "token-string" },
        { token: ");", styleClass: "" }

      ],
      [
        { token: "});", styleClass: "" }

      ]

    ]

  }

};

const codePreviewUsers: CodePreview<[ typeof codeBoxUsers ]> = {
  tabs: [ "users.js", "output" ],
  codeBoxes: [ codeBoxUsers ],
  output: `
    <h2 class="container__users-form-title">Novo Usuário</h2>
    <form id="userForm" class="container__users-form">
        <input type="text" id="name" placeholder="Nome" autocomplete="off" required>
        <input type="email" id="email" placeholder="E-mail" autocomplete="off" required>
        <button type="submit" class="container__users-btn-save">Cadastrar</button>

    </form>

    <h2 class="container__users-list-title">Lista de Usuários</h2>
    <div id="userList" class="container__users-user-list"></div>
  `

};

export const codeBoxes = {
  home: codePreviewHome,
  button: codePreviewButton,
  loader: codePreviewLoader,
  reactiveInput: codePreviewReactiveInput,
  tasks: codePreviewTasks,
  users: codePreviewUsers

};
