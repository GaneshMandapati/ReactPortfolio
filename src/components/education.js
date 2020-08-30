import React from 'react';
import './education.css'
const education = () => {
    // console.log(props);
    // setTimeout( () => {
    //     props.history.push('/contact') 
    // }, 2000)
    return(
        <div className='center container'>
           
     <div class="container">
  <h2><b>My Education</b></h2>  
             
  <table class="table table-light table-hover">
    <thead  class="thead-dark">
      <tr>
        <th style={{width:"30%"}}>Qualification</th>
        <th style={{width:"50%"}}>Institution</th>
        <th style={{width:"20%"}}>Score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Graduation(2021)</td>
        <td>Lovely professional University,punjab</td>
        <td>8.5 CGPA</td>
      </tr>
      <tr>
        <td>XII(2017)</td>
        <td>Sri Chaithanya Junior College,Andhra pradesh</td>
        <td>98.5%</td>
      </tr>
      <tr>
        <td>X(2015)</td>
       <td>St.Marys Public School,Andhra Pradesh</td>
        <td>9.7 GPA</td>
      </tr>
    </tbody>
  </table>
</div>
     
<div class="line-break"></div>
<h2> My Skills</h2>

<div className="container">

	<div className="row">
     
       <div class="progress skill-bar ">
         
       <div class="progress-bar  progress-bar-striped active progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
    
                <span class="skill">HTML & CSS<i class="val">80%</i></span>
     
           </div>
    
        </div>
              
  
            <div class="progress skill-bar">
      
          <div class="progress-bar  progress-bar-striped active progress-bar-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
    
                <span class="skill">C++ & PYTHON<i class="val">75%</i></span>
  
              </div>
       
     </div>
            
 
           <div class="progress skill-bar">
    
            <div class="progress-bar  progress-bar-striped active progress-bar-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
       
             <span class="skill"> JAVASCRIPT <i class="val">40%</i></span>
             
   </div>
       
     </div>
         <div class="progress skill-bar ">
         
       <div class="progress-bar  progress-bar-striped active progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    
                <span class="skill">UNITY & BLENDER<i class="val">50%</i></span>
     
           </div>
    
        </div>
        <div class="progress skill-bar ">
         
       <div class="progress-bar  progress-bar-striped active progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
    
                <span className="skill">Node.js<i class="val">20%</i></span>
     
           </div>
    
        </div>
 
  
       <div className="progress skill-bar ">
         
       <div className="progress-bar  progress-bar-striped active progress-bar-warning" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    
                <span className="skill">PHP & MYSQL<i class="val">30%</i></span>
     
           </div>
    
        </div>

      <div className="progress skill-bar ">
         
       <div className="progress-bar  progress-bar-striped active progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
    
                <span className="skill">Digital Marketing<i class="val">60%</i></span>
     
           </div>
    
        </div>
  
        </div>
        </div>
        </div>
    
    )
}

export default education;