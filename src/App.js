import { useCallback, useMemo, useState } from "react";

import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
import CheckboxGroup from "./components/CheckboxGroup";
import Form from "./components/Form";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [columns, setColumns] = useState(1);

  const options = useMemo(
    () => [
      { label: "select all", value: "select all" },
      { label: "aaa", value: "aaa" },
      { label: "bbb", value: "bbb" },
      { label: "ccc", value: "ccc" },
      { label: "ddd", value: "ddd" },
      { label: "eee", value: "eee" },
      { label: "fff", value: "fff" },
      { label: "ggg", value: "ggg" },
      { label: "hhh", value: "hhh" },
      { label: "iii", value: "iii" },
    ],
    []
  );

  const handleCheckboxChange = useCallback(
    (value) => {
      if (selectedItems.includes(value)) {
        setSelectedItems(selectedItems.filter((item) => item !== value));
      } else {
        setSelectedItems([...selectedItems, value]);
      }
    },
    [selectedItems]
  );

  const handleSelectAll = useCallback(() => {
    if (selectedItems.length === options.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(options.map((option) => option.value));
    }
  }, [options, selectedItems.length]);

  const handleMinusColumns = useCallback(() => {
    if (columns === 1) return;
    setColumns((previousColumns) => previousColumns - 1);
  }, [columns]);

  const handlePlusColumns = useCallback(() => {
    if (columns === options.length) return;
    setColumns((previousColumns) => previousColumns + 1);
  }, [columns, options]);

  return (
    <div className="flex flex-col items-center">
      <Form>
        <CheckboxGroup
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
