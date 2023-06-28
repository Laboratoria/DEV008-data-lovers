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
  it('return director',  () => { //le decimos que va a ser 
    expect(filtroDir("director", directoresTest)).toEqual( [
      {director: "Yoshifumi Kondō"},
      {director: "Hiromasa Yonebayashi"},
      {director: "Hayao Miyazaki"},
      {director: "Gorō Miyazaki"},
      {director: "Isao Takahata"},
      {director: "Hiroyuki Morita"},
    ]);
  });
});