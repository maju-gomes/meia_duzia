<!------------------------------ JS ------------------------------>
<script setup>

import doces from '@/assets/docinhos.js'

</script>


<!------------------------------ HTML ------------------------------>
<template>
<main>
<div class="container">

<h2> Os Mais Pedidos </h2>
<ul>
    <li class="DoceCard" v-for="doce in doces" :key="doce.nome">
        <router-link :to="doce.url">
            <img :src="doce.img_src" :alt="doce.nome">
            <p>{{ doce.nome }}</p>
        </router-link>

        <button class="botao"> Adicionar ao carrinho </button>
    </li>
</ul>

</div>
</main>
</template>


<!------------------------------ CSS ------------------------------>
<style scoped>

main {
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

.DoceCard {
  background-color: #fff; 
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* sombra */
  width: 180px;
  text-align: center;
  padding: 20px;
}

.botao {
    margin-top: 10px;
    padding: 6px;
}

img {
  width: 125px;
}

.DoceCard p {
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