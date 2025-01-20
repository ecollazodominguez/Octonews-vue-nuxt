export const updateUserDataService = async (id, body, token) => {
    const config = useRuntimeConfig();
    const response = await fetch(`${config.public.REACT_APP_BACKEND}/users/${id}`, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({body}),
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.data);
    }
  
    return json.data;
  };