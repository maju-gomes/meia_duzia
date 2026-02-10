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
import bolo_aniversario from '@/assets/doces/bolo_aniversario.png'
import kit_cookies from '@/assets/doces/kit_cookies.png'


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
  new Doce('Donut', donut),
  new Doce('Bolo de Aniversário', bolo_aniversario),
  new Doce('Kit de Cookies', kit_cookies)
]

</script>


<!------------------------------ HTML ------------------------------>
<template>
<main>
    
    <h2> Os Mais pedidos </h2>

<div class="container">

<ul>
    <li class="doce_card" v-for="doce in doces" :key="doce.nome"> 
        <a href="#"> 
            <img :src="doce.img" :alt="doce.nome" width="125px"> 
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
    background-color: #fffac9;
    padding: 60px 0;
    text-align: center;
}

h2 {
    display: inline-block;
    background-color: #87ff62;
    font-size: 40px;
    margin-bottom: 40px;
}

.doce_card {
  background-color: #fff; 
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* sombra */
  width: 200px;
  text-align: center;
  padding: 20px;
}

button {
    margin-top: 10px;
    border: none;
    background-color: #975c5c;
    border-radius: 15px;
    padding: 6px;
}

.doce_card p {
    margin-top: 5px;
    font-weight: bold;
}

ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

</style>