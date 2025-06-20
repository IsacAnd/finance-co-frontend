const authService = {
  async login(formData) {
    try {
      const myInit = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        mode: "cors",
        cache: "default",
        body: JSON.stringify(formData),
      };

      const resp = await fetch(
        "https://finance-co-backend.onrender.com/api/auth/login",
        myInit
      );

      return resp.json();
    } catch (error) {
      console.log(error);
    }
  },
  async register(formData) {
    try {
      const myInit = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        mode: "cors",
        cache: "default",
        body: JSON.stringify(formData),
      };

      const resp = await fetch(
        "https://finance-co-backend.onrender.com/api/auth/register",
        myInit
      );

      return resp.json();
    } catch (error) {
      console.log(error);
    }
  },
};

export default authService;
