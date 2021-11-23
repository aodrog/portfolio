
// Função que muda o menu ao rolar a pagina

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
      if (scroll >= 40) {               // se rolar 40px ativa o evento
        $("#container").addClass("ativo");    //coloca a classe "ativo" no id=menu
    } else {
        $("#container").removeClass("ativo"); //se for menor que 40px retira a classe "ativo" do id=menu
    }
    });

// Botao de menu Hamburguer

const btnMobile = document.getElementById('btnmobile')

function toggleMenu () {
  const menu = document.getElementById('menu')
  menu.classList.toggle('ativo')
}

btnMobile.addEventListener('click', toggleMenu)