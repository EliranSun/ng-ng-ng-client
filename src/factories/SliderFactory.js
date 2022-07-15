import { Factory } from "rosie";
import { faker } from "@faker-js/faker";

const SliderFactory = new Factory().sequence("id").attrs({
  imageUrls: () =>
    new Array(faker.datatype.number({ min: 1, max: 5 }))
      .fill(null)
      .map(() => faker.image.imageUrl()),
});

export default SliderFactory;
