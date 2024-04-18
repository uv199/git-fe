import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import gitLogo from "../../../assets/git.png";
import { FE_URL } from "../../../config";
export default function FooterCom() {
  return (
    <Footer className="bg-gray-100 border-t shadow-lg drop-shadow-sm" container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href={FE_URL}
            src={gitLogo}
            alt="Git Logo"
            name="GitHub UV"
            className="[&>img]:h-14"
          />
          <FooterLinkGroup>
            <FooterLink>About</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Licensing</FooterLink>
            <FooterLink>Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <div>
          <FooterCopyright className="text-black" by="Flowbite™" year={2022} />
        </div>
      </div>
    </Footer>
  );
}
