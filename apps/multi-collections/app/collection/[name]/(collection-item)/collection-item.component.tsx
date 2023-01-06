"use client";

import { Card, styled, Text } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import placeholderImage from "./animal.jpeg";
import { ICollectionItem } from "./collection-item.type";

interface ICollectionItemProps {
  item: ICollectionItem;
}

export const CollectionItem: FC<ICollectionItemProps> = ({ item }) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`${pathName}?item=${item.id}`);
  }, [item.id, pathName, router]);

  return (
    <Card
      isPressable
      onPress={handleClick}
      css={{
        width: "clamp(200px, 20%, 300px)",
        height: "fit-content",

        borderRadius: "16px",

        cursor: "pointer",

        "&:hover": {
          outline: `1px solid $primary`,

          outlineColor: "$primary",
          outlineWidth: 2,
          transform: "scale(1.02)",
        },
      }}
    >
      <Card.Header title={item.name} />

      <Card.Body>
        <Text>{item.description}</Text>

        <Card.Image
          src={placeholderImage.src}
          alt="placeholder"
          width={placeholderImage.width}
          height={placeholderImage.height}
          css={{
            padding: "$2",
            borderRadius: "2rem",
            height: "fit-content",
          }}
          containerCss={{
            paddingTop: "20%",
            height: "fit-content",
          }}
        />

        {item.images?.map((link) => (
          <Card.Image src={link} />
        ))}
      </Card.Body>
    </Card>
  );
};
