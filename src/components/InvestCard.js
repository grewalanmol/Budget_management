import { Button, Card, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";

function InvestCard({ amount, onAddExpenseClick, onViewExpensesClick }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">Invest</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
          </div>
        </Card.Title>
        <Stack direction="horizontal" gap="2" className="mt-4">
          <Button
            variant="outline-primary"
            className="ms-auto"
            onClick={onAddExpenseClick}
          >
            Add Expense
          </Button>
          <Button onClick={onViewExpensesClick} variant="outline-secondary">
            View Expenses
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default InvestCard;
