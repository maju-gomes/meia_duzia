<!------------------------------ JS ------------------------------>
<script setup>

import facebook from '@/assets/redes_sociais/facebook.png'
import instagram from '@/assets/redes_sociais/instagram.png'
import whatsapp from '@/assets/redes_sociais/whatsapp.png'

</script>


<!------------------------------ HTML------------------------------>
<template>
<footer>
<div class="container">

<router-link id="botao_router" to="/sobre_nos">
    Sobre nós
</router-link>

<div id="meio">
    <p> Sugestões: <br> <router-link to="/ouvidoria"> ouvidoriadoce.com.br </router-link> </p>
    <div>
        <p id="p_meio"> Av. Senador Salgado Filho, 0 </p>
        <p id="#p_inf" style="font-size: small; margin-top: 20px;"> Todos os direitos reservados. </p>
    </div>
</div>

<div id="redes_sociais">
    <a href="#"> <img :src="facebook" alt="Facebook" id="icon" width='30px'> </a>
    <a href="#"> <img :src="instagram" alt="Instagram" id="icon" width='30px'> </a>
    <a href="#"> <img :src="whatsapp" alt="WhatsApp" id="icon" width='30px'> </a>
</div>

</div>
</footer>
</template>


<!------------------------------ CS ------------------------------>
<style scoped>

body {
    font-family: 'League Spartan';
}

footer {
    background-color: #d38787;
    padding: 30px;
}

footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

#botao_router {
    display: flex;
    background-color: #992525;
    color: #ffffff;
    border: none;
    padding: 10px;
    border-radius: 10px;
}

p {
    text-align: center;
}

p a {
    color: rgb(56, 79, 255);
}

#meio {
    color: white;
}

#p_meio, #p_inf {
    margin-top: 1rem;
} 

#redes_sociais {
    display: flex;
    gap: 20px;
}

</style>