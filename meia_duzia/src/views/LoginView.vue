<!------------------------------- JS ------------------------------->

<script>
import LoginCard from '@/components/LoginCard.vue'

export default {
  components: {
    LoginCard
  }
}

</script>

<!------------------------------- HTML ------------------------------->

<template>
  <div class="page">
    <LoginCard />
  </div>
</template>

<!------------------------------- CSS ------------------------------->

<style scoped>
.page {
  background-color: #fffac9;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
