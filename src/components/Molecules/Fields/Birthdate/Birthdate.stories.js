import { Birthdate as BirthdateComponent } from "..";
import { withIntlProvider } from "../../../../HOC";

export default {
  title: "Molecules / Birthdate",
  component: BirthdateComponent,
  argTypes: {},
  decorators: [withIntlProvider],
};

export const Birthdate = (args) => <BirthdateComponent {...args} />;
