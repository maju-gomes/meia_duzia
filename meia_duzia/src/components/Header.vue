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

    <h1>
        <router-link to="/">
            <img :src="logo" alt="Logo" width="65px" >
        </router-link> 
    </h1>

    <form action="#">
        <div id="procurar_objeto">
            <input type="text" placeholder="Procurar..." >
            
            <a href=""> 
                <img class="lupa" :src="lupa" alt="Lupa" width="20px">
            </a>
        </div>
    </form>

</div>


<div id="direita">
    

    <router-link to="/login">
        <button>Entrar</button>
    </router-link>


    <nav>
    <ul class="icon">
        <li>
            <a href="#">
                <img :src="carrinho_de_compras" alt="Carrinho de Compras" width="20px"/>
            </a>
        </li>

        <li>
            <a href="#">
                <img :src="favoritos" alt="Favoritos" width="20px"/>
            </a>
        </li>
    </ul>
    </nav>
</div>
</div>
</header>

<nav class="navDeBaixo">
        <ol id="esquerdaDeBaixo">
            <li><a href="#">Bolos</a></li>
            <li><a href="#">Brownies</a></li>
            <li><a href="#">Docinhos</a></li>
            <li><a href="#">Chocolates</a></li> 
        </ol>

        <ol>
            <li id="lancamento"><a href="#">Lançamentos</a></li>
        </ol>
        
</nav>

</template>


<!------------------------------ CSS ------------------------------>
<style scoped>

* {
    margin: 0;
    padding: 0;
    font-family: 'League Spartan';
}

header{
    background-color: #d38787;
}


/* ----------------------------- */
.container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

#esquerda {
    display: flex;
    align-items: center;
    gap: 20px;
}

#direita, .icon {
    display: flex;
    align-items: center;
    gap: 20px
}
/* ----------------------------- */


button {
    border: none;
    padding: 8px 14px;
    border-radius: 7px;
    background-color: #992525;
    color: white;
}

#procurar_objeto input{
    border: none;
    width: 300px;
    height: 28px;
    padding: 10px;
    border-radius: 5px;
    background-color:#d9d9d9;
    position: absolute;

}

.lupa {
    position: relative;
    margin-inline-start: 275px;
    margin-top: 4.5px;
}

h1 {
    padding-top: 5px;
}

ul {
    list-style-type: none;
}

/* --------NAV DE BAIXO-------- */

.navDeBaixo{
    display: flex;
    justify-content: space-around;
    background-color: #992525;
    padding: 10px;
    list-style-type: none;
}

#lancamento a {
    text-align: right;
    color: #87ff62;
}

ol {
    list-style-type: none;
    display: flex;
}

#esquerdaDeBaixo li {
    margin-left: 0;
    margin-inline: 15px;
}

a {
    text-decoration: none;
    color: white;
}

</style>