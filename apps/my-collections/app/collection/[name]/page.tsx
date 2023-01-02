import { FC } from "react";
import { CollectionItem } from "./(collection-item)";
import { CollectionItemDetailsDialog } from "./(collection-item-details-dialog)";
import { dummyCollection } from "./collection.dummy";
import { Collection } from "./collection.server-component";

interface ICollectionPageProps {
  params: Record<"name", string>;
}

const CollectionPage: FC<ICollectionPageProps> = ({ params }) => {
  // TODO: fetch collection from DB

  return (
    <section>
      <Collection collection={dummyCollection} item={CollectionItem} />

      <CollectionItemDetailsDialog />
    </section>
  );
};

export default CollectionPage;
