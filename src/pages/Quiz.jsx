import { useState, useEffect } from "react";
import styled from "styled-components";
import ProgressSection from "../components/ProgressBar";
import QuizNavigation from "../components/quizNavigation";
import QuizCard from "../components/QuizCard";
import QuizModel from "../components/QuizModel";
import useQuizLogic from "../logic/quiz/useQuizLogic";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(25);
  const [response, setResponse] = useState("");
  const [timeLeft, setTimeLeft] = useState(1800);
  const [showModal, setShowModal] = useState(true);
  //custom hooks for quiz
  const { scoreData, submitQuiz, loading, error } = useQuizLogic();
  

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setResponse("");
    }
  };

  const goToNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setResponse("");
    }
  };

  const handleSubmit = async() => {
    try {
      if (currentQuestion === totalQuestions) {
        // This is the array you want to send replace with the answer 
        const answerPayload = [
          
            {
                "text": "What is the primary goal of DevOps?",
                
                        "label": "B"
                
            },
            {
                "text": "Which of the following is a core principle of DevOps?",
                        "label": "C"
            },
            {
                "text": "What does CI/CD stand for?",
                
                        "label": "C"
        } ,
        {
          "text": "Which of the following is a popular version control system used in DevOps?",
                  "label": "A"
      },
      {
        "text": "What is Infrastructure as Code (IaC)?",
                "label": "B"
            }
        ];
  //api function for submit 
        const result = await submitQuiz(answerPayload); 
        console.log("Quiz Result", result);
        console.log("Success");
        setShowModal(true);
        console.log("Submitted answer:", result);
      } else {
        goToNext(); // Go to next question if not last
      }
    } catch (err) {
      console.error("Error submitting quiz:", err);
    }
  };
  


  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <Container>
     <ProgressSection progressPercentage={progressPercentage} timeLeft={timeLeft} />
     <Fill/>
      <QuizCard
    questionText={`${currentQuestion} - What is React.js?`}
    choices={["A library for UI", "A backend framework", "A database", "An operating system"]}
    selectedChoice={response}
    onChoiceChange={setResponse}
    onSubmit={handleSubmit}
  />
      <QuizNavigation
  currentQuestion={currentQuestion}
  totalQuestions={totalQuestions}
  onPrevious={goToPrevious}
  onNext={goToNext}
/>
{showModal && scoreData && (
        <QuizModel data={scoreData} /> )}// Show the modal when quiz is finished
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: Arial, sans-serif;
  background-color: #f9fafb;
`;
const Fill = styled.div`
background: linear-gradient(to right, #8b5cf6, #ec4899);
  padding: 20px;
  display: flex;
  height:1rem;
  `;





export default Quiz;