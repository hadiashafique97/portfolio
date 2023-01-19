import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Project({ title, description, img, link, github }) {
    <div className='p-card'>
        <div className='p-title'>
            <a href={link} target=".com">
                <h1>{title}</h1>
                <p>{description}</p>
            </a>
        </div>
        <img src={"../" + img} alt="" />
        <a className='github-logo' href={"../" + github}>
            <FontAwesomeIcon className="hover:text-black-600" icon={faGithub} size="2x" />
        </a>
        <a className='live-logo' href={"../" + link}>
        <FontAwesomeIcon icon="fa-sharp fa-solid fa-arrow-pointer" />
        </a>


    </div>
}