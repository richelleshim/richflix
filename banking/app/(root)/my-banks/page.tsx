import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import TransactionsTable from "@/components/TransactionsTable";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { formatAmount } from "@/lib/utils";
import React from "react";

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });

  if (!accounts) return;

  const accountsData = accounts?.data;

  console.log({
    accountsData,
  });

  return (
    <div className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Banks History"
          subtext="Effortlessly manage your banking activities"
        />
        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {accounts &&
              accounts.data.map((a: Account) => {
                return (
                  <BankCard
                    key={a.id}
                    account={a}
                    userName={loggedIn?.firstName}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBanks;
