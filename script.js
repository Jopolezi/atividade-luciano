const infos = [
  {
    id: 1,
    name: "Gustavo Nori dos Santos",
    course: "Análise e Desenvolvimento de Sistemas - AMS",
    phrase:
      "DevOps é a união entre desenvolvimento e operações para tornar a entrega de software mais rápida, segura e eficiente.",
    image: './gustavo.jpeg',
  },
  {
    id: 2,
    name: "João Francisco Polezi",
    course: "Análise e Desenvolvimento de Sistemas - AMS",
    phrase:
      "Com DevOps, as equipes automatizam processos e trabalham de forma integrada, reduzindo erros e aumentando a produtividade.",
    image: './joao.jpeg'
  },
];

const divsMap = infos.map(info => `
    
    <div class="card" key=${info.id}>

    <div class="container-image" > 
        <img class="image" src=${info.image} alt=${info.name}/>
    </div>

    <div class="infos"> 
        <h1 class="name">${info.name}</h1>

        <p class="course">${info.course}</p>

        <p class="phrase">${info.phrase}</p>
    </div>

    </div>
`).join("")

document.querySelector(".content").innerHTML = divsMap

// No react.js é mais prático utilizar o map para criar cards/infos que tem muitos dados repetitivos para não deixar o documento linguiçado. Em resumo, essa é uma tentativa de replicar o map do javascipt que nós costumamos utilizar no react no html