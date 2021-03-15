<template>
  <textarea
    ref="textarea"
    :class="{
      'pointer-events-none opacity-50': disabled,
      'resize-none overflow-hidden': autosize
    }"
    @input="$emit('input', $event.target.value)"
    @focus="handleFocus(true)"
    @blur="handleFocus(false)"
    @mousedown="mousedownHandler"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 8
    },
    autosize: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      focusedByMouse: false,
      focus: false,
      focusVisible: false
    }
  },
  computed: {
    props() {
      return {
        id: this.id,
        value: this.value,
        placeholder: this.placeholder,
        disabled: this.disabled || this.loading,
        name: this.name,
        rows: this.rows
      }
    }
  },
  created() {
    if (this.autosize) {
      this.$watch('value', () => this.$nextTick(this.calculateInputHeight))
    }
  },
  methods: {
    mousedownHandler() {
      this.focusedByMouse = true
    },
    handleFocus(state) {
      if (state) {
        if (this.focusedByMouse) {
          this.focus = true
          this.focusVisible = false
        } else {
          this.focus = true
          this.focusVisible = true
        }
      } else {
        this.focus = false
        this.focusVisible = false
        this.focusedByMouse = false
      }
    },
    calculateInputHeight() {
      const borderPixels = 2
      const lineHeight = 20
      const paddingHeight = 20
      const input = this.$refs.textarea
      if (!input) {
        return
      }

      input.style.height = '0'
      const height = input.scrollHeight
      const minHeight =
        parseInt(this.rows, 10) * parseFloat(lineHeight) + 2 * paddingHeight
      input.style.height = Math.max(minHeight, height) + borderPixels + 'px'
    }
  }
}
</script>
