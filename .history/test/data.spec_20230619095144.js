import {orderData, filtroDir,filtroProduc} from '../src/data.js';


describe('orderData', () => { 
  const orderDataTest = [ //array de test 
    {title: "Castle in the Sky"},
    {title: "Kiki's Delivery Service"},
    {title: "My Neighbor Totoro"},
    {title: "Grave of the Fireflies"},
    {title: "Only Yesterday"},
    {title: "Porco Rosso"},
    {title: "Pom Poko"},
    {title: "Whisper of the Heart"},
    {title: "Princess Mononoke"},
    {title: "My Neighbors the Yamadas"},
    {title: "Spirited Away"},
    {title: "The Cat Returns"},
    {title: "Howl's Moving Castle"},
    {title: "Tales from Earthsea"},
    {title: "Ponyo on the Cliff by the Sea"},
    {title: "The Secret World of Arrietty"},
    {title: "From Up on Poppy Hill"},
    {title: "The Wind Rises"},
    {title: "The Tale of the Princess Kaguya"},
    {title: "When Marnie Was There"},
  ];
  it('return director',  () => { //le decimos que va a ser 
    expect(filtroDir("director", orderDataTest)).toEqual( [
      {director: "Hayao Miyazaki"},
      {director: "Gorō Miyazaki"},
      {director: "Isao Takahata"},
      {director: "Hiroyuki Morita"},
      {director: "Hiromasa Yonebayashi"},
      {director: "Yoshifumi Kondō"},
    ]);
  });
  it('return director',  () => { //le decimos que va a ser 
    expect(filtroDir("director", orderDataTest)).toEqual( [
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