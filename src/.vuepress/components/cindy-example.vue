<template>
  <div>
    <div id="CSCanvas"></div>
    <script id="csdraw" type="text/x-cindyscript">
  colorplot( [#.x, #.y, (1+sin(seconds()))/2 ] );
    </script>
    <!-- <slot></slot> -->
  </div>
</template>

<script>
export default {
  mounted() {
    CindyJS({
      scripts: "cs*",
      autoplay: true,
      ports: [
        {
          id: "CSCanvas",
          width: 500,
          height: 500,
          transform: [
            {
              visibleRect: [0, 1, 1, 0]
            }
          ]
        }
      ]
    });
  }
};
</script>

<style>
</style>