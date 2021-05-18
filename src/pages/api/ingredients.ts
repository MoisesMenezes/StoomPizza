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
        title: "Imensa",
        img: "https://s2.glbimg.com/4y3xT-yoX11D9RqblgrnS6SaBIU=/e.glbimg.com/og/ed/f/original/2019/07/10/pizzabatepapo.jpg",
        description:
          "Essa pizza... meu amigo você tem que ter coragem pra pedir, dizem que ela é o almoço e janta de pelo menos 7 dias.",
      },
      {
        id: 2,
        title: "Grande",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0a/cc/84/22/pizza-de-calabresa-e.jpg",
        description:
          "Um tamanho razoável para uma família grande, serve até 8 pessoas tranquilamente.",
      },
      {
        id: 3,
        title: "Normal",
        img: "https://img.olx.com.br/images/86/861004009975673.jpg",
        description:
          "Um tamanho para poucas pessoas, se você pretende dividir com até 3 pessoas, esse é o tamanho ideal.",
      },
    ],
    recheios: [
      {
        id: 1,
        title: "Frango & Catupiry",
        img: "https://cdnv2.moovin.com.br/bpnutrition/imagens/produtos/det/pizza-de-frango-com-catupiry-500g-mama-gusto-imagem-ilustrativa-95263b8065962b619fb577e286e192cc.jpg",
        description:
          "Frango desfiado com catupiry, queijo mussarela, orégano e salsinha",
      },
      {
        id: 2,
        title: "Calabresa",
        img: "https://blog.novasafra.com.br/wp-content/uploads/2016/01/accb7d_37d37d9f1001e88384dafc6e5cc60c4f.jpg_1024-780x450.jpg",
        description:
          "calabresa mussarela",
      },
      {
        id: 3,
        title: "Brócolis",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/08/72/27/5c/babbo-giovanni-curitiba.jpg",
        description:
          "Brócolis, queijo e salsinha",
      },
    ],
  };

  return response.json(ingredients);
};
