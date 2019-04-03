<template>
    <div class="error">
        <img src="../assets/404jjj.jpg" alt="">
    </div>
</template>
<script>
export default {
    
    created() {
        setTimeout(() => {
        this.$router.push('/login')
    }, 3000);
    },
}
</script>
<style lang="scss">
  .error {
     img {
      display: block;
      width: 100%;
      overflow: hidden;
     }
  }
</style>
