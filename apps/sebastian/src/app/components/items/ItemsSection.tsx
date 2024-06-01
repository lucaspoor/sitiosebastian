import { string } from 'yup';
import { Item } from '../../types/Item';
import { ItemCard } from './ItemCard';

type ItemsSectionProps = {
  items: Array<Item>;
  color?: string;
};
export function ItemsSection({ items, color = '' }: ItemsSectionProps) {
  return (
    <div className={`grid lg:grid-cols-3 gap-6 ${color}`}>
      {items.map((p) => (
        <ItemCard item={p} key={p.id} />
      ))}
    </div>
  );
}
