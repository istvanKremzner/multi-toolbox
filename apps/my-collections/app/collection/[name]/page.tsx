import { FC } from "react";
import { CollectionItem } from "./(collection-item)/collection-item.component";
import { dummyCollection } from "./collection.dummy";
import { Collection } from "./collection.server-component";

interface ICollectionPageProps {
  params: Record<"name", string>;
}

const CollectionPage: FC<ICollectionPageProps> = ({ params }) => {
  // TODO: fetch collection from DB

  return <Collection collection={dummyCollection} item={CollectionItem} />;
};

export default CollectionPage;
