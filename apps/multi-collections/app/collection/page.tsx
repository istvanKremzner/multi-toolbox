"use client";

import { Container } from "@nextui-org/react";
import { CollectionCard } from "./(collection-card)/collection-card.component";
import { dummyCollection } from "../../test/collection.dummy";

const CollectionsPage = () => {
  //TODO: add pocket-base

  const collections = [dummyCollection];

  return (
    <Container
      as="section"
      display="flex"
      justify="center"
      wrap="wrap"
      gap={4}
      css={{
        padding: "10%",
      }}
    >
      {collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </Container>
  );
};

export default CollectionsPage;
