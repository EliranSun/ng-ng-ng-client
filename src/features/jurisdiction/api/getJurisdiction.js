import { useQuery } from "react-query";
import { get } from "../../../lib/request";

export const getJurisdiction = () => {
  return get("/jurisdiction");
};

export const useJurisdiction = ({ config }) => {
  return useQuery({
    ...config,
    queryKey: ["jurisdiction"],
    queryFn: () => getJurisdiction(),
  });
};
