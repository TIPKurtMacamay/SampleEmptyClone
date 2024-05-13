import React, {  useState } from 'react';
import './App.css';
import programChairImage from './images/ProgramChair.png';
const FacultyTabs = () => {
    const [activeTab, setActiveTab] = useState(1);
  
    const handleTabClick = (tabNumber) => {
      setActiveTab(tabNumber);
    };
  
    return (
      <div className="flex flex-col h-screen">
        <div className="flex justify-center bg-gray-200 p-4">
          <button
            className={`px-4 py-2 mr-4 focus:outline-none ${activeTab === 1 ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-600'}`}
            onClick={() => handleTabClick(1)}
          >
            Program Chair
          </button>
          <button
            className={`px-4 py-2 mr-4 focus:outline-none ${activeTab === 2 ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-600'}`}
            onClick={() => handleTabClick(2)}
          >
            Full-time Faculty
          </button>
          <button
            className={`px-4 py-2 focus:outline-none ${activeTab === 3 ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-600'}`}
            onClick={() => handleTabClick(3)}
          >
            Staff
          </button>
        </div>
        <div className="flex items-center justify-top h-screen">
  {activeTab === 1 && (
    <div id="about" className="flex items-top justify-center h-screen mx-2">
    <div className="grid grid-cols-1 gap-1">
      <div className="bg-gray-10 p-7 flex items-center justify-center">
      <div>
        <img src={programChairImage} alt="Program Chair" className="w-50 h-auto" />
      </div>
      </div>
      
    </div>
  </div>

          )}
          {activeTab === 2 && (
            <div id="about" className="flex items-top justify-center h-screen mx-80">
              <div className="grid grid-cols-1 md:grid-cols-1 lg gap-1">
                <div className="bg-gray-200 p-4 mx-50">By the time of graduation, students will be able to:<br /><br />a. apply knowledge of mathematics, science, and engineering to solve complex engineering problems;<br /><br />b. identify, formulate, and solve complex engineering problems;<br /><br />c. solve complex engineering problems by designing systems, components, or processes to meet specifications within realistic constraints such as economic, environmental, cultural, social, societal, political, ethical, health and safety, manufacturability, and sustainability in accordance with standards;<br /><br />d. design and conduct experiments, as well as to analyze, and interpret data, and synthesize information to provide valid conclusions for investigating complex problems;<br /><br />e. use the techniques, skills, and modern engineering tools necessary for engineering practice in complex engineering activities;<br /><br />f. apply knowledge of contemporary issues and the consequent responsibilities relevant to professional engineering practice<br /><br />g. understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development;<br /><br />h. apply principles of ethics and commit to professional ethics and responsibilities;<br /><br />i. function effectively as an individual, and as a member or leader in diverse teams and in multidisciplinary settings;<br /><br />j. communicate effectively on complex engineering activities with various communities including engineering experts and society at large using appropriate levels of discourse;<br /><br />k. demonstrate knowledge and understanding of engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments;<br /><br />l. recognize the need for, and prepare to engage in lifelong learning.</div>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div id="about" className="flex items-top justify-center h-screen mx-80">
              <div className="grid grid-cols-1 md:grid-cols-1 lg gap-1">
                <div className="bg-gray-200 p-4 mx-50"><strong>Effective SY 2018-2019, the following Student Outcomes of the Computer Engineering Program will apply:</strong><br /><br />1. identify, formulate, and solve complex engineering problems by applying knowledge and principles of engineering, science, and mathematics.<br /><br />2. apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, welfare, global, cultural, social, environmental, and economic factors, in accordance with standards appropriate to the discipline.<br /><br />3. communicate effectively on complex engineering activities with various communities including engineering experts and society at large using appropriate levels of discourse.<br /><br />4. recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts.<br /><br />5. function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives by applying knowledge of engineering and management principles.<br /><br />6. develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions.<br /><br />7. acquire and apply new knowledge as needed, using appropriate learning strategies.</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default FacultyTabs;