import { Factory } from "rosie";
import { faker } from "@faker-js/faker";

const GameCategoryFactory = new Factory().attrs({
  name: () => faker.lorem.words(),
  imageUrl: () => faker.image.imageUrl(),
});

const GameCategoriesFactory = new Factory().sequence("id").attrs({
  name: () => faker.lorem.words(),
  items: GameCategoryFactory.buildList(
    faker.datatype.number({ min: 2, max: 30 })
  ),
});

export default GameCategoriesFactory;
