export interface Book {
  id: number;
  discount_rate: number;
  price: number;
  title: string;
  description: string;
  image: string;
}

export interface ApiQuery {
  page: number;
  per_page: number;
}
