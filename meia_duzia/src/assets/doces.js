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


class Doce {
  constructor(nome, img_src, url) {
    this.nome = nome
    this.img_src = img_src
    this.url = url
  }
}


const doces = [
  new Doce("Brigadeiro", brigadeiro, "brigadeiro"),
  new Doce("Beijinho", beijinho, "beijinho"),
  new Doce("Bem Casado", bem_casado, "bem-casado"),
  new Doce("Cupcake de Ninho", cupcake_de_ninho, "cupcake-de-ninho"),
  new Doce("Bolo de Morango", bolo_de_morango, "bolo-de-morango"),
  new Doce("Pão de Mel", pao_de_mel, "pao-de-mel"),
  new Doce("Macaron", macaron, "macaron"),
  new Doce("Donut", donut, "donut"),
  new Doce("Bolo de Aniversário", bolo_aniversario, "bolo-aniversario"),
  new Doce("Kit de Cookies", kit_cookies, "kit-cookies")
]
