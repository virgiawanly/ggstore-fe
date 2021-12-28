import cn from "classnames";
import NumberFormat from "react-number-format";

interface TableRowProps {
  title: string;
  category: string;
  item: string;
  price: number;
  status: string;
  image: string;
}

export default function TableRow(props: TableRowProps) {
  const { title, category, item, price, status, image } = props;

  const statusClass = cn({
    "float-start icon-status": true,
    pending: status === "pending",
    success: status === "success",
    failed: status === "failed",
  });

  const IMG = process.env.NEXT_PUBLIC_IMG_URL;

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          style={{ objectFit: "cover", borderRadius: "15px" }}
          src={`${IMG}/${image}`}
          width="80"
          height="60"
          alt="Game Thumbnail"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          <NumberFormat
            value={price}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            prefix="Rp "
          />
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
