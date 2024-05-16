import React from 'react'

function Props(props) {
  return (
    <div>
        
      <h2>Resume Preview</h2>
      
      <p>Name: {props.name}</p>
      <p>Contact Info: {props.contactInfo}</p>
      <p>Email: {props.email}</p>

      <h3>Educational Qualifications</h3>
      {props.props((edu, index) => (
        <div key={index}>
          <p>Degree: {edu.degree}</p>
          <p>Institution: {edu.institution}</p>
          <p>GPA: {edu.GPA}</p>
        </div>
      ))}

      <h3>Work Experience</h3>
      {props.props((exp, index) => (
        <div key={index}>
          <p>Company: {exp.company}</p>
          <p>Position: {exp.position}</p>
          <p>Duration: {exp.duration}</p>
        </div>
      ))}
    </div>
  )
}

export default Props