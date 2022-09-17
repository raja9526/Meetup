import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 80vh;
  justify-content: center;
`

export const RegisterImg = styled.img`
  height: 400px;
  width: 400px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const RegisterHeading = styled.h1`
  color: #334155;
  font-size: 32px;
  font-family: 'Roboto';
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Label = styled.label`
  color: #7b8794;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 350px;
  padding: 15px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 8px;
  border: 1px solid #cbd5e1;
`

export const Select = styled.select`
  color: #000000;
  font-family: 'Roboto';
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  outline: none;
  margin-bottom: 8px;
`

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
  margin-top: 20px;
  outline: none;
  padding-top: 12px;
  padding-bottom: 12px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 16px;
  font-family: 'Roboto';
`

export default RegisterContainer
