<template>
    <div class="title">
      <div class="titleLine"></div>
      <h3 class="titleHeading">{{title}}</h3>
      <div class="titleLine"></div>
    </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
  	title: {
      type: String,
  	},
  }
}
</script>

<style lang=scss>
   @import "Title.scss";
</style>