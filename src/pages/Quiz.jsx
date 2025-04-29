import QuizModel from "../components/QuizModel";

function Quiz() {
  const score = {
    correct: 4,
    incorrect: 6,
  };
  return <>
  <div>
    Quiz
  </div>
  <QuizModel isPassed={false} score={score}/>
  </>
}

export default Quiz;
