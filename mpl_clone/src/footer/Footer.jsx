import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  styled from 'styled-components'
import { FooterData } from '../LocalData/LocalData'
import {More} from './About'

function Footer() {

    return (
        <div>
            <AboutMpl>
                <img src="https://www.mpl.live/static/mpl_icon.png" alt="" />
                <h1>About The MPL Gaming App</h1>
                  <AboutMplPara >Mobile Premier League (MPL) is an online gaming platform that offers a plethora of games - fantasy sports,Rummy, Chess, Quiz, Fruit Chop, 8 ball 3D Pool, Carrom and more! Play and win real cash for playing your favorite mobile games. Sounds fun, right? <span style={{display:'none'}} id="about2">With MPL, you can play 40+ games including fantasy sports on your mobile to win great prizes. MPL offers the ultimate gaming experience, which makes you want to play more & win more. Take your pick from adventure, action, sports & many other categories.</span> </AboutMplPara>
                  <div  style={{display:'none'}} id="abou">
                  <AboutMplPara>With games like Rummy, Chess, Ludo, Carrom, Cricket, and Bubble Shooter, we have them all. Play games on the MPL app and make it to the top of the leaderboards. Connect with your friends and see who the real winner is. You also get a referral bonus for every referral you make.</AboutMplPara>
                  <AboutMplPara >You can download the MPL PRO (apk) app from here for Android, while iOS users can get it from the Apple app store.</AboutMplPara>
                  </div>
                
                  <h3 id="More" style={{color:"red",cursor:"pointer"}} onClick={More}>˅ More</h3>

            </AboutMpl>
            <GameLinks>
                {FooterData.map(el=><div className="linkDiv"><Link className="links" to={el.link}>{el.data}</Link></div>)}
            </GameLinks>
            <FOOTER  primary>
                <h3 style={{marginBottom:"40px",fontSize:"22px",color:"rgba(25, 10, 40, 0.6)"}}>DISCLAIMER</h3>
                <FooterContent>Galactus Funware is the owner of, and reserves all rights to the assets, content, services, information, and products and graphics in the website except any third party content.</FooterContent>
                <FooterContent>Galactus Funware refuses to acknowledge or represent about the accuracy or completeness or reliability or adequacy of the website's third party content. These content, materials, information, services, and products in this website, including text, graphics, and links, are provided "AS IS" and without warranties of any kind, whether expressed or implied. </FooterContent>
                <FooterContent>*MPL is the biggest gaming app in India based on the number of unity games, special tournaments and formats. MPL is available only to people above 18 years of age. MPL is available in all states where permissible by extant law. Consequently, users located in some states may not be able to access our App or its contests. For an updated list of such states, please download the App</FooterContent>
                <FooterContent>Copyright © - Galactus Funware Technology Private Limited | All rights reserved</FooterContent>

            </FOOTER>
        </div>
    )
}

export default Footer

const FOOTER =styled.div`
height: fit-content;
text-align: left;
padding: 3% 8%;
width: 84%;
background: ${props => props.primary ? "palevioletred" : "white"};
background-color: #F3F3F4;
margin: auto;
font-family: 'Regular', Trim Web Regular;


`
const FooterContent =styled.p`
font-size:19px;
color: rgba(36, 20, 51, 0.3);

`
const GameLinks =styled.div`
display: flex;
flex-wrap:wrap;
width: 85%;
padding: 5%;
margin: auto;
justify-content: space-between;
margin-left: 50px;
font-size: 20px;
font-family: 'Regular', Trim Web Regular;
`
const AboutMpl =styled.div`
width: 84%;
margin: auto;
padding: 100px 0px 0px 0px ;
`
const AboutMplPara =styled.p`
font-size:19px;
font-family: 'Regular', Trim Web Regular;
color: rgb(130,108,126);
text-align: center;
line-height:24px;
`
const Top60 =styled.div`



`
