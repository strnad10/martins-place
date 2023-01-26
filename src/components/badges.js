/**
 * Badge pane to show all of my certification badges
 *
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Badges = () => {
  return (
    <div className="badges">
      <a href="https://www.credly.com/badges/a14c6c95-e13e-4d29-8bb3-f80e0f3ff5e8/public_url">
        <StaticImage
          className="badge"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/badges/microsoft-365-certified-enterprise-administrator-expert.png"
          width={100}
          height={100}
          quality={95}
          alt="Enterprise Administrator Expert"
        />
      </a>
      <a href="https://www.credly.com/badges/1b395f6e-ab42-4fff-a208-5df43fff2451/public_url">
        <StaticImage
          className="badge"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/badges/microsoft-cybersecurity-architect-expert.png"
          width={100}
          height={100}
          quality={95}
          alt="Cybersecurity Architect Expert"
        />
      </a>
      <a href="https://www.credly.com/badges/3b34d8ef-3ac9-4206-adcb-04acf55e955e/public_url">
        <StaticImage
          className="badge"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/badges/certified-security-administrator-associate.png"
          width={100}
          height={100}
          quality={95}
          alt="Security Administrator Associate"
        />
      </a>
      <a href="https://www.credly.com/badges/a0b744d1-3f02-49aa-82f7-8596316cd56a/public_url">
        <StaticImage
          className="badge"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/badges/certified-modern-desktop-administrator-associate.png"
          width={100}
          height={100}
          quality={95}
          alt="Modern Desktop Administrator Associate"
        />
      </a>
      <a href="https://www.credly.com/badges/927eaa39-57b6-405b-90f7-1290533cc9d3/public_url">
        <StaticImage
          className="badge"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/badges/identity-and-access-administrator-associate.png"
          width={100}
          height={100}
          quality={95}
          alt="Identity and Access Administrator Associate"
        />
      </a>
      <a href="https://www.credly.com/badges/fdf4bcde-fa76-430e-a214-a6733d5c204c/public_url">
        <StaticImage
          className="badge"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/badges/azure-security-engineer-associate.png"
          width={100}
          height={100}
          quality={95}
          alt="Modern Desktop Administrator Associate"
        />
      </a>
    </div>
  )
}

export default Badges
