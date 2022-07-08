import React, { useState } from "react";
import Box from "../Box/Box";
import BalanceInput from "./BalanceInput";
import TextFieldComp from "./TextField";

export default {
  title: "Components/BalanceInput",
  component: BalanceInput,
  argTypes: {},
};

export const Default: React.FC = () => {
  const [decimalValue, setDecimalValue] = useState(1.43333);
  const [numericValue, setNumericValue] = useState(5);

  const currencyValue = (input: number) => {
    return `~${(input * 1.3).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} USD`;
  };

  const handleDecimalChange = (input) => {
    setDecimalValue(input);
  };

  const handleNumericChange = (input) => {
    setNumericValue(input);
  };

  return (
    <Box width="300px">
      <BalanceInput
        onUserInput={handleDecimalChange}
        value={decimalValue}
        currencyValue={currencyValue(decimalValue)}
        placeholder="0.0"
        mb="32px"
      />
      <BalanceInput
        value={decimalValue * 1.5}
        onUserInput={handleDecimalChange}
        currencyValue={currencyValue(decimalValue * 1.5)}
        placeholder="1.5"
        isWarning
        mb="32px"
      />
      <BalanceInput
        value={numericValue}
        onUserInput={handleNumericChange}
        inputProps={{ inputMode: "numeric" }}
        currencyValue={currencyValue(numericValue)}
        placeholder="0"
        mb="32px"
      />
    </Box>
  );
};

export const UnitDisplay: React.FC = () => {
  const CNR_PRICE = 69;
  const [CNRValue, setCNRValue] = useState("1006.086956");

  const CNRToUSD = (input: string) => {
    const convertedToUSD = parseFloat(input) * CNR_PRICE;
    return `~${convertedToUSD.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} USD`;
  };

  const handleCNRChange = (input: string) => {
    setCNRValue(input);
  };

  return (
    <>
      <Box width="300px" mb="24px">
        <BalanceInput
          onUserInput={handleCNRChange}
          value={CNRValue}
          currencyValue={CNRToUSD(CNRValue)}
          placeholder="0.0"
          unit="CNR"
        />
      </Box>
      {/* Long token names with spaces */}
      <Box width="300px">
        <BalanceInput
          onUserInput={handleCNRChange}
          value={CNRValue}
          currencyValue="2854.66 BADGER-HOTCROSS LP"
          placeholder="0.0"
          unit="CNR-BNB LP"
        />
      </Box>
    </>
  );
};

export const SiwtchUnits: React.FC = () => {
  const CNR_PRICE = 69;
  const [editingUnit, setEditingUnit] = useState<"CNR" | "USD">("CNR");
  const conversionUnit = editingUnit === "CNR" ? "USD" : "CNR";
  const [values, setValues] = useState({
    CNR: "1006.086957",
    USD: `${1006.086957 * CNR_PRICE}`,
  });

  const currencyValue = !Number.isNaN(parseFloat(values[conversionUnit]))
    ? parseFloat(values[conversionUnit]).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "0.00";

  const switchEditingUnits = () => {
    const editingUnitAfterChange = editingUnit === "CNR" ? "USD" : "CNR";
    // This is needed to persist same value as shown for currencyValue after switching
    // otherwise user will see lots of decimals
    const valuesAfterChange = { ...values };
    valuesAfterChange[editingUnitAfterChange] = !Number.isNaN(parseFloat(values[conversionUnit]))
      ? parseFloat(values[conversionUnit]).toFixed(2)
      : "0.00";
    setValues(valuesAfterChange);
    setEditingUnit(editingUnitAfterChange);
  };

  const handleCNRChange = (input: string) => {
    const inputAsFloat = parseFloat(input);
    if (editingUnit === "CNR") {
      setValues({
        CNR: input,
        USD: Number.isNaN(inputAsFloat) ? "" : `${inputAsFloat * CNR_PRICE}`,
      });
    } else {
      setValues({
        CNR: Number.isNaN(inputAsFloat) ? "" : `${inputAsFloat / CNR_PRICE}`,
        USD: input,
      });
    }
  };

  return (
    <Box width="300px">
      <BalanceInput
        onUserInput={handleCNRChange}
        value={values[editingUnit]}
        currencyValue={`~${currencyValue} ${conversionUnit}`}
        placeholder="0.0"
        unit={editingUnit}
        isWarning={!values[editingUnit] || parseFloat(values[editingUnit]) <= 0}
        switchEditingUnits={switchEditingUnits}
      />
    </Box>
  );
};

export const Textfield: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Box width="300px">
      <TextFieldComp label="Label" value={value} placeholder="Placeholder" onUserInput={setValue} />
    </Box>
  );
};
