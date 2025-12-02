import { useCart } from '../hooks/useCart';
import type { ArticleSummary } from '../types/cart';

type Props = {
  article: ArticleSummary;
  quantity?: number;
  className?: string;
};

export default function AddToCartButton({ article, quantity = 1, className }: Props) {
  const { addItem } = useCart();
  return (
    <button
      className={className ?? 'px-3 py-2 bg-blue-600 text-white rounded'}
      onClick={() => addItem(article, quantity)}
    >
      Add to cart
    </button>
  );
}