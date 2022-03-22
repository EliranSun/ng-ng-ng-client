import { useEffect, useState } from "react";
import { isRealityCheckDefined as isRealityCheckDefinedService } from "../services/responsibleGaming";

/**
 *
 * @returns
 * @param {boolean} isRealityCheckDefined
 */
export const useRealityCheck = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRealityCheckDefined, setIsRealityCheckDefined] = useState(false);

  useEffect(() => {
    const fetchRealityCheck = async () => {
      const result = await isRealityCheckDefinedService();
      setIsRealityCheckDefined(result);
      setIsLoading(false);
    };
    fetchRealityCheck();
  }, [isRealityCheckDefined]);

  return { isRealityCheckDefined, isLoading };
};
