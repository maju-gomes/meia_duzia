<!------------------------------ JS ------------------------------>
<script setup>

import logo from '@/assets/logo.png'
import carrinho_de_compras from '@/assets/icons/carrinho.png'
import favoritos from '@/assets/icons/favoritos.png'
import lupa from '@/assets/icons/lupa.png'

</script>


<!------------------------------ HTML ------------------------------>
<template>
<header>
<div class="container">


<div id="esquerda">

    <h1> <img :src="logo" alt="Logo"> </h1>

    <form action="">
        <div id="procurar_objeto">
            <input type="text" placeholder="Procurar...">
            
            <a href=""> 
                <img :src="lupa" alt="Lupa">
            </a>
        </div>
    </form>

</div>


<div id="direita">
    <button id="entrar"> Entrar </button>

    <nav>
    <ul>
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


</div>
</header>
</template>


<!------------------------------ CSS ------------------------------>
<style scoped>

header{
    background-color: #d38787;
}


#entrar {
    background-color: #992525;
    color: white;
}

</style>