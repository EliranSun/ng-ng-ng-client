import axios from "axios";
import { useQuery } from "react-query";
import { GET_SLIDER_DATA_URL } from "../constants";

const useSliderData = () => {
  const { data, isLoading } = useQuery("get-slider-data", () =>
    axios.get(GET_SLIDER_DATA_URL)
  );

  console.log("useSliderData", data?.data?.imageUrls);
  return {
    imageUrls: data?.data?.imageUrls || [],
    isLoading,
  };
};

export default useSliderData;
