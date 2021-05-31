import React from 'react'
import styled from "styled-components"
import { Top } from '../../LocalData/LocalData'
import Description from './Description'
function MplTop() {
    
   
    return (
        <div style={{display:"flex",width:"80%",flexWrap:"wrap",margin:"auto",marginTop:"100px",height:"fitcontent"}}>
          {Top.map( el=><MplTops>
                <div >
                    <img  style={{width:"120px",height:"120px",borderRadius:'5px'}} src={el.image} alt="" />
                </div>
                <div style={{paddingLeft:"15px"}}>
                    <div >
                        <h2 style={{margin:"0px",padding:"0px"}}>{el.name}</h2>
                    </div>
                    <div>
                       <Description desc={el.descreption} desc1={el.descreption1} lin={el.link}/>
                    </div>
                    
                </div>

            </MplTops>)}
            
        </div>
    )
}

export default MplTop


const MplTops=styled.div`
  display: flex;
 min-width: 330px;
 max-width: 350px;
  text-align: left;
  color: grey;
 
`


