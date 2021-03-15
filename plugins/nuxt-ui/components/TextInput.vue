<template>
  <input
    :class="{ 'pointer-events-none opacity-50': disabled }"
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
    type: {
      type: String,
      default: null,
      validator(value) {
        return ['text', 'password', 'search', 'email', 'url', 'tel'].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      default: false
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
        value: this.value,
        id: this.id,
        name: this.name,
        type: this.type,
        placeholder: this.placeholder,
        disabled: this.disabled
      }
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
    }
  }
}
</script>
