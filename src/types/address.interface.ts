export interface IAddress {
  _id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  type: "STANDARD_ESTIMATE" | "DFW_ESTIMATE"; 
  createdAt: string;
  updatedAt: string;
  __v: number;
}