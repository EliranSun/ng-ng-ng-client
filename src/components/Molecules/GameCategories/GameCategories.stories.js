import React from "react";
import { datatype, random, commerce, name } from "faker";

import GameCategories from "./GameCategories";
import GameCategoriesFactory from "../../../factories/GameCategoriesFactory";

export default {
  title: "NG-Client / GameCategories",
  component: GameCategories,
  argTypes: {
    categories: { control: "array" },
  },
};

const Template = (args) => <GameCategories {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  categories: GameCategoriesFactory.buildList(
    datatype.number({ min: 2, max: 5 })
  ),
};
