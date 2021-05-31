import styled from "styled-components";

export const Nav = styled.div`
  background-color: #fff;
  z-index: 3;
  position: fixed;
  width: 100vw;
  top: 0;
  .container {
    max-width: 1200px;
    padding: 0 3.8vh 0 3.5vh;
    margin: 12px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .imgBox > img {
    width: 96.3px;
    height: 21px;
  }
  #sidemenu {
    z-index: 100;
  }
  #menuicon {
    display: inline-block;
    cursor: pointer;
  }
  .bar1,
  .bar2,
  .bar3 {
    width: 25px;
    height: 3px;
    background-color: #ff1e46;
    margin: 5px 0;
    transition: 0.4s;
  }
  .change .bar1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  .change .bar2 {
    opacity: 0;
  }
  .change .bar3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;

export const MiddleBox = styled.div`
  height: 712px;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  border-bottom: solid 4px #f0f0f0;
  flex-direction: column;
  margin-top: 72px;
  justify-content: center;
  align-items: flex-start;
  .bannerimg {
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    object-fit: cover;
  }
  .bannertext {
    z-index: 2;
    width: 100%;
    display: flex;
    padding-left: 117px;
  }
  .bannertextcontainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .greyheader {
    font-family: Trim-Bold;
    font-size: 56px;
    line-height: 76px;
    text-align: left;
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
    color: #230046;
  }

  .redheader {
    font-family: Trim-Bold;
    font-size: 48px;
    line-height: 48px;
    color: #ff1e46;
    text-transform: uppercase;
    font-weight: 400;
  }

  .lightgrey {
    font-family: Trim-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    color: #230046;
    margin-top: 16px;
  }
  .bannersmscontainer {
    z-index: 2;
    padding-left: 117px;
  }
  .smsblock {
    margin-top: 20px;
  }

  .smsformbox {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0em;
  }
  .inputbox {
    margin-right: 16px;
    justify-content: center;
    border-radius: 4px;
    display: flex;
    background: rgba(255, 255, 255, 0.2) !important;
  }
  .inputbox input {
    border-radius: 4px;
    padding-left: 10px;
    background: #ffffff;
    color: #b4b4b4;
    font-size: 12px;
    line-height: 18px;
    height: 50px;
    width: 352px;
    font-size: 18px;
    border-left: solid 1px #828282;
  }
  .getsms input {
    margin-top: 0;
    height: 50px;
    font-size: 18px;
    border-left: solid 1px #828282;
    border-radius: 4px;
    background: #33ff66;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 28px;
    cursor: pointer;
    font-size: 20px;
    letter-spacing: 0.01px;
    text-align: center;
    color: #ffffff;
    border: none;
    margin-top: 10px;
    font-family: Trim-SemiBold;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #190a28;
    padding: 12px 28px;
    appearance: auto;
    user-select: none;
    white-space: pre;
    align-items: flex-start;
    text-rendering: auto;
  }
`;

export const Withdraw =styled.div`
    max-width: 1232px;
    margin: auto;
    .h2winnings
    {
      color: #230046;
      font-size: 48px;
    line-height: 56px;
    margin-top: 144px;
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
    font-family: Trim-SemiBold;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    }
`

export const Paytmbox =styled.div`
.paybox
{
  max-width: 1232px;
    margin: auto;
}
.payments
{
  width: 784px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 160px;
}
.paymentsection
{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.imgblock
{
  margin-top: 64px;
  width: 25%;
}
.datablock
{
  width: 120px;
    margin: auto;
}
.datablockimg
{
  width: 120px;
    height: 120px;
    border-radius: 8px;
    display: block;
    margin: auto;
}
.pbox
{
  margin-top: 12px;
    text-align: center;
    color: #230046;
    font-size: 20px;
    line-height: 24px;
    font-family: Trim-Regular;
}
`

export const Shopnow =styled.div`
position: relative;
display: flex;
margin-left: 12px;
margin-right: 12px;
overflow: hidden;
background-repeat: no-repeat;
background-size: cover;
justify-content: center;
margin: 72px 16px;

.shopcontent
{
  width: 824px;
    height: 360px;
    margin: 0 auto 160px auto;
    border-radius: 12px;
    position: relative;
    
}
.shopimgbox
{
  position: absolute;
    border-radius: 12px;
    height: 100%;
    left: 0;
    width: 100%;
}
.shoptext
{
  display: flex;
  
  justify-content: center;
  flex-direction: column;
    padding: 24px 24px 24px 0;
    align-items: flex-end;
    z-index: 1;
    -webkit-box-pack: center;
    box-sizing: border-box;
}
.redheading
{
  font-weight: 600;
    font-size: 48px;
    line-height: 52px;
    font-family: Trim-SemiBold;
    text-transform: uppercase;
    color: #ff1e46;
}
.greyheading
{
  font-size: 48px;
    line-height: 52px;
    font-family: Trim-SemiBold;
    font-weight: 600;
    text-transform: uppercase;
    color: #230046;
}
.shopclick
{
  font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #33FF66;
    background: #230046;
    padding: 12px 32px;
    font-family: Trim-SemiBold;
    font-style: normal;
    text-transform: uppercase;
    margin-top: 24px;
    border-radius: 2px;
    z-index: 2;
}
`


