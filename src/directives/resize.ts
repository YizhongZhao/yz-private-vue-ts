import { useElementSize, watchDebounced } from '@vueuse/core';

// v-resize 监事
export const resize = (el, binding) => {
  const { width } = useElementSize(el);
  if (width.value === 0) return;
  const { value } = binding;
  watchDebounced(
    width,
    () => {
      value && value.resize();
    },
    { debounce: 500 },
  );
};
