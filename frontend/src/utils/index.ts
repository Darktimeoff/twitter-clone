
export function makeid(length: number): string {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength: number = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export function debounce<T extends anyFunc>(func: T, wait: number): () => void {
    let timeout: number | undefined;

    return function executedFunction(...args) {
        const later = () => {
            timeout = undefined;

            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait) as unknown as number;
    };
}

export function sleep(milliseconds = 1000) {
    return new Promise<void>((res) => {
        setTimeout(() => res(), milliseconds);
    });
}