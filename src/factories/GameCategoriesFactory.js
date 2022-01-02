import { Factory } from "rosie";
import { lorem, random, datatype } from "faker";

const GameCategoryFactory = new Factory().attrs({
  name: () => lorem.words(),
  imageUrl: () => random.image(),
});

const GameCategoriesFactory = new Factory().sequence("id").attrs({
  name: () => lorem.words(),
  items: GameCategoryFactory.buildList(datatype.number({ min: 2, max: 30 })),
});

export default GameCategoriesFactory;
