import styled from '@emotion/styled';

export const BodyContainer = styled.div`
  margin-top: ${p => p.theme.space[5]};

  margin-left: auto;
  margin-right: auto;

  width: ${p => p.theme.space[16]};
`;

export const ListContainer = styled.ul`
  margin-top: ${p => p.theme.space[0]};

  margin-left: auto;
  margin-right: auto;

  width: ${p => p.theme.space[16]};

  list-style-type: none;
`;

export const ListsItem = styled.li`
  display: flex;
  align-items: center;

  margin-top: ${p => p.theme.space[4]};

  height: ${p => p.theme.space[11]};

  background: linear-gradient(
    114deg,
    rgba(87, 54, 163, 1) 35%,
    rgba(71, 28, 169, 1) 54.28%,
    rgba(75, 42, 153, 1) 78.99%
  );

  border-radius: ${p => p.theme.radii.big};

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;
