import styled from "styled-components"

export const AboutStyle = styled.body `
/* About */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
html,
body {
  font-family: 'Raleway', sans-serif;
  /*color: @main-font-color;*/
}
h1,
h2,
h3,
h4,
h5 {
  font-family: 'Mouse Memoirs', sans-serif;
  /*color: @header-font-color;*/
}
h1 {
  font-size: 9.6rem;
  color: #00BD9D;
}
h2 {
  font-size: 7.2rem;
}
h3 {
  font-size: 4.8rem;
}
h4 {
  font-size: 3rem;
}
p {
  font-size: 2rem;
  /*line-height: 1.4;*/
}
.container {
  width: 90%;
  margin: 5% auto;
}
.button {
  background-color: #49C6E6;
  color: #FFFBFA;
  width: 30%;
  padding: 1%;
  margin-top: 3%;
}
.disney { 
  font-style: italic;
}
@media (max-width: 500px) {
  .button {
    width: 20%;
  }
}
body {
  background-color: #E5E5E5;
}
header {
  display: flex;
  justify-content: space-between;
  margin: 1% 5%;
}
@media (max-width: 500px) {
  header img {
    width: 25%;
  }
}
header nav {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
@media (max-width: 500px) {
  header nav {
    font-size: 1.2rem;
    width: 50%;
  }
}
header nav a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 1.8rem;
}
footer {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
footer div {
  padding: 2%;
  width: 15%;
  display: flex;
  justify-content: space-around;
}
@media (max-width: 500px) {
  footer div {
    width: 50%;
  }
}
footer nav {
  width: 20%;
  font-size: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 500px) {
  footer nav {
    width: 50%;
    font-size: 1.2rem;
  }
}
footer nav a {
  text-decoration: none;
  color: black;
  padding: 1%;
  padding-bottom: 3%;
}
footer p {
  padding: 2%;
}
@media (max-width: 500px) {
  footer p {
    font-size: 1.2rem;
  }
}
@media (max-width: 500px) {
  .top_heading {
    background-size: contain;
    min-height: 208px;
  }
}
.top_heading h1 {
  width: 25%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  margin: 10%;
}
@media (max-width: 500px) {
  .top_heading h1 {
    width: 30%;
    font-size: 3.6rem;
  }
}
.description {
  width: 75%;
  text-align: center;
  margin: 5% auto;
}
@media (max-width: 500px) {
  .description p {
    font-size: 1.8rem;
  }
}
.profilepicstop {
  display: flex;
  justify-content: space-between;
  margin: 0 5%;
}
@media (max-width: 500px) {
  .profilepicstop {
    flex-direction: column;
  }
}
.profilepicstop div {
  text-align: center;
  padding: 5%;
}
.profilepicstop div img {
  padding-bottom: 4%;
}
.profilepicstop div i {
  padding-top: 4%;
}
.profilepicsbottom {
  display: flex;
  justify-content: space-between;
  margin: 0 5%;
}
@media (max-width: 500px) {
  .profilepicsbottom {
    flex-direction: column;
  }
}
.profilepicsbottom div {
  text-align: center;
  padding: 0 5%;
  margin-bottom: 2%;
}
.profilepicsbottom img {
  padding-bottom: 4%;
}
.profilepicsbottom i {
  padding: 4% 0;
}

`