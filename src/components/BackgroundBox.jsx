import { Box } from "@rebass/grid";
import styled from 'styled-components';


const BackgroundBox = styled(Box)`
  background-color: ${({ theme, backgroundColor }) =>
    theme.color[backgroundColor]};
`;

export default   BackgroundBox;