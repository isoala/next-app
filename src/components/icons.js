// components/icons.js

// Import icon libraries (choose one or more as needed)
import { FaGithub, FaLinkedinIn, FaCodepen, FaInstagram, FaGoodreads } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLink, BiLogoDiscord, BiLogoDiscordAlt, BiLogoFacebook, BiLogoFacebookCircle, BiLogoFacebookSquare, BiLogoGmail, BiLogoJava, BiLogoLinkedin, BiLogoLinkedinSquare, BiLogoMailchimp, BiLogoSlack, BiLogoSpotify, BiLogoTiktok, BiLogoYahoo, BiLogoYoutube, BiMailSend, BiVoicemail } from 'react-icons/bi';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { SiGmail, SiLetterboxd, SiProton, SiProtoncalendar, SiProtonmail, SiX } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
// Add more imports from other icon libraries (e.g., react-icons/si, react-icons/md)

// Define your icon components
export const GithubIcon = FaGithub;
//export const LinkedinIcon = FaLinkedinIn;
export const LinkedinIcon = FaLinkedin;
export const InstagramIcon = FaInstagram;
export const XIcon = SiX;
export const MailIcon = SiProtonmail;

// You can add more icon components here as you need them.
// For example:
// import { SiTwitter } from 'react-icons/si';
// export const TwitterIcon = SiTwitter;

// If you have custom SVG files, you can import and use them as React components:
// import CustomLogo from './CustomLogo.svg';
// export const CustomLogoIcon = () => <CustomLogo />;

// Or using next/image for optimized SVG rendering (more complex):
// import Image from 'next/image';
// export const CustomLogoIcon = (props) => (
//   <Image src={CustomLogo} alt="Custom Logo" {...props} />
// );

// Feel free to organize these exports as you see fit.