<!------------------------------ JS ------------------------------>
<script setup>

import brigadeiro from '@/assets/doces/brigadeiro.png'
import beijinho from '@/assets/doces/beijinho.png'
import bem_casado from '@/assets/doces/bem_casado.png'
import cupcake_de_ninho from '@/assets/doces/cupcake_de_ninho.png'
import bolo_de_morango from '@/assets/doces/bolo_de_morango.png'
import pao_de_mel from '@/assets/doces/pao_de_mel.png'
import macaron from '@/assets/doces/macaron.png'
import donut from '@/assets/doces/donut.png'


class Doce {
  constructor(nome, img) {
    this.nome = nome
    this.img = img
  }
}

const doces = [
  new Doce('Brigadeiro', brigadeiro),
  new Doce('Beijinho', beijinho),
  new Doce('Bem Casado', bem_casado),
  new Doce('Cupcake de Ninho', cupcake_de_ninho),
  new Doce('Bolo de Morango', bolo_de_morango),
  new Doce('Pão de Mel', pao_de_mel),
  new Doce('Macaron', macaron),
  new Doce('Donut', donut)
]

</script>


<!------------------------------ HTML ------------------------------>
<template>
<main>
<div class="container">

<h2> Os Mais pedidos </h2>

<ul>
    <li class="doce_card" v-for="doce in doces" :key="doce.nome"> 
        <a href="#"> 
            <img :src="doce.img" :alt="doce.nome"> 
            <p>{{ doce.nome }}</p>
            <button> Adicionar ao carrinho </button>
        </a>    
    </li>
</ul>

</div>
</main>
</template>


<!------------------------------ CSS ------------------------------>
<style scoped>

main{
    display: flex;

    background-color: #fffac9;
    padding: 60px 0;
}

h2 {
    display: inline-block;
    background-color: #87ff62;
    font-size: 40px;
}

</style>