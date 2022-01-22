import axios from "axios";
import { useQuery } from "react-query";
import { GET_PHONE_CODES_URL } from "../constants";

const usePhoneCode = () => {
  const { data, isLoading } = useQuery("get-phone-codes", () =>
    axios.get(GET_PHONE_CODES_URL)
  );

  return {
    phoneCodes: data?.data || [],
    isLoading,
  };
};

export default usePhoneCode;
