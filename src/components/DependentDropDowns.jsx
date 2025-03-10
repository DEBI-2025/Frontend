import { useState } from "react";
import Select from "react-select";
import styled from "styled-components";

function DependentDropDowns() {
  const topics = [
    {
      value: "science",
      label: "Science",
      fields: ["Physics", "Chemistry", "Biology", "Astronomy"],
    },
    {
      value: "technology",
      label: "Technology",
      fields: [
        "Software Development",
        "Hardware Engineering",
        "Data Science",
        "AI",
      ],
    },
    {
      value: "arts",
      label: "Arts",
      fields: ["Painting", "Music", "Literature", "Sculpture"],
    },
    {
      value: "business",
      label: "Business",
      fields: ["Marketing", "Finance", "Management", "Sales"],
    },
  ];

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedFields, setSelectedFields] = useState([]);

  const handleTopicChange = (selectedOption) => {
    setSelectedTopic(selectedOption);
    setSelectedFields([]);
  };

  const handleFieldChange = (selectedOptions) => {
    setSelectedFields(selectedOptions);
  };

  const getFieldOptions = () => {
    if (!selectedTopic) {
      return [];
    }
    return selectedTopic.fields.map((field) => ({
      value: field.toLowerCase().replace(/ /g, "-"),
      label: field,
    }));
  };

  return (
    <Wrapper>
      <SelectDiv>
        <SelectLabel>Select Topic:</SelectLabel>
        <Select
          options={topics}
          value={selectedTopic}
          onChange={handleTopicChange}
          isClearable
        />
      </SelectDiv>

      <SelectDiv>
        <SelectLabel>Select Fields:</SelectLabel>
        <Select
          options={getFieldOptions()}
          value={selectedFields}
          onChange={handleFieldChange}
          isMulti
          isClearable
          isDisabled={!selectedTopic}
        />
      </SelectDiv>
    </Wrapper>
  );
}

export default DependentDropDowns;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  margin-top: 2rem;
`;
const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const SelectLabel = styled.label`
  color: #6a0dad;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;
