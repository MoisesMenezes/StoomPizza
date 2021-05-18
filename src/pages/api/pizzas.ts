import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const pizzas = [
    {
      id: 1,
      price: 42,
      tittle: "Frango com catupiry",
      ingredients: "olho de tomate, Muçarela, Frango, Catupiry",
      dough: "Massa siciliana",
      points: 30,
      img: "http://www.pizzacesar.com.br/class/resize.php?arquivo=../uploads/1010201212234587813019.jpg&largura=1134&altura=449&tipo=crop",
    },
    {
      id: 2,
      price: 35,
      tittle: "Calabresa",
      ingredients: "Molho de tomate, Muçarela, Calabresa",
      dough: "Massa nova-iorquina",
      points: 40,
      img: "http://www.pizzacesar.com.br/class/resize.php?arquivo=../uploads/1110201205137297594650.jpg&largura=1134&altura=449&tipo=crop",
    },
    {
      id: 3,
      price: 37,
      tittle: "Escarola",
      ingredients: "Molho de tomate, Muçarela Escarola Refogada, Azeitonas",
      dough: "Massa napolitana",
      points: 50,
      img: "http://www.pizzacesar.com.br/class/resize.php?arquivo=../uploads/1110201204543598968966.jpg&largura=1134&altura=449&tipo=crop",
    },
  ];

  return response.json(pizzas);
};
