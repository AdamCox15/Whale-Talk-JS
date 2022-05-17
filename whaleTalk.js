//First time writing the whale talk project
const input = 'I am still the greatest and I am pretty - Bone Thugs n Harmony';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
  if(input[i] === vowels[j]) {
    if(input[i] === 'e') {
      resultArray.push('ee')
    } else if(input[i] === 'u') {
      resultArray.push('uu');
    } else {
      resultArray.push(input[i]);
    }
  }
  }
}
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);


//Second time writing the whale talk project
const input = 'Conner McDavid is the best hockey player in the world!';
const vowels = ['a', 'e', 'i', 'o','u'];
const resultArray = [];

for (let i = 0; i < input.length; i++){
  if(input[i] === 'e') {
  resultArray.push('e');
  }
  if(input[i] === 'u'){
    resultArray.push('u');
  }
for (let j = 0; j < vowels.length; j++){
  if(input[i] === vowels[j]){
resultArray.push(input[i]); 
}
}
} 
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);
