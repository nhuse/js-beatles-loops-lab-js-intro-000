// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray) {
  const array = [];
  for (var i = 0; i < musiciansArray.length; i++) {
    let newString = `${musiciansArray[i]} plays ${instrumentsArray[i]}`;
    array.push(newString);
  }
  return array;
}

function johnLennonFacts(factsArray) {
  const newArr = [];
  const exclamationPoint = "!!!";
  for (var i = 0; i < factsArray.length; i++) {
    let newString = factsArray[i].concat(exclamationPoint);
    newArr.push(newString);
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  const newArr = [];
  let i = 0;
  do {
    arr.push('I love the Beatles!');
  } while(i<num);

  return newArr;
}
