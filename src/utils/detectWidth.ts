export function detectScreenWidth() {
    if (window.innerWidth < 768) {
        return "mobile"
    }
    return "desktop"
}