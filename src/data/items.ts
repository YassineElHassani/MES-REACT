import type { Item } from '../types/item';

const categories = ['Tech', 'Books', 'Clothing', 'Home', 'Sports', 'Toys', 'Beauty'] as const;

function pseudoRand(seed: number) {
  let x = seed % 2147483647;
  if (x <= 0) x += 2147483646;
  return () => (x = (x * 16807) % 2147483647) / 2147483647;
}
const rand = pseudoRand(42);

export const items: Item[] = Array.from({ length: 1500 }).map((_, i) => {
  const price = Math.round(rand() * 9900) / 100 + 5; // 5.00 - 104.00
  const rating = 1 + Math.floor(rand() * 5);
  const cat = categories[Math.floor(rand() * categories.length)];
  return {
    id: i + 1,
    name: `${cat} Item ${i + 1}`,
    category: cat,
    price: Number(price.toFixed(2)),
    rating,
  };
});

export const allCategories = ['All', ...Array.from(new Set(items.map(i => i.category)))];