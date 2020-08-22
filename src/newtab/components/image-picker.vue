<template>
  <div :class="classes">
    <div :class="[prefixCls + '-button']" @click.stop="pickImage">
      <slot>设置背景</slot>
    </div>
    <input :class="[prefixCls + '-file']" ref="file" type="file" />
  </div>
</template>

<script>
/**
 * 获取本地图片
 */
export default {
  // 不要忘记了 name 属性
  name: 'ImagePicker',
  // 使用组件 mixins 共享通用功能
  mixins: [],
  // 组成新的组件，优先级高于mixins
  extends: {},
  // 组件
  components: {},
  // 组件属性、变量
  props: {
    // 按字母顺序
  },
  // 变量
  data() {
    return {
      prefixCls: 'image-picker',
    };
  },
  // 计算值
  computed: {
    classes() {
      return [this.prefixCls, {}];
    },
  },
  // 监测
  watch: {},
  // 方法
  methods: {
    pickImage() {
      this.$refs.file.click();
    },
  },
  // 生命周期函数
  beforeCreate() {
    // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
  },
  created() {
    // 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，el 属性目前不可见。
  },
  beforeMount() {
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  },
  mounted() {
    // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.el 也在文档内。
    this.$nextTick(() => {
      // Code that will run only after the
      // entire view has been rendered
    });
    const vm = this;
    this.$refs.file.addEventListener('change', ({ target }) => {
      const { files } = target;
      if (files.length) {
        const index = 0;
        vm.file = files[index];
        if (/image\//.test(vm.file.type)) {
          const f = new FileReader();
          f.onload = ({ target: { result, readyState } }) => {
            if (readyState === 2) {
              vm.$emit('on-success', result);
            } else {
              vm.$emit('on-error', result);
            }
          };
          f.readAsDataURL(vm.file);
          return;
        }
        alert('The file u picked is not a image');
      }
    });
  },
  beforeDestroy() {
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
  },
};
</script>

<style lang="scss">
$prefix: image-picker;
.#{$prefix} {
  position: fixed;
  right: 32px;
  top: 32px;

  &-button {
    padding: 10px 20px;
    background: #fff;
    cursor: pointer;
    &:active {
      opacity: 0.75;
    }
  }

  &-file {
    position: fixed;
    width: 0;
    height: 0;
    bottom: -10px;
    left: -10px;
    z-index: -99999;
  }
}
</style>
