export default function triggerEvent(name) {
    document.dispatchEvent(new Event(name));
}
