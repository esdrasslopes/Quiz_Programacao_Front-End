const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
  {
    category: "React",
    questions: [
      {
        question: "O que é o React?",
        options: [
          "Uma biblioteca JavaScript",
          "Um banco de dados",
          "Linguagem de programação",
          "Um tipo de servidor web",
        ],
        answer: "Uma biblioteca JavaScript",
      },
      {
        question: "O que é o useState?",
        options: [
          "Uma maneira de criar rotas de navegação",
          "Forma de declarar e gerenciar estado em componentes",
          "Estilização de componentes",
          "Manipulação de DOM",
        ],
        answer:  "Forma de declarar e gerenciar estado em componentes",
      },
      {
        question: "Para que serve o React?",
        options: [
          "Criar interfaces de usuário",
          "Gerenciar banco de dados",
          "Fazer cálculos complexos",
          "Estilizar páginas",
        ],
        answer: "Criar interfaces de usuário",
      },
      {
        question: "O que o React cria para melhorar o desempenho?",
        options: [
          "Um banco de dados",
          "Um servidor especial",
          "O DOM Virtual",
          "Uma nova linguagem",
        ],
        answer: "O DOM Virtual",
      },
      {
        question: "Qual comando é usado para criar um novo projeto React?",
        options: [
          "npm install react",
          "npx create-react-app",
          "npm start react",
          "react new project",
        ],
        answer: "npx create-react-app",
        tip: "A resposta tem a ver com criar"
      },
      
    ],
  }  
];

export default data;
