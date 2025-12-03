import React from 'react';
import type { Item } from '../types/item';

type Props = {
  items: Item[];
};

const ItemRow = React.memo(function ItemRow({ item }: { item: Item }) {
  return (
    <li className="flex items-center justify-between px-4 py-2 border-b">
      <div>
        <div className="font-medium">{item.name}</div>
        <div className="text-sm text-gray-500">{item.category} • ⭐ {item.rating}</div>
      </div>
      <div className="font-semibold">${item.price.toFixed(2)}</div>
    </li>
  );
});

function ItemList({ items }: Props) {
  return (
    <ul className="rounded border divide-y bg-white">
      {items.map(it => (
        <ItemRow key={it.id} item={it} />
      ))}
    </ul>
  );
}

export default React.memo(ItemList);