import { useCallback, useDeferredValue, useMemo, useState } from 'react';
import { items as allItems, allCategories } from '../data/items';
import FilterBar from '../components/FilterBar';
import ItemList from '../components/ItemList';
import type { Item } from '../types/item';

type SortKey = 'name' | 'price' | 'rating';
type SortDir = 'asc' | 'desc';

export default function Filter() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [category, setCategory] = useState<string>('All');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const categories = allCategories;

  const visibleItems = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    let next: Item[] = allItems;

    if (q) next = next.filter(i => i.name.toLowerCase().includes(q));
    if (category !== 'All') next = next.filter(i => i.category === category);
    if (minPrice !== '') next = next.filter(i => i.price >= minPrice);
    if (maxPrice !== '') next = next.filter(i => i.price <= maxPrice);

    return [...next].sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case 'name': cmp = a.name.localeCompare(b.name); break;
        case 'price': cmp = a.price - b.price; break;
        case 'rating': cmp = a.rating - b.rating; break;
      }
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [deferredQuery, category, minPrice, maxPrice, sortKey, sortDir]);

  const onQueryChange = useCallback((v: string) => setQuery(v), []);
  const onCategoryChange = useCallback((v: string) => setCategory(v), []);
  const onMinPriceChange = useCallback((v: number | '') => setMinPrice(v), []);
  const onMaxPriceChange = useCallback((v: number | '') => setMaxPrice(v), []);
  const onSortKeyChange = useCallback((v: SortKey) => setSortKey(v), []);
  const onSortDirChange = useCallback((v: SortDir) => setSortDir(v), []);

  return (
    <div className="container mx-auto p-6 space-y-6">
    <h1 className="text-3xl font-bold mb-4">MES 4: Data Filtering and Performance</h1>

    <div className="bg-gray-50 dark:bg-gray-800 transition-colors shadow rounded-lg p-4 mb-6 text-black">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <FilterBar
          query={query}
          onQueryChange={onQueryChange}
          category={category}
          onCategoryChange={onCategoryChange}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={onMinPriceChange}
          onMaxPriceChange={onMaxPriceChange}
          sortKey={sortKey}
          sortDir={sortDir}
          onSortKeyChange={onSortKeyChange}
          onSortDirChange={onSortDirChange}
          categories={categories}
        />
      </div>
    </div>

      <div className="text-sm text-gray-600">
        Showing {visibleItems.length} of {allItems.length} items
      </div>

      <ItemList items={visibleItems} />
    </div>
  );
}