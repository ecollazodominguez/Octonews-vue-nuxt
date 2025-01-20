export const loginService = async (email, password) => {
    const config = useRuntimeConfig();
    const response = await fetch(`${config.public.REACT_APP_BACKEND}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.data);
    }
  
    return json.data;
  };