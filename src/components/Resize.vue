<template>
  <div>
    <div :id="identity" class="resizable ui-widget-content ui-resizable" :style="resizeStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import $ from "jquery"
import "jquery-ui/ui/widgets/resizable.js"
import "jquery-ui/themes/base/all.css"

import utils from '@/utils'

export default {
  props: {
    identity: {
     type: [Number, String],
     required: true
    }, 
    width: String,
    height: String,
    maxHeight: String,
    maxWidth: String,
    minHeight: String,
    minWidth: String,
    animate: {
      type: Boolean,
      default: false
    },
    animateDuration: {
      // Number: 持续时间以毫秒为单位
      // String: 例如 "slow"或"fast"
      type: [String, Number],  
      default: 'slow'
    },
    animateEasing: {
      // eg: 'swing','easeOutBounce'
      type: String,
      default: 'swing'
    },
    autoHide: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 150
    },
    disabled: {
      type: Boolean,
      default: false
    },
    distance: {
      type: Number,
      default: 1
    },
    resizeMaxHeight: {
      type: Number,
      default: null
    },
    resizeMaxWidth: {
      type: Number,
      default: null 
    },
    resizeMinHeight: {
      type: Number,
      default: null
    },  
    resizeMinWidth: {
      type: Number,
      default: null
    },
    options: {
      // 设置与指定的选项值optionName和value, 例如default
      type: Object, 
      default: function() {
        return {
          disabled: false 
        }
      }
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    resizeConfig() {
      return {
        animate: this.animate,
        animateDuration: this.animateDuration,
        animateEasing: this.animateEasing,
        autoHide: this.autoHide,
        delay: this.delay,
        disabled: this.disabled,
        distance: this.distance,
        maxHeight: this.resizeMaxHeight,
        maxWidth: this.resizeMaxWidth,
        minHeight: this.resizeMinHeight,
        minWidth: this.resizeMinWidth,
        ...this.options
      }
    },
    resizeStyle() {
      let style = {}
      if (this.height) style['height'] = this.height
      if (this.width) style['width'] = this.width
      if (this.minHeight) style['min-height'] = this.minHeight
      if (this.minWidth) style['min-width'] = this.minWidth
      if (this.maxHeight) style['max-height'] = this.maxHeight
      if (this.maxWidth) style['max-width']= this.maxWidth
      if (!Object.keys(style).length) {
        style = {
          'width': '100%',
          'height': '100%'
        }
      }
      return style
    }
  },
  watch: {
    resizeConfig() {
      if ($(`#${this.name}`)) {
         this.resizeInitOption() 
      }
    }
  },
  created() {
  },
  mounted() {
    this.resizeInitOption()
    this.resizeBindEvent()
  },
  methods: {
    resizeBindEvent() {
      const _this = this
      $(`#${this.identity}`).resizable({
        ..._this.resizeConfig,
        create(event, ui) {
          _this.create(event, ui)
        },
        resize(event, ui) {
          utils.debounce(_this.resize(event, ui))
        },
        start(event, ui) {
          _this.start(event, ui)
        },
        stop(event, ui) {
          _this.stop(event, ui)
        }
      })
    },
    resizeInitOption() {
      const _this = this
      $(`#${this.identity}`).resizable({
        ..._this.resizeConfig
      })
    },
    create(event, ui) {
      this.$emit('create', { event, ui }) 
    },
    resize(event, ui) {
      this.$emit('resize', { event, ui })
    },
    start(event, ui) {
      this.$emit('start', { event, ui })
    },
    stop(event, ui) {
      this.$emit('stop', { event, ui })
    }
  }
};
</script>

<style>
.resizable {
  /* position: relative; */
  /* border: none; */
  /* min-width: 200px; */
  /* min-height: 200px; */
  /* background-color: darkcyan */
}
</style>