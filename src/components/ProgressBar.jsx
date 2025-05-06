// components/ProgressSection.jsx
import styled from "styled-components";
import TimerComponent from "./timer";

const ProgressSection = ({ progressPercentage, timeLeft }) => {
  return (
    <SectionWrapper>
      <ProgressContainer>
        <ProgressBar>
          <ProgressFill style={{ width: `${progressPercentage}%` }} />
        </ProgressBar>
        <TimerComponent timeLeft={timeLeft} />
      </ProgressContainer>
    </SectionWrapper>
  );
};

export default ProgressSection;

const SectionWrapper = styled.div`
  background: linear-gradient(to right, #8b5cf6, #ec4899);
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const ProgressContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProgressBar = styled.div`
  height: 8px;
  background-color: white;
  border-radius: 9999px;
  width: 100%;
  max-width: 500px;
  margin-right: 20px;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: #5d3fd3;
  border-radius: 9999px;
`;
