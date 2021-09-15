import React, { useEffect, useState } from 'react'
import {UserCard} from "react-ui-cards"
import {useParams} from "react-router-dom"

function CoreTeamUnit(){
    const { id } = useParams();
    console.log(id)
    const [resumeData, setResumeData] = useState({});

    useEffect(() => {
      fetch("resumeData.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
          setResumeData(data);
        });
    }, []);
      const data=resumeData.CoreTeam;
      const [expanded,setexpanded]=useState(false)
      if(data){
          var CoreTeam = data.CoreTeam.map(function (CoreTeam){
              console.log(CoreTeam)
              if(CoreTeam.unit === id){
              return(
                  <div style={{flexDirection:"row",paddingRight:"20px"}}>
                      <UserCard 
                      float
                      name= {CoreTeam.name}
                      header={CoreTeam.header}
                      avatar={CoreTeam.avatar}
                      positionName={CoreTeam.role}
                      href={CoreTeam.href}
                      style={{borderRadius:1000,fontSize:15}}
                      />
                      </div>
              );}
          })
      }

    return (
        <div style={{display: "flex",flexFlow: "row wrap"}}>
            {CoreTeam}
        </div>
    )
}

export default CoreTeamUnit
