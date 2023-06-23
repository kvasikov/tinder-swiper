import RalewayRegularTtf from './fonts/Raleway-Regular.ttf';
import RalewayMediumTtf from './fonts/Raleway-Medium.ttf';
import RalewayBoldTtf from './fonts/Raleway-Bold.ttf';
import RalewayExtraBoldTtf from './fonts/Raleway-ExtraBold.ttf';

export const TYPEFACE_FONT_FACE = 'Raleway';

export const cssFonts = `
  @font-face {
    font-family: ${TYPEFACE_FONT_FACE};
    font-display: swap;
    font-weight: 400;
    src: url(${RalewayRegularTtf}) format('truetype');
  }

  @font-face {
    font-family: ${TYPEFACE_FONT_FACE};
    font-display: swap;
    font-weight: 500;
    src: url(${RalewayMediumTtf}) format('truetype');
  }

  @font-face {
    font-family: ${TYPEFACE_FONT_FACE};
    font-display: swap;
    font-weight: 600;
    src: url(${RalewayBoldTtf}) format('truetype');
  }

  @font-face {
    font-family: ${TYPEFACE_FONT_FACE};
    font-display: swap;
    font-weight: 700;
    src: url(${RalewayExtraBoldTtf}) format('truetype');
  }
`;
