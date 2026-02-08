<!------------------------------ JS ------------------------------>
<script setup>

import logo from '@/assets/logo.png'
import carrinho_de_compras from '@/assets/icons/carrinho.png'
import favoritos from '@/assets/icons/favoritos.png'

</script>


<!------------------------------ HTML ------------------------------>
<template>
<header>

<div id="esquerda">
    <h1> <img :src="logo" alt="Logo"> </h1>
</div>


<div id="direita">
    <nav>
    <ul>
        <li id="entrar"> <a href="#"> Entrar </a> </li>
        
        <li class="icon">
            <a href="#">
                <img :src="carrinho_de_compras" alt="Carrinho de Compras"/>
            </a>
        </li>

        <li class="icon">
            <a href="#">
                <img :src="favoritos" alt="Favoritos"/>
            </a>
        </li>
    </ul>
    </nav>
</div>

</header>
</template>


<!------------------------------ CSS ------------------------------>
<style scoped>

a {
    text-decoration: none;
    color: white;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
    background-color: #d38787;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

#entrar {
    display: flex;
    align-items: center;

    background-color: #992525;
    border-radius: 5px;
}

</style>