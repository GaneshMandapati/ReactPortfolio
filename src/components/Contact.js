import React from 'react';

const Contact = (props) => {
    // props.history.goBack();
    return(
        <div className='center container'>
               <div class="contact">
       <h2 >My Contact Details</h2>
      <div class="line-break"></div>
       <div class="social-icon">
      <i class="fas fa-home" id="a">
       <p style={{font: "20px"}}>Lovely Professional University</p>
       <p style={{font: "20px"}}>Jalandhar - Delhi G.T. Road, Phagwara, Punjab 144411</p>
       <form action="https://www.lpu.in/">
         <button type="submit" class="btn info">Website</button>
      </form>
       </i>
      <i class="fas fa-envelope" id="b">
        <p style={{font: "20px"}}>mandapatiganesh389@gmail.com</p>
      </i>
       <i   class="fas fa-phone" id="c">  Phone:+919182026657</i> 
       </div>
      </div>
        </div>
    )
}

export default Contact;