import { ICollectionItem } from "./[name]/(collection-item)/collection-item.type";

export enum CollectionType {
  List,
  Media,
}

export interface ICollection {
  id: string;

  name: string;
  description?: string;
  type: CollectionType;
  items: ICollectionItem[];
}
