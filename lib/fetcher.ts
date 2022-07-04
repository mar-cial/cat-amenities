/**
 * Fetches json from the provided url. To be used with useSWR hook.
 *
 * @param url The address string to fetch from.
 * @returns
 */
const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json().catch((err) => console.log(err)));

export default fetcher;
