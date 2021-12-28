import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  TopupCategoryTypes,
  TransactionHistoryTypes,
} from "../../../services/data-types";
import { getMemberOverview } from "../../../services/player";
import TableRow from "./TableRow";
import TopupCategory from "./TopupCategory";

export default function OverviewContent() {
  const [counts, setCounts] = useState([]);
  const [data, setData] = useState([]);

  const fetchMemberOverview = useCallback(async () => {
    const res = await getMemberOverview();
    if (!res.success) {
      toast.error("Gagal mengambil data");
    }
    setCounts(res.data.counts);
    setData(res.data.data);
  }, []);

  useEffect(() => {
    fetchMemberOverview();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {counts.map((category: TopupCategoryTypes) => (
                <TopupCategory
                  key={category._id}
                  icon="ic-category-others"
                  nominal={category.value}
                >
                  {category.name}
                </TopupCategory>
              ))}
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
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: TransactionHistoryTypes) => (
                  <TableRow
                    key={item._id}
                    title={item.voucherTopupHistory.gameName}
                    category={item.voucherTopupHistory.category}
                    item={`${item.voucherTopupHistory.coinQuantity} ${item.voucherTopupHistory.coinName}`}
                    price={item.value}
                    status={item.status}
                    image={item.voucherTopupHistory.thumbnail}
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
