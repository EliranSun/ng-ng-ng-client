import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import en from "../copies/en.json";
import { ErrorBoundary } from "../utils/error";

export const flattenMessages = (nestedMessages, prefix = "") => {
  if (nestedMessages === null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};

export const Provider = ({ children }) => {
  const [messages, setMessages] = useState(en);
  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    setMessages(require(`../copies/${lang}.json`));
  }, [messages]);

  return (
    <IntlProvider locale="en" messages={flattenMessages(messages)}>
      {children}
    </IntlProvider>
  );
};

export const FormatMessage = ({ id, values }) => {
  const Foo = () => {
    return <span>{id}</span>;
  };

  return (
    <ErrorBoundary fallback={<Foo />}>
      <FormattedMessage id={id} values={values} />
    </ErrorBoundary>
  );
};

export const withProvider = (Component) => {
  return (
    <Provider>
      <Component />
    </Provider>
  );
};
