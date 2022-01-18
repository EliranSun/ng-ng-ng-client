import {
  useState,
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
} from "react";
import classnames from "classnames";
import { Button } from "../../Atoms";

import styles from "./Stepper.module.scss";

// TODO: this is currently shared, but need to be initiated each time stepper/its context are being used
export const StepperContext = createContext({
  isLastStep: false,
  isFirstStep: true,
  next: () => {},
  previous: () => {},
});

const Stepper = ({ stepIndex = 0, children, controls }) => {
  const [currentStep, setCurrentStep] = useState(stepIndex);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const onNext = () => {};
  const onPrevious = () => {};
  const childrenArray = Children.toArray(children);

  useEffect(() => {
    // TODO: Simplify this logic
    if (currentStep === 0) {
      setIsFirstStep(true);
    } else {
      setIsFirstStep(false);
    }

    if (currentStep >= childrenArray.length - 1) {
      setIsLastStep(true);
      return;
    }

    setIsLastStep(false);
  }, [currentStep, childrenArray]);

  useEffect(() => {
    setCurrentStep(stepIndex);
  }, [stepIndex]);

  if (childrenArray.length === 0) {
    return null;
  }

  return (
    <StepperContext.Provider
      value={{
        next: () => setCurrentStep(currentStep + 1),
        previous: () => setCurrentStep(currentStep - 1),
        isLastStep,
        isFirstStep,
        currentStep,
      }}>
      <div className={styles["steps-indicator"]}>
        {childrenArray.map((child, index) => {
          // TODO: key
          return (
            <>
              <span
                className={classnames(styles.step, {
                  [styles.active]: currentStep === index,
                })}>
                {index + 1}
              </span>
              {index < childrenArray.length - 1 && (
                <span className={styles["step-separator"]} />
              )}
            </>
          );
        })}
      </div>
      <div className={styles.content}>
        {cloneElement(childrenArray[currentStep], {
          onNext,
          onPrevious,
          key: currentStep,
        })}
      </div>
      {controls || (
        <div className="flex">
          {currentStep < childrenArray.length - 1 && (
            <Button onClick={() => setCurrentStep(currentStep + 1)}>
              Next
            </Button>
          )}
          {currentStep > 0 && (
            <Button onClick={() => setCurrentStep(currentStep - 1)}>
              Previous
            </Button>
          )}
        </div>
      )}
    </StepperContext.Provider>
  );
};

export const Next = ({
  bgColor,
  shouldPrevent,
  textColor,
  children,
  isDisabled,
}) => {
  const { isLastStep, currentStep, next } = useContext(StepperContext);

  return (
    <Button
      bgColor={!isDisabled && bgColor}
      textColor={!isDisabled && textColor}
      disabled={isDisabled || isLastStep}
      onClick={() => {
        if (shouldPrevent(currentStep)) {
          return;
        }
        next();
      }}>
      {children || "Next"}
    </Button>
  );
};

export const Previous = ({ bgColor, textColor, children, isDisabled }) => {
  const { isFirstStep, previous } = useContext(StepperContext);

  return (
    <Button
      bgColor={bgColor}
      textColor={textColor}
      disabled={isDisabled || isFirstStep}
      onClick={previous}>
      {children || "Previous"}
    </Button>
  );
};

Stepper.Next = Next;
Stepper.Previous = Previous;

export default Stepper;
