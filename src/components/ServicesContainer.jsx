import ServiceCard from "./ServiceCard";
import styled from "styled-components";
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';
import QuestionMarkTwoToneIcon from '@mui/icons-material/QuestionMarkTwoTone';
import ThumbsUpDownTwoToneIcon from '@mui/icons-material/ThumbsUpDownTwoTone';
import QuizTwoToneIcon from '@mui/icons-material/QuizTwoTone';

function ServicesContainer() {
  return (
    <CardsContainer>
      <ServiceCard
        icon={EmojiObjectsTwoToneIcon}
        title={"Interview Tips"}
        description={
          "Ace your next interview with expert tips! From preparation strategies to common questions, get the insights you need to succeed!"
        }
        button={"Get Hired!"}
        link="/tips"
      />
      <ServiceCard
        icon={QuestionMarkTwoToneIcon}

        title={"Question Bank"}
        description={
          "Practice with real interview questions, gain valuable insights, and boost your confidence before the big day!"
        }
        button={"Start Practicing!"}
        bgColor="#C3A2F380"
        link="/questionbank"
      />{" "}
      <ServiceCard
        icon={ThumbsUpDownTwoToneIcon}

        title={"Rate Your CV"}
        description={
          "Get expert feedback on your CV, improve your skills, enhance your presentation, and make it stand out to top recruiters worldwide!"
        }
        button={"Get Feedback!"}
        bgColor="#C3A2F380"
        link="/rateyourcv"
      />{" "}
      <ServiceCard
        icon={QuizTwoToneIcon}

        title={"Quiz"}
        description={
          "Test your knowledge with our interactive quiz, challenge yourself, track progress, and see how prepared you are for success!"
        }
        button={"Take the Quiz!"}
        link="/quiz"
      />
    </CardsContainer>
  );
}

export default ServicesContainer;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem 0rem;
  margin: 3rem 0;
  justify-items: center; 
  align-items: center; 
  padding: 20px;
  /* height: 95%; */
`;