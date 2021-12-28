export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BankTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: [BankTypes];
}

export interface NominalTypes {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  userAccount: string;
}

export interface VoucherTopupHistoryTypes {
  gameName: string;
  category: string;
  thumbnail: string;
  coinName: string;
  coinQuantity: string;
  price: number;
}

export interface PaymentHistoryTypes {
  name: string;
  type: string;
  bankName: string;
  noRekening: string;
}

export interface TransactionHistoryTypes {
  _id: string;
  voucherTopupHistory: VoucherTopupHistoryTypes;
  value: number;
  status: string;
  userAccount: string;
  tax: number;
  name: string;
  paymentHistory: PaymentHistoryTypes;
}

export interface TopupCategoryTypes {
  _id: string;
  name: string;
  value: number;
}
