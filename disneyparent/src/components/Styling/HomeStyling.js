import styled from "styled-components"

export const HomeStyle = styled.body `
* Home */

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
  font-size: 3.6rem!important;
}
p {
  font-size: 1.8rem;
  /*line-height: 1.4;*/
}
.container {
  width: 90%;
  margin: 5% auto;
}
.button {
  background-color: #49C6E6;
  color: #FFFBFA;
  width: 193px;
  height: 47px;
  padding: 1%;
  margin-top: 3%;
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
  width: 30%!important;
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 1.8rem!important;
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
}

.logo {
  width:80%;
}

@media screen and (max-width:500px) {
  .logo {
    width: 60% !important;
  }
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
  font-size: 1.8rem!important;
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
.block_one {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  background-color: #E5E5E5;
  padding: 4%;
}
@media (max-width: 500px) {
  .block_one {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
.block_one h2 {
  color: #00BD9D;
  text-align: center;
  margin: 2%;
}
@media (max-width: 500px) {
  .block_one h2 {
    font-size: 3.6rem;
  }
}
.block_one .info {
  width: 50%;
}
@media (max-width: 500px) {
  .block_one .info {
    width: 100%;
  }
}
.block_one .info p {
  padding: 10%;
  text-align: center;
}
@media (max-width: 500px) {
  .block_one .info p {
    font-size: 1.8rem;
  }
}
.block_one .images {
  width: 50%;
  display: flex;
  flex-direction: column;
}
@media (max-width: 500px) {
  .block_one .images {
    width: 100%;
  }
}
.block_one .images .top {
  width: 35%;
  display: flex;
  margin: 0 auto;
}
.block_one .images .lines {
  margin: 0 auto;
  width:50%;
}
@media (max-width: 500px) {
  .block_one .images .lines {
    width: 75%;
  }
}
.block_one .images .bottom {
  padding-top: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.block_one .images .bottom img {
  width: 30%;
}
@media (max-width: 500px) {
  .block_one .images .bottom img {
    width: 25%;
  }
}
.block_two {
  background-color: #49C6E6;
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
  padding: 2%;
}
.block_two h4 {
  color: #FFFBFA;
  text-align: center;
}
@media (max-width: 500px) {
  .block_two h4 {
    font-size: 2.2rem;
  }
}
.block_two div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
}
.block_two div img {
  border: 20px solid black;
  border-radius: 40px;
  width: 20%;
  margin: 2%;
}
@media (max-width: 500px) {
  .block_two div img {
    width: 25%;
    border: 10px solid black;
    border-radius: 20px;
  }
}
.block_two div .features {
  display: flex;
  flex-flow: column wrap;
  color: #FFFBFA;
}
@media (max-width: 500px) {
  .block_two div .features {
    font-size: 2.4rem;
    padding-left: 4%;
  }
}
.block_two div .features p {
  padding-top: 3%;
}
@media (max-width: 500px) {
  .block_two div .features p {
    font-size: 1.6rem;
  }
}
.block_three {
  display: flex;
  flex-direction: column;
}
.block_three .linzy {
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 2%;
}
@media (max-width: 500px) {
  .block_three .linzy {
    display: flex;
    flex-direction: column;
    padding-top: 5%;
  }
  .block_three .linzy img {
    width: 30%;
    padding: 3% 0;
  }
}
.block_three .linzy p {
  display: flex;
  text-align: center;
  margin: 0 3%;
  font-size: 2rem!important;
}
@media (max-width: 500px) {
  .block_three .linzy p {
    font-size: 1.8rem;
  }
}
.block_three .michael {
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 2%;
}
@media (max-width: 500px) {
  .block_three .michael {
    display: flex;
    flex-direction: column;
    padding-top: 5%;
  }
  .block_three .michael img {
    width: 30%;
    padding: 3% 0;
  }
}
.block_three .michael p {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 3%;
  font-size: 2rem!important;
}
@media (max-width: 500px) {
  .block_three .michael p {
    font-size: 1.8rem;
    padding-bottom: 5%;
  }
}
@media (max-width: 500px) {
  .block_four {
    flex-direction: column;
    min-height: 315px;
  }
}
.block_four .parent {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 500px) {
  .block_four .parent {
    width: 100%;
    margin: auto 0;
    font-size: 2.4rem;
  }
  .block_four .parent h3 {
    font-size: 2.4rem;
  }
}
.block_four .sitter {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 500px) {
  .block_four .sitter {
    width: 100%;
    padding-bottom: 10%;
    font-size: 2.4rem;
  }
}
  .block_four .sitter h3 {
    font-size: 4.8rem;
  }

  @media (max-width: 500px){
    .block_four .sitter h3 {
        font-size: 2.4rem!important;
    }
      }

.block_four button {
  background-color: #49C6E6;
  color: #FFFBFA;
  width: 193px;
height: 47px;
font-size: 1.8rem;
  padding: 1%;
  margin-top: 3%;
}
@media (max-width: 500px) {
  .block_four button {
    width: 200px;
    padding: 0.2em;
  }
}

`