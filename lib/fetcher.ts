/**
 * Fetches json from the provided url.
 *
 * @param url The address string to fetch
 * @returns
 */
const fetcher = async (url: string) =>
    await fetch(url).then((res) => res.json().catch((err) => console.log(err)));

export default fetcher