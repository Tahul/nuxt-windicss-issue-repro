<template>
  <div>
    <select
      v-bind="props"
      :class="{ 'pointer-events-none opacity-50': disabled }"
      @input="$emit('input', $event.target.value)"
      @focus="handleFocus(true)"
      @blur="handleFocus(false)"
      @mousedown="mousedownHandler"
    >
      <option v-if="placeholder" value="" disabled>
        {{ placeholder }}
      </option>

      <template v-for="(option, i) in normalizedOptions">
        <optgroup
          v-if="option.options"
          :key="`${option.value}-${i}`"
          :label="option.label"
          :disabled="option.disabled"
        >
          <option
            v-for="(optGroupOption, i2) in option.options"
            :key="`${optGroupOption.value}-${i}-${i2}`"
            :value="optGroupOption.value"
          >
            {{ optGroupOption.text }}
          </option>
        </optgroup>

        <option
          v-else
          :key="`${option.value}-${i}`"
          :value="option.value"
          :disabled="option.disabled"
          class="text-sky-dark"
        >
          {{ option.text }}
        </option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
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
    placeholder: {
      type: String,
      default: null
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
        disabled: this.disabled,
        required: this.required
      }
    },
    normalizedOptions() {
      if (Array.isArray(this.options)) {
        return this.options
          .map(option =>
            option.options
              ? this.normalizeOptionGroup(option)
              : this.normalizeOption(option)
          )
          .filter(Boolean)
      }

      return []
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
    normalizeOptionGroup(optgroup) {
      return {
        label: optgroup.label,
        disabled: optgroup.disabled,
        options: optgroup.options
          .map(option => this.normalizeOption(option))
          .filter(Boolean)
      }
    },
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
