<template>
  <div class="desmos-container">
    <iframe
      :src="`https://www.desmos.com/calculator/${link}?embed`"
      frameborder="0"
      class="desmos-frame"
    ></iframe>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["link"]
});
</script>

<style>
.desmos-container {
  width: 100%;
  height: 65vh;
  border: 1px solid #ccc;
}
.desmos-frame {
  width: 100%;
  height: 100%;
}
</style>