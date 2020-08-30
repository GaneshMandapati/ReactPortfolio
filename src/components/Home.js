import React from 'react';
import myphoto from './myphoto.jpg'
import './about1.css';
const About = () => {
    return(
        <div>
         <div className="prof-box">
             <img src={myphoto} alt="imgae" class="prof-pic"></img>
             <h1>Ganesh Mandapati</h1>
			<h5>React js Developer | C++ Progrmmer </h5>
             <div class="line-break"></div>
                         
			<p style={{margin:"10px"}}>My passion is developing applications which are useful for day to day activites</p>
            
            
            <div className ="social-icon">
                        <a  href=" https://www.linkedin.com/in/ganesh-mandapati-012aa5159/ " ><i class="fab fa-linkedin"></i></a>
                        <a  href="https://www.instagram.com/mandapatiganesh/"  ><i class="fab fa-instagram"></i></a>
                        <a  href="https://www.facebook.com/mandapatiganesh.ganesh"><i class="fab fa-facebook-f"></i></a>
                        <a  href="https://github.com/GaneshMandapati" ><i class="fab fa-github"></i></a>
                       </div>
                       </div>
        </div>
                         
			
		
        
    )
}

export default About;