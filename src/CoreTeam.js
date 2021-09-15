import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import {UserCard} from "react-ui-cards";
import Header from "./Header";
const CoreTeam=()=>{
    const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);
    const data=resumeData.CoreTeam0;
    const [expanded,setexpanded]=useState(false)
    if(data){
        var CoreTeam = data.CoreTeam0.map(function (CoreTeam){
            return(
              
                <div style={{flexDirection:"row"}}>
                  
                    {/* <h1 style={{textAlign: "center", color:"white"}}>UNIT {CoreTeam.unit}</h1> */}
                    {/* <Link to={`/details/${CoreTeam.unit}`}> */}
                    <UserCard 
                    float
                    name= {CoreTeam.name}
                    header={CoreTeam.header}
                    avatar={CoreTeam.avatar}
                    // href={CoreTeam.href}
                    style={{borderRadius:1000,fontSize:15}}
                    ><div style={{width:'100%'}}>
                      <p style={{marginLeft:'75px'}}>{CoreTeam.role}</p>
                      </div>
                    </UserCard>
                    {/* </Link> */}
                    </div>
            );
        })
    }
    return(
      <div >
        <Header data={resumeData.main} x={'0'} />
            <div style={{display: "flex",flexFlow: "row wrap",paddingTop:"80px",justifyContent:'space-evenly'}}>
                {CoreTeam}
            </div>
        </div>
    );
}
export default CoreTeam