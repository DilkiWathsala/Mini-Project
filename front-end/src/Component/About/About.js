import React from 'react';
import background from '../Images/background.png';
import './AboutStyle.css';


const About=()=>{
    return(
        <>
            <div className='row'>
            <div class="carousel-inner">
                <div class="carousel-item active col-xs-12 col-md-6">
                    <img src={background} class="d-block w-100" alt="..."/>
                </div>
            </div>
            </div>

            <div className='mx-5 text-justify'>
            <p><b>Ensuring the safety of children is a very difficult task nowadays. Often children
                 leave home in the morning to go to school, parents do not even know if the child
                 has gone to school until it's time to return home. Putting children in a school van
                 alone does not guarantee their safety. As a solution to this, we created a platform
                  that connects parents and school van drivers.</b></p>
<p><b>The main thing here is for parents to know that the children went to school after leaving home and came 
back to the van after school. This will give them an idea of where the children are.</b></p>
<p><b>Also, this platform allows parents to easily find a van that is relevant to their area and their child's 
school. Parents can get their child into a safer van by viewing feedback and reviews from parents who 
have availed the services of those drivers.</b></p>
<p><b>Usually, parents inform the driver by phone call that their children are absent from school and they have 
to memorize those. But here parent can use the chat option on this platform to inform that. This allows 
the driver to view them at any time. It uses a map to track the whereabouts of a new student, making it 
easier for the driver.
</b></p>
</div>
        </>
    )
}
export default About;