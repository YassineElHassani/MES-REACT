import { useCart } from '../hooks/useCart';

export default function Cart() {
  const { state, updateQuantity, removeItem, clearCart, subtotal, totalQuantity } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-2">Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Cart ({totalQuantity})</h1>
        <button className="text-sm text-red-600" onClick={clearCart}>
          Clear cart
        </button>
      </div>

      <ul className="divide-y rounded border">
        {state.items.map(item => (
          <li key={String(item.articleId)} className="p-4 flex items-center gap-4">
            <div className="flex-1">
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-gray-500">${item.price.toFixed(2)} each</div>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" min={0} value={item.quantity} onChange={e => updateQuantity(item.articleId, Number(e.target.value))} className="w-20 border rounded px-2 py-1" />
              <button className="text-red-600 text-sm" onClick={() => removeItem(item.articleId)} aria-label={`Remove ${item.title}`}>
                Remove
              </button>
            </div>
            <div className="w-24 text-right font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-end">
        <div className="text-right">
          <div className="text-lg">
            Subtotal: <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}