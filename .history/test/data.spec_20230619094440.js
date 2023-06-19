import {orderData, filtroDir,filtroProduc} from '../src/data.js';


describe('import {orderData, filtroDir,filtroProduc} from '../src/data.js';
', () => { 
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


describe('filtroProduc', () => { 
  const producerTest = [ //array de test 
    {producer: "Isao Takahata"},
    {producer: "Toshio Suzuki"},
    {producer: "Toru Hara"},
    {producer: "Hayao Miyazaki"},
    {producer: "Yoshiaki Nishimura"},
  ];
  it('return producer',  () => { //le decimos que va a ser 
    expect(filtroProduc("producer", producerTest)).toEqual( [
      {producer: "Isao Takahata"},
      {producer: "Toshio Suzuki"},
      {producer: "Toru Hara"},
      {producer: "Hayao Miyazaki"},
      {producer: "Yoshiaki Nishimura"},
    ]);
  });
  it('return producer',  () => { //le decimos que va a ser 
    expect(filtroProduc("producer", producerTest)).toEqual( [
      {director: "Yoshifumi Kondō"},
      {director: "Hiromasa Yonebayashi"},
      {director: "Hayao Miyazaki"},
      {director: "Gorō Miyazaki"},
      {director: "Isao Takahata"},
      {director: "Hiroyuki Morita"},
    ]) ;
  });
});