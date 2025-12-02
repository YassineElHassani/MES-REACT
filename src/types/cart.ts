export type ID = string | number;

export type ArticleSummary = {
  id: ID;
  title: string;
  price: number;
};

export type CartItem = {
  articleId: ID;
  title: string;
  price: number;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export type CartAction =
  | { type: 'ADD_ITEM'; payload: { article: ArticleSummary; quantity?: number } }
  | { type: 'REMOVE_ITEM'; payload: { articleId: ID } }
  | { type: 'UPDATE_QUANTITY'; payload: { articleId: ID; quantity: number } }
  | { type: 'CLEAR_CART' };