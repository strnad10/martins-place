---
title: Microsoft Exchange Online bug blocking outgoing emails
date: "2023-07-19T11:15:32.156Z"
description: "Microsoft is currently investigating an ongoing problem with Exchange Online that is causing disruptions for customers trying to send ..."
time: "3 min read"
tags: ["Post", "Bug", "Exchange Online", "Microsoft365"]
ogimage: "./00-thumbnail.png"
---

## We have a bug in Microsoft Online again

Microsoft is currently investigating an ongoing problem with Exchange Online that is causing disruptions for customers trying to send emails. This issue is leading to 503 errors on affected systems.

Impacted users have reported encountering problems when sending emails from Microsoft 365 environments. These emails are being returned with "503 5.5.1 Bad sequence of commands" errors.

According to a tweet from Redmond, the company is aware of the issue and attributes it to a recent change in the free/busy infrastructure. They are actively working on a plan to resolve the problem and have provided more information in the admin center under ticket EX649175.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;re investigating an issue where some users may be unable to send Exchange Online email messages due to a recent change to the free/busy infrastructure. We&#39;re identifying a plan to resolve the impact. Further details can be found under EX649175 in the admin center.</p>&mdash; Microsoft 365 Status (@MSFT365Status) <a href="https://twitter.com/MSFT365Status/status/1681224177800425473?ref_src=twsrc%5Etfw">July 18, 2023</a></blockquote>

As confirmed in the EX649175 ticket, users may experience difficulties sending Exchange Online emails and receiving the "Bad sequence of commands" errors. Microsoftm is currently analyzing service monitoring data to pinpoint the root cause and develop a solution. The ipact seems to be affecting specific users who are served through the affected infrastructure.

While the company has not disclosed the exact Microsoft 365 regions experiencing the outage, reports from affected customers indicate that it has impacted users in the United States, Europe, India, and the United Kingdom.

Notably, this is not the first recent issue Microsoft has faced with its email services. Two weeks ago, there was an Outlook.com problem that prevented users from searching their emails and caused 401 exception errors. Additionally, in June, there was another outage that affected American customers' access to their Exchange Online mailboxes via Outlook on the web.

## Update from Redmond

Despite Microsoft's removal of the EX649175 incident from the admin center on July 18 and claiming to have addressed the root cause of the outage, customers are still encountering problems. They continue to report being affected and are experiencing difficulties when trying to send Exchange Online emails. There are more details in the admin center itself and also a new twitter post stating that they fixed the problem for some customers and that they are in contact with others affected by the issue.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;ve mitigated impact for EX649175. Please refer to the admin centre for more details. As the change was only applied to a limited portion of Exchange infrastructure, we&#39;ve now scoped down our communication to only the customers who were affected by this issue.</p>&mdash; Microsoft 365 Status (@MSFT365Status) <a href="https://twitter.com/MSFT365Status/status/1681252398734426112?ref_src=twsrc%5Etfw">July 18, 2023</a></blockquote>

I hope that you found this blog post informative. If you did, go to your social media and share this post with your friends. 

Have a great day. 👋