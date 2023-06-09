import { useCallback, useMemo, useState } from "react";

import CheckboxGroup from "./components/CheckboxGroup";
import Form from "./components/Form";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const options = useMemo(
    () => [
      { label: "select all", value: "select all" },
      { label: "aaa", value: "aaa" },
      { label: "bbb", value: "bbb" },
      { label: "ccc", value: "ccc" },
      { label: "ddd", value: "ddd" },
      { label: "eee", value: "eee" },
      { label: "fff", value: "fff" },
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

  return (
    <Form>
      <CheckboxGroup
        selectedItems={selectedItems}
        options={options}
        columns={2}
        defaultSelected={selectedItems}
        onSelect={handleCheckboxChange}
        onSelectAll={handleSelectAll}
      />
    </Form>
  );
}

export default App;
