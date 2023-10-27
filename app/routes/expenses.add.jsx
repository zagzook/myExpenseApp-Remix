import {  useNavigate } from "@remix-run/react";
import Modal from "../components/util/Modal";
import ExpesesForm from '../components/expenses/ExpenseForm'

export const meta = () => {
  return [{ title: "Expenses Add Page" }];
};

export default function ExpensesAddPage() {
  const navagate = useNavigate()
  function closeHandler(){
    navagate('..')
  }
  return (
    
    <Modal onClose={closeHandler}><ExpesesForm /></Modal>


  );
}

export function links() {
};