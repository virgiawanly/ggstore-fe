import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { postCheckout } from "../../../services/player";

export default function CheckoutConfirmation() {
  const router = useRouter();
  const [checkbox, setCheckbox] = useState(false);

  const submitHandler = async () => {
    const localDataItem = localStorage.getItem("data-item");
    const localDataTopup = localStorage.getItem("data-topup");

    const dataItem = JSON.parse(localDataItem!);
    const dataTopup = JSON.parse(localDataTopup!);

    if (!checkbox) {
      return toast.error("Pastikan anda telah melakukan pembayaran!");
    }

    const payload = {
      voucher: dataItem._id,
      nominal: dataTopup.nominalItem._id,
      payment: dataTopup.paymentItem.payment._id,
      bank: dataTopup.paymentItem.bank._id,
      name: dataTopup.paymentItem.bank.name,
      userAccount: dataTopup.verifyID,
    };

    const response = await postCheckout(payload);

    if (!response.success) {
      return toast.error("Terjadi kesalahan!");
    }

    toast.success("Checkout berhasil");
    return router.push("/complete-checkout");
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
        />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={submitHandler}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
