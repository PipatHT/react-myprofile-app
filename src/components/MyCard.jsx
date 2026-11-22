import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import profileImage from "../assets/Me.jpg";

const socialLinks = [
  { label: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/" },
  { label: "X", icon: FaXTwitter, href: "https://x.com/" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/" },
  { label: "Google", icon: FaGoogle, href: "https://www.google.com/" },
];
export default function MyCard() {
  return (
    <aside className="profile-card" aria-label="Profile">
      <p className="brand"><span>P</span>ipat</p>
      <div className="profile-avatar">
        <img src={profileImage} alt="Pipat" />
      </div>
      <p className="profile-name">Pipat</p>
      <p className="profile-id">STU ID: 6852410007</p>
      <p className="profile-role">Fullstack Web Developer</p>

      <div className="profile-socials" aria-label="Social profiles">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
            >
              <Icon aria-hidden="true" />
            </a>
          );
        })}
      </div>

      <a className="hire-button" href="/contactme">
        HIRE ME !
      </a>
    </aside>
  );
}
