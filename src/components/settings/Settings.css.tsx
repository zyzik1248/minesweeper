import styled from 'styled-components';
import Gear from './../../assets/gear.png'

export const GearButton = styled.button`
  position: absolute;
  top: 10px;
  width: 80px;
  height: 80px;
  right: 10px;
  background: url(${Gear});
  border: none;
  z-index: 1;
  background-repeat: no-repeat; 
  background-size: contain;
  cursor: pointer;

  @media only screen and (max-width: 400px) {
    width: 70px;
    height: 70px;
  }

  @media only screen and (max-width: 340px) {
    width: 60px;
    height: 60px;
  }
`

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
`

export const Title = styled.div`
  text-align: left;
  width: 90%;
  margin: 2px 20px;
  padding: 20px;
  font-size: 22px;
  font-weight: bold;
  color: white;
  border: none;
  background-color: #66ffb2;
`

export const Body = styled.div`
  padding: 20px 0;
`

export const RadioController = styled.div`
  label{
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 16px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 2px;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #eee;
    border-radius: 50%;
  }

  :hover input ~ span{
    background-color: #ccc;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ span:after {
    display: block;
  }
  }

  label:nth-child(4n-3){
    input:checked ~ span {
      background-color: #fcba03;
    }
  }

  label:nth-child(4n-2){
    input:checked ~ span {
      background-color: #4CAF50;
    }
  }

  label:nth-child(4n-1){
    input:checked ~ span {
      background-color: #2196F3;
    }
  }

  label:nth-child(4n){
    input:checked ~ span {
      background-color: #fc03f4;
    }
  }
`

export const RadioControllerTheme = styled.div`
  label{
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 16px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 2px;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #eee;
    border-radius: 50%;
  }

  :hover input ~ span{
    background-color: #ccc;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ span:after {
    display: block;
  }
  }

  label:nth-child(3n-2){
    input:checked ~ span {
      background-color: #3e67ce;
    }
  }

  label:nth-child(3n-1){
    input:checked ~ span {
      background-color: #1C951C;
    }
  }

  label:nth-child(3n){
    input:checked ~ span {
      background-color: #FF9999;
    }
  }
`

export const RangeController = styled.div`
div:nth-child(4n-3){
  input::-webkit-slider-thumb,
  input::-moz-range-thumb{
    border: none;
    background: #fcba03;
  }
}

div:nth-child(4n-2){
  input::-webkit-slider-thumb,
  input::-moz-range-thumb{
    border: none;
    background: #4CAF50;
  }
}

div:nth-child(4n-1){
  input::-webkit-slider-thumb,
  input::-moz-range-thumb{
    border: none;
    background: #2196F3;
  }
}

div:nth-child(4n){
  input::-webkit-slider-thumb,
  input::-moz-range-thumb{
    border: none;
    background: #fc03f4;
  }
}
`

export const RangeStyled = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row-reverse;

label{
  font-size: 18px;
}

  input {
    -webkit-appearance: none;
    width: 60%;
    margin-left: 10px;
    height: 10px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.8;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }
  
  input:hover:enabled {
    opacity: 1;
  }

  label + input:disabled,
  input:disabled + label,
  input:disabled{
    opacity: 0.4;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }
  
  input::-webkit-slider-thumb{
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  
  input::-moz-range-thumb{
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  input:enabled::-moz-range-thumb,
  input:enabled::-webkit-slider-thumb{
    cursor: pointer;
  }
`

interface RangeValue {
  disabled: boolean
}

export const RangeValueStyled = styled.p`
  margin-left: 10px;
  width: 15px;
  ${(props: RangeValue) => props.disabled &&
  `opacity: 0.4;
  -webkit-transition: .2s;
  transition: opacity .2s;`
  }
`

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