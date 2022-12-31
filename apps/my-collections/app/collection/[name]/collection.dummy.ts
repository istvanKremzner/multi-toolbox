import { CollectionType, ICollection } from "../collection.type";

export const dummyCollection: ICollection = {
  id: "dummy-collection",
  name: "Games",
  description: "A list of my games",
  type: CollectionType.Media,
  items: [
    {
      id: "dummy-item-1",
      name: "God Of War: Ragnarok",
      description: "The God Of War sequel to the 2018 game.",
    },
    {
      id: "dummy-item-2",
      name: "Witcher 3: The Wild Hunt",
      description: "The critically acclaimed third game in the Witcher series.",
    },
    {
      id: "dummy-item-3",
      name: "Yakuza: Like a Dragon",
      description:
        "The latest sequel int the Yakuza series that gives it a twist with a new combat mechanism.",
    },
    {
      id: "dummy-item-4",
      name: "Hogwarts' Legacy",
      description:
        "A new Harry Potter game that takes place a 100 years prior to the main series' events.",
    },
    {
      id: "dummy-item-5",
      name: "The Legend of Zelda: Breath of the wild",
      description: "The latest Zelda game that gives the series a fresh twist.",
    },
    {
      id: "dummy-item-6",
      name: "Horizon Zero Dawn",
      description: "A surprisingly great game from the creators of Killzone.",
    },
  ],
};
