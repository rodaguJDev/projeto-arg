/**
 * Delay execution for {time} microseconds. Must be preceded by 'await' to take effect
 * @param {int} time Time to sleep
 * @returns {Promise} setTimeout promise
 */
export default async function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time)); // Wait before yielding the next char
}
