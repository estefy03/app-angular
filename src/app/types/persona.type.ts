export type Persona = {
    name: string;
    lastname: string;
    address: Address;
  }
  
export type Address = {
street: string;
number: number;
state: string;
}