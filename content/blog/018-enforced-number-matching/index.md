---
title: Microsoft now enforces number matching
date: "2023-05-08T08:30:15.237Z"
description: ""
time: "4 min read"
tags: ["Post", "AzureAD", "MFA"]
ogimage: "./00-microsoft-auth.jpeg"
---

## It's finally the time

To prevent multi-factor authentication (MFA) fatigue attacks, Microsoft has begun as [previously announced](https://www.bleepingcomputer.com/news/security/mfa-fatigue-hackers-new-favorite-tactic-in-high-profile-breaches/#:~:text=Microsoft%20plans%20on%20enabling%20it%20by%20default%C2%A0for%20all%20Azure%20Active%20Directory%20tenants) implementing number matching in Microsoft Authenticator push notifications. MFA fatigue attacks, also known as push bombing or MFA push spam, involve cybercriminals flooding targets with mobile push notifications requesting approval for log-in attempts using their stolen credentials.

Many targets succumb to these malicious requests due to the constant stream of alerts, allowing attackers to access their accounts. Lapsus$ and Yanluowang threat actors have successfully used this social engineering attack method to breach high-profile organizations, including Microsoft, Cisco, and Uber.

In October 2022, Cybersecurity & Infrastructure Security Agency published [a document](https://www.cisa.gov/sites/default/files/publications/fact-sheet-implement-number-matching-in-mfa-applications-508c.pdf) showing the broad public that number matching should be the preferred method of MFA notifications. The document shows how to enable number matching in Microsoft 365 tenants and also states some of the best practices regarding MFA.

However, Microsoft will now enforce number matching for Microsoft Authenticator MFA alerts to prevent MFA fatigue attack attempts across tenants. Microsoft considers number matching a crucial security upgrade to traditional second-factor notifications in Microsoft Authenticator. They will remove admin controls and enforce the number match experience tenant-wide for all users of Microsoft Authenticator push notifications from May 8, 2023. Relevant services will start implementing these changes after that date, and some users may see number matching in approval requests while others may not.

![Number matching - Source: Microsoft's docs](./01-number-matching.png)

## Set it up manually

We've already been recommending our customers to enforce the setting themselves for a while and if you don't want to wait till Microsoft enables it for your tenant, here's how to do it manually.

1) Go to [Azure Portal](https://portal.azure.com)
2) Go to Security > Authentication methods > Microsoft Authenticator
3) Navigate to the **Enable and Target** tab
4) Click **Yes** and **All users** to enable the policy for everyone
5) Set the Authentication mode to **Any** or **Push**
6) On the **Configure** tab, change the status for **Require number matching for push notifications** to **Enabled**
7) Choose whom to include or exclude from number matching
8) Click **Save**

If you need more information, please, refer to [Microsoft's documentation](https://learn.microsoft.com/en-us/azure/active-directory/authentication/how-to-mfa-number-match).

Individuals who wish to strengthen their defense against MFA fatigue attacks may consider restricting the number of MFA authentication requests per user with the help of Microsoft, DUO, Okta, or similar services. Once the specified threshold is crossed, the accounts may be locked, or security teams/domain admins may be notified to take necessary action.

I hope this is useful for you guys. Before you leave, please, go to your social media and share my work with your friends. It helps a lot and I’d really appreciate it.

Have a wonderful spring day. 👋
