<template>
  <div id="app" :class="{'hide-menu': !isMenuVisible}">
    <HeaderHead title="Base de Conhecimento" :hiddleToggle="false" :hideUserDropDown="false"/>
    <MenuMenu/>
    <ContentVue/>
    <FooterFoot/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HeaderHead from './components/template/Header-head.vue';
import MenuMenu from './components/template/Menu-menu.vue';
import ContentVue from './components/template/Content-vue.vue';
import FooterFoot from './components/template/Footer-foot.vue';
export default {
  name: 'App',
  components: { HeaderHead, MenuMenu, ContentVue, FooterFoot },
  computed: mapState(['isMenuVisible'])
}
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 50px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}

#app.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>
