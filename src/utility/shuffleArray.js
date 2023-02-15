// this function will be used to shuffle API responses when necessary

function shuffle(array) {
  let randomIndex;
  let currentIndex = array.length;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  console.log(array);
  return array;
}

export default shuffle;

// node src/utility/shuffleArray.js
