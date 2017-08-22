<template>
  <div class="homepage">
    <!-- 固定的头部 -->
    <v-header></v-header>
    <!-- 固定的头部 -->
    
    <!-- 渲染内容部分 -->
    <router-view></router-view>
    <!-- 渲染内容部分 -->

    <!-- 底部版权信息 -->
    <v-footer></v-footer>
    <!-- 底部版权信息 -->
  </div>
</template>

<script>
  // 引入固定头部
  import header from './header.vue'
  // 引入底部版权信息
  import footer from './footer.vue'

  export default {
    name: 'homepage',
    components: {
      'v-header':header,
      'v-content':content,
      'v-footer':footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2{
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }
    a{
      color: #fff;
      text-decoration: none;
    }
  
</style>
