const {sum, myRemove} = require('./script');
const myFizzBuzz = require('./script');
const {encode, decode} = require('./script');
// const myRemove = require('./script');

// describe('exemplo teste', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// })
// --------EXERCICIO 1-------------------------------------------------

// describe('exercicio 1', () => {
//   test('Teste se o retorno de sum(4, 5) é 9 ', () => {
//     expect(sum(4, 5)).toBe(9);
//   })

//   test('Teste se o retorno de sum(0, 0) é 0 ', () => {
//     expect(sum(0, 0)).toBe(0);
//   })

//   test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
//     expect(() => sum(4, '5')).toThrow(Error);
//   })

//   test('Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")', () => {
//     expect(sum).toThrow('parameters must be numbers');
//   })
// })
// -------EXERCICIO 2-------------------------------------------------

// describe('exercicio 2', () => {
//   test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
//     expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
//   })

//   test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
//     expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
//   })

//   test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
//     expect(myRemove([1,2,3,4], 5)).not.toContain(5);
//   })
// })
// ---------EXERCICIO 3-----------------------------------------------

// describe('exercicio 3', () => {
//     test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
//       expect(myFizzBuzz(15)).toMatch('fizzbuzz');
//     })

//     test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
//       expect(myFizzBuzz(15)).toMatch('fizz');
//     })

//     test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
//       expect(myFizzBuzz(15)).toMatch('buzz');
//     })

//     test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
//       expect(myFizzBuzz(17)).toBe(17);
//     })

//     test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
//       expect(myFizzBuzz(NaN)).toBeFalsy();
//     })
//   })
// --------EXERCICIO 4-----------------------------------------

describe('exercicio 4', () => {
      test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(15)).
      })
})

