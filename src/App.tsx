import { useEffect, useCallback, useMemo, useState } from "react";

import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
import CheckboxGroup from "./components/CheckboxGroup";
import Form from "./components/Form";

function App() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [columns, setColumns] = useState(2);
  const [isSelectAll, setIsSelectAll] = useState(false);

  // separate select all and items option
  const defaultOption = useMemo(() => [{ label: "select all", value: "select all" }], [])
  const optionItems = useMemo(() => [{ label: "aaa", value: "aaa" },
  { label: "bbb", value: "bbb" },
  { label: "ccc", value: "ccc" },
  { label: "ddd", value: "ddd" },
  { label: "eee", value: "eee" },
  { label: "fff", value: "fff" },
  { label: "ggg", value: "ggg" },
  { label: "hhh", value: "hhh" },
  { label: "iii", value: "iii" }], []);

  const options = useMemo(() => [...defaultOption, ...optionItems], [defaultOption, optionItems])

  const handleSelectAll = useCallback(() => {
    // compare selectedItem and optionItems while clicking select all checkbox
    if (selectedItems.length === optionItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(optionItems.map((option) => option.value));
    }
  }, [optionItems, selectedItems]);

  const handleCheckboxChange = useCallback(
    (value: string) => {
      if (selectedItems.includes(value)) {
        setSelectedItems(selectedItems.filter((item) => item !== value));
      } else {
        setSelectedItems([...selectedItems, value]);
      }
    },
    [selectedItems]
  );

  // Minus column
  const handleMinusColumns = useCallback(() => {
    if (columns === 1) return;
    setColumns((previousColumns) => previousColumns - 1);
  }, [columns]);

  // Plus column
  const handlePlusColumns = useCallback(() => {
    if (columns === options.length) return;
    setColumns((previousColumns) => previousColumns + 1);
  }, [columns, options]);

  // track selected item
  useEffect(() => {
    if (selectedItems.length === optionItems.length && !isSelectAll) {
      setIsSelectAll(true);
    } if (selectedItems.length < optionItems.length && isSelectAll) {
      setIsSelectAll(false);
    }
  }, [selectedItems, optionItems, handleSelectAll, isSelectAll])

  return (
    <div className="flex flex-col items-center">
      <Form>
        <CheckboxGroup
          isSelectAll={isSelectAll}
          selectedItems={selectedItems}
          options={options}
          columns={columns}
          onSelect={handleCheckboxChange}
          onSelectAll={handleSelectAll}
        />
      </Form>
      <ButtonGroup prefix="columns">
        <Button title="-" onClick={handleMinusColumns} />
        <Button title={columns} />
        <Button title="+" onClick={() => handlePlusColumns()} />
      </ButtonGroup>
    </div>
  );
}

export default App;
