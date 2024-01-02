
const elemento = document.querySelectorAll('.elemento_animation_tenis');
const localizacao = document.querySelector('#rodape');

const bolsa_compras = document.querySelector('#div_compras');
const bolsinha = document.querySelector('.bolsinha');

const circulo = document.querySelector('#circulo');
const bolsa_aberta = document.querySelector('.sec_compras');


const comprartudo =  document.getElementById("totalcomprar");


var carrinho = 0;
var itens= [0,0,0];
var precoitens= [0,0,0];



function animarElemento() {
  const distanceToTop = localizacao.getBoundingClientRect().top;

  elemento.forEach((element, index) => {
    const distanceelement = element.getBoundingClientRect().top;
    const distancias = [650,612,500,400,300,700];

    if(distanceelement < distancias[index]){
      switch(index){
        case 0:
              element.classList.add("animation_frase_tres_tenis");
          break;

          case 1:
              element.classList.add("animation_pag_tres_tenis");
            break;

            case 2:
               element.classList.add("animation_pag_tres_tenis");
              break;

              case 3:
                element.classList.add("animation_pag_tres_tenis");
               break;

               case 4:
                element.classList.add("animation_tenisb_tres_tenis");
               break;

               case 5:
                element.classList.add("animation_text_tres_tenis");
               break;
      }
    }

  }) 
   
  
   


  if(distanceToTop >=  2763){
    circulo.style.top = "-4px"
  } else if( distanceToTop >=  1700 ){
      circulo.style.top = "25px"
  } else  if( distanceToTop >=  1300 ){
      circulo.style.top = "54px"
}   else  if( distanceToTop >=  503 ){
  circulo.style.top = "83px"
}    else  if( distanceToTop >=  350 ){
  circulo.style.top = "112px"
}


}

var boleano = true;

  function bolsa() {


    if( boleano == true){
        bolsa_aberta.style.display= "block";
        bolsinha.style.width= "15px";
        bolsinha.src = 'images/close.png';
    
      return boleano = false;

    } else {
       bolsa_aberta.style.display= "none";
        bolsinha.style.width= "35px";
       bolsinha.src = 'images/bolsa-de-compras.png';
      
      return boleano = true;
    }
    
  }





window.addEventListener('scroll', animarElemento);

bolsa_compras.addEventListener('click', bolsa);





