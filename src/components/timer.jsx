import React from 'react';
import styled from 'styled-components';
import { Clock } from 'lucide-react';

const Timer = ({ timeLeft }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <TimerContainer>
      <TimerText>{formatTime(timeLeft)}</TimerText>
      <Clock size={16} color="white" style={timerIconStyles} />
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
`;

const TimerText = styled.span`
  margin-right: 5px;
`;

const timerIconStyles = {
  marginLeft: "5px",
};

export default Timer;
