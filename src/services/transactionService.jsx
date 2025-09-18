const transactionService = {
  async addTransaction(transaction) {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const myInit = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "Application/json",
        },
        mode: "cors",
        cache: "default",
        body: JSON.stringify(transaction),
      };
      const resp = await fetch(
        "https://finance-co-backend.onrender.com/api/transactions",
        myInit
      );

      return resp.json();
    } catch (error) {
      console.log(error);
    }
  },
  async getUserTransactions() {},
  async deleteTransaction() {},
  async updateTransactions() {},
};

export default transactionService;
