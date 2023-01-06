import { FC } from "react";
import { CollectionItemDetailsDialog } from "./(collection-item-details-dialog)";
import { dummyCollection } from "../../../test/collection.dummy";
import { Collection } from "./collection.component";

interface ICollectionPageProps {
  params: Record<"name", string>;
}

const CollectionPage: FC<ICollectionPageProps> = ({ params }) => {
  // TODO: fetch collection from DB

  return (
    <section>
      <Collection collection={dummyCollection} />

      <CollectionItemDetailsDialog />
    </section>
  );
};

export default CollectionPage;
