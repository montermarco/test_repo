import styled from 'styled-components';
import {colors} from  '../utilities';
import {Facebook} from '@styled-icons/boxicons-logos/Facebook';
import {Instagram} from '@styled-icons/boxicons-logos/Instagram';
import {Youtube} from '@styled-icons/boxicons-logos/Youtube';
import {Twitter} from '@styled-icons/boxicons-logos/Twitter';
import {LocationPin} from '@styled-icons/entypo/LocationPin';
import {Mastercard} from '@styled-icons/remix-fill/Mastercard';
import {Paypal} from '@styled-icons/boxicons-logos/Paypal';
import {Visa} from '@styled-icons/remix-fill/Visa';
import {CcAmex} from '@styled-icons/fa-brands/CcAmex';
import {MoreHorizontalOutline} from '@styled-icons/evaicons-outline/MoreHorizontalOutline'


import {ResizeBoth} from '@styled-icons/open-iconic/ResizeBoth';

import {Whatsapp} from '@styled-icons/remix-fill/Whatsapp';
import {OldPhone} from '@styled-icons/entypo/OldPhone';
import {SearchAlt2} from '@styled-icons/boxicons-regular/SearchAlt2';


export const Whats = styled(Whatsapp)`
  color: ${colors.white_1};
  margin-right: .7rem;
`;

export const Phone = styled(OldPhone)`
  color: ${colors.white_1};
  margin-right: .7rem;
`;

export const SearchIcon = styled(SearchAlt2)`
color: ${colors.txt_1};
margin-right: .7rem;
`;

export const Face = styled(Facebook)`
  color: ${colors.txt_3};
  margin-left: .7rem;
`;

export const Insta = styled(Instagram)`
  color: ${colors.txt_3};
  margin-left: .7rem;
`;

export const Ytb = styled(Youtube)`
  color: ${colors.txt_3};
  margin-left: .7rem;
`;

export const Twttr = styled(Twitter)`
  color: ${colors.txt_3};
  margin-left: .7rem;
`;

export const Location = styled(LocationPin)`
  color: ${colors.txt_3};
  margin-left: .7rem;
`;

export const Vissa = styled(Visa)`
  color: ${colors.txt_3};
  margin-left: .7rem;
`;

export const Master = styled(Mastercard)`
  color: ${colors.txt_3};
  margin-left: .7rem;
`;

export const Amex = styled(CcAmex)`
  color: ${colors.txt_3};
  margin-left: .7rem;
`;

export const Ppal = styled(Paypal)`
  color: ${colors.txt_3};
  margin-left: .7rem;
`;

export const Size = styled(ResizeBoth)`
  color: ${colors.white_1};
  margin-right: .5rem;
`;


export const More = styled(MoreHorizontalOutline)`
  color: ${colors.white_1};
  margin-right: .5rem;
`;