import { Collection } from "./collection.server-component";
import { dummyCollection } from "./collection.dummy";
import { CollectionItem } from "./(collection-item)/collection-item.component";

interface ICollectionPageProps {
  params: Record<"name", string>;
}

const CollectionsPage = () => {
  //TODO: add pocket-base

  return <Collection collection={dummyCollection} item={CollectionItem} />;
};

export default CollectionsPage;
