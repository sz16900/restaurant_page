import fp1 from './assets/images/fp-1.jpg';
import fp2 from './assets/images/fp-2.jpg';
import fp3 from './assets/images/fp-3.jpg';
import fp4 from './assets/images/fp-4.jpg';
import fp5 from './assets/images/fp-5.jpg';

const renderMenu = () => {
  const imgArray = [
    [
      fp1,
      'Hamburguer',
      'This is an insane hamburguer made with fine ingredients',
    ],
    [
      fp2,
      'Fries',
      'This is an insane fri collection made with fine ingredients... So decadent!',
    ],
    [
      fp3,
      'Waffle',
      'This is an insane waffle housing of yumminess made with fine ingredients... Can you handle it!',
    ],
    [
      fp4,
      'Pizza',
      'Who does not love pizza?! Looks small but packs a huge punch.',
    ],
    [fp5, 'Hot-Dog', 'The classic packed with so many ingredients!'],
  ];
  const menu = document.getElementById('menu');

  // Create the tags
  const cardColumn = document.createElement('div');
  cardColumn.setAttribute('class', 'card-columns');

  //   Dynamically generate the inside tags
  for (let i = 0; i < imgArray.length; i += 1) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    const cardImageTop = document.createElement('img');
    cardImageTop.setAttribute('class', 'card-img-top');
    cardImageTop.src = imgArray[i][0];
    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.textContent = imgArray[i][1];
    const cardText = document.createElement('p');
    cardText.setAttribute('class', 'card-text');
    cardText.textContent = imgArray[i][2];

    // Add it
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardImageTop);
    card.appendChild(cardBody);
    cardColumn.appendChild(card);
  }
  menu.appendChild(cardColumn);
};

export default renderMenu;
