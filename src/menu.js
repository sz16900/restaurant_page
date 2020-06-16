import fp1 from './assets/images/fp-1.jpg';

const renderMenu = () => {
  const imgArray = [fp1];
  const menu = document.getElementById('menu');

  // Create the tags
  const cardColumn = document.createElement('div');

  //   Dynamically generate the inside tags
  for (let i = 0; i < imgArray.length; i += 1) {
    const card = document.createElement('div');
    const cardImageTop = document.createElement('img');
    cardImageTop.src = imgArray[i];
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.textContent = 'Card title that wraps to a new line';
    const cardText = document.createElement('p');
    cardText.setAttribute('class', 'card-text');
    cardText.textContent = 'This is a longer card with supporting ';

    // Add it
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    cardColumn.appendChild(card);
  }
  menu.appendChild(cardColumn);
};

export default renderMenu;
