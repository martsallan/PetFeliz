<template>
  <div>
    <Header />
    <div class="appContainer">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.appContainer {
  min-height: 85vh;
}
</style>
