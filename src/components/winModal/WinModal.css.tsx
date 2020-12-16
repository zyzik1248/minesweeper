import styled from 'styled-components';

export const SubmitButton = styled.button`
  font-size: 18px;
  margin: 20px auto;
  padding: 10px 20px;
  border: none;
  background-color: #2196F3;
  color: white;

  :hover{
    cursor: pointer;
    background-color: #1D85D4;
  }
`

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
`

export const Header = styled.p`
  font-size: 32px;
  margin: 5px;
  padding: 0;
  font-weight: bold;
`

export const Text = styled.p`
  font-size: 24px;
  margin: 10px;
  padding: 0;
`

interface InputProps {
  error: boolean,
}

export const Input = styled.input`
  margin: 25px;
  background: none;
  font-size: 18px;
  padding: 9px;
  ${(props: InputProps) => props.error ?
    `border: 2px solid red;` :
    `border: 2px solid #82BDEB;`
  }
  border-radius: 6px;

  :focus{
    ${(props: InputProps) => props.error ?
    `box-shadow: 0 0 4px red;` :
    `box-shadow: 0 0 4px rgba(81, 203, 238, 1);`
    }
  }
`