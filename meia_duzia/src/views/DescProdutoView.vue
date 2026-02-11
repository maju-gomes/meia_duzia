<!------------------------------- JS ------------------------------->

<script>

import DescProduto from '@/components/DescProduto.vue';

export default {
  name: 'DescProductView',
  components: { DescProduto }
}

</script>

<!------------------------------- HTML ------------------------------->

<template>

  <div class="page">
    <DescProduto />
  </div>

</template>

<!------------------------------- CSS -------------------------------->

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fffac9;
}
</style>
