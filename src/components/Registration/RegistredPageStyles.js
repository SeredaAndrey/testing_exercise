import styled from '@emotion/styled';

export const RegisterContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[6]};

  padding: ${p => p.theme.space[0]};

  height: 400px;
  width: 380px;

  background: linear-gradient(
    114deg,
    rgba(87, 54, 163, 1) 35%,
    rgba(71, 28, 169, 1) 54.28%,
    rgba(75, 42, 153, 1) 78.99%
  );

  border-radius: ${p => p.theme.radii.big};

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const RegisterTitle = styled.h2`
  margin-top: ${p => p.theme.space[11]};
  margin-bottom: ${p => p.theme.space[3]};

  color: ${p => p.theme.colors.colorTextLight};

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};
`;

export const InputLabel = styled.label`
  height: ${p => p.theme.space[5]};
  width: ${p => p.theme.space[14]};

  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};
`;

export const Input = styled.input`
  height: ${p => p.theme.space[5]};
  width: ${p => p.theme.space[14]};

  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};

  border-width: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  text-align: center;

  color: ${p => p.theme.colors.colorTextDark};

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
`;

export const ButtonRegister = styled.button`
  display: block;

  width: ${p => p.theme.space[12]};
  height: ${p => p.theme.space[6]};

  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[5]};

  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.colors.colorButtonNoActive};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;
`;

export const ButtonNavigateReg = styled.button`
  margin-top: ${p => p.theme.space[3]};

  border: 0;
  background: transparent;

  cursor: pointer;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;

  color: ${p => p.theme.colors.colorTextLight};
`;
