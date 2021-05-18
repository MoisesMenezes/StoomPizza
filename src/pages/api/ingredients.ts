// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const ingredients = {
    massas: [
      {
        id: 1,
        price: 10.00,
        title: "Massa nova-iorquina",
        img: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        description:
          "Frequentemente vendida em fatias grandes e largas, a pizza ao estilo de Nova York tem uma massa mais grossa e é levemente crocante por fora. Dessa forma, são consumidas sem talheres. É bastante comum que as fatias sejam dobradas, facilitando o consumo por parte dos clientes. Normalmente são assadas em temperaturas mais baixas, em fornos a gás.",
      },
      {
        id: 2,
        price: 10.00,
        title: "Massa siciliana",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80",
        description:
          "A pizza siciliana é conhecida por sua massa grossa em forma de retângulo, geralmente com mais de um centímetro de espessura. A saber, pode ser feita em qualquer formato de assadeira untada com azeite, o que a deixa bem crocante no fundo. Se você gosta da pizza tradicional da Sicília, a farinha de rosca fica por cima dos ingredientes. Além disso, ainda existe a opção de ralar um queijo para finalizar o perfil de sabor. Curiosidade: a pizza com massa estilo siciliana não usa muçarela porque o leite de vaca não está disponível na ilha.",
      },
      {
        id: 3,
        price: 14.00,
        title: "Massa napolitana",
        img: "https://images.unsplash.com/photo-1616733414599-d683f1c78acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        description:
          "O modo napolitano de preparo é considerado um Patrimônio Cultural Imaterial da Humanidade pela Unesco. Acima de tudo, a massa napolitana deve atender a um conjunto muito específico. Seu sabor e textura únicos, precisam ser assados em um forno a lenha com cúpula. Além disso, a massa deve ser amassada à mão, com no máximo 35 centímetros de diâmetro e no máximo um terço de centímetro de espessura. Os estilos clássicos incluem a Margherita e a Marinara. E devido ao sabor e textura é a opção perfeita para quem quer saborear uma pizza italiana autêntica.",
      },
    ],
    tamanhos: [
      {
        id: 1,
        title: "Grande",
        price: 15,
        img: "https://www.santapizzadelivery.com.br/img/pizza-tres.png",
        description:
          "Pizza com 12 pedaços para quando chegar visita e sobrar ainda pro café da manhã.",
      },
      {
        id: 2,
        title: "Normal",
        price: 12,
        img: "https://www.santapizzadelivery.com.br/img/pizza-dois.png",
        description:
          "Pizza com 8 pedaços ideal para uma família.",
      },
      {
        id: 3,
        price: 10,
        title: "Pequena",
        img: "https://www.santapizzadelivery.com.br/img/pizza-um.png",
        description:
          "Pizza com 6 pedaços ideal para poucas pessoas.",
      },
    ],
    recheios: [
      {
        id: 1,
        title: "Frango & Catupiry",
        price: 8,
        img: "http://www.pizzacesar.com.br/class/resize.php?arquivo=../uploads/1010201212234587813019.jpg&largura=1134&altura=449&tipo=crop",
        description:
          "Molho de tomate, Muçarela, Frango, Catupiry",
      },
      {
        id: 2,
        title: "Calabresa",
        price: 10,
        img: "http://www.pizzacesar.com.br/class/resize.php?arquivo=../uploads/1110201205137297594650.jpg&largura=1134&altura=449&tipo=crop",
        description:
          "Molho de tomate, Muçarela, Calabresa",
      },
      {
        id: 3,
        title: "Escarola",
        price: 7,
        img: "http://www.pizzacesar.com.br/class/resize.php?arquivo=../uploads/1110201204543598968966.jpg&largura=1134&altura=449&tipo=crop",
        description:
          "Molho de tomate, Muçarela Escarola Refogada, Azeitonas",
      },
    ],
  };

  return response.json(ingredients);
};
