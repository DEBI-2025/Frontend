import { useState, useEffect } from "react";
import Select from "react-select";
import styled from "styled-components";
import Cookies from "js-cookie";

function DependentDropDowns({
  onSelectionChange,
  selectedField,
  selectedTopics,
}) {
  const [fields, setFields] = useState([]);
  const [topics, setTopics] = useState([]);

  const fetchData = async (url, setDataCallback) => {
    try {
      const token = Cookies.get("innerViews-access-token");

      if (!token) {
        throw new Error("No access token found. Please log in.");
      }

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setDataCallback(
        data.map((item) => ({
          value: item.id,
          label: item.name,
        }))
      );
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  };

  useEffect(() => {
    fetchData("http://localhost:8000/api/fields/", setFields);
  }, []);

  useEffect(() => {
    if (selectedField) {
      const fetchTopics = async () => {
        try {
          const token = Cookies.get("innerViews-access-token");
          if (!token) {
            throw new Error("No access token found. Please log in.");
          }

          const response = await fetch(
            `http://localhost:8000/api/topics/?field=${selectedField.value}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `JWT ${token}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();

          const filteredTopics = data.filter(
            (topic) => topic.field.id === selectedField.value
          );

          setTopics(
            filteredTopics.map((topic) => ({
              value: topic.id,
              label: topic.name,
            }))
          );
        } catch (error) {
          console.error("Error fetching topics:", error);
        }
      };

      fetchTopics();
    } else {
      setTopics([]);
    }
  }, [selectedField]);

  const handleFieldChange = (field) => {
    onSelectionChange({ field, topics: [] });
  };

  const handleTopicChange = (topics) => {
    onSelectionChange({ field: selectedField, topics });
  };

  return (
    <Wrapper>
      <SelectDiv>
        <SelectLabel>Select Field:</SelectLabel>
        <Select
          options={fields}
          value={selectedField}
          onChange={handleFieldChange}
          isClearable
        />
      </SelectDiv>

      <SelectDiv>
        <SelectLabel>Select Topics:</SelectLabel>
        <Select
          options={topics}
          value={selectedTopics}
          onChange={handleTopicChange}
          isMulti
          isClearable
          isDisabled={!selectedField}
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
