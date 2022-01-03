import { useState, Children, cloneElement } from "react";
import classnames from "classnames";
import { Button } from "../../Atoms";

import styles from "./Stepper.module.scss";

const Stepper = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const onNext = () => {};
  const onPrevious = () => {};
  const childrenArray = Children.toArray(children);
  if (childrenArray.length === 0) {
    return null;
  }

  return (
    <div>
      <div className={styles["steps-indicator"]}>
        {childrenArray.map((child, index) => {
          return (
            <>
              <span
                className={classnames(styles.step, {
                  [styles.active]: currentStep === index,
                })}
              >
                {index + 1}
              </span>
              {index < childrenArray.length - 1 && (
                <span className={styles["step-separator"]} />
              )}
            </>
          );
        })}
      </div>
      <div>
        {cloneElement(childrenArray[currentStep], {
          onNext,
          onPrevious,
          key: currentStep,
        })}
      </div>
      <div>
        {currentStep < childrenArray.length - 1 && (
          <Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
        )}
        {currentStep > 0 && (
          <Button onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

const withSteps = (Component, steps = []) => {};

export default Stepper;
