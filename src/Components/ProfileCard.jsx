import React from 'react'
import github from "../images/github.png"
import linkedIn from "../images/linkedin.png"
import email from "../images/email.png"


const ProfileCard = () => {
  return (
    <section className='profile-card py-5' >
        <div className='img-cont'>
                <div className="img-wrp">
                    <img width="250" height="250" 
                    src="https://ca.slack-edge.com/T023XKR8HU3-U027TGECGVD-1b263299545b-512" alt="pic-of-me" />
                </div>
        </div>
             <div className='tit-wrp py-3'>
                <h3> 
                     <u>
                         For More Info 
                    </u> 
                </h3>
             </div>                    
        <div className='cont-wrp'>
             <div className='git-wrp'>
                    <a href="https://github.com/Carlito-prog?tab=repositories">
                        <img width="100" height="100" src={github} alt="Github" />
                        <div className='tit-wrp'>
                            <h5> My GitHub </h5>
                        </div>
                     </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/carl-verrier-121a0610b/">
                        <img width="100" height="100" src={linkedIn} alt="LinkedIn" />
                        <div className='tit-wrp'>
                        <h5> My LinkedIn </h5>         
                        </div>
                    </a>
                </div>
                <div>
                    <div className='d-flex justify-content-center'>
                        <img width="100" height="100" src={email} alt="Email" />
                    </div>
                    <div className='tit-wrp'>
                        <h4> vcarl123@gmail.com </h4>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default ProfileCard