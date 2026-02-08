<script setup>
defineProps({
    selected_page: {
        type: String,
        required: true,
        default: "Home"
    }
})

const pages = ["Home", "Page 1", "Page 2"]
</script>


<template>
<h1>MeiaDuzia</h1>
<nav>
    <ul>
        <li v-for="page in pages" :key="page">
            :key = "page"
            
        </li>
    </ul>
</nav>

</template>


<style scoped>

</style>