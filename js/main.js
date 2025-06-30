document.addEventListener("DOMContentLoaded", () => {

  const gallery = document.getElementById('gallery');
  const previewImg = document.querySelector('#preview img');
  const previewText = document.querySelector('.preview-text');

  const cards = [
    {
    title: "Cartão 1",
    thumb: "imagens/1.jpg",
    full: "imagens/1.jpg",
    text: [
      "No calor que queima a pele e a alma,",
      "Passa o vendedor com o isopor"
    ]
  },
  {
    title: "Cartão 2",
    thumb: "imagens/2.jpg",
    full: "imagens/2.jpg",
    text: [
      "Nem todo dia é uma vitória",
      "Cada momento é uma nova história."
    ]
  },
  {
    title: "Cartão 3",
    thumb: "imagens/3.jpg",
    full: "imagens/3.jpg",
    text: [
      "Olha o Mate!",
      "Grita em plenos pulmões essa Arte"
    ]
  },
  {
    title: "Cartão 4",
    thumb: "imagens/4.jpg",
    full: "imagens/4.jpg",
    text: [
      "De janeiro a março, o céu ajuda.",
      "Nos próximos meses, o frio acuda."
    ]
  },
  {
    title: "Cartão 5",
    thumb: "imagens/5.jpg",
    full: "imagens/5.jpg",
    text: [
      "A areia fica vazia e esquecida,",
      "Por um tempo, a praia fica adormecida."
    ]
  },
  {
    title: "Cartão 6",
    thumb: "imagens/6.jpg",
    full: "imagens/6.jpg",
    text: [
      "Empada, picolé, queijo assado,",
      "Quem vê o corre não vê o passado."
    ]
  },
  {
    title: "Cartão 7",
    thumb: "imagens/7.jpg",
    full: "imagens/7.jpg",
    text: [
      "Quem vê aquela pessoa guerreira,",
      "Mal imagina os sufocos da carreira."
    ]
  },
  {
    title: "Cartão 8",
    thumb: "imagens/8.jpg",
    full: "imagens/8.jpg",
    text: [
      "Viver da praia não é só vender,",
      "É inventar jeitos de sobreviver."
    ]
  },
  {
    title: "Cartão 9",
    thumb: "imagens/9.jpg",
    full: "imagens/9.jpg",
    text: [
      "O hino água, coca, latão",
      "Entram na mente da multidão."
    ]
  },
  {
    title: "Cartão 10",
    thumb: "imagens/10.jpg",
    full: "imagens/10.jpg",
    text: [
      "O peso do trabalho nas costas",
      "Traz para todo mundo uma resposta."
    ]
  },
  {
    title: "Cartão 11",
    thumb: "imagens/11.jpg",
    full: "imagens/11.jpg",
    text: [
      "Um trabalho tão bom pra cidade,",
      "Como podem ser tão esquecidos na urbanidade?"
    ]
  },

  {
    title: "Cartão 13",
    thumb: "imagens/13.jpg",
    full: "imagens/13.jpg",
    text: [
      "Os ambulantes deixam a paisagem mais bela",
      "Uma obra passível de tela."
    ]
  },
  {
    title: "Cartão 14",
    thumb: "imagens/14.jpg",
    full: "imagens/14.jpg",
    text: [
      "Enchem o cenário de cores,",
      "De cima a praia parece um mar de flores."
    ]
  },
  {
    title: "Cartão 15",
    thumb: "imagens/15.jpg",
    full: "imagens/15.jpg",
    text: [
      "Passa o carrinho com som e fumaça,",
      "Tem sabor, tem cheiro, tem raça."
    ]
  },
  {
    title: "Cartão 16",
    thumb: "imagens/16.jpg",
    full: "imagens/16.jpg",
    text: [
      "Cada guarda-sol é uma vida,",
      "De resistência, arte e corrida."
    ]
  },
  
  {
    title: "Cartão 18",
    thumb: "imagens/18.jpg",
    full: "imagens/18.jpg",
    text: [
      "Tem sorvete, tem arte, tem brincadeira,",
      "Tudo junto na luta verdadeira."
    ]
  },
  {
    title: "Cartão 19",
    thumb: "imagens/19.jpg",
    full: "imagens/19.jpg",
    text: [
      "Com o isopor ou a sacola pendente,",
      "Traz alegria num gesto sorridente."
    ]
  },
  {
    title: "Cartão 20",
    thumb: "imagens/20.jpg",
    full: "imagens/20.jpg",
    text: [
      "Mesmo sem crachá ou diploma no peito,",
      "Ensina ao mundo o que é dar um jeito."
    ]
  }
];

 function createThumbnails() {
    cards.forEach((card, index) => {
      const div = document.createElement('div');
      div.classList.add('card-thumb');
      div.style.backgroundImage = `url(${card.thumb})`;
      div.title = card.title;
      div.addEventListener('click', () => selectCard(index));
      gallery.appendChild(div);
    });
  }

  function selectCard(index) {
    document.querySelectorAll('.card-thumb').forEach(el => el.classList.remove('selected'));
    const thumbs = document.querySelectorAll('.card-thumb');
    thumbs[index].classList.add('selected');

    previewImg.src = cards[index].full;
    previewImg.alt = cards[index].title;

    previewText.innerHTML = '';
    cards[index].text.forEach(line => {
      const h2 = document.createElement('h2');
      h2.textContent = line;
      previewText.appendChild(h2);
    });
  }

  // agora sim, depois que TUDO foi definido:
  createThumbnails();
  selectCard(0);

});