/**
* Share buttons in each post
*
*/

import * as React from "react"
import {TwitterShareButton, LinkedinShareButton, FacebookShareButton, InstapaperShareButton} from 'react-share'
import { StaticImage } from "gatsby-plugin-image"

const ShareButtons = ({ url, title, description }) => (
	<div className="postShare">
    <p>Share:</p>
    <div class="postShareButtons">
      <TwitterShareButton url={url} title={description} via={"strnad10"}>
        <StaticImage
          className="postShareIcon"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/shareButtons/Twitter.svg"
          width={30}
          height={30}
          quality={100}
          alt="Twitter"
        />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title} summary={description}>
        <StaticImage
          className="postShareIcon"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/shareButtons/Linkedin.svg"
          width={30}
          height={30}
          quality={100}
          alt="Linkedin"
        />
      </LinkedinShareButton>

      <FacebookShareButton url={url} quote={description}>
        <StaticImage
          className="postShareIcon"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/shareButtons/Facebook.svg"
          width={30}
          height={30}
          quality={100}
          alt="Facebook"
        />
      </FacebookShareButton>
      
      <InstapaperShareButton url={url} title={description}>
        <StaticImage
          className="postShareIcon"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/shareButtons/Instapaper.svg"
          width={30}
          height={30}
          quality={100}
          alt="Instapaper"
        />
      </InstapaperShareButton>
    </div>
	</div>
);

export default ShareButtons