import { Item } from './Item';

export interface Propuesta extends Item {
  id: number;
  titulo: string;
  texto: string;
  image: string;
}
