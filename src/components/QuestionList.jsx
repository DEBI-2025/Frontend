import { useState, useEffect } from "react";
import Question from "./Questions.jsx";
import styled, { keyframes } from "styled-components";
import MultiplePages from "./MultiplePages";
import Cookies from "js-cookie";
import person from "../images/person.png";
import man from "../images/man.PNG";

function QuestionList({ field, topics, level, endpoint  ,category }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const shouldFetch = category ||(field && topics.length > 0 && level);

    if (!shouldFetch) {
      setQuestions([]);
      setLoading(false);
      return;
    }

    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = Cookies.get("innerViews-access-token");

        if (!token) {
          throw new Error("No access token found. Please log in.");
        }

        const queryParams = new URLSearchParams();
        if(category ){
          queryParams.append("category", category)
        }else{
        queryParams.append("field", field);
        topics.forEach((topic) => queryParams.append("topics", topic));
        queryParams.append("level", level);
        }
        const response = await fetch(`${endpoint}?${queryParams.toString()}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
        });

        if (!response.ok)
          throw new Error(`HTTP error! Status ${response.status}`);

        const data = await response.json();

        if (Array.isArray(data)) {
          setQuestions(data);
          setTotalPages(
            data.length ? Math.ceil(data.length / itemsPerPage) : 1
          );
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        setError(err.message || "Failed to load questions. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [endpoint, field, topics, level,category]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // console.log("selected field", field);
  // console.log("selected topics", topics);
  // console.log("selected level", level);

  if (!category &&(!field || topics.length === 0 || !level)) {
    return (
      <NoQuestion>
        <ChooseImg src={man} />{" "}
        <ChooseText>
        {!category ? "Select an HR or Behavioral field to explore the available questions" : "Please select field, topic, and level to view questions!"}
        </ChooseText>
      </NoQuestion>
    );
  }
  if (loading)
    return (
      <LoadingContainer>
        <LoadingCircle />
      </LoadingContainer>
    );

  if (error) return <ErrorText>{error}</ErrorText>;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);

  return (
    <Wrapper>
      {currentQuestions.length > 0 ? (
        currentQuestions.map((question) => (
          <Question
            key={question.id}
            questionText={question.text}
            answer={question.answer}
            isFlagged={question.is_flagged}
           {...(question.field && { field: question.field.name })}
           {...(question.topic && {topic:question.topic.name})}
           {...(question.level && {level:question.level.name})}
            
          />
        ))
      ) : (
        <p>No questions available.</p>
      )}
      {totalPages > 1 && (
        <MultiplePages
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </Wrapper>
  );
}

export default QuestionList;

const ErrorText = styled.p`
  color: red;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 90%;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 29.5rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingCircle = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid #6a0dad;
  border-top: 8px solid transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
const NoQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 8rem;
  align-items: center;
`;
const ChooseImg = styled.img`
  width: 20rem;
  opacity: 50%;
`;
const ChooseText = styled.p`
  color: grey;
  font-size: 1.1rem;
  /* font-weight: bold; */
`;
