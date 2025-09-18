import "../styles/addTransaction.css";
import { useContext, useState } from "react";
import transactionService from "../services/transactionService";
import { ToastContext } from "../context/ToastContext";

function AddTransaction() {
  const { showToast } = useContext(ToastContext);
  const [transaction, setTransaction] = useState({
    title: "",
    description: "",
    amount: "",
    transactionDate: "",
    type: "income",
  });

  const handleChange = (e) =>
    setTransaction({ ...transaction, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await transactionService.addTransaction(transaction);

      console.log(resp);

      if (resp) return showToast("Erro ao adicionar a transação", "fail");

      showToast("Transação adicionada com sucesso!", "success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addTransaction-container">
      <h2>Adicionar transação</h2>
      <form className="addTransaction-form">
        <div className="form-input">
          <label>Título da transação</label>
          <input
            type="text"
            placeholder="Ex: Salário"
            name="title"
            onChange={handleChange}
            value={transaction.title}
          />
        </div>
        <div className="form-input">
          <label>Descrição da transação</label>
          <input
            type="text"
            placeholder="Ex: Pagamento mensal"
            name="description"
            onChange={handleChange}
            value={transaction.description}
          />
        </div>
        <div className="form-input">
          <label>Valor da transação (R$)</label>
          <input
            type="number"
            placeholder="Ex: 500"
            name="amount"
            onChange={handleChange}
            value={transaction.amount}
          />
        </div>
        <div className="form-input">
          <label>Data</label>
          <input
            type="date"
            name="transactionDate"
            onChange={handleChange}
            value={transaction.transactionDate}
          />
        </div>
        <div className="form-input">
          <label>Tipo de transação</label>
          <select
            value={transaction.type}
            name="type"
            onChange={handleChange}
            className={`transaction-type ${transaction.type}`}
          >
            <option value="income">Renda</option>
            <option value="expense">Despesa</option>
          </select>
        </div>
        <input type="submit" value="Salvar" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default AddTransaction;
