/**
 * Badge pane to show all of my certification badges
 *
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Badges = () => {
  return (
    <div className="badges">
      <Link to="https://www.credly.com/badges/3b34d8ef-3ac9-4206-adcb-04acf55e955e/public_url">
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
      </Link>
      <Link to="https://www.credly.com/badges/a0b744d1-3f02-49aa-82f7-8596316cd56a/public_url">
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
      </Link>
      <Link to="https://www.credly.com/badges/fdf4bcde-fa76-430e-a214-a6733d5c204c/public_url">
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
      </Link>
    </div>
  )
}

export default Badges
