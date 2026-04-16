const domain = process.env.SHOPIFY_STORE_DOMAIN;
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: any;
}): Promise<{ data: T } | never> {
  try {
    const result = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": accessToken!,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    return result.json();
  } catch (error) {
    console.error("Error fetching from Shopify:", error);
    throw new Error("Failed to fetch from Shopify");
  }
}
