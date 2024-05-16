import React, { useState } from 'react'
// import Resume from '/components/Resume';
// import "./components/Resume.css"

function Resume() {
    const [Detail, setdetail] = useState({name: '',contactInfo : '',email: ''});
    
      const [resume, setresume] = useState([]);
      const [experience, setExperience] = useState([]);
    
      const machine = (mac) => {
        const { name, value } = mac.target;
        setdetail(prevState => ({
          prevState,
          [name]: value



        }));
      };
    
      const handleEducationChange = (index, mac) => {
        const { name, value } = mac.target;
        const updatedEducation = [Detail];
        updatedEducation[index][name] = value;
        setresume(updatedEducation);
      };
    
      const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExperience = [experience];
        updatedExperience[index][name] = value;
        setExperience(updatedExperience);
      };
    
      const adddetail = () => {
        setdetail(prevState => [prevState, { degree: '', institution: '', GPA: '' }]);
      };
    
      const addExperience = () => {
        setExperience(prevState => [prevState, { company: '', position: '', duration: '' }]);
      };
  return (
    <div className='page'>
      <h1  style={{ fontSize: '45.03px', color: '#1A728E', textAlign: 'center', margin: '90px', fontWeight: 'lighter' }}>Create your professional resume in minutes</h1>
        <h1 style={{ fontSize: '45.03px', color: 'blue', textAlign: 'center', margin: '90px', fontWeight: 'lighter' }}>Create Resume</h1>
      <h2>Personal Information</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={Detail.name} onChange={machine} />
        <label>Contact Info:</label>
        <input type="text" name="contactInfo" value={Detail.contactInfo} onChange={machine} />
        <label>Email:</label>
        <input type="email" name="email" value={Detail.email} onChange={machine} />
      </form>

      <h2>Educational Qualifications</h2>
      {resume.map((edu, index) => (
        <div key={index}>
          <label>Degree:</label>
          <input type="text" name="degree" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} />
          <label>Institution:</label>
          <input type="text" name="institution" value={edu.institution} onChange={(e) => handleEducationChange(index, e)} />
          <label>GPA:</label>
          <input type="text" name="GPA" value={edu.GPA} onChange={(e) => handleEducationChange(index, e)} />
        </div>
      ))}
      <button onClick={adddetail}>Add Education</button>

      <h2>Work Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <label>Company:</label>
          <input type="text" name="company" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} />
          <label>Position:</label>
          <input type="text" name="position" value={exp.position} onChange={(e) => handleExperienceChange(index, e)} />
          <label>Duration:</label>
          <input type="text" name="duration" value={exp.duration} onChange={(e) => handleExperienceChange(index, e)} />
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
{/* 
      <h2>Resume Preview</h2>
      
      <p>Name: {Detail.name}</p>
      <p>Contact Info: {Detail.contactInfo}</p>
      <p>Email: {Detail.email}</p>

      <h3>Educational Qualifications</h3>
      {resume.map((edu, index) => (
        <div key={index}>
          <p>Degree: {edu.degree}</p>
          <p>Institution: {edu.institution}</p>
          <p>GPA: {edu.GPA}</p>
        </div>
      ))}

      <h3>Work Experience</h3>
      {experience.map((exp, index) => (
        <div key={index}>
          <p>Company: {exp.company}</p>
          <p>Position: {exp.position}</p>
          <p>Duration: {exp.duration}</p>
        </div>
      ))} */}
              {/* <button type="con-btn" class="con-btn button">Add </button> */}
              <a href='http://localhost:3000/Pro' className='btn btn-primary'>add</a>

    </div>
  )
}

export default Resume