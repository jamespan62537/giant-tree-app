import { useCallback, useMemo } from "react";

import Checkbox from "../Checkbox";
import Label from "../Label";

const CheckboxGroup = ({ selectedItems, options, columns, onSelect, onSelectAll }) => {
  // TODO: Need to sort the array with col direction
  const sortArrayWithRowDirection = useCallback(
    (emptyArray) => {
      let rowsPointer = 0;
      let columnsPointer = 0;
      let optionsPointer = 0;

      while (optionsPointer < options.length) {
        columnsPointer = 0;
        while (columnsPointer < columns) {
          emptyArray[rowsPointer][columnsPointer] = options[optionsPointer];
          columnsPointer++;
          optionsPointer++;
        }
        rowsPointer++;
      }

      return emptyArray;
    },
    [columns, options]
  );

  const sortedOptions = useMemo(() => {
    // first: calculate how many rows we need
    // second: use while loop to put option in options into the result array
    const rows = Math.ceil(options.length / columns);
    const emptyArray = Array.from({ length: rows }, () => Array.from({ length: columns }));
    const arrayWithColumn = sortArrayWithRowDirection(emptyArray);
    return arrayWithColumn;
  }, [columns, options, sortArrayWithRowDirection]);

  const handleCheckboxChange = useCallback(
    (value) => {
      if (value === "select all") {
        onSelectAll();
      } else {
        onSelect(value);
      }
    },
    [onSelect, onSelectAll]
  );

  return (
    <div className="h-full w-full">
      {sortedOptions.map((option, rowIndex) => (
        <div className="flex" key={`row-${rowIndex}`}>
          {option.map((item, columnIndex) => (
            <div className="flex w-1/2" key={`column-${columnIndex}`}>
              {item?.label && (
                <Label>
                  <Checkbox checked={selectedItems.includes(item.value)} onChange={() => handleCheckboxChange(item.value)} />
                  {item?.label}
                </Label>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
