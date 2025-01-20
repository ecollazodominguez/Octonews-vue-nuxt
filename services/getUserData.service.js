export const getUserDataService = async (token) => {
    const config = useRuntimeConfig();
    const response = await fetch(`${config.public.REACT_APP_BACKEND}/user`, {
      headers: {
        Authorization: token,
      },
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.data);
    }
  
    return json.data;
  };