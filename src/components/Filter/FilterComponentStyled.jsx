import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  position: fixed;
  display: flex;

  justify-content: center;
  align-items: center;

  transform: translateY(${p => p.theme.space[8]});

  height: ${p => p.theme.space[6]};
  width: ${p => p.theme.space[15]};

  z-index: 1;

  background: linear-gradient(
    114deg,
    rgba(87, 54, 163, 1) 35%,
    rgba(71, 28, 169, 1) 54.28%,
    rgba(75, 42, 153, 1) 78.99%
  );

  border-radius: ${p => p.theme.radii.big};

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const FilterSelect = styled.select`
  height: ${p => p.theme.space[5]};

  background: transparent;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;
`;

export const FilterOption = styled.option`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;
`;

export const FilterButton = styled.button`
  display: block;

  width: ${p => p.theme.space[7]};
  height: ${p => p.theme.space[5]};

  padding: ${p => p.theme.space[0]};

  margin-left: ${p => p.theme.space[4]};

  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.colors.colorButtonNoActive};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;

  cursor: pointer;
`;
