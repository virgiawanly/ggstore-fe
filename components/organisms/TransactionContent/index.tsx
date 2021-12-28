import { useCallback, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import { TransactionHistoryTypes } from "../../../services/data-types";
import { getMemberTransactions } from "../../../services/member";
import TableRow from "../TransactionContent/TableRow";
import ButtonTab from "./ButtonTab";

export default function TransactionContent() {
  const [totalSpent, setTotalSpent] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [tab, setTab] = useState("all");
  const IMG = process.env.NEXT_PUBLIC_IMG_URL;

  const fetchMemberTransactions = useCallback(async (params) => {
    setTotalSpent(0);
    setTransactions([]);

    const res = await getMemberTransactions(params);
    if (!res.success) {
      return toast.error(res.message);
    }

    setTotalSpent(res.data.total);
    setTransactions(res.data.data);
    return () => {};
  }, []);

  useEffect(() => {
    fetchMemberTransactions(tab);
  }, [tab]);
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumberFormat
              value={totalSpent}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              prefix="Rp. "
            />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab
                onClick={() => {
                  setTab("all");
                }}
                title="All Trx"
                active={tab === "all"}
              />
              <ButtonTab
                onClick={() => {
                  setTab("success");
                }}
                title="Success"
                active={tab === "success"}
              />
              <ButtonTab
                onClick={() => {
                  setTab("pending");
                }}
                title="Pending"
                active={tab === "pending"}
              />
              <ButtonTab
                onClick={() => {
                  setTab("failed");
                }}
                title="Failed"
                active={tab === "failed"}
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {transactions.map((transaction: TransactionHistoryTypes) => (
                  <TableRow
                    key={transaction._id}
                    id={transaction._id}
                    title={transaction.voucherTopupHistory.gameName}
                    category={transaction.voucherTopupHistory.category}
                    item={`${transaction.voucherTopupHistory.coinQuantity} ${transaction.voucherTopupHistory.coinName}`}
                    price={transaction.value}
                    status={transaction.status}
                    image={`${IMG}/${transaction.voucherTopupHistory.thumbnail}`}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
