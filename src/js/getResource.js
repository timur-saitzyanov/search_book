export const getResource = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url} , received ${res.status}`);
  }

  return await res.json();
};
