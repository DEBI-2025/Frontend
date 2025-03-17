import styled from "styled-components";
import SectionTitle from "./SectionTitle";
function UnOrderedItems({ Sectiontitle, items, title }) {
  return (
    <Wrapper>
      <SectionTitle title={Sectiontitle} bgColor={"#A1D6E280"} />
      <Title>
        <p>{title}</p>
      </Title>
      <Items>
        <ul>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ul>
      </Items>
    </Wrapper>
  );
}

export default UnOrderedItems;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  @media (max-width: 1024px) {
    height: 100%;
  }
  @media (max-width: 768px) {
    height: 100%;
  }
  @media (max-width: 550px) {
    height: 100%;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding-top: 3rem;
    gap: 2.4rem;
  }
`;

const Title = styled.div`
  padding: 0 8rem 0 5rem;
  padding-top: 3rem;
  line-height: 30px;
  width: 100%;
  font-family: Roboto Slab;
  font-size: 1.75rem;
`;

const Items = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Literata;
  font-size: 1.375remrem;
  justify-content: center;
  padding: 0 8rem 0 8rem;
  @media (max-width: 1024px) {
    padding: 0 3rem 0 3rem;
  }
  @media (max-width: 550px) {
    padding: 0;
    align-items: center;
  }
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;
