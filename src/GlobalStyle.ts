import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
@font-face {
  font-family: 'Montserrat';
  src: url("./assets/font/Montserrat-VariableFont_wght.ttf") format("wght");
}body{
    font-family: 'Montserrat', sans-serif;

}
header,main{
  &>*{
      max-width: 1300px;
      margin: 0 auto;
    }
}
header{
  height: 100%;
  background-color: #2EB086;
  box-shadow: 0 1px 5px 0 #1b1b1b;
  margin-bottom: 20px;
}
`;

