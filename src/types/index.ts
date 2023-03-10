export type TProduct = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type TNewPoduct = {
  name: string,
  amount: string,
};

export type TUser = {
  id: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type TOrders = [
  {
    id?: number,
    userId: number,
    productsIds: number[]
  },
];

export type TNewOrder = {
  userId: number,
  productsIds: number[]
};

export type TLogin = {
  id?: number,
  username: string,
  password?: string,
};
