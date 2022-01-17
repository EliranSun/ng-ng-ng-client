import gratoganaStyles from "../themes/gratogana.module.scss";
import winomaniaStyles from "../themes/winomania.module.scss";
import winsparkStyles from "../themes/winspark.module.scss";

export const Theme = {
  Gratogana: {
    PRIMARY: gratoganaStyles["primary"],
    PRIMARY_TEXT: gratoganaStyles["primary-text"],
    SECONDARY: gratoganaStyles["secondary"],
    SECONDARY_TEXT: gratoganaStyles["secondary-text"],
    BUTTON_PRIMARY: gratoganaStyles["button-primary"],
    BUTTON_PRIMARY_TEXT: gratoganaStyles["button-primary-text"],
    BUTTON_SECONDARY: gratoganaStyles["button-secondary"],
    BUTTON_SECONDARY_TEXT: gratoganaStyles["button-secondary-text"],
  },
  Winomania: {
    PRIMARY: winomaniaStyles["primary"],
    PRIMARY_TEXT: winomaniaStyles["primary-text"],
    SECONDARY: winomaniaStyles["secondary"],
    SECONDARY_TEXT: winomaniaStyles["secondary-text"],
    BUTTON_PRIMARY: winomaniaStyles["button-primary"],
    BUTTON_SECONDARY: winomaniaStyles["button-secondary"],
  },
  Winspark: {
    PRIMARY: winsparkStyles["primary"],
    PRIMARY_TEXT: winsparkStyles["primary-text"],
    SECONDARY: winsparkStyles["secondary"],
    SECONDARY_TEXT: winsparkStyles["secondary-text"],
    BUTTON_PRIMARY: winsparkStyles["button-primary"],
    BUTTON_SECONDARY: winsparkStyles["button-secondary"],
  },
};
