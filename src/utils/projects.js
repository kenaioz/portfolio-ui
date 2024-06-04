export const projectsData = [
  {
    image: "/projects/food-explorer.png",
    name: "FoodExplorer",
    description: {
      en: "This project was the conclusion of the Rocketseat Explorer course, which aims to simulate a menu with created dishes, the possibility of placing an order with the selected dishes, and access profiles with authorization to create and edit these dishes.",
      pt: "Esse projeto foi a conclusão do curso Explorer da Rocketseat, que visa simular um cardápio com os pratos criados, possibilidade de realizar um pedido com os pratos selecionados e perfis de acessos com autorização para criar e editar esses pratos.",
    },
    frontend: {
      gitLink: "https://github.com/kenaioz/food-explorer-ui",
      techs: ["JavaScript", "React", "Styled-Components"],
    },
    backend: {
      gitLink: "https://github.com/kenaioz/food-explorer-api",
      techs: ["Node.js", "Express", "SQLite"],
    },
    status: { en: "Finished", pt: "Finalizado" },
  },
  {
    image: "/projects/FutSuperstition.jpeg",
    name: "FutSuperstition",
    description: {
      en: "Everyone who loves football has their superstitions, have you ever stopped to think if yours are correct? Thinking about it, I made a project to record all the games of your team, informing who you played against, where and with which jersey. With this information, we will inform you which combination brings the most luck to your team.",
      pt: "Todo mundo que gosta de futebol tem as suas manias, você já parou pra pensar se as suas estão certas? Pensando nisso fiz um projeto para registrar todos os jogos do seu time informando contra quem, onde e com qual camisa, com essas informações vamos te informar qual combinação da mais sorte ao seu time.",
    },
    frontend: {
      gitLink: "https://github.com/kenaioz/futsuperstition-ui",
      techs: ["TypeScript", "React", "Styled-Components"],
    },
    backend: {
      gitLink: "https://github.com/kenaioz/futsuperstition-api",
      techs: ["Phyton", "Flask", "PostgreSQL"],
    },
    status: { en: "In development", pt: "Em desenvolvimento" },
  },
];
