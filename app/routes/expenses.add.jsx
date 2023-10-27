import { Link } from "@remix-run/react";
import ExpesesForm from '../components/expenses/ExpenseForm'

export const meta = () => {
  return [{ title: "Expenses Add Page" }];
};

export default function ExpensesAddPage() {
  return (
    
    <ExpesesForm />


  );
}

export function links() {
};