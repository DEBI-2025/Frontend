import styled from 'styled-components';
import { GrInfo,GrDocumentText,GrUser } from "react-icons/gr";


const FeaturesSection = styled.section`
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  background: linear-gradient(to bottom left,#E2EBF4 25%,var(--color-background)50%,var(--color-white)70%);
  border: 1px solid #D3D3D6;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const FeatureDescription = styled.p`
  color: #666;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid #D3D3D6;
`;

const Features = () => {
  return (
    <FeaturesSection>
      <SectionTitle>Explore Our Features</SectionTitle>
      <SectionSubtitle>
        Discover the powerful features that make our platform stand out
      </SectionSubtitle>
      <FeaturesGrid>
        <FeatureCard>
          <GrUser style={{ fontSize: '50px', 
            borderRadius: '30%',
            border: '1px solid #D3D3D6',
            padding: '10px',
          }} />
          <FeatureTitle>Realistic Interview Simulations</FeatureTitle>
          <FeatureDescription>
            Practice with industry-specific questions (HR, Technical, Behavioral)
          </FeatureDescription>
          <TagsContainer>
            <Tag>Software Engineer</Tag>
            <Tag>UX/UI Designer</Tag>
            <Tag>Data Scientist</Tag>
          </TagsContainer>
        </FeatureCard>
        
        <FeatureCard>
          <GrDocumentText style={{ fontSize: '50px', 
            borderRadius: '30%',
            border: '1px solid #D3D3D6',
            padding: '10px',
          }} />
          <FeatureTitle>Resume Reader & ATS Evaluation</FeatureTitle>
          <FeatureDescription>
            Upload your resume for AI-driven feedback on ATS compatibility and job-matching
          </FeatureDescription>
          <TagsContainer>
            <Tag>ATS Optimization</Tag>
            <Tag>Keyword Analysis</Tag>
            <Tag>Format Check</Tag>
          </TagsContainer>
        </FeatureCard>
        
        <FeatureCard>
          <GrInfo style={{ fontSize: '50px', 
            borderRadius: '30%',
            border: '1px solid #D3D3D6',
            padding: '10px',
          }} />
          <FeatureTitle>AI-Powered Answer Evaluation</FeatureTitle>
          <FeatureDescription>
            Get instant feedback on clarity, relevance, and professionalism
          </FeatureDescription>
          <TagsContainer>
            <Tag>Real-time Feedback</Tag>
            <Tag>Performance Metrics</Tag>
            <Tag>Improvement Tips</Tag>
          </TagsContainer>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default Features;