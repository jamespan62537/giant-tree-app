import { useCallback, useMemo } from "react";

import Checkbox from "../Checkbox";
import Label from "../Label";

type OptionType = {
  label: string,
  value: string
}

type CheckboxGroupProps = {
  isSelectAll: boolean,
  selectedItems: string[],
  options: OptionType[],
  columns: number,
  onSelect: (event: string) => void,
  onSelectAll: () => void,
}

const CheckboxGroup = ({ isSelectAll, selectedItems, options, columns, onSelect, onSelectAll }: CheckboxGroupProps) => {
  const sortArrayWithRowDirection = useCallback(
    (emptyArray: OptionType[][], rows: number) => {
      let extraColumn = options.length % columns;
      // control the current column position in a row
      let columnPointer = 0;
      // control the current row position
      let rowPointer = 0;
      // track current option
      let optionsPointer = 0;
      // record rows count in each loop
      let totalRows = rows;

      while (optionsPointer < options.length) {
        // initial rowPointer in each loop
        rowPointer = 0;
        while (rowPointer < totalRows) {
          emptyArray[rowPointer][columnPointer] = options[optionsPointer];
          optionsPointer++;
          rowPointer++;
        }
        if (extraColumn > 0) {
          extraColumn--;
          totalRows = extraColumn === 0 ? rows - 1 : rows;
        }
        columnPointer++;
      }
      return emptyArray;
    },
    [columns, options]
  );

  const sortedOptions = useMemo(() => {
    // calculate how many rows we need
    const rows = Math.ceil(options.length / columns);

    // create emptyArray
    const emptyArray: OptionType[][] = Array.from({ length: rows }, () => Array.from({ length: columns }));

    const resultOptions = sortArrayWithRowDirection(emptyArray, rows);

    return resultOptions;
  }, [columns, options, sortArrayWithRowDirection]);

  const handleCheckboxChange = useCallback(
    (value: string) => {
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
              {item?.value && <Label>
                <Checkbox checked={rowIndex === 0 && columnIndex === 0 ? isSelectAll : selectedItems.includes(item.value)} onChange={() => handleCheckboxChange(item.value)} />
                {item.label}
              </Label>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
