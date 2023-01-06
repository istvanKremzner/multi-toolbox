"use client";

import { Modal, Text } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { dummyCollection } from "../../../../test/collection.dummy";
import { ICollectionItem } from "../../../../types";

export const CollectionItemDetailsDialog = () => {
  const searchParams = useSearchParams();

  const findCollectionItem = useCallback(() => {
    const itemId = searchParams.get("item");
    const collectionItem = itemId
      ? dummyCollection.items.find((i) => i.id === itemId)
      : undefined;

    return collectionItem;
  }, [searchParams]);

  const [item, setItem] = useState<ICollectionItem | undefined>(
    findCollectionItem()
  );

  const handleSearchParamChange = useCallback(() => {
    setItem(findCollectionItem());
  }, [findCollectionItem]);

  useCallback(handleSearchParamChange, [handleSearchParamChange]);

  return (
    <Modal open={!!item} onClose={() => setItem(undefined)}>
      {item && <Text>{item.name}</Text>}
    </Modal>
  );
};
