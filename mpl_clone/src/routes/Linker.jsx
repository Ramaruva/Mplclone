import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkBox =styled.div`
 background: #230046;
    position: fixed;
    width: 100vw;
    height: 100vh;
    color: #fff;
    top: 0;
    left: 0;
    margin-top: 56px;
    overflow-y: auto;
    flex-direction: column;
    .wrapper {
        overflow-y: scroll;
       padding: 16px 0 0;
       margin-right: 16px;
    }
    .nav 
    {
        height: 90vh;
        overflow-y: unset;
        width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    }
    .link 
    {
        font-size: 28px;
    line-height: 36px;
    text-align: right;
    padding: 14px 0;
    margin-right: -16px;
    /* -webkit-tap-highlight-color: transparent; */
    display: block;
    font-style: normal;
    font-weight: 700;
    font-family: Trim-Medium;
    color: #fff ;
    white-space: pre-line;
    }
`

export const Linker =()=>
{
    const array=[
        {
            path:"/fruit-dart-game",
            title:"Fruit Dart"
        },
        {
            path:"/world-cricket-championship-wcc2",
            title:"WCC"
        },
        {
            path:"/pool",
            title:"Pool"
        },
        {
            path:"/chess",
            title:"Speed Chess"
        },
        {
            path:"/fantasy-cricket",
            title:"Fantasy Crickets"
        },
        {
            path:"/Quiz",
            title:"QUiz"
        },
        {
            path:"/fruit-chop",
            title:"fruit Chop"
        },
        {
            path:"/runner-no1",
            title:"Runner No.1"
        }
    ]
    return(
        <>
           <LinkBox>
                  <div className="wrapper">
                        <nav className="nav">
                                {
                                    array.map((item,id)=>(
                                        <div key={id}>
                                            <Link to={item.path}  className=".link" >
                                                {item.title}
                                            </Link>
                                        </div>
                                    ))
                                }
                        </nav>
                  </div>
           </LinkBox>
        </>
    )
}