import { useState } from "react";
import { BioInfo } from "./BioInfo";
import { EducationInfo as EduInfo } from "./EducationInfo";
import { ExperienceInfo as ExpInfo } from "./ExperienceInfo";
import { AboutTabs } from "./AboutTabs";

function About() {
  const [tab, setTab] = useState({ current: "bio" });

  const onSwitchTabs = (e) => {
    const { value } = e.currentTarget;

    setTab((prev) => {
      const newTab = { ...prev };
      newTab.current = value;
      return newTab;
    });
  };

  return (
    <>
      <div className="about__container">
        <div id="about" className="about">
          <AboutTabs onSwitchTabs={onSwitchTabs} tab={tab} />
          <div className="info">
            {tab.current === "bio" && <BioInfo />}
            {tab.current === "edu" && <EduInfo />}
            {tab.current === "exp" && <ExpInfo />}

            {/* <div className="cta">
              <a className="btn btn__proj">
                View my projects <span className="btn__arrow">&rarr;</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export { About };
