import NumberFormat from "react-number-format";

interface NominalItemProps {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
  onChange: () => void;
}

export default function NominalItem(props: NominalItemProps) {
  const { _id, coinName, coinQuantity, price, onChange } = props;
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={_id}
      onChange={onChange}
    >
      <input
        className="d-none"
        type="radio"
        id={_id}
        name="topup"
        value={_id}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 m-0">
            <span className="fw-medium">{coinQuantity} </span>
            {coinName}
          </p>
          <img
            src="/icon/icon-check.svg"
            width="20"
            height="20"
            className="icon-check"
            alt="Check"
          />
        </div>
        <p className="text-lg color-palette-1 m-0">
          <NumberFormat
            value={price}
            displayType={"text"}
            thousandSeparator="."
            decimalSeparator=","
            prefix={"RP "}
          />
        </p>
      </div>
    </label>
  );
}
