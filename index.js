// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray) {
  const array = [];
  for (var i = 0; i < musiciansArray.length; i++) {
    let newString = `${musiciansArray[i]} plays ${instrumentsArray[i]}`;
    array.push(newString);
  }
  return array;
}
