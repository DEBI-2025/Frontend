import { useState, useEffect } from "react";
import styled from "styled-components";
import ProgressSection from "../components/ProgressBar";
import QuizNavigation from "../components/quizNavigation";
import QuizCard from "../components/QuizCard";
import DependentDropDowns from "../components/DependentDropDowns";
import Levels from "../components/Levels";
import Cookies from "js-cookie";
import person from "../images/person.png";
import QuizResultPage from "./QuizResultPage";

const Quiz = () => {
  const [timeLeft, setTimeLeft] = useState(1800);
  const [selectedField, setSelectedField] = useState(null);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResults, setQuizResults] = useState(null);

  useEffect(() => {
    if (quizStarted && !quizCompleted) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            handleQuizSubmit();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [quizStarted, quizCompleted]);

  const fetchQuizQuestions = async () => {
    if (!selectedField || selectedTopics.length === 0 || !selectedLevel) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const token = Cookies.get("innerViews-access-token");

      if (!token) {
        throw new Error("No access token found. Please log in.");
      }

      const queryParams = new URLSearchParams();
      queryParams.append("field", selectedField.label);
      queryParams.append("topic", selectedTopics[0].label);
      queryParams.append("level", selectedLevel.name);

      const response = await fetch(
        `http://localhost:8000/api/quiz/?${queryParams.toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`);
      }

      const data = await response.json();
      setQuizQuestions(data);
      setUserAnswers(new Array(data.length).fill(null));
      setQuizStarted(true);
    } catch (err) {
      setError(
        err.message || "Failed to fetch quiz questions. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSelectionChange = ({ field, topics }) => {
    setSelectedField(field);
    setSelectedTopics(topics);
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleChoiceSelect = (choice) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = choice;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmitAnswer = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      goToNext();
    } else {
      if (window.confirm("This is the last question. Submit the quiz?")) {
        handleQuizSubmit();
      }
    }
  };

  const handleQuizSubmit = async () => {
    try {
      setLoading(true);

      const answersToSubmit = quizQuestions.map((question, index) => ({
        text: question.text,
        label: userAnswers[index]?.label || null,
      }));

      const filteredAnswers = answersToSubmit.filter(
        (answer) => answer.label !== null
      );

      const token = Cookies.get("innerViews-access-token");

      const response = await fetch("http://localhost:8000/api/getscore/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
        body: JSON.stringify(filteredAnswers),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`);
      }

      const results = await response.json();
      setQuizResults(results);
      setQuizCompleted(true);
    } catch (err) {
      setError(err.message || "Failed to submit quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleStartQuiz = () => {
    fetchQuizQuestions();
  };

  const handleResetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setQuizQuestions([]);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setTimeLeft(1800);
    setQuizResults(null);
  };

  const progressPercentage =
    quizQuestions.length > 0
      ? (currentQuestionIndex / quizQuestions.length) * 100
      : 0;

  if (!quizStarted) {
    return (
      <Container>
        <SelectionWrapper>
          <Title>Quiz Setup</Title>
          <SelectionGrid>
            <DependentDropDowns
              onSelectionChange={handleSelectionChange}
              selectedField={selectedField}
              selectedTopics={selectedTopics}
            />
            <LevelWrapper>
              <Levels onLevelChange={handleLevelChange} />
            </LevelWrapper>
          </SelectionGrid>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {/* Check if all selections are made before showing the Start Quiz button */}
          {!selectedField || selectedTopics.length === 0 || !selectedLevel ? (
            <NoSelection>
              <img
                src={person}
                alt="Select options"
                style={{ width: "200px", opacity: "0.5" }}
              />
              <InfoText>
                Please select field, topic, and level to start the quiz!
              </InfoText>
            </NoSelection>
          ) : (
            <StartButton onClick={handleStartQuiz} disabled={loading}>
              {loading ? "Loading..." : "Start Quiz"}
            </StartButton>
          )}
        </SelectionWrapper>
      </Container>
    );
  }

  if (quizCompleted && quizResults) {
    return (
      <Container>
        <QuizResultPage results={quizResults} onRetake={handleResetQuiz} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>{error}</ErrorMessage>
        <StartButton onClick={handleResetQuiz}>Try Again</StartButton>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <LoadingContainer>
          <LoadingCircle />
          <LoadingText>Loading quiz...</LoadingText>
        </LoadingContainer>
      </Container>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex];

  return (
    <Container>
      <ProgressSection
        progressPercentage={progressPercentage}
        timeLeft={timeLeft}
      />

      {currentQuestion && (
        <QuizCard
          questionText={`${currentQuestionIndex + 1} - ${currentQuestion.text}`}
          choices={currentQuestion.choices.map((choice) => ({
            label: choice.label,
            text: choice.choice_text,
          }))}
          selectedChoice={currentAnswer}
          onChoiceChange={handleChoiceSelect}
          onSubmit={handleSubmitAnswer}
        />
      )}

      <NavigationFooter>
        <QuizNavigation
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={quizQuestions.length}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />

        <SubmitQuizButton onClick={handleQuizSubmit}>
          Submit Quiz
        </SubmitQuizButton>
      </NavigationFooter>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 89vh;
  width: 100%;
  font-family: Arial, sans-serif;
  background-color: #f9fafb;
`;

const SelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  color: #6a0dad;
  margin-bottom: 2rem;
  text-align: center;
`;

const SelectionGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LevelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NoSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const InfoText = styled.p`
  color: #6b7280;
  font-size: 1rem;
  text-align: center;
`;

const StartButton = styled.button`
  padding: 0.75rem 2rem;
  margin-top: 2rem;
  background: linear-gradient(to right, #6a0dad, #af73cf, #f7c5cc);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const SubmitQuizButton = styled(StartButton)`
  margin-top: 1rem;
`;

const NavigationFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding-bottom: 2rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const LoadingCircle = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid #6a0dad;
  border-top: 8px solid transparent;
  border-radius: 50%;
  animation: rotate 1s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  color: #6a0dad;
  font-size: 1rem;
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  background-color: #fee2e2;
  color: #ef4444;
  border-radius: 8px;
  font-size: 0.875rem;
  text-align: center;
`;

export default Quiz;
