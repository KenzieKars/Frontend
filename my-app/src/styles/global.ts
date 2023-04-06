import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
:root{
    /* Colors */

    --color-brand1: #4529E6;
    --color-brand2: #5126EA;
    --color-brand3: #B0A6F0;
    --color-brand4: #EDEAFD;
    
    /* Grey Scale */

    --color-grey0:#0B0D0D;
    --color-grey1:#212529;
    --color-grey2:#495057;
    --color-grey3:#868E96;
    --color-grey4:#ADB5BD;
    --color-grey5:#CED4DA;
    --color-grey6:#DEE2E6;
    --color-grey7:#E9ECEF;
    --color-grey8:#F1F3F5;
    --color-grey9:#F8F9FA;
    --color-grey10:#FDFDFD;
    --color-whiteFixed:#FFFFFF;

    /* Feedback */

    --color-alert1:#CD2B31;
    --color-alert2:#FDD8D8;
    --color-alert3:#FFE5E5;
    --color-sucess1:#18794E;
    --color-sucess2:#CCEBD7;
    --color-sucess3:#DDF3E4;

    /* Random */

    --color- random1:#E34D8C;
    --color- random2:#C04277;
    --color- random3:#7D2A4D;
    --color- random4:#7000FF;
    --color- random5:#6200E3;
    --color- random6:#6200E3;
    --color- random7:#349974;
    --color- random8:#2A7D5F;
    --color- random9:#153D2E;
    --color- random10:#6100FF;
    --color- random11:#5700E3;
    --color- random12:#30007D;

    /* Font family */

    --font-typography:'Typography';

    /* Line-Height */
    --font-line-height-40: 40px;
    --font-line-height-38: 38px;
    --font-line-height-32: 32px;
    --font-line-height-28: 28px;
    --font-line-height-24: 24px;
    --font-line-height-20: 20px;
    --font-line-height-16: 16px;

    /*  Text Weight */
    --font-weight-700: 700;
    --font-weight-600: 600;
    --font-weight-500: 500;
    --font-weight-400: 400;
    --font-weight-500: 300;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`
export default GlobalStyle;
    





