import { Stack } from 'react-bootstrap';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookSquare, FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';

export function SocialNetworks({color}) {
  return (
    <div className="d-flex flex-row mt-3">
    
      <a href="https://www.linkedin.com/company/glamphouse-ctd/" target="_blank">
      <BsLinkedin color={color} size={23}/>
      </a>
      <p>&nbsp;&nbsp;</p>   

      <a href="https://twitter.com/Glamphouse_" target="_blank">
      <FaTwitter color={color} size={23}/>
      </a>
      <p>&nbsp;&nbsp;</p>   

      <a href="https://www.instagram.com/glamphouse_/" target="_blank">
      <FaInstagram color={color} size={23}/>
      </a>
      <p>&nbsp;&nbsp;</p> 

      <a href="https://www.facebook.com/Glamp-House-102503935908322" target="_blank">
      <FaFacebookSquare color={color} size={23}/>
      </a>
      <p>&nbsp;&nbsp;</p> 

      <a href="https://www.tiktok.com/@glamphouse_ar" target="_blank">
      <FaTiktok color={color} size={23}/>
      </a>
      
    </div>
  )
}
