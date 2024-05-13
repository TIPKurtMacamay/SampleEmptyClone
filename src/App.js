import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center pr-4">
                <img className="h-20 w-auto" src={require("./images/cpe-logo 1.png")} alt="Your Logo" />
              </div>
              <div className="text-white text-lg font-bold" style={{ fontSize: "1rem" }}>Computer Engineering</div>
            </div>
            <div className="sm:hidden">
              {/* Hamburger menu icon for small screens */}
              <button className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"/>
                </svg>
              </button>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <NavItem href="#" label="Home" />
              <NavItem href="#" label="About" />
              <NavItem href="#" label="Faculty & Staff" />
              <NavItem href="#" label="Research" />
              <NavItem href="#" label="Student OA" />
              <NavItem href="#" label="Student Achievers" />
              <NavItem href="#" label="Community" />
              <NavItem href="#" label="Alumni" />
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-200 flex justify-center items-center opacity-50">
        <img className="w-full h-auto" src={require("./images/About-bg.png")} alt="Your Logo" />
      </div>
      <div className="w-full h-[10px] bg-green-600"></div>
      <div className="w-full h-[60px] bg-gray-900">
        <div className="text-white text-lg font-bold text-center pt-3" style={{ fontSize: "2rem" }}>OUTLINE</div>
      </div>
      <div className="text-left text-gray-700 mt-4 pl-20 pr-20 mb-20">
        <p>Computer Engineering is a profession that applies engineering principles and methodologies in the analysis, design, implementation and management of hardware, software and the integration of both.</p><br></br>
        <p>The program includes courses in computer hardware, system development and design, microelectronics and embedded systems, data communication and network administration, and software development and design.</p>
        <br></br>
        <br></br>
        <h2><strong>PROGRAM EDUCATIONAL OBJECTIVES</strong></h2><br></br>
        <p>The Computer Engineering program has adopted the following educational objectives.</p>
        <p>Three to five years after graduation, the Computer Engineering alumni shall:</p><br></br>
        <p>• have advanced their practice or achievement in the field of Computer Engineering and/or other endeavors or advocacies supported by their acquired computer engineering education;</p>
        <p>• strive to be globally competitive through</p>
        <p>1. living by the TIP mission values, pursuing continuing education, and practicing continuous quality improvement in their personal lives;</p>
        <p>2. continuously scanning, adopting, and building on the best practices in their field.</p> <br></br><br></br>
        <h2><strong>STUDENT OUTCOMES</strong></h2><br></br>
        <p>By the time of graduation, students will be able to:</p>
        <p>a. apply knowledge of mathematics, science, and engineering to solve complex engineering problems;</p>
        <p>b. identify, formulate, and solve complex engineering problems;</p>
        <p>c. solve complex engineering problems by designing systems, components, or processes to meet specifications
   within realistic constraints such as economic, environmental, cultural, social, societal, political, ethical, health and
   safety, manufacturability, and sustainability in accordance with standards;</p>
        <p>d. design and conduct experiments, as well as to analyze, and interpret data, and synthesize information to provide
   valid conclusions for investigating complex problems;</p>
        <p>e. use the techniques, skills, and modern engineering tools necessary for engineering practice in complex
   engineering activities;</p> 
        <p>d. design and conduct experiments, as well as to analyze, and interpret data, and synthesize information to provide
   valid conclusions for investigating complex problems;</p>
        <p>f. apply knowledge of contemporary issues and the consequent responsibilities relevant to professional
   engineering practice</p>
        <p>g. understand the impact of professional engineering solutions in societal and environmental contexts and
   demonstrate knowledge of and need for sustainable development;</p>
        <p>h. apply principles of ethics and commit to professional ethics and responsibilities;</p>
        <p>i. function effectively as an individual, and as a member or leader in diverse teams and in multidisciplinary settings;</p>
        <p>j. communicate effectively on complex engineering activities with various communities including engineering experts
   and society at large using appropriate levels of discourse;</p>
        <p>k. demonstrate knowledge and understanding of engineering and management principles and apply these to one’s
   own work, as a member and leader in a team, to manage projects and in multidisciplinary environments;</p>
        <p>l. recognize the need for, and prepare to engage in lifelong learning.</p><br></br><br></br>
        <h2><strong>Effective SY 2018-2019, the following Student Outcomes of the Computer Engineering Program will apply:</strong></h2><br></br>
        <p>1. identify, formulate, and solve complex engineering problems by applying knowledge and principles of engineering, science, and mathematics.</p>
        <p>2. apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, welfare, global, cultural, social, environmental, and economic factors, in accordance with standards appropriate to the discipline.</p>
        <p>3. communicate effectively on complex engineering activities with various communities including engineering experts and society at large using appropriate levels of discourse.</p>
        <p>4. recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts.</p>
        <p>5. function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives by applying knowledge of engineering and management principles.</p>
        <p>6. develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions.</p>
        <p>7. acquire and apply new knowledge as needed, using appropriate learning strategies.</p>
      </div>
    </div>
    </div>
  );
};

const NavItem = ({ href, label }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out"
    >
      {label}
    </a>
  );
};

export default Navbar;
