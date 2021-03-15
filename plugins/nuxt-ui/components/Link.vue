<template>
  <a
    v-if="is === 'a'"
    link
    v-bind="props"
    :class="[focusVisible && 'ring-offset']"
    @focus="handleFocus(true)"
    @blur="handleFocus(false)"
    @mousedown="mousedownHandler"
  >
    <slot>Link</slot>
  </a>
  <NuxtLink
    v-else-if="is === 'NuxtLink'"
    link
    v-bind="props"
    :class="[focusVisible && 'ring-offset']"
    @focus.native="handleFocus(true)"
    @blur.native="handleFocus(false)"
    @mousedown.native="mousedownHandler"
  >
    <slot>Link</slot>
  </NuxtLink>
</template>

<script>
export default {
  name: 'NuiLink',
  props: {
    to: {
      type: [String, Object],
      default: '/'
    },
    href: {
      type: String,
      default: null
    },
    rel: {
      type: String,
      default: 'noopener nofollow noreferrer'
    },
    target: {
      type: String,
      default: '_blank',
      validator(value) {
        return ['_self', '_blank', '_parent', '_top'].includes(value)
      }
    },
    ariaLabel: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
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
        a: {
          href: this.href,
          target: this.target,
          rel: this.rel,
          ariaLabel: this.ariaLabel || this.title,
          title: this.title || this.ariaLabel
        },
        NuxtLink: {
          to: this.to,
          ariaLabel: this.ariaLabel || this.title,
          title: this.title || this.ariaLabel
        }
      }[this.is]
    },
    is() {
      if (this.href) {
        return 'a'
      } else {
        return 'NuxtLink'
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
