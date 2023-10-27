import Chart from '../components/expenses/Chart'
import ExpenseStatistics from '../components/expenses/ExpenseStatistics';

const DUMMY_EXPENSES = [{
  id: 'e1',
  title: 'First Expense',
  amount: 12.99,
  date: new Date().toISOString()
},
{
  id: 'e2',
  title: 'Second Expense',
  amount: 18.99,
  date: new Date().toISOString()
}]


export const meta = () => {
  return [{ title: "Expenses Analysis Page" }];
};

export default function ExpensesAnalysisPage() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
    
    


  );
}

export function links() {
};