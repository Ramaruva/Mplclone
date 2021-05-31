import React from 'react'
import styled from "styled-components"
import { Top } from '../../LocalData/LocalData'
function MplTop() {
    return (
        <div style={{display:"flex",width:"80%",flexWrap:"wrap",margin:"auto"}}>
          {Top.map( el=><MplTops>
                <div >
                    <img  style={{width:"120px",height:"120px",borderRadius:'5px'}} src={el.image} alt="" />
                </div>
                <div style={{paddingLeft:"15px"}}>
                    <div >
                        <h2 style={{margin:"0px",padding:"0px"}}>{el.name}</h2>
                    </div>
                    <div>
                        <p>{el.descreption}
                        <span>
                            <button>...more</button>
                        </span>
                    </p>
                    </div>
                    
                </div>

            </MplTops>)}
            
        </div>
    )
}

export default MplTop


const MplTops=styled.div`
  display: flex;
  width: 33%


`

