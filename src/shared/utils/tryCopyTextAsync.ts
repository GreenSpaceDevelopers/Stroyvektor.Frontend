export async function tryCopyTextAsync(
    copyText: string,
    setState?: (success: boolean) => void,
    timeoutMs: number = 2000,
) {
    try {
        if (navigator?.clipboard) {
            await navigator.clipboard.writeText(copyText);

            if (setState) {
                setState(true);
                setTimeout(() => setState(false), timeoutMs);
            }

            return true;
        } else {
            setState?.(false);
            return false;
        }
    } catch {
        setState?.(false);
        return false;
    }
}
