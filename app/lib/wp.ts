const API_URL = "https://naturevo.ro/wp-json/wp/v2";

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts`);
  return await res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${API_URL}/posts?slug=${slug}`);
  const data = await res.json();
  return data.length ? data[0] : null;
}
