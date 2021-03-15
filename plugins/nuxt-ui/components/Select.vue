<template>
  <div v-click-away="'close'" class="w-full space-y-1">
    <slot name="label" />
    <div class="relative" @click="open = !open">
      <div class="flex justify-between" :class="selectClass">
        <span v-if="selected.text" class="w-full" :class="selectedItemClass">{{
          selected.text
        }}</span>
        <span v-else class="opacity-50 pointer-events-none">{{ placeholder }}</span>
        <SvgIcon name="arrowDropdown" class="ml-2 -mr-2 nui-icon-button-md" />
      </div>
      <ul
        class="absolute w-full dropdown__list"
        :class="[open ? 'block' : 'hidden', listClass]"
      >
        <li
          v-for="(option, index) in normalizedOptions"
          :key="`${option.value}-${index}`"
          :value="option"
          :class="itemClass"
          role="option"
          class="w-full space-x-4 cursor-pointerflex flex-beetween"
          @click="
            selected = option
            close
            $emit('input', option)
          "
        >
          <span>{{ option.text }}</span>
          <SvgIcon
            name="check"
            class="pt-1 nui-icon-sm"
            :class="{ 'text-transparent': selected !== option }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: [Array, Object],
      default: () => []
    },
    placeholder: {
      type: String,
      default: null
    },
    selectClass: {
      type: String,
      default: ''
    },
    selectedItemClass: {
      type: String,
      default: ''
    },
    listClass: {
      type: String,
      default: ''
    },
    itemClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      open: false,
      selected: this.options[0]
    }
  },
  computed: {
    props() {
      return {
        id: this.id,
        name: this.name,
        disabled: this.disabled
      }
    },
    normalizedOptions() {
      if (Array.isArray(this.options)) {
        return this.options
          .map(option => this.normalizeOption(option))
          .filter(Boolean)
      } else {
        return Object.keys(this.options).map(key => ({
          value: key,
          text: this.options[key]
        }))
      }
    }
  },
  methods: {
    normalizeOption(option) {
      if (['string', 'number', 'boolean'].includes(typeof option)) {
        return {
          value: option,
          text: option,
          disabled: false
        }
      }
      return {
        value: option.value,
        text: option.text,
        disabled: option.disabled
      }
    },
    close() {
      this.open = false
    }
  }
}
</script>
<style lang="postcss">
.dropdown__list {
  z-index: 9999 !important;
}
</style>
