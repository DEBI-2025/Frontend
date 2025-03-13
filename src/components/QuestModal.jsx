import { motion } from "framer-motion";
import styled from "styled-components";
import { X } from "lucide-react";
import Mindphoto  from '../images/Mindphoto.png';
import Technical  from '../images/Technical.png';

import { useNavigate } from "react-router-dom";
const QuestModal = ({isOpen ,onClose}) =>{
    const navigate = useNavigate();
    if(!isOpen) return null ;
    const handleNavigate =(path)=>{
onClose();
navigate(path);
    };
    
    return (
        <Overlay>
            <ModalContainer
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e)=>e.stopPropagation}>

                <CloseButton onClick={onClose}>
                    <X  size ={24}/>
                </CloseButton>

                <OptionText>
                
               Which interview are you preparing for?
                </OptionText>
            


<OptionsContainer>
{/* {options?.map(({ label, image, bgColor, path }, index) => (
                        <OptionButton key={index} bgColor={bgColor} onClick={() => handleNavigate(path)}>
                            <Img src={image} alt={label} />
                            <TextWrapper>{label}</TextWrapper>
                        </OptionButton>
                    ))} */}
  <OptionButton bgColor="#F7C5CC59" onClick={()=> handleNavigate("/HrPage")}> 
    <Img src={Mindphoto} alt="Mind Photo" />
<TextWrapper>
HR & Behavioral
</TextWrapper>
   
  </OptionButton>
  <OptionButton bgColor="#C3A2F380" onClick={()=> handleNavigate("/questionbank")}>
  <Img src={Technical} alt="Technical Photo" />
  <TextWrapper>
  Technical
  </TextWrapper>
    
  </OptionButton>
</OptionsContainer>
</ModalContainer>
</Overlay>


    );
}
export default QuestModal;



const Overlay = styled.div `
 backdrop-filter: blur(8px);
position:fixed ;
inset:0;
display:flex;
align-items:center;
justify-content :center;
background:rgba(0, 0, 0, 0.5);
z-index:50;
overflow: hidden;
`;
const ModalContainer = styled(motion.div)`
background:white;
padding:20px;
border-radius:10px ;
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
position:relative;
text-align:center;
width:700px;
height:400px;
 @media (max-width: 1024px) {
    width: 80%;
    height: auto;
  }
 @media (max-width: 768px) {
    width: 90%;  
    height: auto; 
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 92%;  
    height: auto; 
    padding: 10px;
    border-radius: 8px;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: none;
  cursor: pointer;
  color: gray;
  &:hover {
    color: black;
  }
`;
const OptionsContainer = styled.div`
   display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 60px; 
  margin-top: 2.7rem;
  width: 100%;
   @media (max-width: 1024px) {
    gap: 60px;
  }
  @media (max-width: 768px) {
    
    gap: 30px;
  }
    @media (max-width: 1024px) {
    
    gap: 60px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const OptionButton = styled.button`
 background: ${(props) => props.bgColor || "#f5f5f5"};
  width: 210px;
  height:190px;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  cursor: pointer;
  border: none;
  transition: 0.2s;
  marigin-top:1.5rem;
  gap:20px
  
  &:hover {
    transform: scale(1.05);
  }
     @media (max-width: 1024px) {
    width: 200px;
    height: 180px;
  }
     @media (max-width: 768px) {
    width: 180px;
    height: 170px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const OptionText = styled.h1`
  margin-top: 10%;
  font-family: Roboto Slab; 
   @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }

`;

const Img= styled.img`
  width: 57px;
   @media (max-width: 1024px) {
    width: 50px;
  }
 @media (max-width: 768px) {
    width: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
  }
`;
const TextWrapper = styled.div`
width:180px;
height:25px;
background: #6A0DAD;
border:1px solid #6A0DAD;
border-radius:20px;
color:white;
margin-top:1.9rem;
display: flex; 
text-align: center; 
 justify-content: center;
  align-items: center;
   font-family: Literata; 
   font-size:16px;
     @media (max-width: 1024px) {
    width: 160px;
    height: 24px;
    font-size: 15px;
  }
   @media (max-width: 768px) {
    width: 150px;
    height: 22px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    width: 120px;
    height: 20px;
    font-size: 12px;
  }
`;