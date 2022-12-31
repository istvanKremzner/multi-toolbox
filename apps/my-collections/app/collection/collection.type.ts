import { ICollectionItem } from "./(collection-item)/collection-item.type";

export enum CollectionType {
  List,
  Media,
}

export interface ICollection {
  id: string;

  type: CollectionType;
  items: ICollectionItem[];
}
