import { Item } from '../../types/Item';
import { ItemCard } from './ItemCard';

type ItemsSectionProps = {
  items: Array<Item>;
};
export function ItemsSection({ items }: ItemsSectionProps) {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {items.map((p) => (
        <ItemCard item={p} key={p.id} />
      ))}
    </div>
  );
}
