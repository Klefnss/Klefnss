import React,{useState,useEffect} from 'react'
import {UserCard,FlippingCard,FlippingCardFront,FlippingCardBack} from "react-ui-cards";
import Header from "./Header";
const Events=()=> {
    const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);
    const data=resumeData.Events;
    if(data){
        var Events=data.Events.map(function (Events){
            return(
              <div >
                <a href={Events.href}>
                <FlippingCard >
               <FlippingCardFront>
                   <div
                   style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                
                backgroundImage: "url("+Events.frontImage+")"
              }}>
                   </div>
               </FlippingCardFront>
               <FlippingCardBack >
               <div
              style={{
                width: '100%',
                height: '100%',
                backgroundPosition: 'center',
                objectFit:"fill",
                backgroundImage: "url("+Events.backImage+")"
              }}>
            </div>
               </FlippingCardBack>
           </FlippingCard>
           </a>
           </div>
            );
        })
    }
    return (
      <div >
        <Header data={resumeData.main} x={'0'} />
        <div style={{display: "flex",flexFlow: "row wrap",padding:"80px",justifyContent: "space-evenly"}}>
          {Events}
        </div>
        </div>
    )
}
export default Events;