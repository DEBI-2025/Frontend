import { useEffect, useState } from "react";
import { CiTimer } from "react-icons/ci";
import styled from "styled-components";

const TimerContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const TimeText = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

function QuizTimer({ onQuizEnd }) {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Time is up! The quiz has ended.");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onQuizEnd]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <TimerContainer>
      <CiTimer size={30} />
      <TimeText>{formatTime(timeLeft)}</TimeText>
    </TimerContainer>
  );
}

export default QuizTimer;
