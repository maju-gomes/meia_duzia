<!------------------------------- JS ------------------------------->
<script setup>

import DescricaoDoceMainSection from './DescricaoDoceMainSection.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

defineProps({
  doce: Object
})

</script>


<!------------------------------- HTML ------------------------------->
<template>

<Header />
<DescricaoDoceMainSection :doce='doce'/>
<Footer />

</template>

