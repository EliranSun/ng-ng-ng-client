import { JurisdictionProvider } from "./JurisdictionContext";

export const withJurisdiction = (Component) => {
  const WithJurisdiction = (props) => {
    return (
      <JurisdictionProvider>
        <Component {...props} />
      </JurisdictionProvider>
    );
  };

  WithJurisdiction.displayName = `WithJurisdiction(${
    Component.displayName || Component.name
  })`;

  return WithJurisdiction;
};
