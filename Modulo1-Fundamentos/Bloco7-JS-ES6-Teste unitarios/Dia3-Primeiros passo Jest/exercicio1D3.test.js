const sum = require('./exercicio1D3');

describe('teste funçao sum', ()=> {
  it('testando se a funçao soma retorna o esperado sum(4, 5) e igual a 9',  () => {
    expect(sum(4, 5)).toBe(9);
  }) 
  
  it('testando se a funçao soma retorna o esperado sum(0, 0) e igual a 0',  () => {
    expect(sum(0, 0)).toBe(0);
  }) 

  it('testando se a funçao soma retorna o esperado sum(4, "5") lanca um erro',  () => {
    expect(() => sum()).toThrow();
  }) 
  it('testando se a funçao soma retorna o esperado sum(4, "5") lanca um erro',  () => {
    expect(() => sum(4, '5')).toThrow();
  }) 
  it('testando se a funçao soma retorna o esperado sum(4, "5") lanca um erro',  () => {
    expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
  }) 
})