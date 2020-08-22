<template>
  <div :class="[prefixCls + '-overlay']">
    <div v-show="value" :class="[prefixCls + '-mask']" @click.stop="maskClosable && onClose()"></div>
    <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
      <div :class="classes">
        <slot></slot>
        <div :class="[prefixCls + '-trigger']" @click="onInput">
          <slot name="trigger"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
/**
 * 抽屉
 */
export default {
  // 不要忘记了 name 属性
  name: 'Drawer',
  // 使用组件 mixins 共享通用功能
  mixins: [],
  // 组成新的组件，优先级高于mixins
  extends: {},
  // 组件
  components: {},
  // 组件属性、变量
  props: {
    // 按字母顺序
    value: {
      type: Boolean,
      default: false,
    },
    maskClosable: {
      // 是否点击遮罩层关闭
      type: Boolean,
      default: true,
    },
    placement: {
      // 抽屉摆放位置 top, bottom, left, right
      type: String,
      default: 'right',
    },
  },
  // 变量
  data() {
    return {
      prefixCls: 'drawer',
    };
  },
  // 计算值
  computed: {
    classes() {
      return [this.prefixCls, this.placement, { show: this.value }];
    },
  },
  // 监测
  watch: {},
  // 方法
  methods: {
    onInput() {
      this.$emit('input', !this.value);
      if (this.value) {
        this.$emit('close', false);
      }
    },
    onClose() {
      this.$emit('input', false);
      this.$emit('close', false);
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
  },
  beforeDestroy() {
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
  },
};
</script>

<style lang="scss">
$prefix: drawer;
$width: 300px;
$height: 600px;
$trigger-w: 16px;
$trigger-h: 80px;

.#{$prefix} {
  position: fixed;
  padding: 16px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.5s ease;
  z-index: 101;

  &-overlay {
    position: absolute;
  }

  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
  }

  &-trigger {
    position: absolute;
    border-radius: $trigger-w / 2;
    background-color: #4f8bfc;
    box-shadow: inset 0 0 $trigger-w / 3 darken(#4f8bfc, 20%);
    cursor: pointer;
    &:hover {
      background-color: darken(#4f8bfc, 20%);
      cursor: e-resize;
    }
  }
}
.left,
.right {
  &.#{$prefix} {
    top: 50%;
    width: $width;
    height: $height;
  }
  .#{$prefix}-trigger {
    top: 50%;
    width: $trigger-w;
    height: $trigger-h;
  }
}
.left {
  &.#{$prefix} {
    left: 0;
    transform: translate(-100%, -50%) translateZ(0);
  }
  .#{$prefix}-trigger {
    right: 0;
    transform: translate(50%, -50%) translateZ(0);
    &:hover {
      cursor: w-resize;
    }
  }
}
.right {
  &.#{$prefix} {
    right: 0;
    transform: translate(100%, -50%) translateZ(0);
  }
  .#{$prefix}-trigger {
    left: 0;
    transform: translate(-50%, -50%) translateZ(0);
    &:hover {
      cursor: w-resize;
    }
  }
}

.top,
.bottom {
  &.#{$prefix} {
    left: 50%;
    width: $height;
    height: $width;
  }
  .#{$prefix}-trigger {
    left: 50%;
    width: $trigger-h;
    height: $trigger-w;
  }
}
.top {
  &.#{$prefix} {
    top: 0;
    transform: translate(-50%, -100%) translateZ(0);
  }
  .#{$prefix}-trigger {
    bottom: 0;
    transform: translate(-50%, 50%) translateZ(0);
    &:hover {
      cursor: s-resize;
    }
  }
}
.bottom {
  &.#{$prefix} {
    bottom: 0;
    transform: translate(-50%, 100%) translateZ(0);
  }
  .#{$prefix}-trigger {
    top: 0;
    transform: translate(-50%, -50%) translateZ(0);
    &:hover {
      cursor: n-resize;
    }
  }
}

.show {
  &.left,
  &.right {
    &.#{$prefix} {
      transform: translate(0, -50%) translateZ(0);
    }
  }
  &.left {
    .#{$prefix}-trigger {
      &:hover {
        cursor: w-resize;
      }
    }
  }

  &.right {
    .#{$prefix}-trigger {
      &:hover {
        cursor: e-resize;
      }
    }
  }

  &.top,
  &.bottom {
    &.#{$prefix} {
      transform: translate(-50%, 0) translateZ(0);
    }
  }
  &.top {
    .#{$prefix}-trigger {
      &:hover {
        cursor: n-resize;
      }
    }
  }

  &.bottom {
    .#{$prefix}-trigger {
      &:hover {
        cursor: s-resize;
      }
    }
  }
}
</style>
