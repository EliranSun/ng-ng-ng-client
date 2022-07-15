import { useState } from "react";
import classNames from "classnames";
import { Input, InputType } from "../../../atoms";
import { FormatMessage } from "../../../../lib/intl";

import styles from "../Fields.module.scss";

const ONE_HUNDRED_YEARS_MS = 100 * 365 * 24 * 60 * 60 * 1000;
const EIGHTEEN_YEARS_MS = 1000 * 60 * 60 * 24 * 365 * 18;

const now = new Date().getTime();
const maxValidDate = new Date(now - EIGHTEEN_YEARS_MS);
const minValidDate = new Date(now - ONE_HUNDRED_YEARS_MS);

const generateYearsBetweenDates = () => {
  const years = [];
  const maxYear = maxValidDate.getFullYear();
  const minYear = minValidDate.getFullYear();

  for (let i = maxYear; i > minYear; i--) {
    years.push(i);
  }
  return years;
};

const getMonthFromString = (mon) => {
  return new Date(Date.parse(mon + " 1, 2012")).getMonth();
};

const validateDate = ({ day, month, year }) => {
  const date = new Date(Number(year), getMonthFromString(month), Number(day));

  if (isNaN(date.getTime())) {
    return { timestamp: null, isValid: false };
  }

  // console.log({
  //   "date.getFullYear()": date.getFullYear(),
  //   year: Number(year),
  //   "date.getMonth()": date.getMonth(),
  //   month: getMonthFromString(month),
  //   "date.getDate()": date.getDate(),
  //   day: Number(day),
  // });

  if (
    date.getFullYear() === Number(year) &&
    date.getMonth() === getMonthFromString(month) &&
    date.getDate() === Number(day)
  ) {
    return { timestamp: date.getTime(), isValid: true };
  }

  return { timestamp: date.getTime(), isValid: false };
};

const Birthdate = ({ onChange = () => {} }) => {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  // useEffect(() => {
  //   if (day && month && year) {
  //     const { timestamp, isValid } = validateDate({ day, month, year });
  //     onChange(timestamp, isValid);
  //   }
  // }, [day, month, year]);

  const validateDateInput = ({ day, month, year }) => {
    if (!day || !month || !year) {
      return true;
    }

    const { timestamp, isValid } = validateDate({ day, month, year });
    onChange(timestamp, isValid);
    return isValid;
  };

  // TODO: refactor this, logic is a bit complex and this is incomplete because validate is not being triggered
  // for all this. Maybe multiple inputs is incorrect here, and we should use a single input for all of them, as date is a single value
  // techincally speaking.
  return (
    <div className="bg-co-grey p-r-20 p-l-20 p-t-8 p-b-16 m-b-16">
      <p className="m-0">
        <FormatMessage id="fields.birthdate" />
      </p>
      <div className={styles.birthdate}>
        <div className={classNames("p-r-20 p-l-20", styles.date)}>
          <Input
            placeholder="Day"
            validate={(dayValue) =>
              validateDateInput({ day: dayValue, month, year })
            }
            type={InputType.SELECT}
            onChange={setDay}
            errors={["Indalid date (day)"]}
            options={Array.from(Array(31).keys()).map((i) => i + 1)}
          />
          <Input
            placeholder="Month"
            validate={(monthValue) =>
              validateDateInput({ day, month: monthValue, year })
            }
            type={InputType.SELECT}
            onChange={setMonth}
            options={Array.from(Array(12).keys()).map((i) => {
              const date = new Date(2009, i, 10); // 2009-11-10
              const month = date.toLocaleString("default", { month: "long" });
              return month;
            })}
            errors={["Indalid date (month)"]}
          />
          <Input
            placeholder="Year"
            validate={(yearValue) =>
              validateDateInput({ day, month, year: yearValue })
            }
            type={InputType.SELECT}
            onChange={setYear}
            errors={["Indalid date (year)"]}
            options={generateYearsBetweenDates()}
          />
        </div>
        <span className={styles["min-age"]}>18+</span>
      </div>
    </div>
  );
};

export default Birthdate;
