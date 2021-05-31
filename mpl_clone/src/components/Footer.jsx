import React from 'react'
import  styled from 'styled-components'

function Footer() {
    return (
        <div>
            <FOOTER  primary>
                <h3 style={{marginBottom:"40px",fontSize:"22px",color:"rgba(25, 10, 40, 0.6)"}}>DISCLAIMER</h3>
                <Content>Galactus Funware is the owner of, and reserves all rights to the assets, content, services, information, and products and graphics in the website except any third party content.</Content>
                <Content>Galactus Funware refuses to acknowledge or represent about the accuracy or completeness or reliability or adequacy of the website's third party content. These content, materials, information, services, and products in this website, including text, graphics, and links, are provided "AS IS" and without warranties of any kind, whether expressed or implied. </Content>
                <Content>*MPL is the biggest gaming app in India based on the number of unity games, special tournaments and formats. MPL is available only to people above 18 years of age. MPL is available in all states where permissible by extant law. Consequently, users located in some states may not be able to access our App or its contests. For an updated list of such states, please download the App</Content>
                <Content>Copyright © - Galactus Funware Technology Private Limited | All rights reserved</Content>

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
const Content =styled.p`
font-size:19px;
color: rgba(36, 20, 51, 0.3);

`
