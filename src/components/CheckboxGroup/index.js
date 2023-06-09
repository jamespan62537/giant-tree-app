import { useCallback, useMemo } from "react";

const CheckboxGroup = ({ selectedItems, options, columns, defaultSelected, onSelect, onSelectAll }) => {
  // use memo to avoid re-render
  const renderOptions = useMemo(() => {
    // first: calculate how many rows we need
    // second: use while loop to put option in options into the result array
    const rows = Math.ceil(options.length / columns);
    const result = Array.from({ length: rows }, () => Array.from({ length: columns }));

    let rowsPointer = 0;
    let columnsPointer = 0;
    let optionsPointer = 0;

    while (optionsPointer < options.length) {
      columnsPointer = 0;
      while (columnsPointer < columns) {
        result[rowsPointer][columnsPointer] = options[optionsPointer];
        columnsPointer++;
        optionsPointer++;
      }
      rowsPointer++;
    }
    return result;
  }, [columns, options]);

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

  console.log("renderOptions", renderOptions);

  return (
    <div className="h-full w-full">
      {renderOptions.map((option, rowIndex) => (
        <div className="flex" key={`row-${rowIndex}`}>
          {option.map((item, columnIndex) => (
            <div className="flex w-1/2" key={`column-${columnIndex}`}>
              {item?.label && (
                <label>
                  <input type="checkbox" checked={selectedItems.includes(item.value)} onChange={() => handleCheckboxChange(item.value)} />
                  {item?.label}
                </label>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
