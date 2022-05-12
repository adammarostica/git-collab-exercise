const drinks = {
  coffee: [
    {
      title: 'Early Bird',
      price: '$$',
    },
    {
      title: 'Strange Love',
      price: '$$',
    },
    {
      title: 'Fahrenheit',
      price: '$$',
    },
    {
      title: 'Voodoo Child',
      price: '$$',
    },
    {
      title: 'Dark Horse',
      price: '$',
    },
    {
      title: 'Cops',
      price: '$',
    },
    {
      title: 'i deal',
      price: '$',
    },
    {
      title: 'Jimmy\'s',
      price: '$',
    }
  ],
  tea: [
    {
      title: 'Icha',
      price: '$$',
    },
    {
      title: 'Ten Ren\'s',
      price: '$$',
    },
    {
      title: "David's Tea",
      price: '$$',
    },
    {
      title: 'Bubble Lee',
      price: '$$',
    },
    {
      title: 'Chattime',
      price: '$',
    },
    {
      title: 'Tealish',
      price: '$',
    },
    {
      title: 'Kung Fu',
      price: '$',
    },
    {
      title: 'Gong Cha',
      price: '$',
    }
  ]
};


// Our code goes here:

// add a submit event listener to our form element
const formElement = document.querySelector('form');
const resultsSection = document.querySelector('.results');

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

formElement.addEventListener('submit', function(e) {
  
  e.preventDefault();
  
  // assign user's drink and price choices to variables
  const drinkChoice = document.querySelector('input[name=beverage]:checked').value;
  const priceChoice = document.querySelector('input[name=price]:checked').value;

  // use the drink choice to determine which array to use
  const drinkArray = drinks[drinkChoice];
  
  // filter the options that match the price choice
  // loop through the array
  // use a conditional statement to check if price choice is equal to item's price data
  // store results that match in a new array
  const filteredDrinkArray = drinkArray.filter((elem) => elem.price === priceChoice);

  // randomly select one of the options in our new array
  const randomShop = getRandomItem(filteredDrinkArray);
  
  // create an h2 element and add the title of the randomShop as its text content
  const h2 = document.createElement('h2');
  h2.textContent = randomShop.title;
  
  // empty the results section
  for (let child of resultsSection.children) {
    child.remove();
  }

  // append our h2 to the now empty section
  resultsSection.appendChild(h2);
  
});