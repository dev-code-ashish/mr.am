// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri"

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.youtube.com/@dev-code-ashish'} target="_blank" className="hover:text-accent" transition-all duration-300>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://in.linkedin.com/in/ashish-maharana07'} target="_blank" className="hover:text-accent" transition-all duration-300>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.instagram.com/beyou.ashish/channel'} target="_blank" className="hover:text-accent" transition-all duration-300>
        <RiInstagramLine />
      </Link>
      <Link href={'https://dribbble.com/dev-code-ashish'} target="_blank" className="hover:text-accent" transition-all duration-300>
        <RiDribbbleLine />
      </Link>
      <Link href={'https://www.behance.net/ashishmaharana5'} target="_blank" className="hover:text-accent" transition-all duration-300>
        <RiBehanceLine />
      </Link>
      <Link href={'https://in.pinterest.com/devcodeashish/'} target="_blank" className="hover:text-accent" transition-all duration-300>
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
