import React from "react";
import { faker } from "@faker-js/faker";

import GameCategories from "./GameCategories";
import GameCategoriesFactory from "../../../factories/GameCategoriesFactory";

export default {
  title: "Molecules / GameCategories",
  component: GameCategories,
  argTypes: {
    categories: { control: "array" },
  },
};

const Template = (args) => <GameCategories {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  categories: GameCategoriesFactory.buildList(
    faker.datatype.number({ min: 2, max: 5 })
  ),
};
