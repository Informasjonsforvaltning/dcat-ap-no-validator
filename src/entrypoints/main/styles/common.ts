import { css } from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

export default css`
  html,
  body {
    height: 100%;
  }

  body,
  #root {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  body {
    background: ${theme.colour(Colour.NEUTRAL, 'N10')};
  }

  body.no-scroll {
    overflow: hidden;
  }

  * {
    color: ${theme.colour(Colour.NEUTRAL, 'N60')};
  }
`;