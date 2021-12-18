import TableRow from "./TableRow";
import TopupCategory from "./TopupCategory";

export default function OverviewContent() {
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
              <TopupCategory icon="ic-category-desktop" nominal={18500000}>
                Game
                <br />
                Desktop
              </TopupCategory>
              <TopupCategory icon="ic-category-mobile" nominal={84450000}>
                Game
                <br />
                Mobile
              </TopupCategory>
              <TopupCategory icon="ic-category-others" nominal={5000000}>
                Other
                <br />
                Categories
              </TopupCategory>
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
                <TableRow
                  title="Valorant"
                  category="Desktop"
                  item="1000 VP"
                  price={149000}
                  status="Success"
                  image="/img/Thumbnail-1.png"
                />
                <TableRow
                  title="Call Of Duty Mobile"
                  category="Mobile"
                  item="550 Gold"
                  price={90000}
                  status="Pending"
                  image="/img/Thumbnail-2.png"
                />
                <TableRow
                  title="Clash Of Clans"
                  category="Mobile"
                  item="1000 Gems"
                  price={24000}
                  status="Success"
                  image="/img/Thumbnail-3.png"
                />
                <TableRow
                  title="Clash Royale"
                  category="Mobile"
                  item="1000 Gems"
                  price={20000}
                  status="Failed"
                  image="/img/Thumbnail-4.png"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
