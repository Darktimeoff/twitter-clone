
type useFetchType = typeof useFetch

export const useAPIFetch: useFetchType = (path, options = {}) => {
    const  config = useRuntimeConfig();
    options['baseURL'] = config.public.API_URL;
    
    return useFetch(path, options);
}