'use strict';

module.exports.inputDataController = async (event, context, callback) => {
  const inputData = [
    {
      number: 10,
      operation: 'square'
    },
    {
      number: 20,
      operation: 'square'
    },
    {
      number: 30,
      operation: 'square'
    },
    {
      number: 40,
      operation: 'square'
    }
  ];
  
  callback(null, inputData);
}

module.exports.calculator = (event, context, callback) => {
  console.log('calculator used to process the data =>', event);
  const number = event.number;
  const operation = event.operation;
  let calculation = 0;

  switch (operation) {
    case 'square':
      calculation = number * number;

      console.log(`${operation} for number: ${number} is ${calculation}.`)
      break;
    case 'addition':
      // logic here
      break;
    case 'substration':
      // logic here
      break;
    case 'multiplication':
      // logic here
      break;
    default:
      break;
  }

  callback(null, calculation);
}