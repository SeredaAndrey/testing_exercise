import styled from '@emotion/styled';

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  margin-top: ${p => p.theme.space[5]};
  margin-left: auto;
  margin-right: auto;

  padding: ${p => p.theme.space[0]};

  height: ${p => p.theme.space[9]};
  width: ${p => p.theme.space[16]};

  background: linear-gradient(
    114deg,
    rgba(87, 54, 163, 1) 35%,
    rgba(71, 28, 169, 1) 54.28%,
    rgba(75, 42, 153, 1) 78.99%
  );

  border-radius: ${p => p.theme.radii.big};

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const ImageHeaderContainer = styled.div`
  margin-right: 27px;

  height: ${p => p.theme.space[7]};
  width: ${p => p.theme.space[7]};

  border: ${p => p.theme.borders.picture};
  border-color: ${p => p.theme.colors.colorLine};
  border-radius: ${p => p.theme.radii.round};
  /* box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff; */
`;

export const HeaderImage = styled.img`
  height: ${p => p.theme.space[7]};
  width: ${p => p.theme.space[7]};

  border-radius: ${p => p.theme.radii.round};
`;

export const HeaderName = styled.p`
  margin-right: ${p => p.theme.space[3]};

  color: ${p => p.theme.colors.colorTextLight};

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;
`;
