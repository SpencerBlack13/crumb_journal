import * as React from "react";
import {useState} from "react";
import { GridCarousel } from "./GridCarousel";

export function App() {
  //States of the pop ups
  const [showMorePurpose, setShowMorePurpose] = useState(false);
  const [showEmail, setshowEmail] = useState(false);

  //scrolls to purpose page and off 
  const handlePurposeClick = () => {
    if (!showMorePurpose){
      setShowMorePurpose(!showMorePurpose)
      setTimeout(() => {
        const element = document.getElementById('purposePageMore');
        scrollToElement(element);
      }, 100)
    }else{
      //opposite of above (closes)
      const element = document.getElementById('purposePage');
      scrollToElement(element);
      setTimeout(() => {
        setShowMorePurpose(!showMorePurpose)
      }, 500)
    }
  };

  //closes or opens the email pop up
  const displaySomething = () => {
    setshowEmail(!showEmail)
  }

  //All of the main content imgs, text, buttons, etc...
  return (
    <div id="app">
      <div className="page" id="titlePage">
        <img id="titlePhoneImg" src="/images/Multi-Colour_Phone.png" />
        <img id="titleLogoImg" src="/images/logo-08.png" />
        <h2 id="titleSubtitle">Customize / Organize / track</h2>
      </div>

      <div className="page" id="purposePage">
        <h1 className="pageTitle">Purpose</h1>
        <p className="pageText">The application will serve the function of being a fully customizable journal that helps users organize and track their data. This will onboard people to the very early stages or practices of journaling.</p>
        <button className="btnText" onClick={handlePurposeClick}>{!showMorePurpose ? "See More" : "See Less"}</button>
        <img src="/images/Purpose-IMG.png" />
      </div>

      {showMorePurpose && (
        <div className="page" id="purposePageMore"> 
          <h1 className="pageTitle">Goal</h1>
          <p className="pageText">The goal is to design a mobile application focusing on young adults, particularly people studying in college or university and looking to get started with journaling. The application will serve the function of being a fully customizable journal that helps users organize and track their data. This will onboard people to the very early stages or practices of journaling. Therefore, helping people with all different types of needs and preferences to start this habit.</p>
          <h1 className="pageTitle">Reasoning</h1>
          <p className="pageText">Many people struggle with processing emotions, forgetfulness, little to no self-awareness, and missed opportunities for growth. These issues can arise due to a lack of regular reflection on an individual's thoughts, feelings, and experiences. Regular journaling can provide an effective solution to these issues by providing an outlet for processing emotions, aiding memory retention, promoting self-awareness, and helping people identify areas for growth. By adding journaling into their daily or weekly routine, individuals may experience improved emotional regulation, reduced stress and anxiety, increased productivity, greater self-awareness and insight, and enhanced personal and professional growth opportunities. This problem begs the question why don't people journal?</p>
          <button className="btnText" onClick={handlePurposeClick}>{!showMorePurpose ? "See More" : "See Less"}</button>
        </div>
      )}

      <div className="page" id="interactionPage">
        <img id="interactionImg" src="/images/Phone-Widget.png" />
        <GridCarousel id="interactionCarousel"/>
      </div>

      <div className="page" id="emailPage">
       

        <h1 className="pageTitle">I'd love to hear from you!</h1>
        <p className="pageText">Get in touch below, via email and be responsible for a new widget.</p>

        <p className="formLabel">Name:</p>
        <input className="formInput" placeholder="Enter your name"></input>

        <p className="formLabel">Email Address:</p>
        <input className="formInput" placeholder="Enter your email address"></input>

        <p className="formLabel">Widget Idea:</p>
        <textarea type="text" className="formInput" placeholder="Enter your idea" style={{height: "250px"}}></textarea>

        <button onClick={displaySomething} className="btnText">Submit</button>

        <img src="/images/Quarter-Pattern.png" />

        <div>
          {showEmail && (<img onClick={displaySomething} className='modal2' src='./images/LG-Thank_you.png'></img>)}
        </div>
      </div>

      <div id="footer">
        <div>TM Spencer Black</div>
      </div>

    </div>
  );
}

function scrollToElement(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}