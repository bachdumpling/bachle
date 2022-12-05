import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <div className="md:max-w-4xl md:mx-5 lg:mx-auto z-0 pt-14 pb-20">
      <div className="flex h-full flex-row justify-start items-center">
        <SocialLinks />
      </div>
    </div>
  );
}

export default Footer;
