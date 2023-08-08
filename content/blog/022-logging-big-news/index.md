---
title: Microsoft releases more logging data for free
date: "2023-07-21T12:01:20.751Z"
description: "Microsoft is giving access to additional logging data for Microsoft 365 customers worldwide at no additional cost, allowing easier detection of ..."
time: "4 min read"
tags: ["Announcement", "Audit", "Microsoft365"]
ogimage: "./00-thumbnail.png"
---

## BIG BAD HAPPENED

Microsoft is giving access to additional logging data for Microsoft 365 customers worldwide at no additional cost, allowing easier detection of breached networks and accounts. [This announcement](https://www.microsoft.com/en-us/security/blog/2023/07/19/expanding-cloud-logging-to-give-customers-deeper-security-visibility/) comes after Chinese hackers from Chinese APT group Storm-0558 stole a Microsoft signing key that allowed them to breach Microsoft Exchange and Microsoft 365 accounts. The method of how the key was stolen remains undisclosed, but the initial detection of these intrusions was made by the US government. They leveraged Microsoft's sophisticated logging data to identify the attacks and promptly informed Microsoft about them.

In a statement provided to Dark Reading, Microsoft recognized the necessity of enhancing the cost-effectiveness of accessing logging data. The company explained that these measures were taken after closely collaborating with both commercial and government customers, as well as the Cybersecurity and Infrastructure Security Agency (CISA). The aim was to address the evolving threat landscape by refining the types of security log data Microsoft offers to cloud customers, facilitating better insight and analysis capabilities.

"Asking organizations to pay more for necessary logging is a recipe for inadequate visibility into investigating cybersecurity incidents and may allow adversaries to have dangerous levels of success in targeting American organizations." explained Eric Goldstein, CISA Executive Assistant Director for Cybersecurity.

## Microsoft gives access to logging data to all Microsoft 365 customers

CISA (the US Cybersecurity and Infrastructure Security Agency) made an announcement regarding its collaboration with Microsoft to identify critical logging data points that should be provided to all Microsoft customers for free. As a result of these discussions and likely in response to recent attacks, Microsoft has decided to extend access to premium cloud logging without any additional cost for all of its customers. This expansion will take place gradually, with more features becoming available by September 2023.

In a recent post addressing the expanded logging, Microsoft stated, "Today we are taking another step to enhance Microsoft's cloud logging accessibility and flexibility. In the coming months, we will offer broader access to cloud security logs at no extra charge to our global customer base."

It means that Microsoft customers that already have Microsoft Purview Audit (Standard) will be able to utilize 30 other data points previously only available to customers with Microsoft Purview Audit (Premium).

You can see those data points bellow:

<table>
<thead>
    <tr><td>__Service__</td><td>__Data point__</td></tr>
</thead>
<tbody>
    <tr><td>Exchange</td><td>Send, Mail-Items-Accessed, searchqueryinitiatedexchange</td></tr>
    <tr><td>Stream</td><td>Streaminvokegettranscript, streaminvokechannelview, Streaminvokegettexttrack, streaminvokegetvideo, Streaminvokegroupview</td></tr>
    <tr><td>Yammer</td><td>Threadviewed, thredaccessfailure, Messageupdated, fileaccessfailure, Messagecreation, groupaccessfailure</td></tr>
    <tr><td>Teams</td><td>Meetingparticipantdetail, messagesent, Messageslisted, meetingdetail, Messageupdated, chatretrieved, Messageread, messagehostedcontentread, Subscribedtomessages, messagehostedcontentslisted, Chatcreated, chatupdated, Messagecreatednotification, messagedeletednotification, Messageupdatednotification</td></tr>
    <tr><td>SharePoint Online</td><td>searchqueryinitiatedsharepoint</td></tr>
</tbody>
</table>

And also according to Microsoft, they will extend the default retention period for Audit Standard customers from 90 to 180 days. This extension will enable customers to have a more extensive historical data access, especially beneficial during incident response investigations.

Those additional data points are now available to customers with licensec listed bellow:
- Microsoft Business Basic/Standard subscriptions
- Microsoft 365 Apps for Business subscription
- Microsoft 365 Enterprise E3 subscription
- Microsoft 365 Business Premium
- Microsoft 365 Education A3 subscription
- Microsoft 365 Government G1/G3 subscriptions
- Microsoft 365 Frontline F1 or F3 subscription, or F5 Security add-on
- Office 365 Enterprise E1/E3 subscription
- Office 365 Education A1/A3 subscriptions

Nonetheless, the introduction of these changes does not imply that Microsoft Purview Audit (Premium) will be discontinued. Licensed users will continue to receive enhanced benefits, including broader access to data, extended API access, and the ability to utilize Microsoft's AI-powered Intelligent Insights forensics tool.

If you like my content, go to your social media and share this post with your friends. Also fell free to contact me via [LinkedIn](https://www.linkedin.com/in/strnad10/) or [Twitter](https://twitter.com/strnad10). 

Have a nice day y'all. 👋