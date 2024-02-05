import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const SocialButton = () => {
    return (
        <>
        {facebook && <FontAwesomeIcon icon={faFacebook} size="3x" />}
        {github && <FontAwesomeIcon icon={faGithub} size="3x" />}
        {linkedin && <FontAwesomeIcon icon={faLinkedinIn} size="3x" />}
        </>
    )
};
export default SocialButton;