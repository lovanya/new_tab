<template>
  <div class="tab-page">
    <Background :image="bgImage" size="cover" />
    <ImagePicker @on-success="changeBg" />
    <Drawer v-model="showDrawer" />
  </div>
</template>

<script>
import './newtab.scss';
import Background from './components/background';
import ImagePicker from './components/image-picker';
import Drawer from './components/drawer';

export default {
  name: 'App',
  components: { Background, ImagePicker, Drawer },
  data() {
    return {
      bgImage: '../icons/timg.jpeg',
      showDrawer: false,
    };
  },
  methods: {
    changeBg(base64) {
      if (!base64) {
        return;
      }
      this.bgImage = base64;
    },
  },
};
</script>

<style lang="scss">
p {
  font-size: 20px;
}
</style>
