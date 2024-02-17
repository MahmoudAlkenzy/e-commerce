import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLinkedinIn,
    FaTiktok,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';
export default function SocialList() {
    return (
        <ul className="d-flex gap-3 p-1 mb-1 m-0 align-items-center fs-5 ">
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaTiktok />
            </li>
            <li>
                <FaTwitter />
            </li>
            <li>
                <FaLinkedinIn />
            </li>
            <li>
                <FaYoutube />
            </li>
        </ul>
    );
}
