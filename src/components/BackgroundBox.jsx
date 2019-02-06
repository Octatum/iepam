import { Box } from '@rebass/grid';
import styled from 'styled-components';

const BackgroundBox = styled(Box)`
  background-color: ${({ theme, backgroundColor }) =>
    theme.color[backgroundColor]};
  background-image: ${({ image }) => image && `url(${image})`};
  background-repeat: no-repeat;
  background-position: center;
`;

export default BackgroundBox;
