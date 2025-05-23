const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
  {
    titulo: "Casa do Sabor Natural",
    subtitulo: "Comida leve, alma leve.",
    data: "12/09/2022",
    texto: "Um cantinho acolhedor em Pinheiros que serve pratos naturais, sucos prensados a frio e sobremesas veganas de dar água na boca. Perfeito pra um almoço tranquilo ou um café da tarde nutritivo."
  },
  {
    titulo: "Tempero Nordestino Veg",
    subtitulo: "O sertão virou sabor!",
    data: "25/09/2022",
    texto: "Cuscuz, baião e moqueca vegana? Sim, senhor! Esse restaurante traz os sabores do Nordeste com um toque totalmente plant-based. Ideal pra matar a saudade sem sair da dieta."
  },
  {
    titulo: "Japa Plant",
    subtitulo: "Sushi sem crueldade.",
    data: "10/10/2022",
    texto: "Se você achava que sushi vegano era só pepino enrolado no arroz, precisa conhecer esse lugar. Sashimis de melancia, niguiris criativos e temakis surpreendentes. Uma experiência que quebra paradigmas!"
  },
]

const main = document.querySelector("main");

for(let i=0; i<arrayPostagens.length; i++) {
  const article = document.createElement("article");

  article.innerHTML = `
    <h3> ${arrayPostagens[i].titulo} </h3>
    <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
    <div class="data">${arrayPostagens[i].data}</div>
    <p>${arrayPostagens[i].texto}</p>
  ` 
  main.appendChild(article)

}
