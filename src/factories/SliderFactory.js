import { Factory } from "rosie";
import { random, datatype } from "faker";

const SliderFactory = new Factory().sequence("id").attrs({
  imageUrls: () =>
    new Array(datatype.number({ min: 1, max: 5 }))
      .fill(null)
      .map(() => random.image()),
});

export default SliderFactory;
