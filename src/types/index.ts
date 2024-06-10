export interface Book {
  name: string;
  price: number;
  tags: Array<string>;
  is_hot: boolean;
  pub_time: string;
}

export type Books = Array<Book>; 