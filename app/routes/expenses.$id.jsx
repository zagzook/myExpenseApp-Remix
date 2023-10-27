import {  useNavigate } from "@remix-run/react";
import ExpenseForm from "../components/expenses/ExpenseForm";
import Modal from "../components/util/Modal";

export const meta = () => {
  return [{ title: "Update Expenses Page" }];
};

export default function UpdateExpensesPage() {
  const navagate = useNavigate()
  function closeHandler(){
    navagate('..')
  }
  return (
    
    <Modal onClose={closeHandler}><ExpenseForm /></Modal>


  );
}

export function links() {
};