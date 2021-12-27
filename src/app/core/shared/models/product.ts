export interface IProduct {
  id?: string;
  title: string;
  price: number;
  uom: string;
  company: string;
  description?: string;
  address?: string;
  favourite: boolean;
}

export interface IProductPayload {
  title: string;
  price: number;
  uom: string;
  company: string;
  description?: string;
  address: string;
}
