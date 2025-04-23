import QuizTimer from "../components/QuizTimer";
function Quiz() {
  return (
    <>
      <div className="quiz">
        <div className="quiz-header">
          <h1>Quiz</h1>
          <QuizTimer
            onQuizEnd={() => {
              console.log("Quiz is done!");
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Quiz;
