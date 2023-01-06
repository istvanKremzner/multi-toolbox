import { ICollectionItem } from "./collection-item.type";
import { CollectionType } from "./collection-type.enum";

export interface ICollection {
  id: string;

  name: string;
  description?: string;
  type: CollectionType;
  items: ICollectionItem[];
}
