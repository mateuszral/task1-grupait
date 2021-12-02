const generateButton = document.querySelector('.generateButton');
const oddNumbersDiv = document.querySelector('.oddNumbers');
const evenNumbersDiv = document.querySelector('.evenNumbers');

const removeAllChildren = (element) => {
  while (element.childElementCount !== 1) {
    element.removeChild(element.lastChild);
  }
};

generateButton.addEventListener('click', () => {
  removeAllChildren(oddNumbersDiv);
  removeAllChildren(evenNumbersDiv);

  const randomNumbers = [];
  for (let i = 0; i < 20; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
  }
  randomNumbers.sort((a, b) => a - b);

  randomNumbers.forEach((number) => {
    const numberElement = document.createElement('p');
    numberElement.innerText = number;

    if (number % 2 === 0) {
      evenNumbersDiv.appendChild(numberElement);
    } else {
      oddNumbersDiv.appendChild(numberElement);
    }
  });
});
