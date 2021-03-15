<template>
  <div class="p-4 mb-4 border-l-4 alert rounded-r-md" :class="`alert-${type}`">
    <div class="flex">
      <div class="self-start flex-shrink-0 pt-1"></div>
      <div class="ml-2 text-sm alert-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "warning"
    }
  }
});
</script>

<style>
.alert p {
  @apply m-0 leading-normal;
}

/* Warning Icon */
.alert-warning {
  @apply bg-stone-surface border-red-light;
}

.alert-warning code {
  @apply bg-stone-lightest text-stone-dark shadow-none;
}

.alert-warning .alert-icon {
  @apply text-red;
}

.alert-warning .alert-content {
  @apply text-stone-darker;
}

/* Info Icon */
.alert-info {
  @apply bg-sky-surface border-blue;
}

.alert-info code {
  @apply bg-sky-lightest text-sky-dark shadow-none;
}

.alert-info .alert-icon {
  @apply text-blue;
}

.alert-info .alert-content {
  @apply text-sky-darker;
}

/* Next Icon */
.alert-next {
  @apply bg-mint-surface border-green-lighter;
}

.alert-next code {
  @apply bg-mint-lightest text-mint-dark shadow-none;
}

.alert-next .alert-icon {
  @apply text-green;
}

.alert-next .alert-content {
  @apply text-mint-darker;
}

/* Star Icon */
.alert-star {
  @apply bg-sand-surface border-yellow-dark;
}

.alert-star code {
  @apply bg-yellow-dark shadow-none;
}

.alert-star .alert-icon {
  @apply text-yellow-dark;
}

.alert-star .alert-content {
  @apply text-sand;
}
</style>
