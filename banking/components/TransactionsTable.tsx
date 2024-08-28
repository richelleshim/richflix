import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  formatAmount,
  getTransactionStatus,
  removeSpecialCharacters,
} from "@/lib/utils";

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  const transactionLabels = [
    "Transaction",
    "Amount",
    "Status",
    "Date",
    "Category",
  ];
  return (
    <div className="transactions-table">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {transactionLabels.map((label: string) => (
              <TableHead key={label} className="px-2">
                {label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((t: Transaction) => {
            const status = getTransactionStatus(new Date(t.date));
            const amount = formatAmount(t.amount);
            const isDebit = t.type === "debit";
            const isCredit = t.type === "credit";

            return (
              <TableRow key={t.id}>
                <TableCell className="font-medium">
                  <div>
                    <h1>{removeSpecialCharacters(t.name)}</h1>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  {isDebit ? `-${amount}` : amount}
                </TableCell>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell className="font-medium">INV001</TableCell>
              </TableRow>
            );
          })}
          {/* <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell> */}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsTable;
