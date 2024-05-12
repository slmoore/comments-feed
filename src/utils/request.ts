export const requestGet = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${url} request failed`);
  }
  return response.json();
};

export const requestPost = async <T>(url: string, payload: Record<string, string>): Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`${url} request failed`);
  }
  return response.json();
};
