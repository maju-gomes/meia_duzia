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

<button> Sobre nós </button>

<div id="meio">
    <p> Sugestões: <br> <a href="#"> ouvidoradoce.com.br </a> </p>
    <p> Av. Senador Salgado Filho, 0 </p>
    <p> Todos os direitos reservados </p>
</div>

<div id="redes_sociais">
    <a href="#"> <img :src="facebook" alt="Facebook" id="icon"> </a>
    <a href="#"> <img :src="instagram" alt="Instagram" id="icon"> </a>
    <a href="#"> <img :src="whatsapp" alt="WhatsApp" id="icon"> </a>
</div>

</div>
</footer>
</template>


<!------------------------------ CS ------------------------------>
<style scoped>

footer {
    background-color: #d38787;
}
footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
    background-color: #992525;
    color: #d9d9d9;
}
footer {
    color: #d9d9d9
}

</style>