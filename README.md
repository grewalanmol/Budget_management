# Budget App

The Budget App allows you to manage your finances, providing you a streamlined interface to categorize and track your expenses.

## Features:

- **Dynamic Budget Cards**: For each budget category, a dynamic card is displayed showing the amount spent.
- **Add Budget**: Allows you to introduce new budget categories.
- **Add Expense**: Record your expenses. You can associate an expense with a particular budget or leave it uncategorized.
- **View Expenses**: Access a detailed list of all the expenses made under a specific budget.
- **Total Budget**: An aggregated view of all the budgets and expenses.
- **Progress Bars**: For budget categories that have a maximum limit, a progress bar is shown to indicate the proximity to the budget limit.
- **Highlight on Excess**: Budget cards change color when the expenses exceed the allotted budget, offering a visual alert.
- 🌟 **Special Investment Tracking**: Track all your investments in a dedicated **Invest** card. This is particularly useful for those who wish to monitor their investments separately. The card becomes visible once there's any amount registered under the "Invest" category.

## How to Use:

1. **Add Budget**: Click on the 'Add Budget' button, provide a name for your budget, and an optional max amount.
2. **Add Expense**: Click on the 'Add Expense' button. Provide an amount, choose the associated budget, and give a brief description.
3. **View Expenses**: On each budget card, including the **Invest** card, there's a 'View Expenses' button that will list all the expenses associated with that budget.
4. **Uncategorized**: Expenses not assigned to any budget go under the 'Uncategorized' card.

## Code Structure:

The app is structured with modular React components, each serving a unique purpose:

- `BudgetCard`: Represents individual budget categories.
- `UncategorizedBudgetCard`: Dedicated card for uncategorized expenses.
- `TotalBudgetCard`: Shows the total amount across all budgets.
- `InvestCard`: Specifically designed to showcase the investments. It activates when any amount is registered under the "Invest" category.
- Modals:
  - `AddBudgetModal`: For adding new budgets.
  - `AddExpenseModal`: For adding new expenses.
  - `ViewExpensesModal`: To view expenses associated with a budget.

## Conclusion:

This Budget App serves as a handy tool to keep an eye on your financial health, ensuring you're always aware of where your money is going. The introduction of the **Invest** card serves as a cherry on top for those enthusiastic about tracking their investments.

## Future Enhancements:

User Authentication: Introduce user login and registration functionalities so that multiple users can manage their budgets independently.
Expense Notifications: Notify users when they're about to exceed a budget, or when certain bills are due.
