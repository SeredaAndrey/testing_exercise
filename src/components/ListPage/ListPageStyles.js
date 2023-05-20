import styled from '@emotion/styled';

import primaryFone from '../../images/picture_fon.png';

export const BodyContainer = styled.div`
  transform: translateY(${p => p.theme.space[8]});

  margin-top: ${p => p.theme.space[0]};

  margin-left: auto;
  margin-right: auto;

  width: ${p => p.theme.space[15]};
`;

export const ListContainer = styled.ul`
  margin-top: ${p => p.theme.space[0]};

  margin-left: auto;
  margin-right: auto;

  width: ${p => p.theme.space[15]};

  list-style-type: none;
`;

export const ListsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${p => p.theme.space[4]};

  height: ${p => p.theme.space[16]};

  background: linear-gradient(
    114deg,
    rgba(87, 54, 163, 1) 35%,
    rgba(71, 28, 169, 1) 54.28%,
    rgba(75, 42, 153, 1) 78.99%
  );

  border-radius: ${p => p.theme.radii.big};

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const InnerListItemBox1 = styled.div`
  height: calc((100%-${p => p.theme.space[4]}) / 2);
  width: 100%;

  background-image: url(${primaryFone});
  background-size: 308px;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  border-top-left-radius: ${p => p.theme.radii.big};
  border-top-right-radius: ${p => p.theme.radii.big};
`;

export const InnerListItemBox2 = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: ${p => p.theme.space[4]};
  width: 100%;

  background-color: ${p => p.theme.colors.bgColorBox};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const InnerListItemBox3 = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  height: calc((100%-${p => p.theme.space[4]}) / 2);
  width: 100%;

  border-bottom-left-radius: ${p => p.theme.radii.big};
  border-bottom-right-radius: ${p => p.theme.radii.big};
`;

export const PhotoListItemBox = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: ${p => p.theme.space[8]};
  width: ${p => p.theme.space[8]};

  border-radius: ${p => p.theme.radii.round};

  background-color: ${p => p.theme.colors.bgColorBox};

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const PhotoListItem = styled.img`
  height: ${p => p.theme.space[7]};
  width: ${p => p.theme.space[7]};

  border-radius: ${p => p.theme.radii.round};

  background-color: ${p => p.theme.colors.bgColorFoto};
`;

export const TextTwitsListItem = styled.p`
  margin-top: ${p => p.theme.space[7]};
  margin-bottom: ${p => p.theme.space[0]};

  color: ${p => p.theme.colors.colorTextLight};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;
`;

export const TextFollowListItem = styled.p`
  margin-top: calc(${p => p.theme.space[4]} - ${p => p.theme.space[2]});
  margin-bottom: calc(${p => p.theme.space[5]} - ${p => p.theme.space[3]});

  color: ${p => p.theme.colors.colorTextLight};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;
`;

export const ButtonListItem = styled.button`
  display: block;

  width: ${p => p.theme.space[12]};
  height: ${p => p.theme.space[6]};

  padding: ${p => p.theme.space[0]};

  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p =>
    p.followingFlag
      ? p.theme.colors.colorButtonActive
      : p.theme.colors.colorButtonNoActive};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;

  cursor: pointer;
`;
export const ButtonMoreContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const ButtonMore = styled.button`
  display: block;

  width: ${p => p.theme.space[12]};
  height: ${p => p.theme.space[6]};

  padding: ${p => p.theme.space[0]};

  margin-bottom: ${p => p.theme.space[8]};

  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.colors.colorButtonNoActive};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;

  cursor: pointer;
`;
export const PaginationText = styled.p`
  margin-right: ${p => p.theme.space[6]};

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;
`;

export const PaginationNumber = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
`;

export const ListPageLogo = styled.img`
  margin-top: calc(${p => p.theme.space[3]} + ${p => p.theme.space[4]});
  margin-left: calc(${p => p.theme.space[3]} + ${p => p.theme.space[4]});

  width: 76px;
  height: 22px;
`;
