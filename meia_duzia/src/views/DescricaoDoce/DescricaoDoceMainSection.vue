<!------------------------------ JS ------------------------------>
<script setup>

defineProps(['doce'])

</script>


<!------------------------------ HTML ------------------------------>
<template>
<main>
<div id="container">

<section id="info1">
    <h2>{{ doce.nome }}</h2>
    
    <figure>
        <img :src="doce.img_src" alt="Brigadeiro">
    </figure>

    <p class="botao">R$3,00</p>
</section>

<section id="info2">
    <h3>Ingredientes</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <h3>Informações nutricionais</h3>
    <p>Brigadeiro 20g: 90kcal, 12g carboidratos, 4g gordura, 1g proteína, Lorem ipsum chocolate e leite condensado.</p>
</section>

</div>
</main>
</template>

<!------------------------------ CSS ------------------------------>

<style scoped>

main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fffac9;
}

#container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    width: 800px;
    height: 450px;
    font-family: 'League Spartan';
}


#info1 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}


#info2 {
    display: flex;
    text-align: justify;
    flex-wrap: wrap;
    margin-right: 20px;
    margin-left: 20px;
    gap: 30px;
}

h3{
    margin-bottom: -15px;
}


</style>
