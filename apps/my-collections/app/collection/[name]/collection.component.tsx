"use client";

import { Container } from "@nextui-org/react";
import { FC } from "react";
import { ICollection } from "../../../types/collection";
import { CollectionItem } from "./(collection-item)/collection-item.component";

interface ICollectionProps {
  collection: ICollection;
}

export const Collection: FC<ICollectionProps> = ({ collection }) => (
  <Container
    display="flex"
    justify="center"
    wrap="wrap"
    gap={8}
    css={{
      padding: "$4",
      gap: "$8",
    }}
  >
    {collection.items.map((item) => (
      <CollectionItem key={item.id} item={item} />
    ))}
  </Container>
);
