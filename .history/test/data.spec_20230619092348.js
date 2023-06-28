import {filtroDir, filtroProduc } from '../src/data.js';


describe('filtroDir', () => { 
  const directoresTest = [ //array de test 
    {director: "Hayao Miyazaki"},
    {director: "Gorō Miyazaki"},
    {director: "Isao Takahata"},
    {director: "Hiroyuki Morita"},
    {director: "Hiromasa Yonebayashi"},
    {director: "Yoshifumi Kondō"},
  ];
  it('return director',  () => { //le decimos que va a ser 
    expect(filtroDir("director", directoresTest)).toEqual( [
      {director: "Hayao Miyazaki"},
      {director: "Gorō Miyazaki"},
      {director: "Isao Takahata"},
      {director: "Hiroyuki Morita"},
      {director: "Hiromasa Yonebayashi"},
      {director: "Yoshifumi Kondō"},
    ]);
  });


  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
