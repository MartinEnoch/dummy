import {GitHub, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import {Element} from 'react-scroll'
import "./Contact.css"

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>martin.enoch.caleb@gmail.com</span>
            </p>

            <p>
                Github Username : <span>@MartinEnoch</span>
            </p>
            <div className='contact_icons'>
                 <a href='https://www.linkedin.com/in/martin-caleb-6a037b233'>
                    <IconButton>
                    <LinkedIn/>
                    </IconButton>
                </a>   
                <a href='https://instagram.com/call_me_martin_idiot?igshid=ZDdkNTZiNTM='>
                    <IconButton>
                    <Instagram/>
                    </IconButton>
                </a> 
                <a href='https://wa.me/919597893992'>
                    <IconButton>
                    <WhatsApp/>
                    </IconButton>
                </a> 
                <a href='https://github.com/MartinEnoch'>
                    <IconButton>
                    <GitHub/>
                    </IconButton>
                </a> 
            </div>
        </div>

    </Element>
  )
}

export default Contact