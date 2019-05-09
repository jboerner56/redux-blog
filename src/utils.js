export function generateId(max=9999999) {
    return Math.floor(Math.random() * Math.floor(max));
}