"use client";

import { Card, Text } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import { ICollection } from "../collection.type";

interface ICollectionCardProps {
  collection: ICollection;
}

export const CollectionCard: FC<ICollectionCardProps> = ({ collection }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/collection/${collection.id}`);
  }, [collection.id, router]);

  return (
    <Card isPressable onPress={handleClick}>
      <Card.Header title={collection.name} />

      <Card.Body>
        <Text>{collection.description}</Text>
      </Card.Body>
    </Card>
  );
};
