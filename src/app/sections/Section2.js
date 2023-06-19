import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';


const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  background-color: #ffc10d;  
  
    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      width: 95%;
    }

  & h2 { 
    padding-top: 100px;
    text-align: center;
    font-size: ${ Sizes.bigFontSize2};
    font-weight: normal;
  }

  & p {
    font-size: 25px;
    text-align: center;
    padding: 70px;
  }

  & img {
    margin-bottom: -4px;
  
  }

  & .black { color: ${Colors.black}; 

    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      font-size: ${Sizes.bigFontSize2};
    }

    @media (max-width: ${Sizes.mediaQueryBreak3}) {
      font-size: ${Sizes.bigFontSize3};
    }

    @media (max-width: ${Sizes.mediaQueryBreak4}) {
      font-size: ${Sizes.bigFontSize4};
    }
  }
`;

const Section = () => {
  return (
    <SectionStyle>
        <h2>Nosso trabalho</h2>
        <p className='textDescripition'>
          Atualmente, contamos com 13 e-books de músicas católicas e 
          cada um deles aborda um tema diferente. Todas as cifras são simplificadas, assim, 
          permitimos que mais pessoas possam ter condições de tocar sem nenhuma dificuldade. 
          Além disso, todas as músicas estão gravadas em nosso canal do YouTube, 
          que inclusive conta com mais de 20 mil inscritos e mais de 3 milhões de visualizações. 
        </p>
        <img className='img'
            src='imageSection1.webp'
            alt='Imagem de um homem tocando violão'>
        </img> 
    </SectionStyle>
  );
}

export default Section;