import { Item } from './Item';

export interface Trayectoria extends Item {
  id: number;
  image: string;
  titulo: string;
  texto: string;
}
