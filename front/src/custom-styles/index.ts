import styled from 'styled-components';



/**
 * So this is the embracing container
 */
const Appcontainer = styled.div`

  min-height: 100vh;
  margin : 0;
  padding : 0;
  overflow: auto;
  

  `

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(255, 255, 255, 0);

`

const GameTitle = styled.div`
  font-weight: 700;
  font-family: 'Press Start 2P', cursive;

 

`

const GameDescription = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  width: 100%;
  line-height: 1.5;

  /*change text on small screens*/
  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }

  @media (max-width: 300px) {
    font-size: 0.8rem;
  }



`


const Header = styled.header`
  font-size: 2.5rem;
  margin-top : 3rem;
  height : 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000000;

`

const TextWithShadow = styled.h1`

background: hsla(186, 100%, 69%, 1);

background: linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

background: -moz-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

background: -webkit-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#60EFFF", endColorstr="#0061FF", GradientType=1 ); 
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

  text-shadow:  0 0 10px 0 rgba(0, 0, 0, 0.2);
  text-decoration-color: #000000;
  text-decoration-thickness: 0.5rem;
  text-underline-offset: 0.5rem;
  text-decoration-skip-ink: none;
  text-decoration-skip: none;
  text-decoration-style: wavy;
  text-decoration-line: underline;
  



`

const GameContainer =
  styled.div`
  margin-top : 7rem;
  height : 550px;
  width : 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius:0.6rem;
  border: 10px solid transparent;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right,
      #31CCCC, #3B86DE) border-box;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  /*max-width*/
  @media (max-width: 768px) {
    width: 40vh;
    height: 40vh;

  }
 

`

// footer 
const Footer = styled.footer`

width : 550px;

@media (max-width: 768px) {
  width: 40vh;

}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:5vh;
 
  color: white;
  background: hsla(186, 100%, 69%, 0.5);

  background: linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

  background: -moz-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

  background: -webkit-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#60EFFF", endColorstr="#0061FF", GradientType=1 );
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.4px);
  -webkit-backdrop-filter: blur(12.4px);
  border: 1px solid rgba(255, 255, 255, 0.78);



  


  `

const DivFooter =
  styled.div`
  margin-top : 3rem;
  display : flex;
  align-items: center;
  justify-content: center;

  `

const FooterText =
  styled.div`
  font-size: 2.2vm;
  font-weight: 400;
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  width: 100%;
  line-height: 0.2;

  `

  // export all

export {
    Appcontainer,
    Container,
    GameTitle,
    GameDescription,
    Header,
    TextWithShadow,
    GameContainer,
    Footer,
    DivFooter,
    FooterText
}
