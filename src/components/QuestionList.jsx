import { useState, useEffect } from "react";
import Question from "./Questions.jsx";
import styled, { keyframes } from "styled-components";
import MultiplePages from "./MultiplePages";
import Cookies from "js-cookie";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = Cookies.get("innerViews-access-token");

        if (!token) {
          throw new Error("No access token found. Please log in.");
        }

        const response = await fetch("http://localhost:8000/api/questions/", {
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
          // console.log(questions);
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
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (loading)
    return (
      <LoadingContainer>
        <LoadingCircle />
      </LoadingContainer>
    );
  // console.log("questions:", questions);

  if (error) return <ErrorText>{error}</ErrorText>;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);
  // console.log(questions.id)
  return (
    <Wrapper>
      {currentQuestions.length > 0 ? (
        currentQuestions.map((question) => (
          <Question
            key={question.id}
            questionText={question.text}
            answer={question.answer}
            isFlagged={question.is_flagged}
            field={question.field}
            topic={question.topic}
            level={question.level}
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
  /* background-color: red; */
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
