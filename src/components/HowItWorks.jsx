import React from 'react';
import styled from 'styled-components';

const HowItWorksSection = styled.section`
  padding: 7rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  color: #666;
  margin-bottom: 3rem;
`;

function HowItWorks() {
  return (
    <HowItWorksSection>
      <SectionTitle>How It Works</SectionTitle>
      <SectionSubtitle>
        Simple Steps to Interview Success
      </SectionSubtitle>
    </HowItWorksSection>
  )
}

export default HowItWorks