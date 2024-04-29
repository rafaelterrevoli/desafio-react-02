import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function SocialButton(props) {
  return (
    <>
     
        <FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faGithub}/>
        <FontAwesomeIcon icon={faLinkedin}/>
     
    </>
  )
}
