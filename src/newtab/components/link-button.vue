<template>
  <div :class="classes">
    <div :class="[prefixCls + '-title']">百度</div>
  </div>
</template>

<script>
/**
 * 链接按钮
 */
export default {
  // 不要忘记了 name 属性
  name: 'LinkButton',
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
      prefixCls: 'link-button',
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
  methods: {},
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
  },
  beforeDestroy() {
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
  },
};
</script>

<style lang="scss">
$prefix: link-button;
.#{$prefix} {
  width: 240px;
  height: 180px;
  background: red;
}
</style>
