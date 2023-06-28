import {orderData, orderData2, orderFecha, orderFecha2, filtroDir,filtroProduc} from '../src/data.js';

//orden de la a-z
describe('orderData', () => { 
  it('return title',  () => { //le decimos que va a ser 
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
    expect(orderData(orderDataTest)).toEqual( [
      {title: "Castle in the Sky"},
      {title: "From Up on Poppy Hill"},
      {title: "Grave of the Fireflies"},
      {title: "Howl's Moving Castle"},
      {title: "Kiki's Delivery Service"},
      {title: "My Neighbor Totoro"},
      {title: "My Neighbors the Yamadas"},
      {title: "Only Yesterday"},
      {title: "Pom Poko"},
      {title: "Ponyo on the Cliff by the Sea"},
      {title: "Porco Rosso"},
      {title: "Princess Mononoke"},
      {title: "Spirited Away"},
      {title: "Tales from Earthsea"},
      {title: "The Cat Returns"},
      {title: "The Secret World of Arrietty"},
      {title: "The Tale of the Princess Kaguya"},
      {title: "The Wind Rises"},
      {title: "When Marnie Was There"},
      {title: "Whisper of the Heart"},
      
    ]);
  });

});

//orden de la z-a
describe('orderData2', () => { 
  it('return title',  () => { //le decimos que va a ser 
    const orderDataTest2 = [ //array de test 
      {title: "Castle in the Sky"},
      {title: "From Up on Poppy Hill"},
      {title: "Grave of the Fireflies"},
      {title: "Howl's Moving Castle"},
      {title: "Kiki's Delivery Service"},
      {title: "My Neighbor Totoro"},
      {title: "My Neighbors the Yamadas"},
      {title: "Only Yesterday"},
      {title: "Pom Poko"},
      {title: "Ponyo on the Cliff by the Sea"},
      {title: "Porco Rosso"},
      {title: "Princess Mononoke"},
      {title: "Spirited Away"},
      {title: "Tales from Earthsea"},
      {title: "The Cat Returns"},
      {title: "The Secret World of Arrietty"},
      {title: "The Tale of the Princess Kaguya"},
      {title: "The Wind Rises"},
      {title: "When Marnie Was There"},
      {title: "Whisper of the Heart"},
    ];
    expect(orderData2(orderDataTest2)).toEqual( [
      {title: "Whisper of the Heart"},
      {title: "When Marnie Was There"},
      {title: "The Wind Rises"},
      {title: "The Tale of the Princess Kaguya"},
      {title: "The Secret World of Arrietty"},
      {title: "The Cat Returns"},
      {title: "Tales from Earthsea"},
      {title: "Spirited Away"},
      {title: "Princess Mononoke"},
      {title: "Porco Rosso"},
      {title: "Ponyo on the Cliff by the Sea"},
      {title: "Pom Poko"},
      {title: "Only Yesterday"},
      {title: "My Neighbors the Yamadas"},
      {title: "My Neighbor Totoro"},
      {title: "Kiki's Delivery Service"},
      {title: "Howl's Moving Castle"},
      {title: "Grave of the Fireflies"},
      {title: "From Up on Poppy Hill"},
      {title: "Castle in the Sky"},
    ]);
  });

});

//fecha
describe('orderFecha', () => { 
  const fechaTest = [ //array de test 
    {release_date:  "1986"},
    {release_date: "1988"},
    {release_date: "1989"}, ];
  it('return director',  () => { //le decimos que va a ser 
    expect(orderFecha(fechaTest, "1986")).toEqual( [
      {director: "1986"},
    ]);
  });
}),

//fecha
describe('orderFecha2', () => { 
  const fechaTest = [ //array de test 
    {release_date:  "1991"},
    {release_date: "1992"},
    {release_date: "1994"}, ];
  it('return director',  () => { //le decimos que va a ser 
    expect(orderFecha2(fechaTest, "1986")).toEqual( [
      {director: "1986"},
    ]);
  });
}),


//directores 
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
    expect(filtroDir(directoresTest, "Hayao Miyazaki")).toEqual( [
      {director: "Hayao Miyazaki"},
    ]);
  });
}),



describe('filtroProduc', () => { 
  const producerTest = [ //array de test 
    {producer: "Isao Takahata"},
    {producer: "Toshio Suzuki"},
    {producer: "Toru Hara"},
    {producer: "Hayao Miyazaki"},
    {producer: "Yoshiaki Nishimura"},
  ];
  it('return producer',  () => { //le decimos que va a ser 
    expect(filtroProduc(producerTest, "Isao Takahata")).toEqual( [
      {producer: "Isao Takahata"},
    ]);
  });
});