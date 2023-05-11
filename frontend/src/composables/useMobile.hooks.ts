import {onBeforeUnmount, ref, computed, onMounted} from 'vue';

export function useMobile() {
  const globalStore = useGlobalStore();

  const isMidsize = ref(false);
  const isMobile = ref(false);
  const isDesktop = computed(() => !isMidsize.value && !isMobile.value);
  const debounceCheckIsMobile = debounce(checkIsMobile, 200);

  let removeMobileResizeList: anyFunc

  onBeforeUnmount(() => {
    removeMobileResizeList();
  });

  function checkIsMobile() {
    if (globalStore.isPreventChangeView) return;

    isMobile.value = window.innerHeight > window.innerWidth && window.innerWidth <= 768;

    globalStore.isMobile = isMobile.value;

    isMidsize.value = !isMobile.value && window.innerWidth <= 1420;
    globalStore.isMidsize = isMidsize.value;
  }

  function updateAtResizeMobile() {
    checkIsMobile();
    window.addEventListener('resize', debounceCheckIsMobile);

    return () => window.removeEventListener('resize', debounceCheckIsMobile);
  }

  onMounted(() => {
    removeMobileResizeList = updateAtResizeMobile();
    
    window.addEventListener('focusin', () => {
      if (!isMobile.value) return;
      if (document.activeElement?.tagName !== 'INPUT') return;
  
      globalStore.isPreventChangeView = true;
    });
  
    window.addEventListener('focusout', () => {
      if (!isMobile.value) return;
      setTimeout(() => {
        globalStore.isPreventChangeView = false;
      }, 10000);
    });
  })

  return {isMidsize, isDesktop, isMobile};
}
