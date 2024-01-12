interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Récupère les données de l'API Strapi
 * @param endpoint - Le point d'accès à partir duquel la recherche doit être effectuée
 * @param query - Les paramètres de requête à ajouter à l'url
 * @param wrappedByKey - La clé pour décapsuler la réponse
 * @param wrappedByList - Si la réponse est une liste, déroulez-la.
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(
    `https://api.genealogie.dhebrail.fr/api/${endpoint}?populate=*`,
  );

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer f168d6ea72222718eb222dba3720aa7b06d529a8fac41e804b952c24c5c405183de4054bc4c057501a3aacb0e482882f340eaed5d30d6765e626b1bcd084ab9a44ca68419f6fbef19d7d711d4ab6b4e2014548592943473d5642a89798a614b1ada0d17bc7ac5cb6c13ae66b4bc2e20746759c1035d61e6e266eec36e3fab485`,
    },
  });
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}
