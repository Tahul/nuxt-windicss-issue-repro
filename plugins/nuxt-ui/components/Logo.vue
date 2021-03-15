<template>
  <NuxtLink to="/" :aria-label="ariaLabel || text" :title="text">
    <span
      v-if="$slots.default && text"
      style="text-indent: -1000px"
      class="absolute"
    >
      {{ text }}
    </span>
    <slot>
      {{ text }}
    </slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    ariaLabel: {
      type: String,
      default: null
    }
  }
}
</script>
