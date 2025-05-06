import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, Timer } from "lucide-react";
import QuizModel from "../components/QuizModel";
import useQuizLogic from "../logic/quiz/useQuizLogic";
import TimerComponent  from "../components/timer";


function Quiz() {
  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(25);
  const [response, setResponse] = useState("");
  const [showModal, setShowModal] = useState(true);



  // Timer state - starting with 30 minutes (1800 seconds)
  const [timeLeft, setTimeLeft] = useState(1800);

  //custom hooks for quiz
  const { scoreData, submitQuiz, loading, error } = useQuizLogic();
  
  

  useEffect(() => {
    // Timer countdown effect
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup timer on unmount
    return () => clearInterval(timer);
  }, []);

  

  // Handle navigation
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
  // Calculate progress percentage
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div style={styles.container}>
      {/* Progress bar and timer */}
      <div style={styles.progressSection}>
        <div style={styles.progressContainer}>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${progressPercentage}%`,
              }}
            />
          </div>
          <TimerComponent  timeLeft={timeLeft}/>
        </div>
      </div>

      {/* Main content */}
      <div style={styles.content}>
        <div style={styles.card}>
          <h2 style={styles.question}>{currentQuestion}- What is React.js?</h2>

          <textarea
            style={styles.textarea}
            placeholder="Enter Your Response Here"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          />

          <button style={styles.submitButton} onClick={handleSubmit}>
            Submit Answer
          </button>
        </div>
      </div>

      {/* Navigation arrows */}
      <div style={styles.navigationContainer}>
        <button
          style={styles.navArrow}
          onClick={goToPrevious}
          disabled={currentQuestion === 1}
        >
          <ChevronLeft size={24} color="#8B5CF6" />
        </button>

        <div style={styles.questionCounter}>
          Question {currentQuestion} ({totalQuestions - currentQuestion + 1}{" "}
          remaining)
        </div>

        <button
          style={styles.navArrow}
          onClick={goToNext}
          disabled={currentQuestion === totalQuestions}
        >
          <ChevronRight size={24} color="#8B5CF6" />
        </button>
      </div>
      {showModal && scoreData && (
        <QuizModel data={scoreData} /> // Show the modal when quiz is finished
     
)}

        
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9fafb",
  },
  progressSection: {
    background: "linear-gradient(to right, #8B5CF6, #EC4899)",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },
  progressContainer: {
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressBar: {
    height: "8px",
    backgroundColor: "white",
    borderRadius: "9999px",
    width: "100%",
    maxWidth: "500px",
    marginRight: "20px",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#5D3FD3",
    borderRadius: "9999px",
  },
  
  content: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    maxWidth: "450px",
    width: "100%",
    padding: "30px",
  },
  question: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "24px",
    color: "#333",
    textAlign: "center",
  },
  textarea: {
    width: "100%",
    padding: "15px",
    border: "1px solid #8B5CF6",
    borderRadius: "8px",
    marginBottom: "24px",
    minHeight: "100px",
    fontFamily: "inherit",
    resize: "none",
    boxSizing: "border-box",
    outline: "none",
  },
  submitButton: {
    width: "180px",
    padding: "12px",
    background: "linear-gradient(to right, #8B5CF6, #EC4899)",
    color: "white",
    border: "none",
    borderRadius: "9999px",
    fontWeight: "500",
    cursor: "pointer",
    fontSize: "16px",
    display: "block",
    margin: "0 auto",
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto 100px auto",
    width: "100%",
  },
  navArrow: {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
  },
  questionCounter: {
    color: "#6B7280",
    fontSize: "14px",
  },
};

export default Quiz;