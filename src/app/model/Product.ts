export interface Product {
    id: number;
    name: string;
    color:string;
    type:string
    description: string;
    price: number;
    category:string;
    imageUrl: string;
    features:Array<string>
    availableColors:Array<string>;
    sizes:Array<string>;
    fabric:string
  }