if(window.SimpleSlide) {

new SimpleSlide({
  slide: "quote", // nome do atributo data-slide="principal"
  time: 4000, // tempo de transição dos slides
  //nav: true, // se deve ou não mostrar a navegação
  //pauseOnHover: true, // pausa a transição automática
 // auto: true, // se o slide deve passar automaticamente
});

new SimpleSlide ({
  slide:"portfolio",
  time:5000,
  nav:true  
});

}

if(window.SimpleAnime) {
  new SimpleAnime();


}