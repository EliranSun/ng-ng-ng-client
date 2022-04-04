import { useState, useContext } from "react";
import { Register } from "../../Organisms";
import { Stepper, Fields } from "../../Molecules";
import { useTheme } from "../../../hooks";
import { STEP_ONE, STEP_TWO, STEP_THREE } from "../../../constants";
import { FlowContext } from "../../Organisms/Flow";

const FieldNames = {
	[STEP_ONE]: [
		"Username",
		"FirstName",
		"MiddleName",
		"LastName",
		"Birthdate",
		"Nif",
		"Fiscal",
	],
	[STEP_TWO]: [
		"Nationality",
		"Email",
		"PhoneNumber",
		"Password",
		"RepeatPassword",
		"Currency",
	],
	[STEP_THREE]: [
		"Gender",
		"Country",
		"Postcode",
		"Address",
		"City",
		"PromotionalContent",
		"TermsAndPolicy",
	],
};

const Step = ({ stepName, onChange, additionalComponents }) => {
	return (
		<>
			{FieldNames[stepName].map((fieldName) => {
				const Field = Fields[fieldName];
				return (
					<Field
						key={fieldName}
						onChange={(value, isValid) =>
							onChange({ value, isValid, fieldName })
						}
					/>
				);
			})}
			{additionalComponents}
		</>
	);
};

const SpainRegister = ({ isOpen, onClose, stepIndex, children }) => {
	const { next, prev } = useContext(FlowContext);
	const [fields, setFields] = useState({});
	const theme = useTheme();

	const handleFieldChange = ({ value, isValid, fieldName, stepName }) => {
		// TODO: lodash this
		setFields({
			...fields,
			[stepName]: {
				fields: {
					...fields[stepName]?.fields,
					[fieldName]: { value, isValid },
				},
			},
		});
	};

	// TODO: not sure about the multiple theme props... too much? need to think about that.
	// exporting stepper buttons will eliminate this plus the need for passing some validate input
	// to render the correct button state (in case form is not valid)
	return (
		<Register
			isOpen={isOpen}
			onClose={onClose}
			headerBgColor={theme.PRIMARY}
			headerTextColor={theme.PRIMARY_TEXT}
		>
			<Stepper
				stepIndex={stepIndex} // TODO: better
				controls={
					<div className="flex flex-col">
						<Stepper.Next
							shouldPrevent={(currentStepIndex) => {
								let stepName;
								switch (currentStepIndex) {
									case 0:
										stepName = STEP_ONE;
										break;
									case 1:
										stepName = STEP_TWO;
										break;
									case 2:
										stepName = STEP_THREE;
										break;

									default:
										break;
								}

								if (!Object.values(fields).length) {
									return true;
								}

								const fieldsRequired = Object.keys(FieldNames[stepName]).length;
								const fieldsArr = Object.values(fields[stepName]?.fields);
								const fieldsInvalid =
									fieldsArr.filter((field) => !field.isValid).length > 0;

								const fieldsMissing = fieldsArr.length < fieldsRequired;

								console.log({
									fieldsArr,
									fieldsRequired,
									fieldsInvalid,
									fieldsMissing,
								});

								return fieldsMissing || fieldsInvalid;
							}}
							bgColor={theme.BUTTON_PRIMARY}
							textColor={theme.BUTTON_PRIMARY_TEXT}
						/>
						<Stepper.Previous
							bgColor={theme.BUTTON}
							textColor={theme.BUTTON_TEXT}
						/>
					</div>
				}
			>
				<Step
					stepName={STEP_ONE}
					onChange={({ value, isValid, fieldName }) =>
						handleFieldChange({ value, fieldName, isValid, stepName: STEP_ONE })
					}
					additionalComponents={[
						<div className="m-8 p-r-20 p-l-20 text-center">
							<a href="/login">Already have an account?</a>
						</div>,
					]}
				/>
				<Step
					stepName={STEP_TWO}
					onChange={({ value, isValid, fieldName }) =>
						handleFieldChange({ value, fieldName, isValid, stepName: STEP_TWO })
					}
				/>
				<Step
					stepName={STEP_THREE}
					onChange={({ value, isValid, fieldName }) =>
						handleFieldChange({
							value,
							fieldName,
							isValid,
							stepName: STEP_THREE,
						})
					}
				/>
			</Stepper>
			{/* // TODO: stepper buttons that will to exactly that */}
			<button onClick={next}>NEXT</button>
			<button onClick={prev}>PREV</button>
		</Register>
	);
};

export default SpainRegister;
