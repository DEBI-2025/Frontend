import styled from "styled-components";
import LandingText from "../components/LandingText";
import rafikiImg from "../images/rafiki.png";
import SectionTitle from "../components/SectionTitle";

import UnOrderedItems from "../components/UnOrderedItems";
function Tips() {
  var items = [
    " 🔍Send a thank-you email – Express appreciation for the opportunity within 24 hours.",
    "Reflect on your performance – Identify what went well and areas for improvement.",
    "Be patient – Hiring decisions take time, so don’t stress if you don’t hear back immediately.",
    "Follow up professionally – If no response within the given timeline, send a polite follow-up email",
    "Continue learning – If you struggled with any questions, research and improve for the future.",
    "Keep applying – Don’t stop your job search while waiting for a response.",
    "Stay positive – Whether you get the job or not, each interview is a valuable experience!",
  ];
  return (
    <Wrapper>
      <LandingText
        title={"Interview Success Guide"}
        description={
          "Navigate your interview with confidence! This page covers essential tips for before, during, and after your interview to help you prepare effectively, make a strong impression, and follow up professionally."
        }
        buttonText={"Start Practicing"}
        rightImg={rafikiImg}
      />
      <UnOrderedItems
        Sectiontitle={"Pre-Interview Tips"}
        title={"Here’re some tips you should follow before the interview: "}
        items={items}
      ></UnOrderedItems>

      <UnOrderedItems
        Sectiontitle={"During-Interview Tips"}
        title={"Here’re some tips you should follow during the interview: "}
        items={items}
      ></UnOrderedItems>
      <UnOrderedItems
        Sectiontitle={"Post-Interview Tips"}
        title={"Here’re some tips you should follow after the interview: "}
        items={items}
      ></UnOrderedItems>
    </Wrapper>
  );
}

export default Tips;

const Wrapper = styled.div`
  height: 89.6%;
  overflow-y: auto;
  margin-right: 0.2rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #8888887d;
    border-radius: 5px;
    margin-bottom: 0.3rem;
    /* width: 5px; */
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #6a0dad, #af73cf, #f7c5cc);
    border-radius: 10px;
    /* width: 8px;  */
  }

  &::-webkit-scrollbar-thumb:hover {
    /* width: 10px; */
    cursor: pointer;
    background: linear-gradient(to bottom, #4a077a, #805599, #c0949a);
  }
`;
