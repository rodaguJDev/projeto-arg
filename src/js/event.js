export default function triggerEvent(name) {
    const event = new Event(name);
    document.dispatchEvent(event);
}
