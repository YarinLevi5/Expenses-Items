import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item-description">
          <h2>{title}</h2>
          <div className="expense-item-price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};
