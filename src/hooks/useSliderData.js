import axios from "axios";
import { useQuery } from "react-query";
import { GET_SLIDER_DATA_URL } from "../constants";

const useSliderData = () => {
  const { data, isLoading } = useQuery(
    "get-slider-data",
    () => {
      return axios.get(GET_SLIDER_DATA_URL);
    },
    {
      retry: false, // TODO: change after api/msw is ready
      retryInterval: 60000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      onError: (err) => {
        console.log("useSliderData query err", err);
      },
    }
  );

  console.log("useSliderData", data?.data?.imageUrls);
  return {
    imageUrls: data?.data?.imageUrls || [],
    isLoading,
  };
};

export default useSliderData;
