import styled from 'styled-components';

export const BoxForMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;
export const Form = styled.form`
  padding: 80px 20px 0 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0 0 0 32px;
    gap: 87px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 0 0 16px;
    gap: 60px;
    margin-bottom: 60px;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 22px;
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    gap: 48px;
  }
`;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
  outline: none;
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms;
  &:hover {
    border-bottom: 1px solid ${p => p.theme.colors.orange};
  }
  &::placeholder {
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.21;
    letter-spacing: 0.04em;

    color: ${p => p.theme.colors.grey};
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
    width: 240px;
  }
`;
export const InputGrams = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
  outline: none;
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms;
  &:hover {
    border-bottom: 1px solid ${p => p.theme.colors.orange};
  }
  &::placeholder {
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.21;
    letter-spacing: 0.04em;

    color: ${p => p.theme.colors.grey};
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
    width: 106px;
  }
`;

export const BtnAddWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BtnAdd = styled.button`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.white};
  border: none;
  padding: 13px 0;
  width: 176px;
  background: ${p => p.theme.colors.orange};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
`;
export const Btn = styled.button`
  background-color: ${p => p.theme.colors.orange};
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
  &:hover {
    transform: translate(-1%, -1%);
    box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 6px,
      rgba(255, 255, 255, 0.3) -4px -4px 6px;
  }
`;
export const Svg = styled.svg`
  width: 13px;
  height: 13px;
`;
