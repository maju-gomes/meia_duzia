
<!------------------------------ JS ------------------------------>

<script setup>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'

</script>

<!------------------------------ HTML ------------------------------>

<template>
<Header />
<main>


<form action="">
    <h2>Reporte seu problema</h2>
    <label for=""> Seu problema: </label> <br>
    <textarea name="" id=""> </textarea><br>

    <label for="email"> Seu email: </label> <br>
    <input type="text"> <br>

    <input type="Submit">
</form>

<section>
    <h2>Dúvidas frequentes</h2>

    <h3>Lorem ipsum dolor sit amet consectetur adipisi?</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat atque libero inventore, a fugit delectus esse temporibus dolore magni voluptas. At necessitatibus cumque vero nostrum quaerat expedita labore accusamus ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, consectetur fugit fuga voluptatem provident illo ipsa voluptatum esse quos officia. Pariatur nihil ducimus similique architecto qui quo, totam autem ipsa. lorem</p>

    <h3>Lorem ipsum dolor sit amet consectetur adipisi?</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quas, libero deleniti repellendus delectus molestias cumque laboriosam qui culpa debitis cupiditate consequuntur, maiores distinctio possimus? Aspernatur, inventore. Fugiat, libero exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum quas similique maxime veniam assumenda magni ab? Voluptatum voluptatem provident suscipit eum, asperiores error? Qui omnis ab nobis enim veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum animi error mollitia, praesentium dignissimos ipsa modi iste enim itaque atque placeat aut magnam accusantium in corporis ducimus quos aspernatur.</p>

    <h3>Lorem ipsum dolor sit amet consectetur adipisi?</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quas, libero deleniti repellendus delectus molestias cumque laboriosam qui culpa debitis cupiditate consequuntur, maiores distinctio possimus? Aspernatur, inventore. Fugiat, libero exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum quas similique maxime veniam assumenda magni ab? Voluptatum voluptatem provident suscipit eum, asperiores error? Qui omnis ab nobis enim veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum animi error mollitia, praesentium dignissimos ipsa modi iste enim itaque atque placeat aut magnam accusantium in corporis ducimus quos aspernatur.</p>

</section>
</main>
<Footer />
</template>

<!------------------------------ CSS ------------------------------>

<style scoped>
    url

    h2 {
        margin-bottom: 25px;
        text-align: center;
    }

    main {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 20px;
    }

    h3 {
        margin-bottom: 10px;
    }

    p {
        text-align: justify;
        text-indent: 30px;
        margin-bottom: 20px;
    }


    input, textarea {
        width: 300px;
        padding: 5px;
        margin-bottom: 20px;
    }

    textarea {
        padding: 10px;
        height: 200px;
    }

    input[type='submit'] {
        border: none;
        border-radius: 10px;
    }

</style>