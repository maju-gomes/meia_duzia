class Doce {
    constructor(url_path, nome, img_src) {
      this.nome = nome
      this.url_path = url_path
      this.img_src = img_src
    }
  }


import brigadeiro from '@/assets/doces/brigadeiro.png'
import beijinho from '@/assets/doces/beijinho.png'
import bem_casado from '@/assets/doces/bem_casado.png'
import cupcake_de_ninho from '@/assets/doces/cupcake_de_ninho.png'
import bolo_de_morango from '@/assets/doces/bolo_de_morango.png'
import pao_de_mel from '@/assets/doces/pao_de_mel.png'
import macaron from '@/assets/doces/macaron.png'
import donut from '@/assets/doces/donut.png'
import bolo_aniversario from '@/assets/doces/bolo_aniversario.png'
import kit_cookies from '@/assets/doces/kit_cookies.png'


// make all doces follow the first one pattern
const doces = [
    new Doce(
        nome = "Brigadeiro",
        url_path = "brigadeiro", // lower case on url path
        img_src = brigadeiro
    ),
    new Doce('Beijinho', beijinho),
    new Doce('Bem Casado', bem_casado),
    new Doce('Cupcake de Ninho', cupcake_de_ninho),
    new Doce('Bolo de Morango', bolo_de_morango),
    new Doce('Pão de Mel', pao_de_mel),
    new Doce('Macaron', macaron),
    new Doce('Donut', donut),
    new Doce('Bolo de Aniversário', bolo_aniversario),
    new Doce('Kit de Cookies', kit_cookies)
]