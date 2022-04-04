import { useContext } from "react";
import { StepperContext } from "./Stepper";
import classNames from "classnames";

import styles from "./Stepper.module.scss";

const StepperProgress = () => {
  const { currentStep, steps } = useContext(StepperContext);

  return (
    <div className={styles["steps-indicator"]}>
      {steps.map((_step, index) => {
        return (
          <>
            <span
              className={classNames(styles.step, {
                [styles.active]: currentStep === index,
              })}>
              {index + 1}
            </span>
            {index < steps.length - 1 && (
              <span className={styles["step-separator"]} />
            )}
          </>
        );
      })}
    </div>
  );
};

export default StepperProgress;
