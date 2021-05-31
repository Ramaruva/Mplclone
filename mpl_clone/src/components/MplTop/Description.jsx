import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

function Description({desc,desc1,lin}) {
    const [descreption, setdescreption] = useState(false)
    return (

        <div>
                <p>{desc}
                        
                        <MoreDes descreption={descreption}>
                            {desc1}
                        </MoreDes>
                        <MoreDes descreption={descreption}>
                         <Link style={{color:"red",border:"1px solid grey",textDecoration:"none"}} to={lin} >Know more</Link>
                        </MoreDes>
                        <span>
                            <button style={{backgroundColor:"white",color:"red",border:"none",fontSize:"16px"}}  onClick={()=>setdescreption(!descreption)}>{descreption?"Less":"...More"}</button>
                        </span>
                    </p>
        </div>
    )
}

export default Description

const MoreDes=styled.span`
display:${({descreption})=>descreption?"inline":"none"}
`
