import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Badges from "../components/badges"
import LinkToCV from "../components/linkToCV"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <h1 id="about-title">About</h1>
      <div className="about">
        <StaticImage
          className="about-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.png"
          width={200}
          height={200}
          quality={95}
          alt="Profile picture"
        />
        <p>
          My name is Martin Strnad. I'm from the Czech Republic and since I was a little child, I lived in a lovely village called Struhařov. After I graduated from <a href="https://www.sps-prosek.cz">Prosek High School</a> in Prague, I moved to Čeňovice, which is even smaller than Struhařov, but just as lovely.
        </p>
        <p>
          Since September 2021, I work as a Systems Engineer at <a href="https://alef.com">ALEF NULA a.s.</a> in Prague. I mainly focus on the Security of Microsoft 365 environments. I also love the identity approach of Microsoft and Microsoft Endpoint Manager on which I'll try to focus the most. It took a lot of effort and energy to get here and it is worth it.
        </p>
        <p>
          The ALEF company has been operating on the market since 1994, and during that time it has built a position as a reliable partner and provider of modern IT solutions. The company's unique advantage is the comprehensiveness of its offer, from analysis, solution design, implementation, training, and certification to monitoring and professional services for small and medium-sized enterprises and international corporations. And I as a Microsoft 365 specialist do just that.
        </p>
        <p>
          In ALEF, I got a chance to work on my education and certifications. I took two courses on Cyber Security Law of the Czech Republic. I also had time to go for a lot of Microsoft's certifications. Mainly, I went for MS-500, then MD-100 and MD-101 which is Intune and MECM (formerly SCCM) based, MS-100 which I got not too long ago, and right now, I'm in a process of getting MS-101 to finish my Expert certification. I also want to go for AZ-500 to get a bit of diversity and then for SC-300.
        </p>
        <Badges />
        <p>
          Before I landed this job, I worked for almost a year at <a href="https://emris.cz">EMRIS spol. s.r.o.</a> In EMRIS, we‘ve been developing custom solutions for SharePoint Server since 2003 and I was there to support those solutions as first-line support. For the rest of my time, I was deepening my skills in Microsoft 365 and mainly SharePoint Online, for which I’ve also developed a few custom solutions.
        </p>
        <p>
          Going even more to the past, I was a part of a company called <a href="https://www.notservis.cz">NOTSERVIS a.s.</a> where I worked as an IT Specialist. I worked with a lot of notaries in Prague and Central Bohemia. Most of them had an on-premise server with a notary system and few computers connected to it. My task was to keep their systems up and running. Even though I could manage their IT however I saw fit, which was something I liked, I had to drive a lot and in most cases, my work day lasted 11 hours and sometimes even more.
        </p>
        <p>
        I spent more than 5 years in my first real job. It all started in my second year of High School when we had to take 14 days of unpaid internships. I couldn’t find any internship that I’d like and so I went with my friend to an internship that took place at 5 Elementary schools in Prague. It was a company of one guy loving IT. He took care of IT stuff in all of those 5 schools. We got along very well and he liked my working attitude, so he offered me to work with him. At first, it was a part-time job to which I commuted after school. After I graduated high school, I work there full-time while also studying at the University of Hradec králové. When closing my 5 years, something changed, and as well as in NOTSERVIS, I spent 12 to 14 hours a day working. I liked it at first because I was learning a lot of new things. It was at that time that I first got my hands on Microsoft 365 services. After a month or so, It got to me and I was exhausted. They also didn’t pay as well and since I wanted to start a family and save a bit of money, I had to leave and find a better-paid job.
        </p>
        <p>
        All that said, I like all of my jobs and I wouldn't change how they went. I used all those experiences I gathered throughout the years to get a dream job at ALEF.
        </p>
        <p>
          The views and opinions expressed on this website are my own and do not necessarily reflect those of any past or present employer or of any third party mentioned in the articles, unless explicitly stated otherwise.
        </p>
        <p>
          Should you need to get in touch with me, you may use DM on <a href="https://twitter.com/strnad10">Twitter</a> or <a href="https://twitter.com/strnad10">LinkedIn</a>.
        </p>
        <p>
          If you want to get even more information about my carrier path or my skills, download my CV <LinkToCV />.
        </p>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
