import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 20px 32px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 100px 32px 100px 32px;
    align-items: flex-start;
  }
  @media screen and (min-width: 1280px) {
    padding: 140px 0 0 16px;
  }
`;
export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.44;
  margin-bottom: 32px;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 1.2;
    margin-bottom: 68px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const BoxForTabletAndDesc = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;
export const BoxForTabletAndDescSecond = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    gap: 40px;
    margin-bottom: 60px;
  }
`;
export const BoxForTabletAndDescThird = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;
export const Label = styled.label`
  position: relative;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
  outline: none;
  background-color: transparent;

  &::placeholder {
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.21;
    letter-spacing: 0.04em;

    color: ${p => p.theme.colors.grey};
  }
  @media screen and (min-width: 768px) {
    width: 240px;
    padding-bottom: 20px;
  }
`;
export const Box = styled.div`
  margin-bottom: 8px;
  position: relative;

  @media screen and (min-width: 768px) {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
  }
`;
export const BoxTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: #c9cbd1;
`;
export const WrapperRadio = styled.div`
  display: flex;
  gap: 30px;
`;
export const DivRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
`;
export const WrapperRadioLabel = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.grey};
`;
export const WrapperRadioBtn = styled.input`
  appearance: none;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    outline: 1px solid ${p => p.theme.colors.grey};
    border: none;
    border-radius: 50%;
  }
  &::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: ${p => p.theme.colors.orange};
    border-radius: 50%;
    position: absolute;
    border: none;
    top: 5px;
    left: 5px;
    opacity: 0;
  }
  &:checked::after {
    opacity: 1;
  }
  &:hover::after {
    background-color: ${p => p.theme.colors.orange};
    opacity: 1;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`;
export const WrapperSubmit = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
  }
`;
export const Btn = styled.button`
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;

  text-align: center;
  letter-spacing: 0.04em;

  color: #ffffff;

  padding: 13px 25px;
  width: 210px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    transform: translate(-1%, -1%);
    box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 6px,
      rgba(255, 255, 255, 0.3) -4px -4px 6px;
  }
`;
export const ErrorBox = styled.div`
  color: red;
  position: absolute;
  animation: placeHolderVisible 1200ms;

  @keyframes placeHolderVisible {
    0% {
      left: -100px;
    }
    100% {
      left: 0;
    }
  }
`;
