import React from 'react';

type Props = {
  query: string;
  onQueryChange: (v: string) => void;
  category: string;
  onCategoryChange: (v: string) => void;
  minPrice: number | '';
  maxPrice: number | '';
  onMinPriceChange: (v: number | '') => void;
  onMaxPriceChange: (v: number | '') => void;
  sortKey: 'name' | 'price' | 'rating';
  sortDir: 'asc' | 'desc';
  onSortKeyChange: (v: 'name' | 'price' | 'rating') => void;
  onSortDirChange: (v: 'asc' | 'desc') => void;
  categories: string[];
};

function FilterBar({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  sortKey,
  sortDir,
  onSortKeyChange,
  onSortDirChange,
  categories,
}: Props) {
  return (
    <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4 p-4 bg-white rounded border">
      <input
        value={query}
        onChange={e => onQueryChange(e.target.value)}
        placeholder="Search..."
        className="border rounded px-3 py-2"
      />

      <select
        value={category}
        onChange={e => onCategoryChange(e.target.value)}
        className="border rounded px-3 py-2"
      >
        {categories.map(c => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <input
          type="number"
          min={0}
          value={minPrice}
          onChange={e => onMinPriceChange(e.target.value === '' ? '' : Number(e.target.value))}
          placeholder="Min price"
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="number"
          min={0}
          value={maxPrice}
          onChange={e => onMaxPriceChange(e.target.value === '' ? '' : Number(e.target.value))}
          placeholder="Max price"
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      <div className="flex gap-2">
        <select
          value={sortKey}
          onChange={e => onSortKeyChange(e.target.value as 'name' | 'price' | 'rating')}
          className="border rounded px-3 py-2 w-full"
        >
          <option value="name">Sort: Name</option>
          <option value="price">Sort: Price</option>
          <option value="rating">Sort: Rating</option>
        </select>
        <select
          value={sortDir}
          onChange={e => onSortDirChange(e.target.value as 'asc' | 'desc')}
          className="border rounded px-3 py-2 w-full"
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
    </div>
  );
}

export default React.memo(FilterBar);