import {defineStore, acceptHMRUpdate} from 'pinia';

export const useGlobalStore = defineStore('global', () => {
  const isMobile = ref<boolean>(false);
  const isMidsize = ref<boolean>(false);
  const isPreventChangeView = ref<boolean>(false);
  const isDesktop = computed(() => !isMobile.value && !isMidsize.value);

  return {
    isMobile,
    isMidsize,
    isPreventChangeView,
    isDesktop,
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}
