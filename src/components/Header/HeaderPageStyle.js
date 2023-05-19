import styled from '@emotion/styled';

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${p => p.theme.space[5]};
  margin-left: auto;
  margin-right: auto;

  padding: ${p => p.theme.space[0]};

  height: ${p => p.theme.space[9]};
  width: ${p => p.theme.space[15]};

  background: linear-gradient(
    114deg,
    rgba(87, 54, 163, 1) 35%,
    rgba(71, 28, 169, 1) 54.28%,
    rgba(75, 42, 153, 1) 78.99%
  );

  border-radius: ${p => p.theme.radii.big};

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const InneerHeaderContainer1 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  height: calc((100%-${p => p.theme.space[4]}) / 2);
  width: 100%;

  border-top-left-radius: ${p => p.theme.radii.big};
  border-top-right-radius: ${p => p.theme.radii.big};
`;

export const InneerHeaderContainer2 = styled.div`
  display: flex;
  flex-direction: row-reverse;

  align-items: center;

  height: ${p => p.theme.space[4]};
  width: 100%;

  background-color: ${p => p.theme.colors.bgColorBox};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const InneerHeaderContainer3 = styled.div`
  height: calc((100%-${p => p.theme.space[4]}) / 2);
  width: 100%;
`;

export const ImageHeaderContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  margin-right: 27px;

  height: ${p => p.theme.space[8]};
  width: ${p => p.theme.space[8]};

  border-radius: ${p => p.theme.radii.round};

  background-color: ${p => p.theme.colors.bgColorBox};

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const HeaderImage = styled.img`
  height: ${p => p.theme.space[7]};
  width: ${p => p.theme.space[7]};

  border-radius: ${p => p.theme.radii.round};
`;

export const HeaderName = styled.p`
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[10]};

  color: ${p => p.theme.colors.colorTextLight};

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;
`;
