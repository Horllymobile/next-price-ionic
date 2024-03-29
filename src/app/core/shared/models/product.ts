
export interface IApiResponse<T> {
  page: number,
  size: number,
  metaData: Array<T>
}

export interface IProduct {
  id?: string;
  title: string;
  price: number;
  uom: string;
  company: string;
  description?: string;
  address?: string;
  favourite: boolean;
  approved: boolean;
}

export interface IProductPayload {
  title: string;
  price: number;
  uom: string;
  company: string;
  description?: string;
  address: string;
}
