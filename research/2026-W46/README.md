# Microsoft security digest: 9-15 November 2026 (IST), 2026-W46

Window: **2026-11-09 00:00 to 2026-11-15 23:59:59 IST (UTC+05:30)**. CVEs: the full November 2026 MSRC release (calendar month). Generated 2026-11-18T08:24:50+00:00.

## Leadership summary

- Patch exposure: one November flaw is already exploited, an Outlook spoofing bug that can leak NTLM credentials, and 64 are rated Critical. Ask for Outlook patch coverage and an NTLM reduction plan. (CVE-2026-124194, CVE-2026-119958, CVE-2026-116928, r02)
- Third-party access risk: attackers hijacked service providers' ScreenConnect servers to reach client networks, and GSocket intruders kept access after patching. Ask which suppliers hold remote access and how persistence is hunted. (t04, t05, t02, t03)
- Identity is the main target: one group hijacks accounts via voice phishing and self-service password reset, and phishing exploited the 12 Nov Microsoft 365 outage. Decide whether callback checks and phishing-resistant MFA become mandatory. (t01, t06)
- AI supply chain: Microsoft research shows models and coding agents can be secretly backdoored through tampered training. Ask who approves third-party models and agents, and whether an inventory of AI agents exists. (b02, b08, x33, x31, x28)
- Planned changes: Purview Data Governance support ends 12 Nov 2027, Sentinel leaves the Azure portal after 31 Mar 2027, and Purview retention and DLP changes land by February. Assign owners and migration dates. (b07, ch03, rm02, rm03)

## Key dates

Next 60 days (16 Nov 2026 to 14 Jan 2027).

- 2026-11-16: [Microsoft Security Pre-Day at Ignite (1:00-5:00 pm PT)](https://techcommunity.microsoft.com/t5/microsoft-security-community/plan-your-ignite-agenda-join-sessions-that-help-you-secure/ba-p/4569987)
- 2026-11-17: [Microsoft Ignite 2026 starts (17-20 Nov, San Francisco and online)](https://techcommunity.microsoft.com/t5/microsoft-security-community/secure-data-at-microsoft-ignite-2026-plan-your-experience/ba-p/4573071)
- 2026-12-08: [Patch Tuesday](https://msrc.microsoft.com/update-guide/)
- 2026-12-14: [Defender for Cloud: Upcoming deprecation of the Machines should have a vulnerability assessment solution recommendation (deprecation)](https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes#upcoming-deprecation-of-the-machines-should-have-a-vulnerability-assessment-solution-recommendation)
- 2027-01-12: [Patch Tuesday](https://msrc.microsoft.com/update-guide/)

## TL;DR

- **Securing AI agents moves to the front.** Most official output this week was about governing AI agents: Entra Agent ID, egress limits and traces in Foundry, Purview labels enforced on agents at runtime, Defender blocking malicious agent tool calls, MCP server governance, and a 19-part Zero Trust AI pillar video series, all ahead of Ignite (17-20 Nov).
- **Active campaigns: ScreenConnect/SCKit, GSocket, Storm-3350, outage-themed phishing.** Microsoft Threat Intelligence covered four live threats: SCKit spreading through ScreenConnect at MSPs, GSocket backdoors that keep access to Linux servers after patching, the Brazil-focused Storm-3350 cluster abusing password reset, and phishing that reused the 12 Nov M365 outage incident number.
- **AI model supply chain and AI-found vulnerabilities.** Microsoft research showed that models can be backdoored through a few neuron edits or poisoned fine-tuning, and that its own agentic tools (MDASH/Hyenas) found Rust standard-library and Linux kernel bugs, with 33 kernel CVEs assigned.
- **November Patch Tuesday: one exploited Outlook bug, 64 Critical.** The November release has 1,098 Microsoft-assigned CVEs. One is exploited (an Outlook spoofing flaw that leaks NTLM hashes), and the Critical RCEs in LDAP, Windows Search, Exchange and AD DS stand out. On Reddit, practitioners discussed the release and a separately published Windows zero-day, SignDrop.
- **Identity, data and endpoint hardening (Entra, Purview, Intune, Azure Backup).** Day-to-day controls also got attention: Entra Private Access and Internet Access in place of VPNs, tenant configuration snapshots, Connect Sync anchor migration, Purview classification and DSPM, Intune compliance with Autopatch, Edge extension control, and Azure Backup cyber recovery. Community threads covered passkey rollout and GSA tooling.

## Videos

| id | date (IST) | channel | title | views | summary | asset |
|---|---|---|---|---|---|---|
| v01 | 2026-11-09 21:35 | Microsoft Mechanics | [New Microsoft Copilot Harness \| More power, token efficiency & control for agents in Foundry](https://www.youtube.com/watch?v=4vCbQMUVV-I) | 31732 | Mechanics demo of the Copilot harness in Foundry, with per-agent Entra Agent ID, egress limits and traces. | [thumbnail](assets/yt-new-microsoft-copilot-harness-more-power-toke-4vcbqmuvv-i.jpg) |
| v02 | 2026-11-09 23:43 | Microsoft Security | [AI Pillar Deep Dive - Gain AI Visibility Swimlane Overview](https://www.youtube.com/watch?v=nflmD2D9T4k) | 381 | Zero Trust Workshop AI pillar walkthrough: how to gain visibility into AI usage. | [thumbnail](assets/yt-ai-pillar-deep-dive-gain-ai-visibility-swimla-nflmd2d9t4k.jpg) |
| v03 | 2026-11-09 23:45 | Microsoft Security | [AI Pillar Deep Dive - Registry Readiness Swimlane Overview](https://www.youtube.com/watch?v=B_Ecumz451U) | 793 | Zero Trust Workshop AI pillar walkthrough: preparing an agent registry. | [thumbnail](assets/yt-ai-pillar-deep-dive-registry-readiness-swimla-b_ecumz451u.jpg) |
| v04 | 2026-11-09 23:50 | Microsoft Security | [AI Pillar Deep Dive - Agent Registry Operations Swimlane Overview](https://www.youtube.com/watch?v=RkTaet71ZaU) | 405 | Zero Trust Workshop AI pillar walkthrough: running agent registry operations. | [thumbnail](assets/yt-ai-pillar-deep-dive-agent-registry-operations-rktaet71zau.jpg) |
| v05 | 2026-11-09 23:51 | Microsoft Security | [AI Pillar Deep Dive - Workload ID Migration to Agent ID Swimlane Overview](https://www.youtube.com/watch?v=P34pqLKWH88) | 416 | Zero Trust Workshop AI pillar walkthrough: moving workload identities to Entra Agent ID. | [thumbnail](assets/yt-ai-pillar-deep-dive-workload-id-migration-to-p34pqlkwh88.jpg) |
| v06 | 2026-11-09 23:52 | Microsoft Security | [AI Pillar Deep Dive - Access Swimlane Overview](https://www.youtube.com/watch?v=_Ja51-0LVy0) | 156 | Zero Trust Workshop AI pillar walkthrough: access controls for AI. | [thumbnail](assets/yt-ai-pillar-deep-dive-access-swimlane-overview-_ja51-0lvy0.jpg) |
| v07 | 2026-11-09 23:59 | Microsoft Security | [AI Pillar Deep Dive - Identity Governance Swimlane Overview](https://www.youtube.com/watch?v=oUBW4DYVnvA) | 251 | Zero Trust Workshop AI pillar walkthrough: identity governance for agents. | [thumbnail](assets/yt-ai-pillar-deep-dive-identity-governance-swiml-oubw4dyvnva.jpg) |
| v08 | 2026-11-10 00:01 | Microsoft Security | [AI Pillar Deep Dive - Network Security Readiness Swimlane Overview](https://www.youtube.com/watch?v=TrskCxNNgiE) | 466 | Zero Trust Workshop AI pillar walkthrough: network security readiness. | [thumbnail](assets/yt-ai-pillar-deep-dive-network-security-readines-trskcxnngie.jpg) |
| v09 | 2026-11-10 00:04 | Microsoft Security | [AI Pillar Deep Dive - Web & Destination Control Swimlane Overview](https://www.youtube.com/watch?v=TAO6uk2ksMU) | 392 | Zero Trust Workshop AI pillar walkthrough: controlling web destinations reached by AI. | [thumbnail](assets/yt-ai-pillar-deep-dive-web-destination-control-s-tao6uk2ksmu.jpg) |
| v10 | 2026-11-10 00:09 | Microsoft Security | [AI Pillar Deep Dive - Prompt & Content Protection Swimlane Overview](https://www.youtube.com/watch?v=9ZhoV8dzZBc) | 453 | Zero Trust Workshop AI pillar walkthrough: prompt and content protection. | [thumbnail](assets/yt-ai-pillar-deep-dive-prompt-content-protection-9zhov8dzzbc.jpg) |
| v11 | 2026-11-10 00:09 | Microsoft Security | [AI Pillar Deep Dive - Data Access Readiness Swimlane Overview](https://www.youtube.com/watch?v=tCgBYrQqI-8) | 202 | Zero Trust Workshop AI pillar walkthrough: readiness of data access for AI. | [thumbnail](assets/yt-ai-pillar-deep-dive-data-access-readiness-swi-tcgbyrqqi-8.jpg) |
| v12 | 2026-11-10 00:10 | Microsoft Security | [AI Pillar Deep Dive - AI Data Usage Monitoring Swimlane Overview](https://www.youtube.com/watch?v=6fKLT6O4NLE) | 221 | Zero Trust Workshop AI pillar walkthrough: monitoring how AI uses data. | [thumbnail](assets/yt-ai-pillar-deep-dive-ai-data-usage-monitoring-6fklt6o4nle.jpg) |
| v13 | 2026-11-10 00:14 | Microsoft Security | [AI Pillar Deep Dive - Data Loss Prevention Swimlane Overview](https://www.youtube.com/watch?v=CghlABVbgRY) | 160 | Zero Trust Workshop AI pillar walkthrough: data loss prevention for AI. | [thumbnail](assets/yt-ai-pillar-deep-dive-data-loss-prevention-swim-cghlabvbgry.jpg) |
| v14 | 2026-11-10 00:17 | Microsoft Security | [AI Pillar Deep Dive - Insider Risk Management Swimlane Overview](https://www.youtube.com/watch?v=g0aKWuu_ktY) | 629 | Zero Trust Workshop AI pillar walkthrough: insider risk management. | [thumbnail](assets/yt-ai-pillar-deep-dive-insider-risk-management-s-g0akwuu_kty.jpg) |
| v15 | 2026-11-10 00:24 | Microsoft Security | [AI Pillar Deep Dive - Agent Development Readiness Swimlane Overview](https://www.youtube.com/watch?v=8i4C3zs_a6Y) | 262 | Zero Trust Workshop AI pillar walkthrough: readiness for building agents. | [thumbnail](assets/yt-ai-pillar-deep-dive-agent-development-readine-8i4c3zs_a6y.jpg) |
| v16 | 2026-11-10 00:27 | Microsoft Security | [AI Pillar Deep Dive - MCP Server Governance Swimlane Overview](https://www.youtube.com/watch?v=JbYr5ijo9Hc) | 310 | Zero Trust Workshop AI pillar walkthrough: governing MCP servers. | [thumbnail](assets/yt-ai-pillar-deep-dive-mcp-server-governance-swi-jbyr5ijo9hc.jpg) |
| v17 | 2026-11-10 00:34 | Microsoft Security | [AI Pillar Deep Dive - Assess AI Risk Swimlane Overview](https://www.youtube.com/watch?v=wTVTWFVBV48) | 367 | Zero Trust Workshop AI pillar walkthrough: assessing AI risk. | [thumbnail](assets/yt-ai-pillar-deep-dive-assess-ai-risk-swimlane-o-wtvtwfvbv48.jpg) |
| v18 | 2026-11-10 00:35 | Microsoft Security | [AI Pillar Deep Dive - AI Threat Detection & Response Swimlane Overview](https://www.youtube.com/watch?v=E149ztL7OwY) | 589 | Zero Trust Workshop AI pillar walkthrough: detecting and responding to AI threats. | [thumbnail](assets/yt-ai-pillar-deep-dive-ai-threat-detection-respo-e149ztl7owy.jpg) |
| v19 | 2026-11-10 00:40 | Microsoft Security | [AI Pillar Deep Dive - Security Validation Swimlane Overview](https://www.youtube.com/watch?v=pZzzoluFlt0) | 911 | Zero Trust Workshop AI pillar walkthrough: validating security controls. | [thumbnail](assets/yt-ai-pillar-deep-dive-security-validation-swiml-pzzzoluflt0.jpg) |
| v20 | 2026-11-10 00:58 | Microsoft Security | [AI Pillar Deep Dive - Agent Platform Controls Swimlane Overview](https://www.youtube.com/watch?v=dJ_2CdPKxiA) | 480 | Zero Trust Workshop AI pillar walkthrough: controls on agent platforms. | [thumbnail](assets/yt-ai-pillar-deep-dive-agent-platform-controls-s-dj_2cdpkxia.jpg) |
| v21 | 2026-11-10 03:14 | Microsoft Security Community | [AI is changing how we think about access, and Ignite 2026 is where it all …](https://www.youtube.com/watch?v=dbPNIxHXYLU) | 323 | Short: Microsoft Security marketing VP previews Entra news planned for Ignite 2026. | [thumbnail](assets/yt-ai-is-changing-how-we-think-about-access-and-dbpnixhxylu.jpg) |
| v22 | 2026-11-11 03:50 | Microsoft Security Community | [⏱️ 3 sessions. 15 seconds each. Go!](https://www.youtube.com/watch?v=awUDlAhm7tM) | 402 | Short: Entra team previews three Ignite sessions on access for people and AI agents. | [thumbnail](assets/yt-3-sessions-15-seconds-each-go-awudlahm7tm.jpg) |
| v23 | 2026-11-11 22:00 | Microsoft Security | [English Security Update Release Summary November 2026](https://www.youtube.com/watch?v=mYwsmmb4MAI) | 2009 | MSRC monthly briefing on the November release, covering four CVEs including the exploited Outlook spoofing bug. | [thumbnail](assets/yt-english-security-update-release-summary-novem-mywsmmb4mai.jpg) |
| v24 | 2026-11-12 03:06 | Microsoft Security Community | [⏱️ Can you pitch an Ignite session in 15 seconds? We asked 3 experts.](https://www.youtube.com/watch?v=YQ2J5K5kljI) | 187 | Short: Entra team pitches more Ignite sessions, including finding and securing local agents. | [thumbnail](assets/yt-can-you-pitch-an-ignite-session-in-15-seconds-yq2j5k5klji.jpg) |
| v25 | 2026-11-12 23:30 | Microsoft Azure | [Bulk Restore using Azure Backup](https://www.youtube.com/watch?v=caW13LqRrQw) | 1166 | Demo of Azure Backup bulk restore, recovering many VMs in one job after an attack or disaster. | [thumbnail](assets/yt-bulk-restore-using-azure-backup-caw13lqrrqw.jpg) |
| v26 | 2026-11-13 01:30 | Microsoft Azure | [From backups to cyber recovery readiness with Azure Backup](https://www.youtube.com/watch?v=cKqeTw5mBfM) | 1993 | Demo of cyber recovery readiness with Azure Backup: air-gapped vaults, immutability and cross-tenant restore. | [thumbnail](assets/yt-from-backups-to-cyber-recovery-readiness-with-ckqetw5mbfm.jpg) |
| v27 | 2026-11-13 08:50 | Microsoft Security | [Security at Scale: How ABT Readied Its Clients for AI](https://www.youtube.com/watch?v=4Z1yruxmXVE) | 377 | Customer story: an Australian MSP put guardrails in place before its SMB clients adopted AI. | [thumbnail](assets/yt-security-at-scale-how-abt-readied-its-clients-4z1yruxmxve.jpg) |
| v28 | 2026-11-13 08:50 | Microsoft Security | [Securing Data Before Scaling AI: RWW Group](https://www.youtube.com/watch?v=vkEXYb2gdq4) | 407 | Customer story: a uniform supplier classified and protected its data ahead of an AI rollout. | [thumbnail](assets/yt-securing-data-before-scaling-ai-rww-group-vkexyb2gdq4.jpg) |
| v29 | 2026-11-13 08:50 | Microsoft Security | [Secure First, Then AI: RWW Group’s Growth Story with Alliance Business Technologies](https://www.youtube.com/watch?v=xvzmzbE58F4) | 499 | Customer story: RWW Group and its partner hardened identity, data and threat protection before using AI. | [thumbnail](assets/yt-secure-first-then-ai-rww-groups-growth-story-xvzmzbe58f4.jpg) |

Top 5 videos by views:

**v01: New Microsoft Copilot Harness \| More power, token efficiency & control for agents in Foundry**

![v01](assets/yt-new-microsoft-copilot-harness-more-power-toke-4vcbqmuvv-i.jpg)

**v23: English Security Update Release Summary November 2026**

![v23](assets/yt-english-security-update-release-summary-novem-mywsmmb4mai.jpg)

**v26: From backups to cyber recovery readiness with Azure Backup**

![v26](assets/yt-from-backups-to-cyber-recovery-readiness-with-ckqetw5mbfm.jpg)

**v25: Bulk Restore using Azure Backup**

![v25](assets/yt-bulk-restore-using-azure-backup-caw13lqrrqw.jpg)

**v19: AI Pillar Deep Dive - Security Validation Swimlane Overview**

![v19](assets/yt-ai-pillar-deep-dive-security-validation-swiml-pzzzoluflt0.jpg)

## X

Official handles checked: @msftsecurity, @MsftSecIntel, @msftsecresponse, @Microsoft, @MSFTMechanics (all verified business accounts). @MicrosoftEntra does not exist on X (see Gaps). Only security-related posts are listed. Threat-intelligence posts from @MsftSecIntel appear under Threat intelligence instead. Reply notes are paraphrased, and repliers are not named.

### x01: @MSFTMechanics, 2026-11-09 00:49 IST

- Link: https://x.com/MSFTMechanics/status/2119510111542538498
- Summary: Treat the MCP catalog like a supply chain: deny unapproved tools and scope servers per agent via API Management.
- Engagement: 50 likes, 13 replies, 11 reposts, 1 quotes, 5483 views
- What replies say: Replies suggest an audit-mode week before deny-by-default, pinning MCP server versions and named owners per agent.
- Asset: [png](assets/x-msftmechanics-2119510111542538498.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x02: @MSFTMechanics, 2026-11-09 20:48 IST

- Link: https://x.com/MSFTMechanics/status/2119811910598087016
- Summary: Entra Internet Access Secure Web and AI Gateway stops sensitive file uploads to AI apps.
- Engagement: 3 likes, 0 replies, 2 reposts, 0 quotes, 1187 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2119811910598087016.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x03: @MSFTMechanics, 2026-11-09 21:51 IST

- Link: https://x.com/MSFTMechanics/status/2119827846906437909
- Summary: Foundry agents now run on the Copilot harness, with Entra Agent ID, egress rules and traces as guardrails.
- Engagement: 5 likes, 0 replies, 2 reposts, 0 quotes, 2152 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2119827846906437909.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x04: @MSFTMechanics, 2026-11-10 00:44 IST

- Link: https://x.com/MSFTMechanics/status/2119871294875296067
- Summary: Entra policies can automatically block uploads of risky file types to ChatGPT and similar tools.
- Engagement: 10 likes, 0 replies, 0 reposts, 0 quotes, 2150 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2119871294875296067.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x05: @MsftSecIntel, 2026-11-10 02:01 IST

- Link: https://x.com/MsftSecIntel/status/2119890522466578648
- Summary: FORGE Lab found memory-safety bugs in Rust core and std, including undefined behaviour reachable from safe code.
- Engagement: 126 likes, 5 replies, 25 reposts, 3 quotes, 13550 views
- What replies say: Replies discuss a bug fixed on one code path but missed on another and suggest checking pinned toolchains once fixes ship.
- Related: b01 (same research)
- Asset: [png](assets/x-msftsecintel-2119890522466578648.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x06: @MSFTMechanics, 2026-11-10 02:02 IST

- Link: https://x.com/MSFTMechanics/status/2119890883390656765
- Summary: Agent 365 CLI and SDK can give an unmanaged agent an Entra Agent ID with lifecycle controls.
- Engagement: 6 likes, 2 replies, 1 reposts, 1 quotes, 1444 views
- What replies say: One reply says an identity without an owner still leaves an orphaned agent.
- Asset: [png](assets/x-msftmechanics-2119890883390656765.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x07: @MSFTMechanics, 2026-11-10 19:14 IST

- Link: https://x.com/MSFTMechanics/status/2120150561169326576
- Summary: Extends Conditional Access and MFA to on-premises resources through Entra.
- Engagement: 3 likes, 0 replies, 2 reposts, 0 quotes, 1067 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2120150561169326576.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x08: @MSFTMechanics, 2026-11-10 20:47 IST

- Link: https://x.com/MSFTMechanics/status/2120174021295620514
- Summary: Foundry agents each get an Entra Agent ID, egress rules and action traces, enforced at infrastructure level.
- Engagement: 9 likes, 2 replies, 0 reposts, 0 quotes, 1309 views
- What replies say: Replies suggest assigning a human sponsor to each agent identity and warn that sub-agents may present a shared service account.
- Asset: [png](assets/x-msftmechanics-2120174021295620514.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x09: @MSFTMechanics, 2026-11-10 20:48 IST

- Link: https://x.com/MSFTMechanics/status/2120174308794192101
- Summary: Recommends unified data classification in Purview for consistent sensitive-data definitions.
- Engagement: 3 likes, 0 replies, 2 reposts, 0 quotes, 1053 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2120174308794192101.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x10: @msftsecresponse, 2026-11-10 23:51 IST

- Link: https://x.com/msftsecresponse/status/2120220395018318285
- Summary: MSRC announces the November 2026 Patch Tuesday release and links the Security Update Guide.
- Engagement: 184 likes, 3 replies, 40 reposts, 8 quotes, 27175 views
- What replies say: Three replies with no substantive content.
- Asset: [png](assets/x-msftsecresponse-2120220395018318285.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x11: @MsftSecIntel, 2026-11-11 00:33 IST

- Link: https://x.com/MsftSecIntel/status/2120230988621992403
- Summary: Notes that the November 2026 security updates are out, with a link to the release.
- Engagement: 80 likes, 2 replies, 16 reposts, 0 quotes, 9745 views
- What replies say: Only two replies: one reminder to restart machines, one spam.
- Asset: [png](assets/x-msftsecintel-2120230988621992403.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x12: @MSFTMechanics, 2026-11-11 00:44 IST

- Link: https://x.com/MSFTMechanics/status/2120233636473471144
- Summary: Encourages labelling critical files so protection follows them into workflows and AI use.
- Engagement: 5 likes, 2 replies, 3 reposts, 0 quotes, 1578 views
- What replies say: One reply notes agent pipelines could still open labelled files they could not inspect.
- Asset: [png](assets/x-msftmechanics-2120233636473471144.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x13: @MSFTMechanics, 2026-11-11 02:02 IST

- Link: https://x.com/MSFTMechanics/status/2120253272686522585
- Summary: Purview DSPM shows which agents are active, what data they touch and where policy gaps are.
- Engagement: 5 likes, 0 replies, 1 reposts, 0 quotes, 1398 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2120253272686522585.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x14: @MsftSecIntel, 2026-11-11 05:06 IST

- Link: https://x.com/MsftSecIntel/status/2120299667443396688
- Summary: Microsoft Research showed that editing under ten neurons can make an agent model a hidden sleeper that passes evaluations.
- Engagement: 72 likes, 7 replies, 22 reposts, 5 quotes, 11538 views
- What replies say: Repliers recommend hashing model weights, restricting write access to checkpoints and treating third-party weights as untrusted.
- Related: b02 (same research)
- Asset: [png](assets/x-msftsecintel-2120299667443396688.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x15: @MSFTMechanics, 2026-11-11 19:14 IST

- Link: https://x.com/MSFTMechanics/status/2120513022783344816
- Summary: Shows how to set up Entra Private Access as identity-aware remote access without a VPN.
- Engagement: 7 likes, 0 replies, 4 reposts, 0 quotes, 1927 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2120513022783344816.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x16: @MSFTMechanics, 2026-11-11 20:48 IST

- Link: https://x.com/MSFTMechanics/status/2120536711096615334
- Summary: Introduces Purview Information Protection for finding and labelling sensitive data.
- Engagement: 1 likes, 0 replies, 1 reposts, 0 quotes, 1006 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2120536711096615334.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x17: @MsftSecIntel, 2026-11-11 22:30 IST

- Link: https://x.com/MsftSecIntel/status/2120562349236965430
- Summary: FORGE Lab's MDASH scanning of Linux kernel code produced 59 upstream reports and 33 CVEs, with root exploits for eight.
- Engagement: 57 likes, 5 replies, 17 reposts, 5 quotes, 14051 views
- What replies say: Replies highlight the old average age of the bugs and suggest mapping the CVEs to running kernel versions and rebooting after fixes.
- Related: b03 (same research)
- Asset: [png](assets/x-msftsecintel-2120562349236965430.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x18: @MSFTMechanics, 2026-11-12 00:44 IST

- Link: https://x.com/MSFTMechanics/status/2120596035261075725
- Summary: Suggests layering Purview classification and labelling on top of existing DLP.
- Engagement: 3 likes, 0 replies, 2 reposts, 0 quotes, 1164 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2120596035261075725.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x19: @MSFTMechanics, 2026-11-12 02:02 IST

- Link: https://x.com/MSFTMechanics/status/2120615625135394986
- Summary: Purview sensitivity labels stop an agent at runtime when it reaches a labelled file.
- Engagement: 4 likes, 4 replies, 2 reposts, 0 quotes, 1378 views
- What replies say: Replies ask whether protection follows content the agent creates; one cites docs saying new output does not inherit the label.
- Asset: [png](assets/x-msftmechanics-2120615625135394986.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x20: @MSFTMechanics, 2026-11-12 19:14 IST

- Link: https://x.com/MSFTMechanics/status/2120875396430278759
- Summary: Pitches Entra identity-based access as a VPN replacement.
- Engagement: 1 likes, 0 replies, 1 reposts, 0 quotes, 967 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2120875396430278759.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x21: @MSFTMechanics, 2026-11-12 20:48 IST

- Link: https://x.com/MSFTMechanics/status/2120899056721416380
- Summary: Edge for Business lets admins block extensions by permission type and handle exceptions in the M365 admin center.
- Engagement: 4 likes, 2 replies, 3 reposts, 0 quotes, 1109 views
- What replies say: Replies call browser extensions an overlooked attack surface and favour allow-listing.
- Asset: [png](assets/x-msftmechanics-2120899056721416380.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x22: @MSFTMechanics, 2026-11-12 20:52 IST

- Link: https://x.com/MSFTMechanics/status/2120899960073859189
- Summary: Project Perception agents are pitched as finding, proving and fixing vulnerabilities with a human in control.
- Engagement: 1 likes, 0 replies, 1 reposts, 0 quotes, 1341 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2120899960073859189.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x23: @msftsecurity, 2026-11-12 22:30 IST

- Link: https://x.com/msftsecurity/status/2120924712427499805
- Summary: Promotes a CISO interview on how E.ON approaches securing agents with Microsoft Security.
- Engagement: 10 likes, 5 replies, 2 reposts, 1 quotes, 6040 views
- What replies say: Few replies; one says Microsoft should fix its own outage first, others are unrelated.
- Asset: [png](assets/x-msftsecurity-2120924712427499805.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x24: @MsftSecIntel, 2026-11-12 22:41 IST

- Link: https://x.com/MsftSecIntel/status/2120927480588484989
- Summary: Explains that a backdoored model can stay dormant until triggered and then drive an agent's tools, generalising past exact triggers.
- Engagement: 80 likes, 7 replies, 25 reposts, 4 quotes, 17284 views
- What replies say: Repliers argue controls must sit outside the model: log and gate every tool call, track model and dataset provenance and hashes.
- Related: b08 (same research)
- Asset: [png](assets/x-msftsecintel-2120927480588484989.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x25: @MSFTMechanics, 2026-11-13 02:02 IST

- Link: https://x.com/MSFTMechanics/status/2120978124678570166
- Summary: Defender watches Copilot Studio agents in real time, blocks malicious tool calls and alerts on jailbreak attempts.
- Engagement: 5 likes, 2 replies, 3 reposts, 1 quotes, 1872 views
- What replies say: Replies agree the tool call is the right enforcement point and ask who receives the alert.
- Asset: [png](assets/x-msftmechanics-2120978124678570166.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x26: @MSFTMechanics, 2026-11-13 07:48 IST

- Link: https://x.com/MSFTMechanics/status/2121065110898610541
- Summary: Foundry ties each agent to an Entra Agent ID, egress rules and logged traces that stop unapproved web calls.
- Engagement: 17 likes, 4 replies, 4 reposts, 0 quotes, 2239 views
- What replies say: Replies mostly approve; one asks whether agents fail closed if Entra is unreachable.
- Asset: [png](assets/x-msftmechanics-2121065110898610541.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x27: @MSFTMechanics, 2026-11-13 19:14 IST

- Link: https://x.com/MSFTMechanics/status/2121237741862101481
- Summary: Windows 365 output protection blocks screenshots and screen scraping on policy-protected Cloud PCs.
- Engagement: 21 likes, 1 replies, 3 reposts, 0 quotes, 2218 views
- What replies say: One reply asks what an automated agent sees when it hits a protected window.
- Asset: [png](assets/x-msftmechanics-2121237741862101481.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x28: @MSFTMechanics, 2026-11-13 20:47 IST

- Link: https://x.com/MSFTMechanics/status/2121261204937089459
- Summary: Hosted agents in Foundry can run any harness under the same Entra Agent ID, telemetry and guardrails.
- Engagement: 10 likes, 1 replies, 2 reposts, 0 quotes, 1871 views
- What replies say: One reply says built-in identity and guardrails would have saved time spent managing agent permissions.
- Asset: [png](assets/x-msftmechanics-2121261204937089459.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x29: @MSFTMechanics, 2026-11-13 20:48 IST

- Link: https://x.com/MSFTMechanics/status/2121261399552712889
- Summary: Windows Autopatch report in Intune shows which devices are current, missing updates or at risk.
- Engagement: 5 likes, 0 replies, 3 reposts, 0 quotes, 1949 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2121261399552712889.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x30: @MSFTMechanics, 2026-11-14 00:44 IST

- Link: https://x.com/MSFTMechanics/status/2121320766264295729
- Summary: Intune Conditional Access limits internal access to compliant devices, paired with Windows Autopatch.
- Engagement: 0 likes, 0 replies, 0 reposts, 0 quotes, 1110 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2121320766264295729.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x31: @MSFTMechanics, 2026-11-14 02:02 IST

- Link: https://x.com/MSFTMechanics/status/2121340430075793874
- Summary: Admins can block a risky agent from the Agent Registry in the M365 admin center until it is resubmitted.
- Engagement: 7 likes, 3 replies, 0 reposts, 0 quotes, 1473 views
- What replies say: Replies back an admin-held kill switch and ask whether makers are told why and how the incident trail shows prior actions.
- Asset: [png](assets/x-msftmechanics-2121340430075793874.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x32: @MSFTMechanics, 2026-11-14 19:14 IST

- Link: https://x.com/MSFTMechanics/status/2121600175986585964
- Summary: Configuration Snapshots in Entra Tenant Governance baseline settings across 200+ resource types to catch drift.
- Engagement: 8 likes, 1 replies, 3 reposts, 0 quotes, 1750 views
- What replies say: One reply asks whether the monitor keeps intermediate policy changes between scans or only compares against the baseline.
- Asset: [png](assets/x-msftmechanics-2121600175986585964.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x33: @MSFTMechanics, 2026-11-15 00:49 IST

- Link: https://x.com/MSFTMechanics/status/2121684426455134224
- Summary: Purview Communication Compliance can flag agent behaviour; Agent 365 can block agent access to labelled files.
- Engagement: 7 likes, 2 replies, 2 reposts, 0 quotes, 1865 views
- What replies say: Two replies say runtime blocking matters more than flagging after the fact.
- Asset: [png](assets/x-msftmechanics-2121684426455134224.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x34: @MSFTMechanics, 2026-11-15 09:32 IST

- Link: https://x.com/MSFTMechanics/status/2121816060680626292
- Summary: Defender for Cloud can open a GitHub issue for a container CVE fix and sync the resolution back.
- Engagement: 9 likes, 1 replies, 4 reposts, 0 quotes, 2589 views
- What replies say: One reply describes a tool that turns the Take Action flow into a repeatable test of the fix.
- Asset: [png](assets/x-msftmechanics-2121816060680626292.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

### x35: @MSFTMechanics, 2026-11-15 19:14 IST

- Link: https://x.com/MSFTMechanics/status/2121962580998602892
- Summary: Defender for Cloud groups 19 container alerts from one multi-stage attack into a single incident timeline.
- Engagement: 8 likes, 0 replies, 2 reposts, 0 quotes, 2212 views
- What replies say: No replies.
- Asset: [png](assets/x-msftmechanics-2121962580998602892.png) (public embed, post only; replies could not be captured without signing in, see Gaps)

## CVEs this month

Source: MSRC CVRF `2026-Nov` (https://api.msrc.microsoft.com/cvrf/v3.0/cvrf/2026-Nov), released 2026-11-10. Listed: 1098 CVEs assigned by Microsoft as CNA (64 Critical, 1 exploited, 0 publicly disclosed). The same document also carries 668 third-party CVEs (Chrome 291; other open-source and vendor CNAs 377, led by VulnCheck 86, PostgreSQL 55, GitHub 50, Linux 48 and Red Hat 33), which are not listed here (see Gaps). The document was last revised 2026-11-17, which added two SharePoint CVEs dated 16 Nov. Sorted by CVSS, highest first. A CVSS of null means MSRC published no score.


| CVE | title | product | CVSS | severity | exploited | disclosed | link |
|---|---|---|---|---|---|---|---|
| CVE-2026-109469 | Entra Device Registration Elevation of Privilege Vulnerability | Entra Device Registration | 10.0 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109469) |
| CVE-2026-109467 | Azure DevOps Server Remote Code Execution Vulnerability | Azure DevOps | 9.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109467) |
| CVE-2026-120002 | Microsoft SharePoint Server Elevation of Privilege Vulnerability | Microsoft Office SharePoint | 9.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120002) |
| CVE-2026-112967 | Windows Xbox Live Networking Service Remote Code Execution Vulnerability | Windows Xbox Live Networking Service | 9.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112967) |
| CVE-2026-116928 | Windows Search Remote Code Execution Vulnerability | Microsoft Windows Search Component | 9.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116928) |
| CVE-2026-116945 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 9.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116945) |
| CVE-2026-119958 | Windows LDAP - Lightweight Directory Access Protocol Remote Code Execution Vulnerability | Windows LDAP - Lightweight Directory Access Protocol | 9.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119958) |
| CVE-2026-119990 | Azure OpenAI Elevation of Privilege Vulnerability | Azure OpenAI | 9.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119990) |
| CVE-2026-85844 | Windows Kerberos Elevation of Privilege Vulnerability | Windows Kerberos | 9.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85844) |
| CVE-2026-88218 | Windows DNS Remote Code Execution Vulnerability | Windows DNS | 9.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88218) |
| CVE-2026-88234 | Windows iSCSI Remote Code Execution Vulnerability | Windows iSCSI | 9.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88234) |
| CVE-2026-88243 | Windows DHCP Server Remote Code Execution Vulnerability | Windows DHCP Server | 9.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88243) |
| CVE-2026-95882 | Microsoft DirectMusic Remote Code Execution Vulnerability | Windows Microsoft DirectMusic | 9.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95882) |
| CVE-2026-95901 | Microsoft DirectMusic Remote Code Execution Vulnerability | Windows Microsoft DirectMusic | 9.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95901) |
| CVE-2026-96067 | Microsoft Color Management Remote Code Execution Vulnerability | Microsoft Color Management | 9.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96067) |
| CVE-2026-96078 | Microsoft Color Management Remote Code Execution Vulnerability | Microsoft Color Management | 9.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96078) |
| CVE-2026-96157 | Microsoft Windows Media Foundation Remote Code Execution Vulnerability | Microsoft Windows Media Foundation | 9.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96157) |
| CVE-2026-120779 | Visual Studio Code Remote Code Execution Vulnerability | Visual Studio Code | 9.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120779) |
| CVE-2026-114162 | Microsoft Graph Elevation of Privilege Vulnerability | Microsoft Graph | 9.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114162) |
| CVE-2026-118740 | Aspire Security Feature Bypass Vulnerability | Aspire | 9.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118740) |
| CVE-2026-109454 | Microsoft Office SharePoint Spoofing Vulnerability | Microsoft Office SharePoint | 9.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109454) |
| CVE-2026-114146 | ASP.NET Core Elevation of Privilege Vulnerability | ASP.NET Core | 9.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114146) |
| CVE-2026-80095 | Microsoft Office SharePoint Elevation of Privilege Vulnerability | Microsoft Office SharePoint | 9.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-80095) |
| CVE-2026-95962 | Windows Virtual Filtering Platform (VFP) Remote Code Execution Vulnerability | Windows Virtual Filtering Platform (VFP) | 9.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95962) |
| CVE-2026-105020 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105020) |
| CVE-2026-105021 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105021) |
| CVE-2026-105023 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105023) |
| CVE-2026-105026 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105026) |
| CVE-2026-105490 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105490) |
| CVE-2026-105491 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105491) |
| CVE-2026-105493 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105493) |
| CVE-2026-105495 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105495) |
| CVE-2026-105496 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105496) |
| CVE-2026-105497 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105497) |
| CVE-2026-105498 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105498) |
| CVE-2026-105499 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105499) |
| CVE-2026-105518 | Windows iSCSI Remote Code Execution Vulnerability | Windows iSCSI | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105518) |
| CVE-2026-105534 | Windows Storage Remote Code Execution Vulnerability | Windows Storage | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105534) |
| CVE-2026-105542 | Windows NTFS Remote Code Execution Vulnerability | Windows NTFS | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105542) |
| CVE-2026-105581 | Desktop Window Manager Elevation of Privilege Vulnerability | Desktop Window Manager | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105581) |
| CVE-2026-108401 | Remote Desktop Services Remote Code Execution Vulnerability | Windows Remote Desktop Services | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108401) |
| CVE-2026-108411 | Microsoft ODBC Driver Remote Code Execution Vulnerability | Windows ODBC Driver | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108411) |
| CVE-2026-109463 | Windows DNS Remote Code Execution Vulnerability | Windows DNS | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109463) |
| CVE-2026-109464 | Microsoft Office SharePoint Remote Code Execution Vulnerability | Microsoft Office SharePoint | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109464) |
| CVE-2026-109472 | Microsoft Office SharePoint Remote Code Execution Vulnerability | Microsoft Office SharePoint | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109472) |
| CVE-2026-109493 | Microsoft Office Access Remote Code Execution Vulnerability | Microsoft Office Access | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109493) |
| CVE-2026-109494 | Microsoft Office Visio Remote Code Execution Vulnerability | Microsoft Office Visio | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109494) |
| CVE-2026-109496 | Microsoft Office Visio Remote Code Execution Vulnerability | Microsoft Office Visio | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109496) |
| CVE-2026-109499 | Microsoft Office SharePoint Remote Code Execution Vulnerability | Microsoft Office SharePoint | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109499) |
| CVE-2026-109501 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109501) |
| CVE-2026-109502 | Microsoft Office SharePoint Elevation of Privilege Vulnerability | Microsoft Office SharePoint | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109502) |
| CVE-2026-109503 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109503) |
| CVE-2026-109505 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109505) |
| CVE-2026-110043 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110043) |
| CVE-2026-110044 | Microsoft Office SharePoint Remote Code Execution Vulnerability | Microsoft Office SharePoint | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110044) |
| CVE-2026-110047 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110047) |
| CVE-2026-110048 | Microsoft Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110048) |
| CVE-2026-110050 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110050) |
| CVE-2026-110054 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110054) |
| CVE-2026-110055 | Microsoft Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110055) |
| CVE-2026-110058 | Microsoft Office Access Remote Code Execution Vulnerability | Microsoft Office Access | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110058) |
| CVE-2026-110059 | Microsoft Office Access Remote Code Execution Vulnerability | Microsoft Office Access | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110059) |
| CVE-2026-110060 | Microsoft Office Access Remote Code Execution Vulnerability | Microsoft Office Access | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110060) |
| CVE-2026-110061 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110061) |
| CVE-2026-110062 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110062) |
| CVE-2026-110064 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110064) |
| CVE-2026-110067 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110067) |
| CVE-2026-110068 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110068) |
| CVE-2026-111285 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111285) |
| CVE-2026-111289 | Microsoft Office Remote Code Execution Vulnerability | Microsoft Office | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111289) |
| CVE-2026-111290 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111290) |
| CVE-2026-111294 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111294) |
| CVE-2026-111295 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111295) |
| CVE-2026-111298 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111298) |
| CVE-2026-111299 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111299) |
| CVE-2026-111301 | Microsoft Office Access Remote Code Execution Vulnerability | Microsoft Office Access | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111301) |
| CVE-2026-111304 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111304) |
| CVE-2026-111305 | Microsoft Office Access Remote Code Execution Vulnerability | Microsoft Office Access | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111305) |
| CVE-2026-111306 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111306) |
| CVE-2026-111307 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111307) |
| CVE-2026-111308 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111308) |
| CVE-2026-111309 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111309) |
| CVE-2026-111310 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111310) |
| CVE-2026-112714 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112714) |
| CVE-2026-112715 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112715) |
| CVE-2026-112716 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112716) |
| CVE-2026-112717 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112717) |
| CVE-2026-112718 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112718) |
| CVE-2026-112719 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112719) |
| CVE-2026-112721 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112721) |
| CVE-2026-112722 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112722) |
| CVE-2026-112723 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112723) |
| CVE-2026-112724 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112724) |
| CVE-2026-112726 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112726) |
| CVE-2026-112727 | Windows  Domain Name Service Remote Code Execution Vulnerability | Role: DNS Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112727) |
| CVE-2026-112728 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112728) |
| CVE-2026-112729 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112729) |
| CVE-2026-112730 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112730) |
| CVE-2026-112733 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112733) |
| CVE-2026-112734 | Microsoft Office PowerPoint Remote Code Execution Vulnerability | Microsoft Office PowerPoint | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112734) |
| CVE-2026-112735 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112735) |
| CVE-2026-112737 | Microsoft Office PowerPoint Remote Code Execution Vulnerability | Microsoft Office PowerPoint | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112737) |
| CVE-2026-112739 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112739) |
| CVE-2026-112741 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112741) |
| CVE-2026-112762 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112762) |
| CVE-2026-112805 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112805) |
| CVE-2026-113760 | Windows XWizard Framework Elevation of Privilege Vulnerability | Windows XWizard Framework | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113760) |
| CVE-2026-113814 | Windows Storage Spaces Controller Remote Code Execution Vulnerability | Windows Storage Spaces Controller | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113814) |
| CVE-2026-113863 | Windows DHCP Client Elevation of Privilege Vulnerability | Windows DHCP Client | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113863) |
| CVE-2026-114151 | Visual Studio Remote Code Execution Vulnerability | Visual Studio | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114151) |
| CVE-2026-114152 | Visual Studio Remote Code Execution Vulnerability | Visual Studio | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114152) |
| CVE-2026-114158 | Visual Studio Remote Code Execution Vulnerability | Visual Studio | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114158) |
| CVE-2026-114159 | Visual Studio Remote Code Execution Vulnerability | Visual Studio | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114159) |
| CVE-2026-114164 | HEVC Video Extensions Remote Code Execution Vulnerability | Microsoft Windows Codecs Library | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114164) |
| CVE-2026-114169 | Windows Raw Image Extension Remote Code Execution Vulnerability | Windows Raw Image Extension | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114169) |
| CVE-2026-114171 | Visual Studio Code Security Feature Bypass Vulnerability | Visual Studio Code | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114171) |
| CVE-2026-116717 | Microsoft Office Remote Code Execution Vulnerability | Microsoft Office | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116717) |
| CVE-2026-116719 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116719) |
| CVE-2026-116720 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116720) |
| CVE-2026-116722 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116722) |
| CVE-2026-116923 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116923) |
| CVE-2026-116925 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116925) |
| CVE-2026-116927 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116927) |
| CVE-2026-116930 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116930) |
| CVE-2026-116934 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116934) |
| CVE-2026-116941 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116941) |
| CVE-2026-116942 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116942) |
| CVE-2026-116946 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116946) |
| CVE-2026-118105 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118105) |
| CVE-2026-118109 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118109) |
| CVE-2026-118110 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118110) |
| CVE-2026-118120 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118120) |
| CVE-2026-118141 | Windows Client for NFS Remote Code Execution Vulnerability | Windows Client for NFS | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118141) |
| CVE-2026-118146 | Windows Active Directory Domain Services Remote Code Execution Vulnerability | Active Directory Domain Services | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118146) |
| CVE-2026-118149 | Microsoft Exchange Server Remote Code Execution Vulnerability | Microsoft Exchange Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118149) |
| CVE-2026-118150 | Microsoft Exchange Server Elevation of Privilege Vulnerability | Microsoft Exchange Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118150) |
| CVE-2026-118154 | Microsoft Exchange Server Elevation of Privilege Vulnerability | Microsoft Exchange Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118154) |
| CVE-2026-118207 | Microsoft Exchange Server Remote Code Execution Vulnerability | Microsoft Exchange Server | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118207) |
| CVE-2026-118216 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118216) |
| CVE-2026-118217 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118217) |
| CVE-2026-118218 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118218) |
| CVE-2026-118219 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118219) |
| CVE-2026-118221 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118221) |
| CVE-2026-118225 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118225) |
| CVE-2026-118226 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118226) |
| CVE-2026-118227 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118227) |
| CVE-2026-118228 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118228) |
| CVE-2026-118229 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118229) |
| CVE-2026-118232 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118232) |
| CVE-2026-118277 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118277) |
| CVE-2026-118278 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118278) |
| CVE-2026-118279 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118279) |
| CVE-2026-118283 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118283) |
| CVE-2026-118292 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118292) |
| CVE-2026-118293 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118293) |
| CVE-2026-118294 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118294) |
| CVE-2026-118295 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118295) |
| CVE-2026-118296 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118296) |
| CVE-2026-118297 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118297) |
| CVE-2026-118298 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118298) |
| CVE-2026-118299 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118299) |
| CVE-2026-118302 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118302) |
| CVE-2026-118700 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118700) |
| CVE-2026-118701 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118701) |
| CVE-2026-118702 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118702) |
| CVE-2026-118703 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118703) |
| CVE-2026-118704 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118704) |
| CVE-2026-118705 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118705) |
| CVE-2026-118706 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118706) |
| CVE-2026-118707 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118707) |
| CVE-2026-118708 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118708) |
| CVE-2026-118709 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118709) |
| CVE-2026-118710 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118710) |
| CVE-2026-118711 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118711) |
| CVE-2026-118712 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118712) |
| CVE-2026-118713 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118713) |
| CVE-2026-118714 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118714) |
| CVE-2026-118715 | Microsoft Office Excel Elevation of Privilege Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118715) |
| CVE-2026-118716 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118716) |
| CVE-2026-118717 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118717) |
| CVE-2026-118718 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118718) |
| CVE-2026-118719 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118719) |
| CVE-2026-118720 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118720) |
| CVE-2026-118721 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118721) |
| CVE-2026-118722 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118722) |
| CVE-2026-118724 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118724) |
| CVE-2026-118725 | Microsoft Office Excel Elevation of Privilege Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118725) |
| CVE-2026-118726 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118726) |
| CVE-2026-118729 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118729) |
| CVE-2026-118730 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118730) |
| CVE-2026-118731 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118731) |
| CVE-2026-118732 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118732) |
| CVE-2026-118745 | Visual Studio Remote Code Execution Vulnerability | Visual Studio | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118745) |
| CVE-2026-119392 | Windows Storage Spaces Controller Elevation of Privilege Vulnerability | Windows Storage Spaces Controller | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119392) |
| CVE-2026-119824 | Remote Desktop Client Tampering Vulnerability | Remote Desktop Client | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119824) |
| CVE-2026-119839 | Windows Remote Desktop Client Elevation of Privilege Vulnerability | Remote Desktop Client | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119839) |
| CVE-2026-119862 | Windows Input System Elevation of Privilege Vulnerability | Windows Input System | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119862) |
| CVE-2026-119881 | Microsoft XPS Document Converter Elevation of Privilege Vulnerability | Microsoft XPS Document Converter | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119881) |
| CVE-2026-119908 | Windows Storage Spaces Controller Remote Code Execution Vulnerability | Windows Storage Spaces Controller | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119908) |
| CVE-2026-119916 | Windows Input System Elevation of Privilege Vulnerability | Windows Input System | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119916) |
| CVE-2026-119925 | Windows Text Services Framework Elevation of Privilege Vulnerability | Windows Text Services Framework | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119925) |
| CVE-2026-119934 | Remote Desktop Client Remote Code Execution Vulnerability | Remote Desktop Client | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119934) |
| CVE-2026-119950 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119950) |
| CVE-2026-119969 | Graphic Fonts Remote Code Execution Vulnerability | Graphic Fonts | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119969) |
| CVE-2026-119975 | Visual Studio Code Remote Code Execution Vulnerability | Visual Studio Code | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119975) |
| CVE-2026-119983 | Visual Studio Code Security Feature Bypass Vulnerability | Visual Studio Code | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119983) |
| CVE-2026-119986 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119986) |
| CVE-2026-120001 | Microsoft Office PowerPoint Remote Code Execution Vulnerability | Microsoft Office PowerPoint | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120001) |
| CVE-2026-120003 | Microsoft Office Remote Code Execution Vulnerability | Microsoft Office | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120003) |
| CVE-2026-120005 | Microsoft PowerPoint Remote Code Execution Vulnerability | Microsoft Office PowerPoint | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120005) |
| CVE-2026-120785 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120785) |
| CVE-2026-120786 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120786) |
| CVE-2026-120788 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120788) |
| CVE-2026-120789 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120789) |
| CVE-2026-120790 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120790) |
| CVE-2026-120791 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120791) |
| CVE-2026-121663 | Visual Studio Code Security Feature Bypass Vulnerability | Visual Studio Code | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121663) |
| CVE-2026-121665 | Visual Studio Code Security Feature Bypass Vulnerability | Visual Studio Code | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121665) |
| CVE-2026-122171 | Microsoft XPS Document Converter Remote Code Execution Vulnerability | Microsoft XPS Document Converter | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122171) |
| CVE-2026-122176 | Windows SMB Remote Code Execution Vulnerability | Windows SMB | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122176) |
| CVE-2026-122194 | Microsoft Defender Remote Code Execution Vulnerability | Microsoft Defender | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122194) |
| CVE-2026-122198 | Microsoft Office Remote Code Execution Vulnerability | Microsoft Office | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122198) |
| CVE-2026-122475 | Windows Storage Spaces Controller Remote Code Execution Vulnerability | Windows Storage Spaces Controller | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122475) |
| CVE-2026-123375 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123375) |
| CVE-2026-123376 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123376) |
| CVE-2026-123377 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123377) |
| CVE-2026-123380 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123380) |
| CVE-2026-123381 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123381) |
| CVE-2026-123382 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123382) |
| CVE-2026-123383 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123383) |
| CVE-2026-123384 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123384) |
| CVE-2026-123385 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123385) |
| CVE-2026-123390 | Microsoft Office SharePoint Remote Code Execution Vulnerability | Microsoft Office SharePoint | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123390) |
| CVE-2026-123391 | Microsoft Office SharePoint Elevation of Privilege Vulnerability | Microsoft Office SharePoint | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123391) |
| CVE-2026-123394 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123394) |
| CVE-2026-124174 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124174) |
| CVE-2026-124176 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124176) |
| CVE-2026-124187 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124187) |
| CVE-2026-124223 | Microsoft Office SharePoint Remote Code Execution Vulnerability | Microsoft Office SharePoint | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124223) |
| CVE-2026-124226 | Microsoft PowerShell Security Feature Bypass Vulnerability | Windows PowerShell | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124226) |
| CVE-2026-124228 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124228) |
| CVE-2026-125136 | Windows Network Connected Devices Auto-Setup Service Remote Code Execution Vulnerability | Windows Network Connected Devices Auto-Setup Service | 8.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-125136) |
| CVE-2026-126526 | Microsoft Office OneNote Remote Code Execution Vulnerability | Microsoft Office OneNote | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-126526) |
| CVE-2026-67372 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-67372) |
| CVE-2026-67374 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-67374) |
| CVE-2026-67375 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-67375) |
| CVE-2026-67387 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-67387) |
| CVE-2026-67391 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-67391) |
| CVE-2026-67632 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-67632) |
| CVE-2026-67637 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-67637) |
| CVE-2026-67646 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-67646) |
| CVE-2026-70094 | Visual Studio Code Remote Code Execution Vulnerability | Visual Studio Code | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70094) |
| CVE-2026-85838 | Microsoft WDAC OLE DB provider for SQL Remote Code Execution Vulnerability | Microsoft WDAC OLE DB provider for SQL | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85838) |
| CVE-2026-85839 | Microsoft WDAC OLE DB provider for SQL Remote Code Execution Vulnerability | Microsoft WDAC OLE DB provider for SQL | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85839) |
| CVE-2026-85923 | Azure DevOps Server Elevation of Privilege Vulnerability | Azure DevOps Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85923) |
| CVE-2026-88176 | Microsoft Office SharePoint Elevation of Privilege Vulnerability | Microsoft Office SharePoint | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88176) |
| CVE-2026-88222 | Microsoft WDAC OLE DB provider for SQL Remote Code Execution Vulnerability | Microsoft WDAC OLE DB provider for SQL | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88222) |
| CVE-2026-88229 | Windows Media Player Remote Code Execution Vulnerability | Windows Media Player | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88229) |
| CVE-2026-88249 | Windows Client for NFS Remote Code Execution Vulnerability | Windows Client for NFS | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88249) |
| CVE-2026-94511 | SQL Server Remote Code Execution Vulnerability | SQL Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94511) |
| CVE-2026-95960 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95960) |
| CVE-2026-95975 | Windows Performance Counters Remote Code Execution Vulnerability | Windows Performance Counters | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95975) |
| CVE-2026-95996 | Windows Bluetooth Port Driver Elevation of Privilege Vulnerability | Windows Bluetooth Port Driver | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95996) |
| CVE-2026-96002 | Windows  Domain Name Service Remote Code Execution Vulnerability | Role: DNS Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96002) |
| CVE-2026-96010 | HID Parser Library Elevation of Privilege Vulnerability | HID Parser Library | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96010) |
| CVE-2026-96020 | Windows  Domain Name Service Remote Code Execution Vulnerability | Role: DNS Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96020) |
| CVE-2026-96064 | Windows  Domain Name Service Remote Code Execution Vulnerability | Role: DNS Server | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96064) |
| CVE-2026-96164 | Windows Imaging Component Remote Code Execution Vulnerability | Windows Imaging Component | 8.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96164) |
| CVE-2026-70003 | JDBC Driver for SQL Server Security Feature Bypass Vulnerability | JDBC Driver for SQL Server | 8.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70003) |
| CVE-2026-102236 | Visual Studio Code Security Feature Bypass Vulnerability | Visual Studio Code | 8.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-102236) |
| CVE-2026-118742 | Azure Front Door Elevation of Privilege Vulnerability | Azure Front Door (AFD) | 8.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118742) |
| CVE-2026-121662 | Visual Studio Code Remote Code Execution Vulnerability | Visual Studio Code | 8.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121662) |
| CVE-2026-102224 | Azure CycleCloud Elevation of Privilege Vulnerability | Azure CycleCloud | 8.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-102224) |
| CVE-2026-119985 | Visual Studio Code Remote Code Execution Vulnerability | Visual Studio Code | 8.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119985) |
| CVE-2026-120780 | Visual Studio Code Remote Code Execution Vulnerability | Visual Studio Code | 8.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120780) |
| CVE-2026-121664 | Visual Studio Code Remote Code Execution Vulnerability | Visual Studio Code | 8.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121664) |
| CVE-2026-113753 | Windows Hyper-V Elevation of Privilege Vulnerability | Windows Hyper-V | 8.2 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113753) |
| CVE-2026-119989 | Azure Pipelines Remote Code Execution Vulnerability | Azure Pipelines | 8.2 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119989) |
| CVE-2026-102219 | Windows Modern Device Management (MDM) Remote Code Execution Vulnerability | Windows Modern Device Management (MDM) | 8.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-102219) |
| CVE-2026-109459 | Windows Message Queuing Queue Manager Remote Code Execution Vulnerability | Windows Message Queuing Queue Manager | 8.1 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109459) |
| CVE-2026-113862 | Windows Network Address Translation (NAT) Remote Code Execution Vulnerability | Windows Network Address Translation (NAT) | 8.1 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113862) |
| CVE-2026-116710 | Windows Message Queuing Remote Code Execution Vulnerability | Windows Message Queuing | 8.1 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116710) |
| CVE-2026-118106 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 8.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118106) |
| CVE-2026-118737 | Remote Procedure Call Runtime Remote Code Execution Vulnerability | Windows Remote Procedure Call Runtime | 8.1 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118737) |
| CVE-2026-118741 | ASP.NET Core Elevation of Privilege Vulnerability | ASP.NET Core | 8.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118741) |
| CVE-2026-119945 | Windows Modern Device Management (MDM) Remote Code Execution Vulnerability | Windows Modern Device Management (MDM) | 8.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119945) |
| CVE-2026-119951 | Windows Deployment Services Remote Code Execution Vulnerability | Windows Deployment Services | 8.1 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119951) |
| CVE-2026-119952 | Windows Schannel Remote Code Execution Vulnerability | Windows Schannel | 8.1 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119952) |
| CVE-2026-119961 | Windows Internet Information Services Remote Code Execution Vulnerability | Windows Internet Information Services | 8.1 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119961) |
| CVE-2026-119962 | Windows CredSSP Remote Code Execution Vulnerability | Windows Cred SSProvider Protocol | 8.1 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119962) |
| CVE-2026-119963 | Windows Message Queuing Remote Code Execution Vulnerability | Windows Message Queuing | 8.1 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119963) |
| CVE-2026-119964 | Windows Message Queuing Remote Code Execution Vulnerability | Windows Message Queuing | 8.1 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119964) |
| CVE-2026-119967 | Windows Message Queuing Queue Manager Remote Code Execution Vulnerability | Windows Message Queuing Queue Manager | 8.1 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119967) |
| CVE-2026-122979 | Microsoft Teams for Android Spoofing Vulnerability | Microsoft Teams for Android | 8.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122979) |
| CVE-2026-66813 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-66813) |
| CVE-2026-72998 | Windows DHCP Server Remote Code Execution Vulnerability | Windows DHCP Server | 8.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-72998) |
| CVE-2026-81384 | Windows DNS Server Remote Code Execution Vulnerability | Role: DNS Server | 8.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-81384) |
| CVE-2026-95885 | Windows Client for NFS Elevation of Privilege Vulnerability | Windows Client for NFS | 8.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95885) |
| CVE-2026-95956 | Windows eSCL Scanner Remote Code Execution Vulnerability | Windows eSCL Scanner | 8.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95956) |
| CVE-2026-96092 | Windows  Domain Name Service Remote Code Execution Vulnerability | Role: DNS Server | 8.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96092) |
| CVE-2026-96177 | Windows  Domain Name Service Remote Code Execution Vulnerability | Role: DNS Server | 8.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96177) |
| CVE-2026-109457 | Azure CLI Remote Code Execution Vulnerability | Azure CLI | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109457) |
| CVE-2026-109466 | Microsoft Office SharePoint Elevation of Privilege Vulnerability | Microsoft Office SharePoint | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109466) |
| CVE-2026-111296 | Microsoft Office SharePoint Elevation of Privilege Vulnerability | Microsoft Office SharePoint | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111296) |
| CVE-2026-111297 | Microsoft Office SharePoint Spoofing Vulnerability | Microsoft Office SharePoint | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111297) |
| CVE-2026-118111 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118111) |
| CVE-2026-118112 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118112) |
| CVE-2026-118113 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118113) |
| CVE-2026-118117 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118117) |
| CVE-2026-118118 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118118) |
| CVE-2026-118119 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118119) |
| CVE-2026-122164 | Windows Kerberos Elevation of Privilege Vulnerability | Windows Kerberos | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122164) |
| CVE-2026-122988 | Windows Admin Center Elevation of Privilege Vulnerability | Windows Admin Center | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122988) |
| CVE-2026-123387 | Active Directory Domain Services Elevation of Privilege Vulnerability | Windows Active Directory | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123387) |
| CVE-2026-88187 | Windows Bluetooth A2DP driver Elevation of Privilege Vulnerability | Windows Bluetooth A2DP driver | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88187) |
| CVE-2026-88240 | Windows DHCP Client Elevation of Privilege Vulnerability | Windows DHCP Client | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88240) |
| CVE-2026-94513 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94513) |
| CVE-2026-96115 | Windows DHCP Client Elevation of Privilege Vulnerability | Windows DHCP Client | 8.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96115) |
| CVE-2026-100223 | Windows NTFS Elevation of Privilege Vulnerability | Windows NTFS | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-100223) |
| CVE-2026-105022 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105022) |
| CVE-2026-105025 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105025) |
| CVE-2026-105028 | Windows Win32k Elevation of Privilege Vulnerability | Windows Win32K | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105028) |
| CVE-2026-105501 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105501) |
| CVE-2026-105503 | Windows Management Instrumentation Elevation of Privilege Vulnerability | Windows Management Instrumentation | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105503) |
| CVE-2026-105505 | Microsoft Input Method Editor (IME) Elevation of Privilege Vulnerability | Microsoft Input Method Editor (IME) | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105505) |
| CVE-2026-105507 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105507) |
| CVE-2026-105524 | Windows Management Instrumentation Elevation of Privilege Vulnerability | Windows Management Instrumentation | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105524) |
| CVE-2026-105528 | Desktop Window Manager Elevation of Privilege Vulnerability | Desktop Window Manager | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105528) |
| CVE-2026-105532 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105532) |
| CVE-2026-105541 | Windows Audio Service Elevation of Privilege Vulnerability | Windows Audio Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105541) |
| CVE-2026-105543 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105543) |
| CVE-2026-105569 | Windows Cloud Files Mini Filter Driver Elevation of Privilege Vulnerability | Windows Cloud Files Mini Filter Driver | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105569) |
| CVE-2026-105575 | Windows DWM Core Library Elevation of Privilege Vulnerability | Windows DWM Core Library | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105575) |
| CVE-2026-105580 | Windows Management Instrumentation Remote Code Execution Vulnerability | Windows Management Instrumentation | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105580) |
| CVE-2026-108403 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108403) |
| CVE-2026-108405 | Windows CD-ROM Driver Elevation of Privilege Vulnerability | Windows CD-ROM Driver | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108405) |
| CVE-2026-108407 | Windows GDI Elevation of Privilege Vulnerability | Windows GDI | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108407) |
| CVE-2026-108412 | Windows Redirected Drive Buffering System Elevation of Privilege Vulnerability | Windows Redirected Drive Buffering | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108412) |
| CVE-2026-109473 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109473) |
| CVE-2026-110049 | Microsoft Word Remote Code Execution Vulnerability | Microsoft Office Word | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110049) |
| CVE-2026-110056 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110056) |
| CVE-2026-111302 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111302) |
| CVE-2026-112743 | Windows Device Association Service Elevation of Privilege Vulnerability | Windows Device Association Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112743) |
| CVE-2026-112751 | Windows Remote Assistance Elevation of Privilege Vulnerability | Windows Remote Assistance | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112751) |
| CVE-2026-112752 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112752) |
| CVE-2026-112758 | Windows Defender Firewall Service Elevation of Privilege Vulnerability | Windows Defender Firewall Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112758) |
| CVE-2026-112760 | Windows Overlay Filter Elevation of Privilege Vulnerability | Windows Overlay Filter | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112760) |
| CVE-2026-112794 | Windows Smart Card Elevation of Privilege Vulnerability | Windows Smart Card | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112794) |
| CVE-2026-112799 | Windows Projected File System Elevation of Privilege Vulnerability | Windows Projected File System | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112799) |
| CVE-2026-112801 | Windows eSCL Scanner Elevation of Privilege Vulnerability | Windows eSCL Scanner | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112801) |
| CVE-2026-112802 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112802) |
| CVE-2026-112811 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112811) |
| CVE-2026-112978 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112978) |
| CVE-2026-112981 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112981) |
| CVE-2026-113748 | Software Protection Platform (SPP) Elevation of Privilege Vulnerability | Software Protection Platform (SPP) | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113748) |
| CVE-2026-113758 | Windows Desktop Window Manager Elevation of Privilege Vulnerability | Desktop Window Manager | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113758) |
| CVE-2026-113759 | Microsoft Word Remote Code Execution Vulnerability | Microsoft Office Word | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113759) |
| CVE-2026-113765 | Windows File Server Resource Management Service Elevation of Privilege Vulnerability | Windows File Server Resource Management Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113765) |
| CVE-2026-113767 | Windows COM+ Event System Service Elevation of Privilege Vulnerability | Windows COM+ Event System Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113767) |
| CVE-2026-113843 | Windows Remote Access Connection Manager Elevation of Privilege Vulnerability | Windows Remote Access Connection Manager | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113843) |
| CVE-2026-113847 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113847) |
| CVE-2026-113848 | Windows NTFS Remote Code Execution Vulnerability | Windows NTFS | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113848) |
| CVE-2026-113856 | Windows Hyper-V Elevation of Privilege Vulnerability | Windows Hyper-V | 7.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113856) |
| CVE-2026-113865 | Windows Hyper-V Elevation of Privilege Vulnerability | Windows Hyper-V | 7.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113865) |
| CVE-2026-114161 | Azure CycleCloud Elevation of Privilege Vulnerability | Azure CycleCloud | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114161) |
| CVE-2026-114165 | HEVC Video Extensions Remote Code Execution Vulnerability | Microsoft Windows Codecs Library | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114165) |
| CVE-2026-114167 | HEVC Video Extensions Remote Code Execution Vulnerability | Microsoft Windows Codecs Library | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114167) |
| CVE-2026-114170 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114170) |
| CVE-2026-116714 | Windows AppX Deployment Service Elevation of Privilege Vulnerability | Windows AppX Deployment Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116714) |
| CVE-2026-118126 | Windows Message Queuing Elevation of Privilege Vulnerability | Windows Message Queuing | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118126) |
| CVE-2026-118137 | Windows FTP Service Elevation of Privilege Vulnerability | Windows FTP Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118137) |
| CVE-2026-118138 | Windows Client for NFS Elevation of Privilege Vulnerability | Windows Client for NFS | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118138) |
| CVE-2026-118142 | Windows Distributed File System (DFS) Elevation of Privilege Vulnerability | Windows Distributed File System (DFS) | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118142) |
| CVE-2026-118215 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118215) |
| CVE-2026-118220 | Windows Multiple Provider Router Elevation of Privilege Vulnerability | Windows Multiple Provider Router | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118220) |
| CVE-2026-118222 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118222) |
| CVE-2026-118223 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118223) |
| CVE-2026-118224 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118224) |
| CVE-2026-118280 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118280) |
| CVE-2026-118723 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118723) |
| CVE-2026-119382 | Windows TPM Elevation of Privilege Vulnerability | Windows TPM | 7.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119382) |
| CVE-2026-119390 | Remote Desktop Client Remote Code Execution Vulnerability | Remote Desktop Client | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119390) |
| CVE-2026-119391 | Windows Hyper-V Elevation of Privilege Vulnerability | Windows Hyper-V | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119391) |
| CVE-2026-119393 | Windows Credential Manager Elevation of Privilege Vulnerability | Windows Credential Manager | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119393) |
| CVE-2026-119398 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119398) |
| CVE-2026-119816 | Windows Microsoft Account Sign-in Assistant Elevation of Privilege Vulnerability | Windows Microsoft Account Sign-in Assistant | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119816) |
| CVE-2026-119817 | Windows Shell Elevation of Privilege Vulnerability | Windows Shell | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119817) |
| CVE-2026-119818 | Windows Text Services Framework Elevation of Privilege Vulnerability | Windows Text Services Framework | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119818) |
| CVE-2026-119821 | Windows Network Connection Broker Elevation of Privilege Vulnerability | Windows Network Connection Broker | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119821) |
| CVE-2026-119826 | Windows Hyper-V Elevation of Privilege Vulnerability | Windows Hyper-V | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119826) |
| CVE-2026-119834 | Windows Subsystem for Linux Elevation of Privilege Vulnerability | Windows Subsystem for Linux | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119834) |
| CVE-2026-119846 | Windows Subsystem for Linux Elevation of Privilege Vulnerability | Windows Subsystem for Linux | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119846) |
| CVE-2026-119847 | Windows Kerberos Elevation of Privilege Vulnerability | Windows Kerberos | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119847) |
| CVE-2026-119853 | Remote Access API Elevation of Privilege Vulnerability | Windows Remote Access API | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119853) |
| CVE-2026-119886 | Windows Telephony Service Elevation of Privilege Vulnerability | Windows Telephony Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119886) |
| CVE-2026-119892 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119892) |
| CVE-2026-119899 | Windows Win32k Elevation of Privilege Vulnerability | Windows Win32K | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119899) |
| CVE-2026-119903 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119903) |
| CVE-2026-119904 | Microsoft Windows Speech Elevation of Privilege Vulnerability | Microsoft Windows Speech | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119904) |
| CVE-2026-119907 | Windows Function Discovery Resource Publication Elevation of Privilege Vulnerability | Windows Function Discovery Resource Publication | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119907) |
| CVE-2026-119917 | Windows Distributed Transaction Coordinator Elevation of Privilege Vulnerability | Windows Distributed Transaction Coordinator | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119917) |
| CVE-2026-119929 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119929) |
| CVE-2026-119933 | Windows NTFS Elevation of Privilege Vulnerability | Windows NTFS | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119933) |
| CVE-2026-119939 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119939) |
| CVE-2026-119941 | Volume Shadow Copy Elevation of Privilege Vulnerability | Windows Volume Shadow Copy | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119941) |
| CVE-2026-119943 | Microsoft Windows Search Component Elevation of Privilege Vulnerability | Microsoft Windows Search Component | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119943) |
| CVE-2026-119953 | Windows DNS Elevation of Privilege Vulnerability | Windows DNS | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119953) |
| CVE-2026-119954 | Microsoft Windows Search Component Elevation of Privilege Vulnerability | Microsoft Windows Search Component | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119954) |
| CVE-2026-119957 | Windows Remote Desktop Services Elevation of Privilege Vulnerability | Windows Remote Desktop Services | 7.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119957) |
| CVE-2026-119987 | Microsoft Windows App Store Elevation of Privilege Vulnerability | Microsoft Windows App Store | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119987) |
| CVE-2026-119997 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119997) |
| CVE-2026-120782 | Visual Studio Code Security Feature Bypass Vulnerability | Visual Studio Code | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120782) |
| CVE-2026-121661 | Visual Studio Code Security Feature Bypass Vulnerability | Visual Studio Code | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121661) |
| CVE-2026-121673 | Windows Filter Manager Elevation of Privilege Vulnerability | Windows Filter Manager | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121673) |
| CVE-2026-121681 | Microsoft Trace Data Helper Elevation of Privilege Vulnerability | Microsoft Trace Data Helper | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121681) |
| CVE-2026-122165 | Windows Client for NFS Elevation of Privilege Vulnerability | Windows Client for NFS | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122165) |
| CVE-2026-122166 | Windows Remote Desktop Services Elevation of Privilege Vulnerability | Windows Remote Desktop Services | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122166) |
| CVE-2026-122168 | Microsoft Windows Media Foundation Elevation of Privilege Vulnerability | Microsoft Windows Media Foundation | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122168) |
| CVE-2026-122172 | Microsoft Trace Data Helper Elevation of Privilege Vulnerability | Microsoft Trace Data Helper | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122172) |
| CVE-2026-122183 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122183) |
| CVE-2026-122984 | Windows Universal Disk Format File System Driver (UDFS) Elevation of Privilege Vulnerability | Windows Universal Disk Format File System Driver (UDFS) | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122984) |
| CVE-2026-122986 | Microsoft Azure Kubernetes Service Elevation of Privilege Vulnerability | Microsoft Azure Kubernetes Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122986) |
| CVE-2026-123388 | Windows Program Compatibility Assistant Service Elevation of Privilege Vulnerability | Windows Program Compatibility Assistant Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123388) |
| CVE-2026-124225 | Windows PowerShell Remote Code Execution Vulnerability | Windows PowerShell | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124225) |
| CVE-2026-125137 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-125137) |
| CVE-2026-70182 | Windows Bind Filter Driver Elevation of Privilege Vulnerability | Windows Bind Filter Driver | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70182) |
| CVE-2026-83563 | Winlogon Elevation of Privilege Vulnerability | Winlogon | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-83563) |
| CVE-2026-85801 | Windows Local Security Authority Subsystem Service (LSASS) Elevation of Privilege Vulnerability | Windows Local Security Authority Subsystem Service (LSASS) | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85801) |
| CVE-2026-85929 | Microsoft Brokering File System Elevation of Privilege Vulnerability | Windows Brokering File System | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85929) |
| CVE-2026-85942 | Windows Camera Frame Server Monitor Elevation of Privilege Vulnerability | Windows Camera Frame Server Monitor | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85942) |
| CVE-2026-88213 | Windows Bluetooth Service Elevation of Privilege Vulnerability | Windows Bluetooth Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88213) |
| CVE-2026-88227 | Windows Local Security Authority Subsystem Service (LSASS) Elevation of Privilege Vulnerability | Windows Local Security Authority Subsystem Service (LSASS) | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88227) |
| CVE-2026-88230 | Windows LUA File Virtualization Filter Driver Elevation of Privilege Vulnerability | Windows LUAFV | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88230) |
| CVE-2026-88232 | Windows Camera Frame Server Monitor Elevation of Privilege Vulnerability | Windows Camera Frame Server Monitor | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88232) |
| CVE-2026-88233 | Windows Task Scheduler Elevation of Privilege Vulnerability | Windows Task Scheduler | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88233) |
| CVE-2026-88235 | Servicing Stack Updates Elevation of Privilege Vulnerability | Servicing Stack Updates | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88235) |
| CVE-2026-88238 | Windows Camera Frame Server Monitor Elevation of Privilege Vulnerability | Windows Camera Frame Server Monitor | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88238) |
| CVE-2026-88239 | Windows Biometric Service Elevation of Privilege Vulnerability | Windows Biometric Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88239) |
| CVE-2026-88241 | Windows Sensor Data Service Elevation of Privilege Vulnerability | Windows Sensor Data Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88241) |
| CVE-2026-88245 | Windows Brokering File System Elevation of Privilege Vulnerability | Windows Brokering File System | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88245) |
| CVE-2026-94507 | DirectX Elevation of Privilege Vulnerability | Windows DirectX | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94507) |
| CVE-2026-94515 | Windows Advanced Rasterization Platform Elevation of Privilege Vulnerability | Windows Advanced Rasterization Platform | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94515) |
| CVE-2026-94527 | Windows GDI Elevation of Privilege Vulnerability | Windows GDI | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94527) |
| CVE-2026-94531 | Windows COM Elevation of Privilege Vulnerability | Windows COM | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94531) |
| CVE-2026-95872 | Windows USB Driver Elevation of Privilege Vulnerability | Windows USB Driver | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95872) |
| CVE-2026-95874 | Xbox Gaming Services Elevation of Privilege Vulnerability | Xbox | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95874) |
| CVE-2026-95877 | Windows Biometric Service Elevation of Privilege Vulnerability | Windows Biometric Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95877) |
| CVE-2026-95879 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95879) |
| CVE-2026-95881 | Windows Push Notifications Elevation of Privilege Vulnerability | Windows Push Notifications | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95881) |
| CVE-2026-95891 | Microsoft DirectMusic Remote Code Execution Vulnerability | Windows Microsoft DirectMusic | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95891) |
| CVE-2026-95894 | Windows Task Scheduler Elevation of Privilege Vulnerability | Windows Task Scheduler | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95894) |
| CVE-2026-95895 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95895) |
| CVE-2026-95896 | Microsoft DirectMusic Remote Code Execution Vulnerability | Windows Microsoft DirectMusic | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95896) |
| CVE-2026-95898 | Windows iSCSI Elevation of Privilege Vulnerability | Windows iSCSI | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95898) |
| CVE-2026-95902 | Windows USB Hub Driver Elevation of Privilege Vulnerability | Windows USB Hub Driver | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95902) |
| CVE-2026-95909 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95909) |
| CVE-2026-95920 | Windows Management Instrumentation Elevation of Privilege Vulnerability | Windows Management Instrumentation | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95920) |
| CVE-2026-95932 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95932) |
| CVE-2026-95933 | Windows OLE Elevation of Privilege Vulnerability | Windows OLE | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95933) |
| CVE-2026-95934 | Windows Diagnostic Policy Service Elevation of Privilege Vulnerability | Windows Diagnostic Policy Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95934) |
| CVE-2026-95935 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95935) |
| CVE-2026-95942 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95942) |
| CVE-2026-95947 | Windows Error Reporting Elevation of Privilege Vulnerability | Windows Error Reporting | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95947) |
| CVE-2026-95948 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95948) |
| CVE-2026-95951 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95951) |
| CVE-2026-95953 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95953) |
| CVE-2026-95963 | Data Sharing Service Client Elevation of Privilege Vulnerability | Data Sharing Service Client | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95963) |
| CVE-2026-95965 | Windows USB Video Driver Elevation of Privilege Vulnerability | Windows USB Video Driver | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95965) |
| CVE-2026-95983 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95983) |
| CVE-2026-95988 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95988) |
| CVE-2026-95991 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95991) |
| CVE-2026-95997 | Windows Event Logging Service Elevation of Privilege Vulnerability | Windows Event Logging Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95997) |
| CVE-2026-95999 | Windows USB Hub Driver Elevation of Privilege Vulnerability | Windows USB Hub Driver | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95999) |
| CVE-2026-96005 | Windows USB Driver Elevation of Privilege Vulnerability | Windows USB Driver | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96005) |
| CVE-2026-96016 | Windows Local Security Authority Subsystem Service (LSASS) Elevation of Privilege Vulnerability | Windows Local Security Authority Subsystem Service (LSASS) | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96016) |
| CVE-2026-96023 | Windows Push Notification Core Elevation of Privilege Vulnerability | Windows Push Notification Core | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96023) |
| CVE-2026-96028 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96028) |
| CVE-2026-96029 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96029) |
| CVE-2026-96031 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96031) |
| CVE-2026-96036 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96036) |
| CVE-2026-96037 | Windows User Manager Service Elevation of Privilege Vulnerability | Windows User Manager Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96037) |
| CVE-2026-96038 | Windows Audio Service Elevation of Privilege Vulnerability | Windows Audio Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96038) |
| CVE-2026-96052 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96052) |
| CVE-2026-96053 | Windows Task Scheduler Elevation of Privilege Vulnerability | Windows Task Scheduler | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96053) |
| CVE-2026-96055 | Windows USB Driver Elevation of Privilege Vulnerability | Windows USB Driver | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96055) |
| CVE-2026-96056 | Windows USB Driver Elevation of Privilege Vulnerability | Windows USB Driver | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96056) |
| CVE-2026-96057 | Windows USB Driver Elevation of Privilege Vulnerability | Windows USB Driver | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96057) |
| CVE-2026-96060 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96060) |
| CVE-2026-96062 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96062) |
| CVE-2026-96066 | Windows Local Security Authority Subsystem Service (LSASS) Elevation of Privilege Vulnerability | Windows Local Security Authority Subsystem Service (LSASS) | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96066) |
| CVE-2026-96074 | Windows AppX Package Manager Elevation of Privilege Vulnerability | Windows AppX Package Manager | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96074) |
| CVE-2026-96076 | Windows DIAL Client Elevation of Privilege Vulnerability | Windows DIAL Client | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96076) |
| CVE-2026-96084 | Graphic Fonts Elevation of Privilege Vulnerability | Graphic Fonts | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96084) |
| CVE-2026-96085 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96085) |
| CVE-2026-96102 | Windows TCP/IP Elevation of Privilege Vulnerability | Windows TCP/IP | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96102) |
| CVE-2026-96103 | Desktop Window Manager Elevation of Privilege Vulnerability | Desktop Window Manager | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96103) |
| CVE-2026-96117 | Windows LUA File Virtualization Filter Driver Elevation of Privilege Vulnerability | Windows LUAFV | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96117) |
| CVE-2026-96122 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96122) |
| CVE-2026-96126 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96126) |
| CVE-2026-96127 | Windows Biometric Service Elevation of Privilege Vulnerability | Windows Biometric Service | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96127) |
| CVE-2026-96129 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96129) |
| CVE-2026-96152 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96152) |
| CVE-2026-96160 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96160) |
| CVE-2026-96162 | Windows Clipboard Virtual Channel Extension Elevation of Privilege Vulnerability | Windows Clipboard Virtual Channel Extension | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96162) |
| CVE-2026-96172 | Desktop Window Manager Elevation of Privilege Vulnerability | Desktop Window Manager | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96172) |
| CVE-2026-96174 | Desktop Window Manager Elevation of Privilege Vulnerability | Desktop Window Manager | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96174) |
| CVE-2026-96175 | Desktop Window Manager Elevation of Privilege Vulnerability | Desktop Window Manager | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96175) |
| CVE-2026-96184 | Windows Modern Device Management (MDM) Elevation of Privilege Vulnerability | Windows Modern Device Management (MDM) | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96184) |
| CVE-2026-96845 | Windows Task Scheduler Elevation of Privilege Vulnerability | Windows Task Scheduler | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96845) |
| CVE-2026-97013 | Windows Shell Elevation of Privilege Vulnerability | Windows Shell | 7.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97013) |
| CVE-2026-105512 | Microsoft QUIC Denial of Service Vulnerability | Microsoft QUIC | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105512) |
| CVE-2026-105515 | Windows Message Queuing Denial of Service Vulnerability | Windows Message Queuing | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105515) |
| CVE-2026-105544 | .NET VSTest Elevation of Privilege Vulnerability | .NET | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105544) |
| CVE-2026-105551 | Windows NetBIOS Elevation of Privilege Vulnerability | Windows NetBIOS | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105551) |
| CVE-2026-105558 | Windows Deployment Services Remote Code Execution Vulnerability | Windows Deployment Services | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105558) |
| CVE-2026-105561 | Windows Secure Socket Tunneling Protocol (SSTP) Denial of Service Vulnerability | Windows Secure Socket Tunneling Protocol (SSTP) | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105561) |
| CVE-2026-105578 | Microsoft JScript Remote Code Execution Vulnerability | Microsoft JScript | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105578) |
| CVE-2026-105579 | Windows DNS Information Disclosure Vulnerability | Windows DNS | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105579) |
| CVE-2026-108421 | Windows File Server Resource Management Service Elevation of Privilege Vulnerability | Windows File Server Resource Management Service | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108421) |
| CVE-2026-109475 | .NET Denial of Service Vulnerability | .NET | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109475) |
| CVE-2026-109478 | ASP.NET Core Denial of Service Vulnerability | ASP.NET Core | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109478) |
| CVE-2026-109481 | ASP.NET Core Elevation of Privilege Vulnerability | ASP.NET Core | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109481) |
| CVE-2026-109487 | Microsoft PowerPoint Remote Code Execution Vulnerability | Microsoft Office PowerPoint | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109487) |
| CVE-2026-109491 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109491) |
| CVE-2026-109498 | Microsoft Office Access Remote Code Execution Vulnerability | Microsoft Office Access | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109498) |
| CVE-2026-109500 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109500) |
| CVE-2026-110052 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110052) |
| CVE-2026-110053 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110053) |
| CVE-2026-111286 | Microsoft Office Remote Code Execution Vulnerability | Microsoft Office | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111286) |
| CVE-2026-111287 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111287) |
| CVE-2026-112793 | Windows Event Collector Service Elevation of Privilege Vulnerability | Windows Event Collector Service | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112793) |
| CVE-2026-112966 | Windows Security Account Manager Denial of Service Vulnerability | Windows Security Account Manager | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112966) |
| CVE-2026-112972 | Windows SMBv3 Server Remote Code Execution Vulnerability | Windows SMB Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112972) |
| CVE-2026-112985 | Windows JScript Remote Code Execution Vulnerability | Microsoft JScript | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112985) |
| CVE-2026-113749 | Microsoft Windows Codecs Library Remote Code Execution Vulnerability | Microsoft Windows Codecs Library | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113749) |
| CVE-2026-113752 | Windows Print Spooler Components Remote Code Execution Vulnerability | Windows Print Spooler Components | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113752) |
| CVE-2026-113768 | Windows Performance Counters Remote Code Execution Vulnerability | Windows Performance Counters | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113768) |
| CVE-2026-113823 | Azure CycleCloud Information Disclosure Vulnerability | Azure CycleCloud | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113823) |
| CVE-2026-113825 | Windows SMB Server Network Transport Driver (srvnet.sys) Remote Code Execution Vulnerability | Windows SMB Server Network Transport Driver (srvnet.sys) | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113825) |
| CVE-2026-113855 | Windows DNS Remote Code Execution Vulnerability | Windows DNS | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113855) |
| CVE-2026-113859 | Windows TCP/IP Remote Code Execution Vulnerability | Windows TCP/IP | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113859) |
| CVE-2026-113861 | Windows Hyper-V Elevation of Privilege Vulnerability | Windows Hyper-V | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113861) |
| CVE-2026-114147 | ASP.NET Core Denial of Service Vulnerability | ASP.NET Core | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114147) |
| CVE-2026-114149 | ASP.NET Core Denial of Service Vulnerability | ASP.NET Core | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114149) |
| CVE-2026-114154 | ASP.NET Core Denial of Service Vulnerability | ASP.NET Core | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114154) |
| CVE-2026-114155 | .NET Elevation of Privilege Vulnerability | .NET | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114155) |
| CVE-2026-114157 | ASP.NET Core Security Feature Bypass Vulnerability | ASP.NET Core | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114157) |
| CVE-2026-116698 | Microsoft WDAC OLE DB provider for SQL Remote Code Execution Vulnerability | Microsoft WDAC OLE DB provider for SQL | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116698) |
| CVE-2026-116706 | Windows Link Layer Topology Discovery Protocol Remote Code Execution Vulnerability | Windows Link Layer Topology Discovery Protocol | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116706) |
| CVE-2026-116718 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116718) |
| CVE-2026-116926 | Microsoft Teams Spoofing Vulnerability | Microsoft Teams | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116926) |
| CVE-2026-116929 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116929) |
| CVE-2026-116931 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116931) |
| CVE-2026-116937 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116937) |
| CVE-2026-116938 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116938) |
| CVE-2026-116943 | Microsoft SQL Server Information Disclosure Vulnerability | SQL Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116943) |
| CVE-2026-116947 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116947) |
| CVE-2026-118108 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118108) |
| CVE-2026-118114 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118114) |
| CVE-2026-118115 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118115) |
| CVE-2026-118145 | Windows Function Discovery SSDP Provider Remote Code Execution Vulnerability | Windows Function Discovery SSDP Provider | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118145) |
| CVE-2026-118148 | Active Directory Domain Services Elevation of Privilege Vulnerability | Active Directory Domain Services | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118148) |
| CVE-2026-118153 | Microsoft Exchange Server Denial of Service Vulnerability | Microsoft Exchange Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118153) |
| CVE-2026-118301 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118301) |
| CVE-2026-118735 | Active Directory Domain Services Elevation of Privilege Vulnerability | Active Directory Domain Services | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118735) |
| CVE-2026-118747 | .NET Denial of Service Vulnerability | .NET | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118747) |
| CVE-2026-118748 | ASP.NET Core Denial of Service Vulnerability | ASP.NET Core | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118748) |
| CVE-2026-118749 | ASP.NET Core Denial of Service Vulnerability | ASP.NET Core | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118749) |
| CVE-2026-118750 | ASP.NET Core Denial of Service Vulnerability | ASP.NET Core | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118750) |
| CVE-2026-119837 | Windows Universal Disk Format File System Driver (UDFS) Elevation of Privilege Vulnerability | Windows Universal Disk Format File System Driver (UDFS) | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119837) |
| CVE-2026-119858 | Remote Desktop Client Remote Code Execution Vulnerability | Remote Desktop Client | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119858) |
| CVE-2026-119880 | Microsoft XPS Document Converter Remote Code Execution Vulnerability | Microsoft XPS Document Converter | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119880) |
| CVE-2026-119932 | Windows Remote Desktop Denial of Service Vulnerability | Windows Remote Desktop | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119932) |
| CVE-2026-119938 | Windows Shell Remote Code Execution Vulnerability | Windows Shell | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119938) |
| CVE-2026-119944 | Windows Mobile Device Management Elevation of Privilege Vulnerability | Windows Mobile Device Management | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119944) |
| CVE-2026-119947 | Windows Hyper-V Elevation of Privilege Vulnerability | Windows Hyper-V | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119947) |
| CVE-2026-119948 | Windows Active Directory Remote Code Execution Vulnerability | Windows Active Directory | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119948) |
| CVE-2026-119960 | Windows Hyper-V Elevation of Privilege Vulnerability | Windows Hyper-V | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119960) |
| CVE-2026-119966 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119966) |
| CVE-2026-119995 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119995) |
| CVE-2026-119996 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119996) |
| CVE-2026-120000 | Microsoft Office SharePoint Remote Code Execution Vulnerability | Microsoft Office SharePoint | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120000) |
| CVE-2026-121660 | Visual Studio Code Security Feature Bypass Vulnerability | Visual Studio Code | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121660) |
| CVE-2026-121680 | Windows NTLM Spoofing Vulnerability | Windows NTLM | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121680) |
| CVE-2026-122163 | Windows Image Acquisition Remote Code Execution Vulnerability | Windows Image Acquisition | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122163) |
| CVE-2026-122169 | Windows IKE Extension Spoofing Vulnerability | Windows IKE Extension | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122169) |
| CVE-2026-122177 | Windows iSCSI Elevation of Privilege Vulnerability | Windows iSCSI | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122177) |
| CVE-2026-123378 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123378) |
| CVE-2026-123379 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123379) |
| CVE-2026-124170 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124170) |
| CVE-2026-124185 | Microsoft Office Word Remote Code Execution Vulnerability | Microsoft Office Word | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124185) |
| CVE-2026-124227 | Microsoft Office Outlook Remote Code Execution Vulnerability | Microsoft Office Outlook | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124227) |
| CVE-2026-125134 | Windows Function Discovery Resource Publication Remote Code Execution Vulnerability | Windows Function Discovery Resource Publication | 7.5 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-125134) |
| CVE-2026-69901 | Microsoft Teams for Android Spoofing Vulnerability | Microsoft Teams for Android | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-69901) |
| CVE-2026-70240 | Windows Kerberos Denial of Service Vulnerability | Windows Kerberos | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70240) |
| CVE-2026-80094 | Remote Desktop Gateway Service Elevation of Privilege Vulnerability | Remote Desktop Gateway Service | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-80094) |
| CVE-2026-83684 | Windows iSCSI Target Service Information Disclosure Vulnerability | Windows iSCSI Target Service | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-83684) |
| CVE-2026-84010 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-84010) |
| CVE-2026-88111 | SQL Server Remote Code Execution Vulnerability | SQL Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88111) |
| CVE-2026-88212 | Windows Network Address Translation (NAT) Remote Code Execution Vulnerability | Windows Network Address Translation (NAT) | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88212) |
| CVE-2026-88216 | Windows DHCP Server Remote Code Execution Vulnerability | Windows DHCP Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88216) |
| CVE-2026-88236 | Microsoft QUIC Denial of Service Vulnerability | Microsoft QUIC | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88236) |
| CVE-2026-88244 | Windows Link Layer Topology Discovery Protocol Remote Code Execution Vulnerability | Windows Link Layer Topology Discovery Protocol | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88244) |
| CVE-2026-95964 | Remote Desktop Client Remote Code Execution Vulnerability | Remote Desktop Client | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95964) |
| CVE-2026-96077 | Windows TCP/IP Denial of Service Vulnerability | Windows TCP/IP | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96077) |
| CVE-2026-96081 | Windows Rich Text Edit Control Remote Code Execution Vulnerability | Windows Rich Text Edit Control | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96081) |
| CVE-2026-96134 | Windows DHCP Server Denial of Service Vulnerability | Windows DHCP Server | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96134) |
| CVE-2026-96176 | Windows DNS Denial of Service Vulnerability | Windows DNS | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96176) |
| CVE-2026-96972 | Windows DNS Server Information Disclosure Vulnerability | Windows DNS | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96972) |
| CVE-2026-96993 | Windows Performance Monitor Remote Code Execution Vulnerability | Windows Performance Monitor | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96993) |
| CVE-2026-97002 | Microsoft Windows VMSwitch Elevation of Privilege Vulnerability | Windows VMSwitch | 7.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97002) |
| CVE-2026-102230 | Visual Studio Code Information Disclosure Vulnerability | Visual Studio Code | 7.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-102230) |
| CVE-2026-69327 | Windows Remote Desktop Services Remote Code Execution Vulnerability | Remote Desktop Gateway Service | 7.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-69327) |
| CVE-2026-109497 | Microsoft Office SharePoint Spoofing Vulnerability | Microsoft Office SharePoint | 7.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109497) |
| CVE-2026-109504 | Microsoft Office SharePoint Spoofing Vulnerability | Microsoft Office SharePoint | 7.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109504) |
| CVE-2026-110045 | Microsoft Office SharePoint Spoofing Vulnerability | Microsoft Office SharePoint | 7.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110045) |
| CVE-2026-110065 | Microsoft Office SharePoint Spoofing Vulnerability | Microsoft Office SharePoint | 7.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110065) |
| CVE-2026-111300 | Microsoft Office SharePoint Spoofing Vulnerability | Microsoft Office SharePoint | 7.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111300) |
| CVE-2026-111303 | Microsoft Office SharePoint Spoofing Vulnerability | Microsoft Office SharePoint | 7.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111303) |
| CVE-2026-119900 | Windows NTFS Elevation of Privilege Vulnerability | Windows NTFS | 7.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119900) |
| CVE-2026-120778 | Aspire Elevation of Privilege Vulnerability | Aspire | 7.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120778) |
| CVE-2026-120792 | Aspire Information Disclosure Vulnerability | Aspire | 7.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120792) |
| CVE-2026-105520 | Windows DNS Elevation of Privilege Vulnerability | Windows DNS | 7.2 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105520) |
| CVE-2026-105560 | Windows DHCP Server Remote Code Execution Vulnerability | Windows DHCP Server | 7.2 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105560) |
| CVE-2026-116933 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 7.2 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116933) |
| CVE-2026-116936 | Microsoft SQL Server Remote Code Execution Vulnerability | SQL Server | 7.2 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116936) |
| CVE-2026-116944 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 7.2 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116944) |
| CVE-2026-118151 | Microsoft Exchange Server Elevation of Privilege Vulnerability | Microsoft Exchange Server | 7.2 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118151) |
| CVE-2026-118157 | Microsoft Exchange Server Elevation of Privilege Vulnerability | Microsoft Exchange Server | 7.2 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118157) |
| CVE-2026-112973 | Windows Kernel Security Feature Bypass Vulnerability | Windows Kernel | 7.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112973) |
| CVE-2026-118208 | Microsoft Exchange Server Spoofing Vulnerability | Microsoft Exchange Server | 7.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118208) |
| CVE-2026-119988 | Windows SMB Remote Code Execution Vulnerability | Windows SMB | 7.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119988) |
| CVE-2026-100204 | HEIF Image Extensions Remote Code Execution Vulnerability | HEIF Image Extensions | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-100204) |
| CVE-2026-103571 | Windows CNG Key Isolation Service Elevation of Privilege Vulnerability | Windows CNG Key Isolation Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-103571) |
| CVE-2026-105017 | Volume Shadow Copy Elevation of Privilege Vulnerability | Windows Volume Shadow Copy | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105017) |
| CVE-2026-105024 | Windows Storage Spaces Controller Elevation of Privilege Vulnerability | Windows Storage Spaces Controller | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105024) |
| CVE-2026-105504 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105504) |
| CVE-2026-105509 | Windows Resilient File System (ReFS) Elevation of Privilege Vulnerability | Windows Resilient File System (ReFS) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105509) |
| CVE-2026-105510 | Windows Secure Socket Tunneling Protocol (SSTP) Elevation of Privilege Vulnerability | Windows Secure Socket Tunneling Protocol (SSTP) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105510) |
| CVE-2026-105511 | Windows Point-to-Point Protocol over Ethernet (PPPoE) Elevation of Privilege Vulnerability | Windows Point-to-Point Protocol over Ethernet (PPPoE) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105511) |
| CVE-2026-105513 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105513) |
| CVE-2026-105522 | Winlogon Elevation of Privilege Vulnerability | Winlogon | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105522) |
| CVE-2026-105525 | Windows Network Connection Broker Elevation of Privilege Vulnerability | Windows Network Connection Broker | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105525) |
| CVE-2026-105526 | Winsock Elevation of Privilege Vulnerability | Winsock | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105526) |
| CVE-2026-105529 | Windows Storage Elevation of Privilege Vulnerability | Windows Storage | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105529) |
| CVE-2026-105533 | Windows COM Elevation of Privilege Vulnerability | Windows COM | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105533) |
| CVE-2026-105540 | Windows Error Reporting Elevation of Privilege Vulnerability | Windows Error Reporting | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105540) |
| CVE-2026-105545 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105545) |
| CVE-2026-105546 | Windows Management Instrumentation Elevation of Privilege Vulnerability | Windows Management Instrumentation | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105546) |
| CVE-2026-105547 | Windows Setup and Deployment Elevation of Privilege Vulnerability | Windows Setup and Deployment | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105547) |
| CVE-2026-105553 | Windows Filtering Platform (WFP) Elevation of Privilege Vulnerability | Windows Filtering Platform (WFP) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105553) |
| CVE-2026-105554 | Windows Background Intelligent Transfer Service (BITS) Elevation of Privilege Vulnerability | Windows Background Intelligent Transfer Service (BITS) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105554) |
| CVE-2026-105565 | Windows MIDI Service Module Elevation of Privileges Vulnerability | Windows MIDI Service Module | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105565) |
| CVE-2026-105566 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105566) |
| CVE-2026-105567 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105567) |
| CVE-2026-105574 | Windows MIDI Service Module Elevation of Privileges Vulnerability | Windows MIDI Service Module | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105574) |
| CVE-2026-105582 | Windows DWM Core Library Elevation of Privilege Vulnerability | Windows DWM Core Library | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105582) |
| CVE-2026-105583 | Windows DWM Core Library Elevation of Privilege Vulnerability | Windows DWM Core Library | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105583) |
| CVE-2026-105586 | Microsoft Windows SCSI Class System File Elevation of Privilege Vulnerability | Microsoft Windows SCSI Class System File | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105586) |
| CVE-2026-105587 | Windows OLE DB Elevation of Privilege Vulnerability | Windows OLE DB | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105587) |
| CVE-2026-105589 | Windows Wireless Networking Elevation of Privilege Vulnerability | Windows Wireless Networking | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105589) |
| CVE-2026-105734 | Azure Local Elevation of Privilege Vulnerability | Azure Local | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105734) |
| CVE-2026-108406 | Windows Network Connection Broker Elevation of Privilege Vulnerability | Windows Network Connection Broker | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108406) |
| CVE-2026-108413 | Windows Telephony Service Elevation of Privilege Vulnerability | Windows Telephony Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108413) |
| CVE-2026-108414 | Windows Projected File System Filter Driver Elevation of Privilege Vulnerability | Windows Projected File System Filter Driver | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108414) |
| CVE-2026-112753 | Windows Container Isolation FS Filter Driver (unionfs.sys) Elevation of Privilege Vulnerability | Windows Container Isolation FS Filter Driver (unionfs.sys) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112753) |
| CVE-2026-112756 | Windows Filtering Platform (WFP) Elevation of Privilege Vulnerability | Windows Filtering Platform (WFP) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112756) |
| CVE-2026-112759 | Windows Task Scheduler Elevation of Privilege Vulnerability | Windows Task Scheduler | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112759) |
| CVE-2026-112761 | Windows Broadcast DVR User Service Elevation of Privilege Vulnerability | Windows Broadcast DVR User Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112761) |
| CVE-2026-112763 | Windows Cloud Files Mini Filter Driver Elevation of Privilege Vulnerability | Windows Cloud Files Mini Filter Driver | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112763) |
| CVE-2026-112764 | Windows USB Driver Elevation of Privilege Vulnerability | Windows USB Driver | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112764) |
| CVE-2026-112765 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112765) |
| CVE-2026-112766 | Windows exFAT File System Elevation of Privilege Vulnerability | Windows exFAT File System | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112766) |
| CVE-2026-112790 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112790) |
| CVE-2026-112791 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112791) |
| CVE-2026-112792 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112792) |
| CVE-2026-112796 | Windows Event Collector Service Elevation of Privilege Vulnerability | Windows Event Collector Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112796) |
| CVE-2026-112797 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112797) |
| CVE-2026-112798 | Windows NetBIOS Elevation of Privilege Vulnerability | Windows NetBIOS | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112798) |
| CVE-2026-112800 | Windows Diagnostic Policy Service Elevation of Privilege Vulnerability | Windows Diagnostic Policy Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112800) |
| CVE-2026-112804 | Windows exFAT File System Elevation of Privilege Vulnerability | Windows exFAT File System | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112804) |
| CVE-2026-112810 | Windows Cloud Files Mini Filter Driver Elevation of Privilege Vulnerability | Windows Cloud Files Mini Filter Driver | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112810) |
| CVE-2026-112812 | Windows SMB Client Elevation of Privilege Vulnerability | Windows SMB Client | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112812) |
| CVE-2026-112968 | Windows COM Elevation of Privilege Vulnerability | Windows COM | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112968) |
| CVE-2026-112970 | Windows SMB Client Elevation of Privilege Vulnerability | Windows SMB Client | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112970) |
| CVE-2026-112971 | Windows SMB Client Elevation of Privilege Vulnerability | Windows SMB Client | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112971) |
| CVE-2026-112976 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112976) |
| CVE-2026-112986 | Windows DWM Core Library Elevation of Privilege Vulnerability | Windows DWM Core Library | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112986) |
| CVE-2026-112987 | Windows Modern Device Management (MDM) Elevation of Privilege Vulnerability | Windows Modern Device Management (MDM) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112987) |
| CVE-2026-112989 | Windows Servicing Stack Updates Elevation of Privilege Vulnerability | Servicing Stack Updates | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112989) |
| CVE-2026-113750 | Windows Device Inventory Elevation of Privilege Vulnerability | Windows Device Inventory | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113750) |
| CVE-2026-113751 | Windows Fast FAT Driver Elevation of Privilege Vulnerability | Windows Fast FAT Driver | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113751) |
| CVE-2026-113755 | Windows Filter Manager Elevation of Privilege Vulnerability | Windows Filter Manager | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113755) |
| CVE-2026-113761 | Windows Container Isolation FS Filter Driver (unionfs.sys) Elevation of Privilege Vulnerability | Windows Container Isolation FS Filter Driver (unionfs.sys) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113761) |
| CVE-2026-113762 | Windows Broadcast DVR User Service Elevation of Privilege Vulnerability | Windows Broadcast DVR User Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113762) |
| CVE-2026-113769 | Windows COM+ Event System Service Elevation of Privilege Vulnerability | Windows COM+ Event System Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113769) |
| CVE-2026-113770 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113770) |
| CVE-2026-113819 | Desktop Window Manager Elevation of Privilege Vulnerability | Desktop Window Manager | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113819) |
| CVE-2026-113820 | Windows Modern Device Management (MDM) Elevation of Privilege Vulnerability | Windows Modern Device Management (MDM) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113820) |
| CVE-2026-113842 | Windows Security Center Elevation of Privilege Vulnerability | Windows Security Center | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113842) |
| CVE-2026-113860 | Windows Hyper-V Elevation of Privilege Vulnerability | Windows Hyper-V | 7.0 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113860) |
| CVE-2026-116707 | Windows Link Layer Topology Discovery Protocol Elevation of Privilege Vulnerability | Windows Link Layer Topology Discovery Protocol | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116707) |
| CVE-2026-118116 | Microsoft SQL Server Elevation of Privilege Vulnerability | SQL Server | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118116) |
| CVE-2026-118123 | Windows Point-to-Point Protocol over Ethernet (PPPoE) Elevation of Privilege Vulnerability | Windows Point-to-Point Protocol over Ethernet (PPPoE) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118123) |
| CVE-2026-118124 | Windows Internet Connection Sharing (ICS) Elevation of Privilege Vulnerability | Windows Internet Connection Sharing (ICS) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118124) |
| CVE-2026-118125 | Windows Message Queuing Elevation of Privilege Vulnerability | Windows Message Queuing | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118125) |
| CVE-2026-118288 | Microsoft Azure File Sync Elevation of Privilege Vulnerability | Azure File Sync | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118288) |
| CVE-2026-119386 | Windows Resilient File System (ReFS) Elevation of Privilege Vulnerability | Windows Resilient File System (ReFS) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119386) |
| CVE-2026-119387 | Quality Windows Audio/Video Experience (QWAVE) service Elevation of Privilege Vulnerability | Quality Windows Audio/Video Experience (QWAVE) service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119387) |
| CVE-2026-119388 | Quality Windows Audio/Video Experience (QWAVE) service Elevation of Privilege Vulnerability | Quality Windows Audio/Video Experience (QWAVE) service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119388) |
| CVE-2026-119389 | Windows Storage Elevation of Privilege Vulnerability | Windows Storage | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119389) |
| CVE-2026-119397 | Windows Kernel Transaction Manager Elevation of Privilege Vulnerability | Kernel Transaction Manager | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119397) |
| CVE-2026-119399 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119399) |
| CVE-2026-119401 | Windows Broadcast DVR User Service Elevation of Privilege Vulnerability | Windows Broadcast DVR User Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119401) |
| CVE-2026-119402 | Windows Broadcast DVR User Service Elevation of Privilege Vulnerability | Windows Broadcast DVR User Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119402) |
| CVE-2026-119403 | Windows Broadcast DVR User Service Elevation of Privilege Vulnerability | Windows Broadcast DVR User Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119403) |
| CVE-2026-119405 | Windows Backup Engine Elevation of Privilege Vulnerability | Windows Backup Engine | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119405) |
| CVE-2026-119822 | Windows Overlay Filter Elevation of Privilege Vulnerability | Windows Overlay Filter | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119822) |
| CVE-2026-119827 | Windows Win32k Elevation of Privilege Vulnerability | Windows Win32K | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119827) |
| CVE-2026-119831 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119831) |
| CVE-2026-119833 | Windows Message Queuing Elevation of Privilege Vulnerability | Windows Message Queuing | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119833) |
| CVE-2026-119835 | Windows Smart Card Elevation of Privilege Vulnerability | Windows Smart Card | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119835) |
| CVE-2026-119844 | Windows Device Association Service Elevation of Privilege Vulnerability | Windows Device Association Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119844) |
| CVE-2026-119849 | Virtual Hard Disk (VHD) Miniport Driver Remote Code Execution Vulnerability | Virtual Hard Disk (VHD) Miniport Driver | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119849) |
| CVE-2026-119851 | Windows Storage Spaces Controller Elevation of Privilege Vulnerability | Windows Storage Spaces Controller | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119851) |
| CVE-2026-119859 | Windows Internet Connection Sharing (ICS) Elevation of Privilege Vulnerability | Windows Internet Connection Sharing (ICS) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119859) |
| CVE-2026-119860 | Windows Internet Connection Sharing (ICS) Elevation of Privilege Vulnerability | Windows Internet Connection Sharing (ICS) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119860) |
| CVE-2026-119861 | Windows Internet Connection Sharing (ICS) Elevation of Privilege Vulnerability | Windows Internet Connection Sharing (ICS) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119861) |
| CVE-2026-119865 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119865) |
| CVE-2026-119866 | Windows Device Association Service Elevation of Privilege Vulnerability | Windows Device Association Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119866) |
| CVE-2026-119868 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119868) |
| CVE-2026-119870 | Windows SMB Client Elevation of Privilege Vulnerability | Windows SMB Client | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119870) |
| CVE-2026-119873 | Windows NetBIOS Elevation of Privilege Vulnerability | Windows NetBIOS | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119873) |
| CVE-2026-119874 | Windows Device Association Service Elevation of Privilege Vulnerability | Windows Device Association Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119874) |
| CVE-2026-119876 | Windows USB Scanner Driver Elevation of Privilege Vulnerability | Windows USB Scanner Driver | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119876) |
| CVE-2026-119888 | Windows Audio Service Elevation of Privilege Vulnerability | Windows Audio Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119888) |
| CVE-2026-119893 | Windows Audio Service Elevation of Privilege Vulnerability | Windows Audio Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119893) |
| CVE-2026-119894 | Windows Audio Service Elevation of Privilege Vulnerability | Windows Audio Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119894) |
| CVE-2026-119895 | Windows Audio Service Elevation of Privilege Vulnerability | Windows Audio Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119895) |
| CVE-2026-119898 | Windows PrintWorkflowUserSvc Elevation of Privilege Vulnerability | Windows PrintWorkflowUserSvc | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119898) |
| CVE-2026-119913 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119913) |
| CVE-2026-119919 | Windows Distributed Transaction Coordinator Elevation of Privilege Vulnerability | Windows Distributed Transaction Coordinator | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119919) |
| CVE-2026-119921 | Windows Microsoft Account Sign-in Assistant Elevation of Privilege Vulnerability | Windows Microsoft Account Sign-in Assistant | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119921) |
| CVE-2026-119928 | Windows PrintWorkflowUserSvc Elevation of Privilege Vulnerability | Windows PrintWorkflowUserSvc | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119928) |
| CVE-2026-119931 | Windows Text Services Framework Elevation of Privilege Vulnerability | Windows Text Services Framework | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119931) |
| CVE-2026-119974 | Windows Cloud Files Mini Filter Driver Elevation of Privilege Vulnerability | Windows Cloud Files Mini Filter Driver | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119974) |
| CVE-2026-119981 | Visual Studio Code Elevation of Privilege Vulnerability | Visual Studio Code | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119981) |
| CVE-2026-119992 | Windows HTTP.sys Elevation of Privilege Vulnerability | Windows HTTP.sys | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119992) |
| CVE-2026-121670 | Windows Overlay Filter Elevation of Privilege Vulnerability | Windows Overlay Filter | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121670) |
| CVE-2026-121671 | Windows Audio Service Elevation of Privilege Vulnerability | Windows Audio Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121671) |
| CVE-2026-122170 | Windows Win32k Elevation of Privilege Vulnerability | Windows Win32K | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122170) |
| CVE-2026-122174 | Windows Task Scheduler Elevation of Privilege Vulnerability | Windows Task Scheduler | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122174) |
| CVE-2026-122175 | Windows Autopilot Elevation of Privilege Vulnerability | Windows Autopilot | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122175) |
| CVE-2026-122179 | Windows Internet Connection Sharing (ICS) Elevation of Privilege Vulnerability | Windows Internet Connection Sharing (ICS) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122179) |
| CVE-2026-122182 | Windows Maps Elevation of Privilege Vulnerability | Windows Maps | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122182) |
| CVE-2026-123389 | Quality Windows Audio/Video Experience (QWAVE) service Elevation of Privilege Vulnerability | Quality Windows Audio/Video Experience (QWAVE) service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123389) |
| CVE-2026-124224 | PowerShell Elevation of Privilege Vulnerability | Windows PowerShell | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124224) |
| CVE-2026-69565 | Windows Remote Desktop Services Remote Code Execution Vulnerability | Remote Desktop Gateway Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-69565) |
| CVE-2026-70120 | Microsoft Bluetooth Driver Elevation of Privilege Vulnerability | Microsoft Bluetooth Driver | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70120) |
| CVE-2026-70231 | Windows Local Security Authority Subsystem Service (LSASS) Elevation of Privilege Vulnerability | Windows Local Security Authority Subsystem Service (LSASS) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70231) |
| CVE-2026-83894 | RPC Runtime Elevation of Privilege Vulnerability | RPC Runtime | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-83894) |
| CVE-2026-85862 | Windows Error Reporting Elevation of Privilege Vulnerability | Windows Error Reporting | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85862) |
| CVE-2026-88221 | Windows Broadcast DVR User Service Elevation of Privilege Vulnerability | Windows Broadcast DVR User Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88221) |
| CVE-2026-88224 | Windows AppX Deployment Service Elevation of Privilege Vulnerability | Windows AppX Deployment Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88224) |
| CVE-2026-88228 | Windows Local Security Authority Subsystem Service (LSASS) Elevation of Privilege Vulnerability | Windows Local Security Authority Subsystem Service (LSASS) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88228) |
| CVE-2026-88237 | Windows Subsystem for Linux Elevation of Privilege Vulnerability | Windows Subsystem for Linux | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88237) |
| CVE-2026-88242 | Windows Ancillary Function Driver for WinSock Elevation of Privilege Vulnerability | Windows Ancillary Function Driver for WinSock | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88242) |
| CVE-2026-94514 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94514) |
| CVE-2026-94519 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94519) |
| CVE-2026-94522 | Windows Kernel Transaction Manager Elevation of Privilege Vulnerability | Kernel Transaction Manager | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94522) |
| CVE-2026-94525 | Windows Error Reporting Elevation of Privilege Vulnerability | Windows Error Reporting | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94525) |
| CVE-2026-94529 | Windows Broadcast DVR User Service Elevation of Privilege Vulnerability | Windows Broadcast DVR User Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94529) |
| CVE-2026-95871 | Windows Broadcast DVR User Service Elevation of Privilege Vulnerability | Windows Broadcast DVR User Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95871) |
| CVE-2026-95876 | Windows Local Session Manager (LSM) Elevation of Privilege Vulnerability | Windows Local Session Manager (LSM) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95876) |
| CVE-2026-95888 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95888) |
| CVE-2026-95906 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95906) |
| CVE-2026-95922 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95922) |
| CVE-2026-95923 | Windows HTTP.sys Elevation of Privilege Vulnerability | Windows HTTP.sys | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95923) |
| CVE-2026-95938 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95938) |
| CVE-2026-95950 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95950) |
| CVE-2026-95961 | Windows USB Video Driver Elevation of Privilege Vulnerability | Windows USB Video Driver | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95961) |
| CVE-2026-95966 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95966) |
| CVE-2026-95968 | Windows Smart Card Elevation of Privilege Vulnerability | Windows Smart Card | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95968) |
| CVE-2026-95971 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95971) |
| CVE-2026-95973 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95973) |
| CVE-2026-95974 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95974) |
| CVE-2026-95976 | Windows Diagnostic Policy Service Elevation of Privilege Vulnerability | Windows Diagnostic Policy Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95976) |
| CVE-2026-95979 | Windows Brokering File System Elevation of Privilege Vulnerability | Windows Brokering File System | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95979) |
| CVE-2026-95987 | Windows User Manager Service Elevation of Privilege Vulnerability | Windows User Manager Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95987) |
| CVE-2026-95989 | vhdmp.sys Elevation of Privilege Vulnerability | vhdmp.sys | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95989) |
| CVE-2026-96004 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96004) |
| CVE-2026-96007 | Connected Devices Platform Service (Cdpsvc) Elevation of Privilege Vulnerability | Connected Devices Platform Service (Cdpsvc) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96007) |
| CVE-2026-96008 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96008) |
| CVE-2026-96019 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96019) |
| CVE-2026-96026 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96026) |
| CVE-2026-96027 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96027) |
| CVE-2026-96035 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96035) |
| CVE-2026-96042 | Windows Connection Manager Service Elevation of Privilege Vulnerability | Windows Connection Manager Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96042) |
| CVE-2026-96043 | Windows Connection Manager Service Elevation of Privilege Vulnerability | Windows Connection Manager Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96043) |
| CVE-2026-96046 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96046) |
| CVE-2026-96047 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96047) |
| CVE-2026-96051 | Windows USB Driver Elevation of Privilege Vulnerability | Windows USB Driver | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96051) |
| CVE-2026-96054 | Microsoft Color Management Remote Code Execution Vulnerability | Microsoft Color Management | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96054) |
| CVE-2026-96061 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96061) |
| CVE-2026-96072 | Windows Connected User Experiences and Telemetry Elevation of Privilege Vulnerability | Windows Connected User Experiences and Telemetry | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96072) |
| CVE-2026-96073 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96073) |
| CVE-2026-96075 | Windows Feedback Hub Elevation of Privilege Vulnerability | Windows Feedback Hub | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96075) |
| CVE-2026-96088 | Windows Connected User Experiences and Telemetry Elevation of Privilege Vulnerability | Windows Connected User Experiences and Telemetry | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96088) |
| CVE-2026-96097 | Windows Brokering File System Elevation of Privilege Vulnerability | Windows Brokering File System | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96097) |
| CVE-2026-96107 | Windows Phone Service Elevation of Privilege Vulnerability | Windows Phone Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96107) |
| CVE-2026-96124 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96124) |
| CVE-2026-96139 | Windows Kernel-Mode Drivers Elevation of Privilege Vulnerability | Windows Kernel-Mode Drivers | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96139) |
| CVE-2026-96153 | Windows Error Reporting Elevation of Privilege Vulnerability | Windows Error Reporting | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96153) |
| CVE-2026-96155 | Windows Audio Service Elevation of Privilege Vulnerability | Windows Audio Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96155) |
| CVE-2026-96158 | Microsoft ActiveX Installer Service Elevation of Privilege Vulnerability | Microsoft ActiveX Installer Service | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96158) |
| CVE-2026-96168 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96168) |
| CVE-2026-96171 | Windows Graphics Kernel Elevation of Privilege Vulnerability | Windows Graphics Kernel | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96171) |
| CVE-2026-96969 | Windows TCP/IP Elevation of Privilege Vulnerability | Windows TCP/IP | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96969) |
| CVE-2026-96971 | Windows NetBIOS Elevation of Privilege Vulnerability | Windows NetBIOS | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96971) |
| CVE-2026-96973 | Windows Encrypting File System (EFS) Elevation of Privilege Vulnerability | Windows Encrypting File System (EFS) | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96973) |
| CVE-2026-96978 | Windows Credential User Interface Elevation of Privilege Vulnerability | Windows Credential User Interface | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96978) |
| CVE-2026-96994 | Winsock Elevation of Privilege Vulnerability | Winsock | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96994) |
| CVE-2026-97000 | Windows USM Communication Manager Elevation of Privilege Vulnerability | Windows USM Communication Manager | 7.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97000) |
| CVE-2026-108404 | Windows CD-ROM Driver Remote Code Execution Vulnerability | Windows CD-ROM Driver | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108404) |
| CVE-2026-108415 | Windows File Server Resource Management Service Elevation of Privilege Vulnerability | Windows File Server Resource Management Service | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108415) |
| CVE-2026-108416 | Windows File Server Resource Management Service Elevation of Privilege Vulnerability | Windows File Server Resource Management Service | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108416) |
| CVE-2026-108469 | Microsoft Authentication Library for JavaScript Spoofing Vulnerability | Microsoft Authentication Library for JavaScript | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108469) |
| CVE-2026-112755 | Windows RNDIS Elevation of Privilege Vulnerability | Windows RNDIS | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112755) |
| CVE-2026-118143 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118143) |
| CVE-2026-118746 | .NET Security Feature Bypass Vulnerability | .NET | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118746) |
| CVE-2026-119823 | Windows Storport Miniport Driver Remote Code Execution Vulnerability | Windows Storport Miniport Driver | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119823) |
| CVE-2026-119829 | Windows USB Audio Class driver (usbaudio.sys) Elevation of Privilege Vulnerability | Windows USB Audio Class driver (usbaudio.sys) | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119829) |
| CVE-2026-119830 | Windows Storport Miniport Driver Elevation of Privilege Vulnerability | Windows Storport Miniport Driver | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119830) |
| CVE-2026-119884 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119884) |
| CVE-2026-119885 | Windows Storport Miniport Driver Elevation of Privilege Vulnerability | Windows Storport Miniport Driver | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119885) |
| CVE-2026-119918 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119918) |
| CVE-2026-119935 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119935) |
| CVE-2026-122167 | Windows USB Driver Elevation of Privilege Vulnerability | Windows USB Driver | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122167) |
| CVE-2026-122173 | HID Parser Library Elevation of Privilege Vulnerability | HID Parser Library | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122173) |
| CVE-2026-125135 | HID Parser Library Elevation of Privilege Vulnerability | HID Parser Library | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-125135) |
| CVE-2026-95905 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95905) |
| CVE-2026-96974 | HID Parser Library Elevation of Privilege Vulnerability | HID Parser Library | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96974) |
| CVE-2026-96979 | HID Parser Library Elevation of Privilege Vulnerability | HID Parser Library | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96979) |
| CVE-2026-96982 | HID Parser Library Elevation of Privilege Vulnerability | HID Parser Library | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96982) |
| CVE-2026-97015 | Windows BitLocker Security Feature Bypass Vulnerability | Windows BitLocker | 6.8 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97015) |
| CVE-2026-112980 | Windows Print Spooler Components Elevation of Privilege Vulnerability | Windows Print Spooler Components | 6.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112980) |
| CVE-2026-119852 | Windows Installer Elevation of Privilege Vulnerability | Windows Installer | 6.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119852) |
| CVE-2026-119912 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 6.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119912) |
| CVE-2026-119914 | Windows Setup and Deployment Elevation of Privilege Vulnerability | Windows Setup and Deployment | 6.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119914) |
| CVE-2026-95910 | Windows Hyper-V Security Feature Bypass Vulnerability | Windows Hyper-V | 6.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95910) |
| CVE-2026-96179 | Windows DNS Elevation of Privilege Vulnerability | Role: DNS Server | 6.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96179) |
| CVE-2026-105018 | Windows Partition Management Driver Elevation of Privilege Vulnerability | Windows Partition Management Driver | 6.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105018) |
| CVE-2026-109495 | Microsoft Office SharePoint Elevation of Privilege Vulnerability | Microsoft Office SharePoint | 6.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109495) |
| CVE-2026-112969 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 6.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112969) |
| CVE-2026-112984 | Windows USB Video Driver Elevation of Privilege Vulnerability | Windows USB Video Driver | 6.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112984) |
| CVE-2026-113817 | Windows Devices Human Interface Elevation of Privilege Vulnerability | Windows Devices Human Interface | 6.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113817) |
| CVE-2026-116700 | Windows Telephony Service Elevation of Privilege Vulnerability | Windows Telephony Service | 6.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116700) |
| CVE-2026-118144 | Windows Smart Card Elevation of Privilege Vulnerability | Windows Smart Card | 6.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118144) |
| CVE-2026-119383 | Windows Smart Card Elevation of Privilege Vulnerability | Windows Smart Card | 6.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119383) |
| CVE-2026-119394 | Windows Enhanced Storage Remote Code Execution Vulnerability | Windows Enhanced Storage | 6.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119394) |
| CVE-2026-119937 | Kernel Streaming Service Driver Elevation of Privilege Vulnerability | Microsoft Streaming Service | 6.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119937) |
| CVE-2026-124229 | Microsoft Office Excel Remote Code Execution Vulnerability | Microsoft Office Excel | 6.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124229) |
| CVE-2026-95889 | Windows Storage Elevation of Privilege Vulnerability | Windows Storage | 6.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95889) |
| CVE-2026-105559 | Windows Active Directory Denial of Service Vulnerability | Windows Active Directory | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105559) |
| CVE-2026-105568 | Windows Active Directory Domain Services Denial of Service Vulnerability | Active Directory Domain Services | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105568) |
| CVE-2026-108417 | Windows Remote Desktop Client Information Disclosure Vulnerability | Remote Desktop Client | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108417) |
| CVE-2026-108418 | Windows Remote Desktop Client Information Disclosure Vulnerability | Remote Desktop Client | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108418) |
| CVE-2026-108419 | Windows Remote Desktop Client Information Disclosure Vulnerability | Remote Desktop Client | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108419) |
| CVE-2026-108424 | Windows GDI Information Disclosure Vulnerability | Windows GDI | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108424) |
| CVE-2026-109455 | Microsoft Office SharePoint Information Disclosure Vulnerability | Microsoft Office SharePoint | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109455) |
| CVE-2026-110046 | Microsoft Office Word Information Disclosure Vulnerability | Microsoft Office Word | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110046) |
| CVE-2026-110051 | Microsoft Office Word Information Disclosure Vulnerability | Microsoft Office Word | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110051) |
| CVE-2026-110057 | Microsoft Office SharePoint Information Disclosure Vulnerability | Microsoft Office SharePoint | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110057) |
| CVE-2026-110066 | Microsoft Office Word Information Disclosure Vulnerability | Microsoft Office Word | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-110066) |
| CVE-2026-111288 | Microsoft Office Word Information Disclosure Vulnerability | Microsoft Office Word | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111288) |
| CVE-2026-111291 | Microsoft Office Information Disclosure Vulnerability | Microsoft Office | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111291) |
| CVE-2026-111292 | Microsoft Office Excel Information Disclosure Vulnerability | Microsoft Office Excel | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111292) |
| CVE-2026-111293 | Microsoft Office Information Disclosure Vulnerability | Microsoft Office | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-111293) |
| CVE-2026-112731 | Microsoft Office Information Disclosure Vulnerability | Microsoft Office | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112731) |
| CVE-2026-112738 | Microsoft Office PowerPoint Information Disclosure Vulnerability | Microsoft Office PowerPoint | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112738) |
| CVE-2026-112745 | Azure DevOps Server Information Disclosure Vulnerability | Azure DevOps Server | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112745) |
| CVE-2026-112795 | Windows Security Account Manager Denial of Service Vulnerability | Windows Security Account Manager | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112795) |
| CVE-2026-112807 | Windows Local Security Authority Subsystem Service (LSASS) Denial of Service Vulnerability | Microsoft Local Security Authority Server (lsasrv) | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112807) |
| CVE-2026-112808 | Windows Print Spooler Components Information Disclosure Vulnerability | Windows Print Spooler Components | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112808) |
| CVE-2026-113818 | Windows Deployment Services Information Disclosure Vulnerability | Windows Deployment Services | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113818) |
| CVE-2026-113822 | Azure CycleCloud Elevation of Privilege Vulnerability | Azure CycleCloud | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113822) |
| CVE-2026-114156 | ASP.NET Core Security Feature Bypass Vulnerability | ASP.NET Core | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114156) |
| CVE-2026-116699 | Microsoft WDAC OLE DB provider for SQL Remote Code Execution Vulnerability | Microsoft WDAC OLE DB provider for SQL | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116699) |
| CVE-2026-116721 | Microsoft Office Word Information Disclosure Vulnerability | Microsoft Office Word | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116721) |
| CVE-2026-116922 | Microsoft Office PowerPoint Information Disclosure Vulnerability | Microsoft Office PowerPoint | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116922) |
| CVE-2026-116932 | Microsoft SQL Server Information Disclosure Vulnerability | SQL Server | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116932) |
| CVE-2026-116935 | Microsoft SQL Server Information Disclosure Vulnerability | SQL Server | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116935) |
| CVE-2026-118103 | Microsoft SQL Server Information Disclosure Vulnerability | SQL Server | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118103) |
| CVE-2026-118104 | Microsoft SQL Server Information Disclosure Vulnerability | SQL Server | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118104) |
| CVE-2026-118152 | Microsoft Exchange Server Spoofing Vulnerability | Microsoft Exchange Server | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118152) |
| CVE-2026-118214 | Windows Advanced Rasterization Platform Information Disclosure Vulnerability | Windows Advanced Rasterization Platform | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118214) |
| CVE-2026-118300 | Microsoft Office Excel Information Disclosure Vulnerability | Microsoft Office Excel | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118300) |
| CVE-2026-118727 | Microsoft Office Excel Information Disclosure Vulnerability | Microsoft Office Excel | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118727) |
| CVE-2026-118728 | Microsoft Office Excel Information Disclosure Vulnerability | Microsoft Office Excel | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118728) |
| CVE-2026-118739 | Windows DHCP Client Denial of Service Vulnerability | Windows DHCP Client | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118739) |
| CVE-2026-119396 | Windows Remote Access API Tampering Vulnerability | Windows Remote Access API | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119396) |
| CVE-2026-119887 | Windows Installer Information Disclosure Vulnerability | Windows Installer | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119887) |
| CVE-2026-119889 | ActiveSyncProvider Information Disclosure Vulnerability | ActiveSyncProvider | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119889) |
| CVE-2026-119940 | Windows Kerberos Denial of Service Vulnerability | Windows Kerberos | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119940) |
| CVE-2026-119976 | Visual Studio Code GitHub Pull Requests and Issues Extension Information Disclosure Vulnerability | Visual Studio Code - GitHub Pull Requests and Issues Extension | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119976) |
| CVE-2026-119982 | Visual Studio Code Security Feature Bypass Vulnerability | Visual Studio Code | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119982) |
| CVE-2026-119993 | Microsoft Office Outlook Information Disclosure Vulnerability | Microsoft Office Outlook | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119993) |
| CVE-2026-119998 | Microsoft Office Security Feature Bypass Vulnerability | Microsoft Office | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119998) |
| CVE-2026-119999 | Microsoft Office Excel Information Disclosure Vulnerability | Microsoft Office Excel | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119999) |
| CVE-2026-121677 | Windows Remote Desktop Client Information Disclosure Vulnerability | Remote Desktop Client | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121677) |
| CVE-2026-122196 | Microsoft Dynamics 365 (on-premises) Information Disclosure Vulnerability | Microsoft Dynamics 365 (on-premises) | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122196) |
| CVE-2026-122518 | Microsoft Edge (Chromium-based) Information Disclosure Vulnerability | Microsoft Edge (Chromium-based) | 6.5 | Moderate | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122518) |
| CVE-2026-124178 | Microsoft Office Excel Information Disclosure Vulnerability | Microsoft Office Excel | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124178) |
| CVE-2026-124179 | Microsoft Office Excel Information Disclosure Vulnerability | Microsoft Office Excel | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124179) |
| CVE-2026-124183 | Microsoft Office Excel Information Disclosure Vulnerability | Microsoft Office Excel | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124183) |
| CVE-2026-124194 | Microsoft Outlook Spoofing Vulnerability | Microsoft Office Outlook | 6.5 | Moderate | yes | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124194) |
| CVE-2026-124210 | Microsoft Office SharePoint Information Disclosure Vulnerability | Microsoft Office SharePoint | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124210) |
| CVE-2026-124222 | Microsoft Office SharePoint Elevation of Privilege Vulnerability | Microsoft Office SharePoint | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124222) |
| CVE-2026-124233 | Microsoft Office Word Information Disclosure Vulnerability | Microsoft Office Word | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-124233) |
| CVE-2026-67382 | Microsoft SQL Server Information Disclosure Vulnerability | SQL Server | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-67382) |
| CVE-2026-68783 | Microsoft SQL Server Information Disclosure Vulnerability | SQL Server | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-68783) |
| CVE-2026-96018 | Windows AppContainer Information Disclosure Vulnerability | Windows AppContainer | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96018) |
| CVE-2026-96082 | Windows Kerberos Denial of Service Vulnerability | Windows Kerberos | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96082) |
| CVE-2026-96086 | Windows WLAN Service Denial of Service Vulnerability | Windows WLAN Service | 6.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96086) |
| CVE-2026-105588 | Windows DHCP Server Elevation of Privilege Vulnerability | Windows DHCP Server | 6.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105588) |
| CVE-2026-113864 | Windows Hyper-V Elevation of Privilege Vulnerability | Windows Hyper-V | 6.4 | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113864) |
| CVE-2026-119869 | Windows Failover Cluster Elevation of Privilege Vulnerability | Windows Failover Cluster | 6.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119869) |
| CVE-2026-119871 | Windows IP Translation Configuration Service Elevation of Privilege Vulnerability | Windows IP Translation Configuration Service | 6.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119871) |
| CVE-2026-119872 | Windows USB Driver Elevation of Privilege Vulnerability | Windows USB Driver | 6.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119872) |
| CVE-2026-119901 | Windows MIDI Service Module Elevation of Privileges Vulnerability | Windows MIDI Service Module | 6.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119901) |
| CVE-2026-119965 | Windows Kernel Elevation of Privilege Vulnerability | Windows Kernel | 6.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119965) |
| CVE-2026-120783 | Azure DevOps Server Elevation of Privilege Vulnerability | Azure DevOps Server | 6.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120783) |
| CVE-2026-88215 | Windows Filtering Platform (WFP) Elevation of Privilege Vulnerability | Windows Filtering Platform (WFP) | 6.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88215) |
| CVE-2026-96981 | Windows PCI Bus Driver Elevation of Privilege Vulnerability | Windows PCI Bus Driver | 6.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96981) |
| CVE-2026-96992 | Windows PCI Bus Driver Elevation of Privilege Vulnerability | Windows PCI Bus Driver | 6.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96992) |
| CVE-2026-109485 | Microsoft 365 Agents SDK Information Disclosure Vulnerability | Microsoft 365 Agents SDK | 6.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109485) |
| CVE-2026-113763 | Windows DPAPI (Data Protection Application Programming Interface) Elevation of Privilege Vulnerability | Windows DPAPI (Data Protection Application Programming Interface) | 6.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113763) |
| CVE-2026-119840 | Windows Universal Disk Format File System Driver (UDFS) Elevation of Privilege Vulnerability | Windows Universal Disk Format File System Driver (UDFS) | 6.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119840) |
| CVE-2026-109476 | ASP.NET Core Information Disclosure Vulnerability | ASP.NET Core | 6.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109476) |
| CVE-2026-121669 | PowerShell Information Disclosure Vulnerability | Microsoft PowerShell Core | 6.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121669) |
| CVE-2026-121674 | PowerShell Information Disclosure Vulnerability | Microsoft PowerShell Core | 6.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121674) |
| CVE-2026-121675 | PowerShell Information Disclosure Vulnerability | Microsoft PowerShell Core | 6.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121675) |
| CVE-2026-122985 | Microsoft PowerShell Information Disclosure Vulnerability | Microsoft PowerShell | 6.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122985) |
| CVE-2026-112757 | Windows Secure Kernel Mode Information Disclosure Vulnerability | Windows Secure Kernel Mode | 6.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112757) |
| CVE-2026-119955 | Windows Hyper-V Denial of Service Vulnerability | Windows Hyper-V | 6.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119955) |
| CVE-2026-105557 | Windows DHCP Server Information Disclosure Vulnerability | Windows DHCP Server | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105557) |
| CVE-2026-108425 | Windows DNS Information Disclosure Vulnerability | Windows DNS | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108425) |
| CVE-2026-114150 | ASP.NET Core Information Disclosure Vulnerability | ASP.NET Core | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114150) |
| CVE-2026-116697 | Reliable Multicast Transport Driver (RMCAST) Denial of Service Vulnerability | Reliable Multicast Transport Driver (RMCAST) | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116697) |
| CVE-2026-118102 | Microsoft SQL Server Information Disclosure Vulnerability | SQL Server | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118102) |
| CVE-2026-118213 | Windows Deployment Services Information Disclosure Vulnerability | Windows Deployment Services | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118213) |
| CVE-2026-119404 | Windows Client for NFS Security Feature Bypass Vulnerability | Windows Client for NFS | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119404) |
| CVE-2026-119832 | Windows BitLocker Security Feature Bypass Vulnerability | Windows BitLocker | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119832) |
| CVE-2026-119909 | Windows Internet Information Services Denial of Service Vulnerability | Windows Internet Information Services | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119909) |
| CVE-2026-119936 | Windows Internet Information Services Denial of Service Vulnerability | Windows Internet Information Services | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119936) |
| CVE-2026-119946 | HTTP.sys Information Disclosure Vulnerability | Windows HTTP.sys | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119946) |
| CVE-2026-119972 | Remote Procedure Call Denial of Service Vulnerability | Windows Remote Procedure Call | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119972) |
| CVE-2026-119991 | Microsoft Configuration Manager Information Disclosure Vulnerability | Microsoft Configuration Manager | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119991) |
| CVE-2026-122474 | Windows Security Account Manager Remote Protocol Security Feature Bypass Vulnerability | Windows Security Account Manager | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122474) |
| CVE-2026-122987 | Microsoft High Performance Computing (HPC) Pack Elevation of Privilege Vulnerability | Microsoft High Performance Computing (HPC) Pack | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122987) |
| CVE-2026-123395 | Microsoft Office Excel Information Disclosure Vulnerability | Microsoft Office Excel | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-123395) |
| CVE-2026-95913 | Windows Hyper-V Denial of Service Vulnerability | Windows Hyper-V | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95913) |
| CVE-2026-96975 | Role: DNS Server Denial of Service Vulnerability | Role: DNS Server | 5.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96975) |
| CVE-2026-116939 | Microsoft SQL Server Information Disclosure Vulnerability | SQL Server | 5.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116939) |
| CVE-2026-88211 | Graphic Fonts Information Disclosure Vulnerability | Graphic Fonts | 5.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88211) |
| CVE-2026-88231 | Windows iSCSI Information Disclosure Vulnerability | Windows iSCSI | 5.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88231) |
| CVE-2026-96022 | Windows Text Services Framework Information Disclosure Vulnerability | Windows Text Services Framework | 5.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96022) |
| CVE-2026-96150 | Microsoft Windows Codecs Library Information Disclosure Vulnerability | Microsoft Windows Codecs Library | 5.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96150) |
| CVE-2026-102868 | Windows Shell Information Disclosure Vulnerability | Windows Shell | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-102868) |
| CVE-2026-105527 | Windows Encrypting File System (EFS) Denial of Service Vulnerability | Windows Encrypting File System (EFS) | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105527) |
| CVE-2026-105530 | Windows System Events Broker Information Disclosure Vulnerability | Windows System Events Broker | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105530) |
| CVE-2026-105531 | Windows Print Spooler Components Information Disclosure Vulnerability | Windows Print Spooler Components | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105531) |
| CVE-2026-105537 | Mailslot File System Information Disclosure Vulnerability | Mailslot File System | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105537) |
| CVE-2026-105552 | Windows Kernel Information Disclosure Vulnerability | Windows Kernel | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105552) |
| CVE-2026-105584 | Windows Inventory Backup Information Disclosure Vulnerability | Windows Inventory Backup | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105584) |
| CVE-2026-108408 | Windows Telephony Service Information Disclosure Vulnerability | Windows Telephony Service | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108408) |
| CVE-2026-108409 | Windows Overlay Filter Information Disclosure Vulnerability | Windows Overlay Filter | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108409) |
| CVE-2026-108410 | Windows Management Instrumentation Information Disclosure Vulnerability | Windows Management Instrumentation | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108410) |
| CVE-2026-109460 | Microsoft Entra Private Network Connector Information Disclosure Vulnerability | Microsoft Entra Private Network Connector | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109460) |
| CVE-2026-112720 | Microsoft Office Word Information Disclosure Vulnerability | Microsoft Office Word | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112720) |
| CVE-2026-112750 | Windows Overlay Filter Information Disclosure Vulnerability | Windows Overlay Filter | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112750) |
| CVE-2026-112754 | Microsoft Graphics Component Information Disclosure Vulnerability | Microsoft Graphics Component | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112754) |
| CVE-2026-112803 | Windows Cloud Files Mini Filter Driver Information Disclosure Vulnerability | Windows Cloud Files Mini Filter Driver | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112803) |
| CVE-2026-112809 | Windows Composite Image File System Information Disclosure Vulnerability | Windows Composite Image File System | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112809) |
| CVE-2026-112814 | Windows Management Instrumentation Elevation of Privilege Vulnerability | Windows Management Instrumentation | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112814) |
| CVE-2026-112965 | Windows Management Instrumentation Information Disclosure Vulnerability | Windows Management Instrumentation | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112965) |
| CVE-2026-112974 | Microsoft Account Tampering Vulnerability | Microsoft Account | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112974) |
| CVE-2026-112977 | Windows Deployment Services Information Disclosure Vulnerability | Windows Deployment Services | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112977) |
| CVE-2026-112979 | Windows State Repository Service Tampering Vulnerability | Windows State Repository Service | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112979) |
| CVE-2026-112982 | Microsoft Account Tampering Vulnerability | Microsoft Account | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112982) |
| CVE-2026-112988 | Windows Desktop Window Manager Elevation of Privilege Vulnerability | Desktop Window Manager | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112988) |
| CVE-2026-113757 | Windows FileCrypt Driver Information Disclosure Vulnerability | Windows FileCrypt Driver | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113757) |
| CVE-2026-113771 | Windows Container Isolation FS Filter Driver (unionfs.sys) Elevation of Privilege Vulnerability | Windows Container Isolation FS Filter Driver (unionfs.sys) | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113771) |
| CVE-2026-113844 | Windows NTFS Tampering Vulnerability | Windows NTFS | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113844) |
| CVE-2026-114166 | Microsoft Raw Image Extension Information Disclosure Vulnerability | Windows Raw Image Extension | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114166) |
| CVE-2026-118140 | Server for NFS Information Disclosure Vulnerability | Windows Server for NFS | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118140) |
| CVE-2026-118736 | Windows Network File System Information Disclosure Vulnerability | Windows Network File System | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118736) |
| CVE-2026-119825 | Win32k Information Disclosure Vulnerability | Windows Win32K | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119825) |
| CVE-2026-119855 | Windows COM+ Event System Service Information Disclosure Vulnerability | Windows COM+ Event System Service | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119855) |
| CVE-2026-119856 | Win32k Information Disclosure Vulnerability | Windows Win32K | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119856) |
| CVE-2026-119857 | Windows Kernel Information Disclosure Vulnerability | Windows Kernel | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119857) |
| CVE-2026-122162 | Windows Update Stack Information Disclosure Vulnerability | Windows Update Stack | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122162) |
| CVE-2026-122297 | Windows Kernel Transaction Manager Information Disclosure Vulnerability | Kernel Transaction Manager | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-122297) |
| CVE-2026-83953 | GitHub Copilot for Jetbrains Information Disclosure Vulnerability | Github Copilot | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-83953) |
| CVE-2026-84004 | AMD Zen Information Disclosure Vulnerability | AMD Zen | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-84004) |
| CVE-2026-84005 | AMD Zen Information Disclosure Vulnerability | AMD Zen | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-84005) |
| CVE-2026-88217 | Windows Graphics Kernel Information Disclosure Vulnerability | Windows Graphics Kernel | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88217) |
| CVE-2026-88220 | Windows Performance Counters Information Disclosure Vulnerability | Windows Performance Counters | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88220) |
| CVE-2026-88247 | Windows Program Compatibility Assistant Service Information Disclosure Vulnerability | Windows Program Compatibility Assistant Service | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88247) |
| CVE-2026-94517 | Windows Kernel Transaction Manager Information Disclosure Vulnerability | Kernel Transaction Manager | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94517) |
| CVE-2026-95893 | Win32k Information Disclosure Vulnerability | Windows Win32K | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95893) |
| CVE-2026-95908 | Windows Remote Desktop Client Information Disclosure Vulnerability | Remote Desktop Client | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95908) |
| CVE-2026-95944 | Windows App Readiness Service Tampering Vulnerability | Windows App Readiness Service | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95944) |
| CVE-2026-95946 | Windows Graphics Kernel Information Disclosure Vulnerability | Windows Graphics Kernel | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95946) |
| CVE-2026-95977 | Windows Event Viewer Information Disclosure Vulnerability | Windows Event Viewer | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95977) |
| CVE-2026-96001 | Windows Bluetooth Service Information Disclosure Vulnerability | Windows Bluetooth Service | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96001) |
| CVE-2026-96041 | Windows USB Hub Driver Information Disclosure Vulnerability | Windows USB Hub Driver | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96041) |
| CVE-2026-96059 | HID class driver Information Disclosure Vulnerability | HID class driver | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96059) |
| CVE-2026-96101 | Windows Connected User Experiences and Telemetry Information Disclosure Vulnerability | Windows Connected User Experiences and Telemetry | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96101) |
| CVE-2026-96110 | Windows OLE Information Disclosure Vulnerability | Windows OLE | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96110) |
| CVE-2026-96112 | Windows DNS Server Information Disclosure Vulnerability | Role: DNS Server | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96112) |
| CVE-2026-96133 | Windows Graphics Kernel Information Disclosure Vulnerability | Windows Graphics Kernel | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96133) |
| CVE-2026-96137 | Windows Graphics Kernel Information Disclosure Vulnerability | Windows Graphics Kernel | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96137) |
| CVE-2026-96156 | Windows Broker Infrastructure Service Information Disclosure Vulnerability | Windows Broker Infrastructure Service | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96156) |
| CVE-2026-96989 | Secondary Logon Information Disclosure Vulnerability | Secondary Logon | 5.5 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96989) |
| CVE-2026-105492 | Microsoft Remote Registry Service Denial of Service Vulnerability | Microsoft Remote Registry Service | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105492) |
| CVE-2026-105590 | Windows Active Directory Certificate Services Security Feature Bypass | Windows Active Directory Certificate Services | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105590) |
| CVE-2026-108402 | Windows Layer-2 Bridge Network Driver Denial of Service Vulnerability | Windows Layer-2 Bridge Network Driver | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108402) |
| CVE-2026-112736 | Microsoft Office SharePoint Spoofing Vulnerability | Microsoft Office SharePoint | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112736) |
| CVE-2026-112975 | Windows Link-Layer Discovery Protocol (LLDP) Denial of Service Vulnerability | Windows Link-Layer Discovery Protocol (LLDP) | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112975) |
| CVE-2026-113756 | Windows FileCrypt Driver Security Feature Bypass Vulnerability | Windows FileCrypt Driver | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113756) |
| CVE-2026-113773 | Windows DHCP Server Spoofing Vulnerability | Windows DHCP Server | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113773) |
| CVE-2026-119848 | Windows Message Queuing Denial of Service Vulnerability | Windows Message Queuing | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119848) |
| CVE-2026-119867 | Windows Installer Security Feature Bypass Vulnerability | Windows Installer | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119867) |
| CVE-2026-119882 | Windows Remote Desktop Services Information Disclosure Vulnerability | Windows Remote Desktop Services | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119882) |
| CVE-2026-119890 | Windows DHCP Server Denial of Service Vulnerability | Windows DHCP Server | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119890) |
| CVE-2026-119959 | Windows Hyper-V Spoofing Vulnerability | Windows Hyper-V | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119959) |
| CVE-2026-120796 | .NET Denial of Service Vulnerability | .NET | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120796) |
| CVE-2026-121678 | Windows Remote Desktop Client Information Disclosure Vulnerability | Remote Desktop Client | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121678) |
| CVE-2026-95884 | Windows Active Directory Certificate Services Information Disclosure Vulnerability | Windows Active Directory Certificate Services | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95884) |
| CVE-2026-96965 | Windows Hyper-V Denial of Service Vulnerability | Windows Hyper-V | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96965) |
| CVE-2026-96983 | Windows DNS Denial of Service Vulnerability | Windows DNS | 5.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96983) |
| CVE-2026-105506 | Windows Shell Information Disclosure Vulnerability | Windows Shell | 5.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105506) |
| CVE-2026-116940 | Microsoft SQL Server Information Disclosure Vulnerability | SQL Server | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-116940) |
| CVE-2026-119905 | Windows DNS Spoofing Vulnerability | Windows DNS | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119905) |
| CVE-2026-119970 | Windows DNS Information Disclosure Vulnerability | Windows DNS | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119970) |
| CVE-2026-119971 | Windows DNS Server Information Disclosure Vulnerability | Windows DNS | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119971) |
| CVE-2026-96017 | Role: DNS Server Denial of Service Vulnerability | Role: DNS Server | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96017) |
| CVE-2026-96970 | Windows DNS Information Disclosure Vulnerability | Windows DNS | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96970) |
| CVE-2026-96976 | Windows DNS Information Disclosure Vulnerability | Windows DNS | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96976) |
| CVE-2026-96980 | Windows DNS Information Disclosure Vulnerability | Windows DNS | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96980) |
| CVE-2026-96984 | Windows DNS Information Disclosure Vulnerability | Windows DNS | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96984) |
| CVE-2026-96985 | Windows DNS Information Disclosure Vulnerability | Windows DNS | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96985) |
| CVE-2026-96986 | Windows DNS Information Disclosure Vulnerability | Windows DNS | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96986) |
| CVE-2026-96987 | Windows DNS Information Disclosure Vulnerability | Windows DNS | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96987) |
| CVE-2026-96988 | Windows DNS Information Disclosure Vulnerability | Windows DNS | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96988) |
| CVE-2026-97006 | Windows DNS Information Disclosure Vulnerability | Windows DNS | 4.9 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97006) |
| CVE-2026-102200 | Windows NTFS Tampering Vulnerability | Windows NTFS | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-102200) |
| CVE-2026-105562 | Windows Container Manager Service Information Disclosure Vulnerability | Windows Container Manager Service | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105562) |
| CVE-2026-108423 | Windows WinHTTP Information Disclosure Vulnerability | Windows WinHTTP | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108423) |
| CVE-2026-112789 | Windows Installer Information Disclosure Vulnerability | Windows Installer | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112789) |
| CVE-2026-112806 | Windows Print Spooler Components Information Disclosure Vulnerability | Windows Print Spooler Components | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112806) |
| CVE-2026-112813 | Windows Overlay Filter Elevation of Privilege Vulnerability | Windows Overlay Filter | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112813) |
| CVE-2026-112990 | Windows USB Video Driver Elevation of Privilege Vulnerability | Windows USB Video Driver | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112990) |
| CVE-2026-113754 | Windows FileCrypt Driver Information Disclosure Vulnerability | Windows FileCrypt Driver | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113754) |
| CVE-2026-113764 | Windows Projected File System Information Disclosure Vulnerability | Windows Projected File System | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113764) |
| CVE-2026-113772 | Windows Redirected Drive Buffering Information Disclosure Vulnerability | Windows Redirected Drive Buffering | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113772) |
| CVE-2026-113815 | Microsoft PowerShell Security Feature Bypass Vulnerability | Windows PowerShell | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113815) |
| CVE-2026-119385 | Windows Hyper-V Denial of Service Vulnerability | Windows Hyper-V | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119385) |
| CVE-2026-119836 | Windows Management Services Information Disclosure Vulnerability | Windows Management Services | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119836) |
| CVE-2026-119838 | Windows Installer Information Disclosure Vulnerability | Windows Installer | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119838) |
| CVE-2026-119841 | Windows Graphics Kernel Information Disclosure Vulnerability | Windows Graphics Kernel | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119841) |
| CVE-2026-119910 | Win32k Information Disclosure Vulnerability | Windows Win32K | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119910) |
| CVE-2026-119942 | HTTP.sys Information Disclosure Vulnerability | Windows HTTP.sys | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119942) |
| CVE-2026-96048 | Windows Graphics Kernel Information Disclosure Vulnerability | Windows Graphics Kernel | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96048) |
| CVE-2026-96093 | Windows Internet (wininet.dll) Information Disclosure Vulnerability | Windows Internet (wininet.dll) | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96093) |
| CVE-2026-96144 | Windows Graphics Kernel Information Disclosure Vulnerability | Windows Graphics Kernel | 4.7 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96144) |
| CVE-2026-109456 | Microsoft Office SharePoint Spoofing Vulnerability | Microsoft Office SharePoint | 4.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109456) |
| CVE-2026-96058 | Windows Kernel Information Disclosure Vulnerability | Windows Kernel | 4.6 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96058) |
| CVE-2026-109462 | Azure Firmware Security Feature Bypass Vulnerability | Azure Firmware | 4.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109462) |
| CVE-2026-85907 | Windows Simple Search and Discovery Protocol (SSDP) Service Elevation of Privilege Vulnerability | Windows SSDP Service | 4.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85907) |
| CVE-2026-95998 | Windows StateRepository API Tampering Vulnerability | Windows StateRepository API | 4.4 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-95998) |
| CVE-2026-105549 | Windows Smart Card Information Disclosure Vulnerability | Windows Smart Card | 4.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105549) |
| CVE-2026-113816 | Windows Link-Layer Discovery Protocol (LLDP) Elevation of Privilege Vulnerability | Windows Link-Layer Discovery Protocol (LLDP) | 4.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113816) |
| CVE-2026-113821 | Microsoft Windows SCSI Class System File Information Disclosure Vulnerability | Microsoft Windows SCSI Class System File | 4.1 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113821) |
| CVE-2026-119395 | Storport.sys Driver Information Disclosure Vulnerability | Storport.sys Driver | 4.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119395) |
| CVE-2026-119875 | Windows Storport Miniport Driver Information Disclosure Vulnerability | Windows Storport Miniport Driver | 4.0 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119875) |
| CVE-2026-113766 | Windows Language Experience Service Tampering Vulnerability | Windows Language Experience Service | 3.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-113766) |
| CVE-2026-119883 | Data Deduplication Security Feature Bypass Vulnerability | Data Deduplication | 3.3 | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119883) |
| CVE-2026-105494 | Azure NFS mount helper (aznfs) Elevation of Privilege Vulnerability | Azure NFS mount helper (aznfs) | null | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105494) |
| CVE-2026-108470 | Microsoft Authentication Library (MSAL) for Node.js Information Disclosure Vulnerability | Microsoft Authentication Library (MSAL) for Node.js | null | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108470) |
| CVE-2026-109492 | Microsoft MCP Gateway Elevation of Privilege Vulnerability | Microsoft MCP Gateway | null | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109492) |
| CVE-2026-114160 | Azure Managed Grafana Elevation of Privilege Vulnerability | Azure Managed Grafana | null | Critical | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114160) |
| CVE-2026-119906 | Windows Sandbox Elevation of Privilege Vulnerability | Windows Sandbox | null | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119906) |
| CVE-2026-120006 | Aspire Elevation of Privilege Vulnerability | Aspire | null | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120006) |
| CVE-2026-121668 | Azure Confidential Clean Rooms Tampering Vulnerability | Azure Confidential Clean Rooms | null | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121668) |
| CVE-2026-62903 | Microsoft.Data.SqlClient Information Disclosure Vulnerability | SQL Server | null | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-62903) |
| CVE-2026-66801 | Microsoft Xbox Remote Code Execution Vulnerability | Xbox | null | Important | no | no | [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-66801) |

Key CVEs:

- Only one CVE is marked exploited: CVE-2026-124194, an Outlook spoofing flaw (CVSS 6.5) where a crafted file can leak the user's NTLMv2 hash. Patch Outlook first.
- The release has 64 Critical CVEs. The highest scores go to Windows LDAP RCE CVE-2026-119958 (9.8, no authentication), Windows Search RCE CVE-2026-116928 (9.8), and Exchange Server RCE CVE-2026-118207 and AD DS RCE CVE-2026-118146 (8.8 each, exploitation more likely).
- Cloud CVEs CVE-2026-109469 (Entra Device Registration, 10.0) and CVE-2026-119990 (Azure OpenAI, 9.8) are already fixed on Microsoft's side, so customers have nothing to do. Office (Word, Excel, Outlook) accounts for most of the remaining Critical RCEs.

## Threat intelligence

Sources checked for 9-15 Nov: Microsoft Threat Intelligence posts on the Security Blog, @MsftSecIntel and @msftsecresponse on X, Security Insider, the Microsoft Threat Intelligence podcast, and MSRC advisories.

| id | cves | summary | link |
|---|---|---|---|
| t01 | - | Storm-3350 takes over cloud identities via vishing and self-service password reset, adds its own Authenticator method, then harvests Graph, M365 and Azure data. | [link](https://x.com/MsftSecIntel/status/2120290394869006572) |
| t02 | CVE-2026-43284 | Multiple unattributed actors exploit web apps and drop GSocket for relay-based C2 that outlives patching; includes detections, hunting queries and IOCs. | [link](https://www.microsoft.com/en-us/security/blog/2026/11/11/global-socket-how-threat-actors-weaponizing-gsocket-stealthy-c2/) |
| t03 | - | Thread pointing to the GSocket research: Linux web servers kept under attacker control via a public relay after the entry flaw is fixed. | [link](https://x.com/MsftSecIntel/status/2120609029001032115) |
| t04 | CVE-2026-84869 | Unnamed actor abuses MSP ScreenConnect instances to push rogue clients and the SCKit worm, whose RelayTrap part targets connecting technicians. | [link](https://www.microsoft.com/en-us/security/blog/2026/11/13/sckit-abuses-screenconnect-deploy-remote-access-target-technician-sessions/) |
| t05 | - | Thread summarising the SCKit campaign against MSPs and pointing to IOCs, Defender XDR hunting and remediation steps. | [link](https://x.com/MsftSecIntel/status/2121357112009732242) |
| t06 | - | Credential-phishing lures exploit the 12 Nov M365 outage, citing the real incident ID; sent via three sender domains and SendGrid redirects. | [link](https://x.com/MsftSecIntel/status/2121491564161581148) |

Details:

- t01: 2026-11-11 04:29 IST, @MsftSecIntel; screenshot: [png](assets/x-msftsecintel-2120290394869006572.png) (public embed, post only); what replies say: Replies focus on the self-service password reset and SMS step, recommending callback checks at the help desk and dropping SMS for recovery.; engagement: 52 likes, 4 replies, 7822 views
- t02: 2026-11-12 01:19 IST, Microsoft Security Blog (Microsoft Threat Intelligence); screenshot: [png](assets/blog-gsocket.png); related: t03
- t03: 2026-11-12 01:36 IST, @MsftSecIntel; screenshot: [png](assets/x-msftsecintel-2120609029001032115.png) (public embed, post only); what replies say: Practitioners say patching the entry bug is not remediation; hunt for new services and outbound connections, since the shared relay leaves no IP to block. Some replies are off-topic outage jokes.; related: t02; engagement: 291 likes, 17 replies, 224309 views
- t04: 2026-11-14 03:01 IST, Microsoft Security Blog (Microsoft Threat Intelligence); screenshot: [png](assets/blog-sckit.png); related: t05
- t05: 2026-11-14 03:08 IST, @MsftSecIntel; screenshot: [png](assets/x-msftsecintel-2121357112009732242.png) (public embed, post only); what replies say: Replies stress that removing the rogue client is not enough, urge updating technician clients, inventorying all remote-support clients and not reconnecting to suspect hosts with the same tool.; related: t04; engagement: 141 likes, 8 replies, 16378 views
- t06: 2026-11-14 12:02 IST, @MsftSecIntel; screenshot: [png](assets/x-msftsecintel-2121491564161581148.png) (public embed, post only); what replies say: Repliers advise checking the admin centre or status page directly rather than clicking mail links, call the 24-hour deletion threat the giveaway, and some vent about the outage. Quote posts (mostly reposts in Japanese) relay the warning.; engagement: 3292 likes, 145 replies, 431810 views

## Blogs

| id | date (IST) | blog | title | theme | summary | asset |
|---|---|---|---|---|---|---|
| b01 | 2026-11-10 01:47 | Microsoft Security Blog | [FORGE Lab uses agentic tools to identify memory safety issues in Rust](https://www.microsoft.com/en-us/security/blog/2026/11/09/forge-lab-uses-agentic-tools-to-identify-memory-safety-issues-in-rust/) | Research | FORGE Lab used agentic tooling to find memory-safety flaws in Rust's standard libraries, some triggerable from safe code. | [png](assets/blog-forge-lab-rust.png) |
| b02 | 2026-11-11 04:30 | Microsoft Security Blog | [Detecting sleeper agents hiding in AI model neurons](https://www.microsoft.com/en-us/security/blog/2026/11/10/detecting-sleeper-agents-hiding-in-ai-model-neurons/) | AI security | A handful of neuron edits can hide a payload in an agent model; frontier agents can spot the anomalous weights. | [png](assets/blog-sleeper-agents-neurons.png) |
| b03 | 2026-11-11 22:25 | Microsoft Security Blog | [Lessons from 59 Linux Kernel Bug Reports](https://www.microsoft.com/en-us/security/blog/2026/11/11/lessons-from-59-linux-kernel-bug-reports/) | Research | MDASH-driven kernel research: 59 reports, 33 CVEs, 38 merged fixes and lessons on validating AI findings. | [png](assets/blog-linux-kernel-59-reports.png) |
| b04 | 2026-11-11 22:30 | Microsoft Sentinel Blog | [Microsoft Ignite 2026: New Sentinel Connectors Announcement](https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/microsoft-ignite-2026-new-sentinel-connectors-announcement/ba-p/4565258) | SecOps | New Sentinel connectors announced for Ignite, feeding Microsoft and third-party signals into the integrated SOC. | [png](assets/blog-sentinel-connectors-ignite.png) |
| b05 | 2026-11-12 03:52 | Microsoft Defender Blog | [Catch Microsoft Defender and Sentinel at Ignite 2026](https://techcommunity.microsoft.com/t5/microsoft-defender-blog/catch-microsoft-defender-and-sentinel-at-ignite-2026/ba-p/4572639) | Events | Role-based guide to Defender and Sentinel sessions at Ignite, led by the agentic SOC keynote. | [png](assets/blog-catch-microsoft-defender-and-sentinel-at.png) |
| b06 | 2026-11-12 03:54 | Microsoft Sentinel Blog | [Microsoft Sentinel at Ignite 2026: what to see and where to start](https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/microsoft-sentinel-at-ignite-2026-what-to-see-and-where-to-start/ba-p/4572656) | Events | Where Sentinel fits in the integrated SOC and which Ignite sessions and demos to attend. | [png](assets/blog-microsoft-sentinel-at-ignite-2026-what.png) |
| b07 | 2026-11-12 22:30 | Microsoft Security Community Blog | [A next step in the evolution of the Microsoft Data Governance strategy](https://techcommunity.microsoft.com/t5/microsoft-security-community/a-next-step-in-the-evolution-of-the-microsoft-data-governance/ba-p/4572227) | Data governance | Data governance strategy shifts into Microsoft Fabric, with the OneLake catalog as the governing layer. | [png](assets/blog-a-next-step-in-the-evolution.png) |
| b08 | 2026-11-12 22:30 | Microsoft Security Blog | [Trained to betray: How post-training supply chain attacks hijack coding agents](https://www.microsoft.com/en-us/security/blog/2026/11/12/trained-to-betray-how-post-training-supply-chain-attacks-hijack-coding-agents/) | AI security | Poisoned fine-tuning data or checkpoints can make coding agents run attacker code; research from Defender and the AI Red Team. | [png](assets/blog-trained-to-betray.png) |
| b09 | 2026-11-12 23:37 | Microsoft Security Community Blog | [Plan your Ignite agenda: Join sessions that help you secure agentic insiders at scale.](https://techcommunity.microsoft.com/t5/microsoft-security-community/plan-your-ignite-agenda-join-sessions-that-help-you-secure/ba-p/4569987) | Events | Ignite sessions on treating agents as a new class of insider and the expanded Project Perception. | [png](assets/blog-plan-your-ignite-agenda-join-sessions.png) |
| b10 | 2026-11-14 03:43 | Microsoft Security Community Blog | [Secure Data at Microsoft Ignite 2026: Plan Your Experience](https://techcommunity.microsoft.com/t5/microsoft-security-community/secure-data-at-microsoft-ignite-2026-plan-your-experience/ba-p/4573071) | Events | Guide to Purview data-security sessions and activities at Ignite 2026. | [png](assets/blog-secure-data-at-microsoft-ignite-2026.png) |
| b11 | 2026-11-14 19:47 | Core Infrastructure and Security Blog | [Migrating an Entra Connect Sync custom source anchor](https://techcommunity.microsoft.com/t5/core-infrastructure-and-security/migrating-an-entra-connect-sync-custom-source-anchor/ba-p/4573237) | Identity | Field guidance on changing a poorly chosen Entra Connect Sync source anchor without breaking identities. | [png](assets/blog-migrating-an-entra-connect-sync-custom.png) |

Related X posts (same research, kept as separate items): b01 ↔ x05; b02 ↔ x14; b03 ↔ x17; b08 ↔ x24.

Blog screenshots (top of each post, 1200x630):

**b01: FORGE Lab uses agentic tools to identify memory safety issues in Rust**

![b01](assets/blog-forge-lab-rust.png)

**b02: Detecting sleeper agents hiding in AI model neurons**

![b02](assets/blog-sleeper-agents-neurons.png)

**b03: Lessons from 59 Linux Kernel Bug Reports**

![b03](assets/blog-linux-kernel-59-reports.png)

**b04: Microsoft Ignite 2026: New Sentinel Connectors Announcement**

![b04](assets/blog-sentinel-connectors-ignite.png)

**b05: Catch Microsoft Defender and Sentinel at Ignite 2026**

![b05](assets/blog-catch-microsoft-defender-and-sentinel-at.png)

**b06: Microsoft Sentinel at Ignite 2026: what to see and where to start**

![b06](assets/blog-microsoft-sentinel-at-ignite-2026-what.png)

**b07: A next step in the evolution of the Microsoft Data Governance strategy**

![b07](assets/blog-a-next-step-in-the-evolution.png)

**b08: Trained to betray: How post-training supply chain attacks hijack coding agents**

![b08](assets/blog-trained-to-betray.png)

**b09: Plan your Ignite agenda: Join sessions that help you secure agentic insiders at scale.**

![b09](assets/blog-plan-your-ignite-agenda-join-sessions.png)

**b10: Secure Data at Microsoft Ignite 2026: Plan Your Experience**

![b10](assets/blog-secure-data-at-microsoft-ignite-2026.png)

**b11: Migrating an Entra Connect Sync custom source anchor**

![b11](assets/blog-migrating-an-entra-connect-sync-custom.png)

## What's new on Learn

Latest heading on each product's Learn What's new / release-notes page, with every entry under it, whether or not it falls in the window. Dates: an entry with its own day keeps it (precision day); otherwise the date is the first day of its section heading's period (precision month, shown as YYYY-MM, or week, shown as the week's start date). In-window is yes only for a day-precision date inside 9-15 Nov 2026 IST, or a week whose Monday-Sunday is exactly 9-15 Nov; month-precision entries are always no.

### Microsoft Entra ID

Page: https://learn.microsoft.com/en-us/entra/fundamentals/whats-new  
Latest heading: **June 2026** ([anchor](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#june-2026))  
Note: Shared Entra releases page; entries tagged Identity Governance or Network Access are listed under Entra ID Governance and Global Secure Access instead.  
Screenshot: [png](assets/learn-microsoft-entra-id.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l01 | General availability - Microsoft Entra Kerberos key rotation improved reliability for incoming trust referral flows | 2026-06 (month) | GA | - | Entra Kerberos now tries both the primary and secondary key on incoming trust referral tickets, so key rollover causes fewer sign-in failures. | no | [link](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#general-availability---microsoft-entra-kerberos-key-rotation-improved-reliability-for-incoming-trust-referral-flows) |
| l02 | Generally available - Jailbreak/Root Detection in Authenticator App | 2026-06 (month) | GA | - | Authenticator now refuses work or school accounts on jailbroken or rooted phones by default, with nothing for admins to configure. | no | [link](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#generally-available---jailbreakroot-detection-in-authenticator-app) |
| l03 | Public Preview - Extended Conditional Access protections for Agent's user accounts | 2026-06 (month) | Preview | - | Conditional Access gains finer controls for agents that hold user accounts: per-agent targeting, agent-risk conditions and compliant-device requirements. | no | [link](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#public-preview---extended-conditional-access-protections-for-agents-user-accounts) |
| l04 | General Availability - Domainless SAML IdP federation for workforce tenants | 2026-06 (month) | GA | - | Guests can federate through a SAML identity provider even when their email domain does not match a domain configured for that IdP. | no | [link](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#general-availability---domainless-saml-idp-federation-for-workforce-tenants) |
| l05 | General Availability - SCIM 2.0 APIs for Microsoft Entra ID in US Gov cloud | 2026-06 (month) | GA | - | The SCIM 2.0 APIs for provisioning Entra users and groups reach general availability in the US Government cloud. | no | [link](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#general-availability---scim-20-apis-for-microsoft-entra-id-in-us-gov-cloud) |
| l06 | General Availability - Microsoft Entra Backup and Recovery is now available | 2026-06 (month) | GA | - | Always-on Entra Backup and Recovery keeps daily snapshots of key directory objects so admins can compare changes and roll objects back. | no | [link](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#general-availability---microsoft-entra-backup-and-recovery-is-now-available) |
| l07 | Upcoming change - Improved restore experience for device-bound Authenticator app passkeys on iOS | 2026-06 (month) | - | 2026-08 (enforcement) | From August 2026, moving Authenticator to a new iPhone restores device-bound passkeys more smoothly when iCloud Keychain backup is on; no action needed. | no | [link](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#upcoming-change---improved-restore-experience-for-device-bound-authenticator-app-passkeys-on-ios) |
| l08 | Public Preview - New built-in Entra role for SOC identity response in Microsoft Defender | 2026-06 (month) | Preview | - | A new SOC Identity Responder role lets analysts disable accounts, revoke sessions and reset passwords from Defender without broad directory rights. | no | [link](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#public-preview---new-built-in-entra-role-for-soc-identity-response-in-microsoft-defender) |
| l09 | Public Preview - Prevent unauthorized changes to AD groups with AD group enforcement | 2026-06 (month) | Preview | - | Cloud Sync can lock selected on-premises AD groups so only the Entra provisioning service may change them, preventing drift. | no | [link](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#public-preview---prevent-unauthorized-changes-to-ad-groups-with-ad-group-enforcement) |

### Entra ID Governance

Page: https://learn.microsoft.com/en-us/entra/fundamentals/whats-new  
Latest heading: **June 2026** ([anchor](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#june-2026))  
Note: No separate Entra ID Governance What's new page exists; Microsoft lists governance changes on the shared Entra releases page and tags them 'Product capability: Identity Governance'. Only entries with that tag are listed here.  
Screenshot: [png](assets/learn-entra-id-governance.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l10 | General Availability - External users can be directly assigned to Access Packages | 2026-06 (month) | GA | - | Entitlement management admins can assign people outside the directory to an access package by email; they join as guests and stay governed. | no | [link](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#general-availability---external-users-can-be-directly-assigned-to-access-packages) |

### Global Secure Access

Page: https://learn.microsoft.com/en-us/entra/fundamentals/whats-new  
Latest heading: **June 2026** ([anchor](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#june-2026))  
Note: No separate Global Secure Access What's new page exists; changes appear on the shared Entra releases page tagged 'Product capability: Network Access', and only those entries are listed here. The GSA docs also have client and sensor version-history pages, which are not covered.  
Screenshot: [png](assets/learn-global-secure-access.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l11 | General Availability - BYOD support for Windows client using Entra registration | 2026-06 (month) | GA | - | Private app traffic can now come from personal, Entra-registered Windows devices, removing the need for those PCs to be domain-joined. | no | [link](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#general-availability---byod-support-for-windows-client-using-entra-registration) |

### Defender XDR

Page: https://learn.microsoft.com/en-us/defender-xdr/whats-new  
Latest heading: **November 2026** ([anchor](https://learn.microsoft.com/en-us/defender-xdr/whats-new#november-2026))  
Screenshot: [png](assets/learn-defender-xdr.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l12 | Protect AI assets from trusted-identity attacks | 2026-11 (month) | Preview | - | Defender XDR adds detection and disruption for device code phishing aimed at GitHub Copilot CLI, best with an Enterprise-level GitHub connector. | no | [link](https://learn.microsoft.com/en-us/defender-xdr/whats-new#november-2026) |
| l13 | New navigation | 2026-11 (month) | Preview | - | The Defender portal navigation is reorganized so Sentinel pages sit where they are used; ISOC tenants get new paths, others keep the old ones. | no | [link](https://learn.microsoft.com/en-us/defender-xdr/whats-new#november-2026) |

### Defender for Endpoint

Page: https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint  
Latest heading: **November 2026** ([anchor](https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint#november-2026))  
Screenshot: [png](assets/learn-defender-for-endpoint.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l14 | Preview features page | 2026-11 (month) | Preview | - | Admins can switch individual Defender for Endpoint public preview features on or off instead of all at once. | no | [link](https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint#november-2026) |
| l15 | Embedded offboarding with the Defender deployment tool for Windows | 2026-11 (month) | Preview | - | The Windows deployment tool can now build keyed, expiring offboarding packages (.exe or .zip), tracked on the Deployment packages page. | no | [link](https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint#november-2026) |
| l16 | Build 101.26092.0012 | 2026-11 (month) | GA | - | Defender for Endpoint on macOS build 101.26092.0012 (version 20.126092.12.0) is out; its changes are on the releases page. | no | [link](https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint#november-2026) |

### Defender for Office 365

Page: https://learn.microsoft.com/en-us/defender-office-365/defender-for-office-365-whats-new  
Latest heading: **November 2026** ([anchor](https://learn.microsoft.com/en-us/defender-office-365/defender-for-office-365-whats-new#november-2026))  
Screenshot: [png](assets/learn-defender-for-office-365.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l17 | Hunt for synthetic media (deepfake) detection events | 2026-11 (month) | - | - | A new advanced hunting table, SyntheticMediaDetectionEvents, logs deepfakes detected in Teams to support impersonation and fraud investigations. | no | [link](https://learn.microsoft.com/en-us/defender-office-365/defender-for-office-365-whats-new#november-2026) |

### Defender for Identity

Page: https://learn.microsoft.com/en-us/defender-for-identity/whats-new  
Latest heading: **October 2026** ([anchor](https://learn.microsoft.com/en-us/defender-for-identity/whats-new#october-2026))  
Screenshot: [png](assets/learn-defender-for-identity.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l18 | Automatic sensor v3.x activation and Windows auditing for existing customers | 2026-10 (month) | - | - | Eligible tenants see a 30-day banner, after which v3.x sensor activation and Windows auditing switch on automatically unless they opt out. | no | [link](https://learn.microsoft.com/en-us/defender-for-identity/whats-new#automatic-sensor-v3x-activation-and-windows-auditing-for-existing-customers) |
| l19 | New Defender for Identity security alerts | 2026-10 (month) | - | - | New detections cover Entra ID MFA-method and device registration abuse plus AD attacks such as diamond tickets, AD CS ESC8/ESC11 abuse and DNS exfiltration. | no | [link](https://learn.microsoft.com/en-us/defender-for-identity/whats-new#new-defender-for-identity-security-alerts) |
| l20 | General availability of sensor v3.x activation without Defender for Endpoint | 2026-10 (month) | GA | - | The v3.x sensor can be activated on DCs, AD FS, AD CS and Entra Connect servers (Windows Server 2019+) without deploying Defender for Endpoint. | no | [link](https://learn.microsoft.com/en-us/defender-for-identity/whats-new#general-availability-of-sensor-v3x-activation-without-defender-for-endpoint) |
| l21 | Known limitation: Sensor v3.x activation without Defender for Endpoint isn't supported in government clouds | 2026-10 (month) | - | - | Government cloud tenants cannot yet activate the v3.x sensor on servers that lack Defender for Endpoint. | no | [link](https://learn.microsoft.com/en-us/defender-for-identity/whats-new#known-limitation-sensor-v3x-activation-without-defender-for-endpoint-isnt-supported-in-government-clouds) |

### Defender for Cloud Apps

Page: https://learn.microsoft.com/en-us/defender-cloud-apps/release-notes  
Latest heading: **November 2026** ([anchor](https://learn.microsoft.com/en-us/defender-cloud-apps/release-notes#november-2026))  
Screenshot: [png](assets/learn-defender-for-cloud-apps.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l22 | GitHub connector enhancements (Preview) | 2026-11 (month) | Preview | - | The GitHub connector can now connect at Enterprise level as well as per organization, covering every org in one step and helping catch Copilot CLI phishing. | no | [link](https://learn.microsoft.com/en-us/defender-cloud-apps/release-notes#github-connector-enhancements-preview) |

### Defender for Cloud

Page: https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes  
Latest heading: **November 2026** ([anchor](https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes#november-2026))  
Screenshot: [png](assets/learn-defender-for-cloud.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l23 | Arc proxy support for Defender for SQL Servers on Machines | 2026-11-04 (day) | - | - | Defender for SQL on machines now covers Arc-enabled SQL Servers that send traffic via Arc proxy, starting with extension 2.0.3585.403 (manual update for now). | no | [link](https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes#arc-proxy-support-for-defender-for-sql-servers-on-machines) |

### Defender Vulnerability Management

Page: https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint  
Latest heading: **November 2026** ([anchor](https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint#november-2026))  
Note: Shares the Defender for Endpoint page: the MDVM docs link their 'What's new' entry there. None of the three entries under its latest heading (November 2026) mentions Defender Vulnerability Management, so none is listed here; they appear under Defender for Endpoint.  
Screenshot: [png](assets/learn-defender-vulnerability-management.png)

No entries for this product under the latest heading.

### Defender Threat Intelligence

Gap: no Learn What's new page found. Tried learn.microsoft.com/en-us/defender/threat-intelligence/whats-new and /whats-new-in-microsoft-defender-threat-intelligence (both 404), a Learn search for 'what's new Microsoft Defender Threat Intelligence' and 'Defender Threat Intelligence documentation' (no MDTI docs among results), and the toc.json for /defender/threat-intelligence and /defender-threat-intelligence (none exists).

### Security Exposure Management

Page: https://learn.microsoft.com/en-us/security-exposure-management/whats-new  
Latest heading: **October 2026** ([anchor](https://learn.microsoft.com/en-us/security-exposure-management/whats-new#october-2026))  
Note: Entries labelled 'Codename MDASH' are listed under MDASH.  
Screenshot: [png](assets/learn-security-exposure-management.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l24 | Posture policies and recommendation exemptions available for Azure environments | 2026-10-28 (day) | Preview | - | Azure resources can be assessed against custom posture policies, with accepted-risk exemptions managed and tracked centrally. | no | [link](https://learn.microsoft.com/en-us/security-exposure-management/whats-new#posture-policies-and-recommendation-exemptions-available-for-azure-environments) |

### Sentinel

Page: https://learn.microsoft.com/en-us/azure/sentinel/whats-new  
Latest heading: **November 2026** ([anchor](https://learn.microsoft.com/en-us/azure/sentinel/whats-new#november-2026))  
Screenshot: [png](assets/learn-sentinel.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l25 | SAP solution pricing for ISOC customers | 2026-11 (month) | - | - | For ISOC customers, the Sentinel SAP solution now costs nothing extra for active SAP production SIDs, covering dev, test and QA systems too. | no | [link](https://learn.microsoft.com/en-us/azure/sentinel/whats-new#sap-solution-pricing-for-isoc-customers) |

### Purview

Page: https://learn.microsoft.com/en-us/purview/whats-new  
Latest heading: **October 2026** ([anchor](https://learn.microsoft.com/en-us/purview/whats-new#october-2026))  
Note: The page opens with a 'What's planned for Microsoft Purview' section that has no release period; the latest dated heading is used.  
Screenshot: [png](assets/learn-purview.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l26 | Data Loss Prevention | 2026-10 (month) | GA | - | Endpoint DLP can now watch sensitive files sent over FTP or SFTP and restrict those transfers according to policy. | no | [link](https://learn.microsoft.com/en-us/purview/whats-new#data-loss-prevention) |

### Intune

Page: https://learn.microsoft.com/en-us/intune/whats-new/  
Latest heading: **Week of November 16, 2026 (Service release 2611)** ([anchor](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-november-16-2026-service-release-2611))  
Note: The latest heading is the week of 16 Nov, the week after the window; no entry carries its own date.  
Screenshot: [png](assets/learn-intune.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l27 | Share device diagnostics during Remote Help sessions on Windows | 2026-11-16 (week) | - | - | In attended Windows Remote Help sessions, users can consent to share device diagnostics with the helpdesk and stop sharing at any time. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#share-device-diagnostics-during-remote-help-sessions-on-windows) |
| l28 | Keep work files in OneDrive for Business with Edge for Business on Windows | 2026-11-16 (week) | - | - | A Windows app protection setting can send Edge for Business work-profile downloads to OneDrive for Business instead of the local disk (Edge 158+). | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#keep-work-files-in-onedrive-for-business-with-edge-for-business-on-windows) |
| l29 | Newly available protected apps for Intune | 2026-11-16 (week) | - | - | Ten more partner apps, among them Everbridge 360, Ramp and Zoho Mail, can now be managed as Intune protected apps. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#newly-available-protected-apps-for-intune) |
| l30 | New and updated settings for Windows in the settings catalog | 2026-11-16 (week) | - | - | The Windows settings catalog gains refreshed Edge and Chrome templates plus two Cloud PC device reset settings. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#new-and-updated-settings-for-windows-in-the-settings-catalog) |
| l31 | Automate tasks with local actions on Android Enterprise devices | 2026-11-16 (week) | - | - | Fully managed and dedicated Android Enterprise devices can run up to five automated local actions per trigger such as restart, sign-in or a schedule. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#automate-tasks-with-local-actions-on-android-enterprise-devices) |
| l32 | New settings for macOS in the settings catalog | 2026-11-16 (week) | - | - | The macOS settings catalog adds options for EWS retirement alerts, Edge and Copilot behaviour, and Defender runtime protection for AI agents. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#new-settings-for-macos-in-the-settings-catalog) |
| l33 | Group exclusions and built-in group targeting for PowerShell scripts on Windows | 2026-11-16 (week) | - | - | PowerShell script assignments on Windows now accept group exclusions and the built-in All Users and All Devices groups. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#group-exclusions-and-built-in-group-targeting-for-powershell-scripts-on-windows) |
| l34 | Require Google Workspace authentication on Android Enterprise devices | 2026-11-16 (week) | - | - | Admins can make users sign in with a managed Google Workspace account on supported Android Enterprise devices. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#require-google-workspace-authentication-on-android-enterprise-devices) |
| l35 | Increase Intune management agent check-ins on macOS | 2026-11-16 (week) | - | - | Newly enrolled Macs check in much more often during onboarding, and the regular agent check-in interval drops from about eight hours to one. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#increase-intune-management-agent-check-ins-on-macos) |
| l36 | Maintenance windows for operating system and driver updates on Windows | 2026-11-16 (week) | - | - | Maintenance windows let admins decide when Windows OS and driver update operations are allowed to run. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#maintenance-windows-for-operating-system-and-driver-updates-on-windows) |
| l37 | Configure evaluation frequency for custom compliance scripts on Windows and macOS | 2026-11-16 (week) | - | - | Custom compliance scripts on Windows and macOS can be re-evaluated every 15 or 30 minutes, or every one to eight hours. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#configure-evaluation-frequency-for-custom-compliance-scripts-on-windows-and-macos) |
| l38 | Manage Windows Server devices with Microsoft Intune (Insider preview) | 2026-11-16 (week) | Preview | - | Intune can enroll and manage Windows Server Insider preview builds for nonproduction testing only; production server management is not supported. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#manage-windows-server-devices-with-microsoft-intune-insider-preview) |
| l39 | CIS benchmark auditing for Windows 11 devices (public preview) | 2026-11-16 (week) | Preview | - | Windows 11 devices can be audited against the CIS Intune benchmark, with per-setting results and export; it reports only and needs Advanced Analytics. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#cis-benchmark-auditing-for-windows-11-devices-public-preview) |
| l40 | Get more remediation guidance in Windows Autopatch reports | 2026-11-16 (week) | - | - | Windows Autopatch reports add extra data, fix guidance and guardrails for configuration problems. | no | [link](https://learn.microsoft.com/en-us/intune/whats-new/#get-more-remediation-guidance-in-windows-autopatch-reports) |

### Security Copilot

Page: https://learn.microsoft.com/en-us/copilot/security/whats-new-copilot-security  
Latest heading: **April 2026** ([anchor](https://learn.microsoft.com/en-us/copilot/security/whats-new-copilot-security#april-2026))  
Screenshot: [png](assets/learn-security-copilot.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l41 | Security Analyst Agent - Public preview | 2026-04 (month) | Preview | - | The Security Analyst Agent runs multi-step investigations over Defender and Sentinel data and returns ranked risk findings with supporting evidence. | no | [link](https://learn.microsoft.com/en-us/copilot/security/whats-new-copilot-security#security-analyst-agent---public-preview) |

### Azure network security (Firewall, WAF, DDoS)

Page: https://learn.microsoft.com/en-us/azure/firewall/firewall-preview  
Latest heading: **Preview features** ([anchor](https://learn.microsoft.com/en-us/azure/firewall/firewall-preview#preview-features))  
Note: Azure Firewall's 'Preview features' page is used as its release notes. It lists current previews with no release dates, so each entry is dated on the day it was captured (2026-11-18, precision captured) and is never in the window. Web Application Firewall and DDoS Protection have no What's new or preview page on Learn (/azure/web-application-firewall/whats-new, /waf-whats-new, /azure/ddos-protection/ddos-protection-whats-new and /whats-new are all 404).  
Screenshot: [png](assets/learn-azure-network-security-firewall-waf-ddos.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l42 | Dual-stack support (preview) | 2026-11-18 (captured) | Preview | - | Azure Firewall and Firewall Policy can run in dual-stack mode, filtering IPv6 network rules and proxying DNS alongside IPv4. | no | [link](https://learn.microsoft.com/en-us/azure/firewall/firewall-preview#dual-stack-support-preview) |
| l43 | AI Security add-on (preview) | 2026-11-18 (captured) | Preview | - | An optional AI Security add-on for Firewall Premium adds prompt and malware threat protection, network DLP with Purview, and Policy Advisor. | no | [link](https://learn.microsoft.com/en-us/azure/firewall/firewall-preview#ai-security-add-on-preview) |
| l44 | Change tracking (preview) | 2026-11-18 (captured) | Preview | - | Change tracking uses Azure Resource Graph to show what changed in Firewall rule collection groups, for audit and troubleshooting. | no | [link](https://learn.microsoft.com/en-us/azure/firewall/firewall-preview#change-tracking-preview) |
| l45 | Customer provided public IP address support in secured hubs (preview) | 2026-11-18 (captured) | Preview | - | New Secured Hub firewalls in Virtual WAN can use public IP addresses from the customer tenant; existing hubs need a redeploy. | no | [link](https://learn.microsoft.com/en-us/azure/firewall/firewall-preview#customer-provided-public-ip-address-support-in-secured-hubs-preview) |

### Windows security

Page: https://learn.microsoft.com/en-us/windows/security/whats-new  
Latest heading: **November 2026 (Ignite 2026)** ([anchor](https://learn.microsoft.com/en-us/windows/security/whats-new#november-2026-ignite-2026))  
Note: New page found this run: 'What's new in Windows security' (its latest heading is November 2026 (Ignite 2026)). Its entries are feature names that link to their docs, with no description, so each summary only restates the name and its group.  
Screenshot: [png](assets/learn-windows-security.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l46 | Administrator protection | 2026-11 (month) | - | - | Listed by Microsoft under New capabilities for Windows security at Ignite 2026: Administrator protection. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#new-capabilities) |
| l47 | Agent governance | 2026-11 (month) | - | - | Listed by Microsoft under New capabilities for Windows security at Ignite 2026: Agent governance. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#new-capabilities) |
| l48 | Agent identity | 2026-11 (month) | - | - | Listed by Microsoft under New capabilities for Windows security at Ignite 2026: Agent identity. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#new-capabilities) |
| l49 | Declared configuration resource access | 2026-11 (month) | - | - | Listed by Microsoft under New capabilities for Windows security at Ignite 2026: Declared configuration resource access. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#new-capabilities) |
| l50 | Driver Quality Initiative | 2026-11 (month) | - | - | Listed by Microsoft under New capabilities for Windows security at Ignite 2026: Driver Quality Initiative. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#new-capabilities) |
| l51 | Malicious and vulnerable driver blocklists | 2026-11 (month) | - | - | Listed by Microsoft under New capabilities for Windows security at Ignite 2026: Malicious and vulnerable driver blocklists. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#new-capabilities) |
| l52 | Microsoft Execution Containers (MXC) | 2026-11 (month) | - | - | Listed by Microsoft under New capabilities for Windows security at Ignite 2026: Microsoft Execution Containers (MXC). | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#new-capabilities) |
| l53 | Remote lock | 2026-11 (month) | - | - | Listed by Microsoft under New capabilities for Windows security at Ignite 2026: Remote lock. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#new-capabilities) |
| l54 | Windows baseline protection | 2026-11 (month) | - | - | Listed by Microsoft under New capabilities for Windows security at Ignite 2026: Windows baseline protection. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#new-capabilities) |
| l55 | Windows endpoint security platform | 2026-11 (month) | - | - | Listed by Microsoft under New capabilities for Windows security at Ignite 2026: Windows endpoint security platform. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#new-capabilities) |
| l56 | Windows Hello for Business | 2026-11 (month) | - | - | Listed by Microsoft under Expanded capabilities for Windows security at Ignite 2026: Windows Hello for Business. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#expanded-capabilities) |
| l57 | Configure Windows Hello for Business | 2026-11 (month) | - | - | Listed by Microsoft under Expanded capabilities for Windows security at Ignite 2026: Configure Windows Hello for Business. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#expanded-capabilities) |
| l58 | FIDO2 security keys | 2026-11 (month) | - | - | Listed by Microsoft under Expanded capabilities for Windows security at Ignite 2026: FIDO2 security keys. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#expanded-capabilities) |
| l59 | Post-quantum cryptography | 2026-11 (month) | - | - | Listed by Microsoft under Expanded capabilities for Windows security at Ignite 2026: Post-quantum cryptography. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#expanded-capabilities) |
| l60 | Reduced reliance on NTLM with new Kerberos functionality | 2026-11 (month) | - | - | Listed by Microsoft under Expanded capabilities for Windows security at Ignite 2026: Reduced reliance on NTLM with new Kerberos functionality. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#expanded-capabilities) |
| l61 | VBS and HVCI on upgraded systems | 2026-11 (month) | - | - | Listed by Microsoft under Expanded capabilities for Windows security at Ignite 2026: VBS and HVCI on upgraded systems. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#expanded-capabilities) |
| l62 | Web sign-in | 2026-11 (month) | - | - | Listed by Microsoft under Expanded capabilities for Windows security at Ignite 2026: Web sign-in. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#expanded-capabilities) |
| l63 | Wi-Fi protection (WPA3, OWE, Wi-Fi 7) | 2026-11 (month) | - | - | Listed by Microsoft under Expanded capabilities for Windows security at Ignite 2026: Wi-Fi protection (WPA3, OWE, Wi-Fi 7). | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#expanded-capabilities) |
| l64 | Windows Autopatch | 2026-11 (month) | - | - | Listed by Microsoft under Expanded capabilities for Windows security at Ignite 2026: Windows Autopatch. | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#expanded-capabilities) |
| l65 | Windows Hello (PIN, face, fingerprint) | 2026-11 (month) | - | - | Listed by Microsoft under Expanded capabilities for Windows security at Ignite 2026: Windows Hello (PIN, face, fingerprint). | no | [link](https://learn.microsoft.com/en-us/windows/security/whats-new#expanded-capabilities) |

### Perception

Gap: Perception docs exist (learn.microsoft.com/en-us/security/agentic-security/, 'What is Perception?'), but their toc.json has no What's new or release-notes page. /security/agentic-security/whats-new and /release-notes are 404.

### MDASH

Page: https://learn.microsoft.com/en-us/security-exposure-management/whats-new  
Latest heading: **October 2026** ([anchor](https://learn.microsoft.com/en-us/security-exposure-management/whats-new#october-2026))  
Note: MDASH (Codename MDASH) has no What's new page of its own. Its docs sit inside Security Exposure Management, and that page labels MDASH changes 'Codename MDASH'. Only those entries are listed here.  
Screenshot: [png](assets/learn-mdash.png)

| id | title | date | status | change date | summary | in window | link |
|---|---|---|---|---|---|---|---|
| l66 | Codename MDASH - MAI Cyber configuration now uses MAI-Cyber-1.1-Flash | 2026-10 (month) | Preview | - | The MAI Cyber scan configuration in MDASH switches to the MAI-Cyber-1.1-Flash model, and existing Foundry setups are upgraded automatically. | no | [link](https://learn.microsoft.com/en-us/security-exposure-management/whats-new#codename-mdash---mai-cyber-configuration-now-uses-mai-cyber-11-flash) |


## Coming soon

Two official sources. (1) Microsoft 365 Roadmap: security items whose published rollout month is November 2026 to February 2027 (rollout months starting within 90 days of the window end; month precision, so all of February counts) Items already marked Launched are left out, and an edit date alone does not qualify an item; added / last modified dates are shown for information only. Worldwide ID is primary; US Government IDs for the same feature are listed under also ids; US-Government-only items, and US Government IDs whose worldwide version has already shipped, are left out. mrcwall.com was used only to discover items; status, rollout and dates come from the official Roadmap API. (2) Microsoft Learn: In development for Microsoft Intune; every feature entry is included because the page states it is in development. Learn entries carry no Roadmap ID and no added/modified date.

| id | product | title | status | rollout | added / last modified | also ids | summary |
|---|---|---|---|---|---|---|---|
| rm01 | Microsoft Purview | [Microsoft Purview: Purview Information Protection \| Classifier Simulation Mode (Health Monitoring)](https://www.microsoft.com/microsoft-365/roadmap?id=523201) | In development | November CY2026 | 2025-11-05 / 2026-07-14 | - | A simulation mode lets admins test and tune custom classifiers on production data before enforcing them. |
| rm02 | Microsoft Purview | [Microsoft Purview: Data Lifecycle Management– Hard delete capability for OneDrive and SharePoint through secure priority …](https://www.microsoft.com/microsoft-365/roadmap?id=558343) | In development | November CY2026 | 2026-03-09 / 2026-10-26 | 561034 (GCC/GCC High/DoD) | A secured workflow lets compliance admins hard-delete OneDrive and SharePoint content otherwise held by retention. |
| rm03 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention – Reduce policy sync status SLA on the Purview UI …](https://www.microsoft.com/microsoft-365/roadmap?id=558682) | In development | November CY2026 | 2026-03-24 / 2026-08-12 | 562994 (GCC/GCC High/DoD) | Endpoint DLP policy sync status in the portal updates within 30 minutes. |
| rm04 | Microsoft Purview | [Microsoft Purview: Data Lifecycle Management – Archive SharePoint files under retention](https://www.microsoft.com/microsoft-365/roadmap?id=561208) | In development | November CY2026 | 2026-05-05 / 2026-10-12 | 562345 (GCC/GCC High/DoD) | SharePoint file archiving can be used as an action inside existing retention policies. |
| rm05 | Microsoft Entra | [Microsoft Entra: Enhanced Security Accounts Manager (sAM) Account Name support for Microsoft Entra Domain Services](https://www.microsoft.com/microsoft-365/roadmap?id=569446) | In development | November CY2026 | 2026-09-01 / 2026-09-01 | - | Entra Domain Services can populate sAMAccountName from the synced on-premises value, now in public preview. |
| rm06 | Microsoft Purview | [Microsoft Purview: Information Protection-Auto-labeling for legacy Office files](https://www.microsoft.com/microsoft-365/roadmap?id=574363) | In development | November CY2026 | 2026-10-13 / 2026-10-13 | 578872 (GCC/GCC High/DoD) | Server-side auto-labeling will classify and label older .doc, .xls and .ppt files stored in SharePoint and OneDrive. |
| rm07 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention-Admin Units Support for Copilot & Cowork DLP](https://www.microsoft.com/microsoft-365/roadmap?id=575287) | In development | November CY2026 | 2026-10-13 / 2026-10-13 | - | Copilot, Copilot Chat and Cowork DLP policies can be delegated to administrative-unit admins instead of tenant-wide admins. |
| rm08 | Microsoft Purview | [Microsoft Purview compliance portal: Data Lifecycle Management - Bulk replacement or removal of a retention …](https://www.microsoft.com/microsoft-365/roadmap?id=392456) | In development | December CY2026 | 2024-04-12 / 2026-04-03 | 392457 (GCC/GCC High/DoD) | Admins can bulk replace or remove a retention label across the tenant or a KQL-targeted scope. |
| rm09 | Microsoft Purview | [Microsoft Purview compliance portal: eDiscovery - Advanced Review Set Explorer](https://www.microsoft.com/microsoft-365/roadmap?id=484086) | In development | December CY2026 | 2025-03-07 / 2026-08-14 | 565372 (GCC/GCC High/DoD) | A review-set explorer gives eDiscovery reviewers live analytics such as top item types and trends. |
| rm10 | Microsoft Purview | [Microsoft Purview: eDiscovery- CMK (Customer managed key) for eDiscovery direct export ](https://www.microsoft.com/microsoft-365/roadmap?id=557684) | In development | December CY2026 | 2026-02-25 / 2026-08-17 | 565373 (GCC/GCC High/DoD) | eDiscovery direct export can be encrypted with customer-managed keys. |
| rm11 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention - Count of Labelled Documents Condition](https://www.microsoft.com/microsoft-365/roadmap?id=562342) | In development | December CY2026 | 2026-05-15 / 2026-08-11 | - | Exchange DLP adds a condition that triggers when the number of attachments with a given label exceeds a threshold. |
| rm12 | Microsoft Purview | [Microsoft Purview: Endpoint Data Loss Prevention - Allow customer to scope JIT Audit to specific …](https://www.microsoft.com/microsoft-365/roadmap?id=562991) | In development | December CY2026 | 2026-05-26 / 2026-09-14 | - | Just-in-time audit for Endpoint DLP can be scoped to include or exclude specific users or groups. |
| rm13 | Microsoft Purview | [Endpoint Data Loss Prevention — Endpoint DLP now supports a pre curated list of file …](https://www.microsoft.com/microsoft-365/roadmap?id=562993) | In development | December CY2026 | 2026-05-27 / 2026-09-18 | - | The Endpoint DLP file-extension condition offers a curated list of supported extensions instead of free text. |
| rm14 | Microsoft Purview | [Microsoft Purview: Data Security Triage Agent - Sensitive Data Remediation through Microsoft Teams](https://www.microsoft.com/microsoft-365/roadmap?id=564615) | In development | December CY2026 | 2026-06-10 / 2026-06-10 | - | The Data Security Triage Agent can find exposed sensitive data such as SSNs and drive remediation through Teams. |
| rm15 | Microsoft Purview | [Microsoft Purview: eDiscovery - In-product diagnostics to troubleshoot common challenges](https://www.microsoft.com/microsoft-365/roadmap?id=565222) | In development | December CY2026 | 2026-06-05 / 2026-11-04 | - | Built-in eDiscovery diagnostics flag common case-permission, security-filter and policy-status problems with fix guidance. |
| rm16 | Microsoft Purview | [Microsoft Purview: Data Lifecycle Management - Ensure regulatory compliance by deleting inactive OneDrives and mailboxes …](https://www.microsoft.com/microsoft-365/roadmap?id=566527) | In development | December CY2026 | 2026-06-25 / 2026-09-21 | 569721 (GCC/GCC High/DoD) | Admins can delete content and containers of departed users' inactive OneDrive and SharePoint sites at scale to stay compliant. |
| rm17 | Microsoft Purview | [Microsoft Purview: Insider Risk Management - DS Triage Agent for IRM available in Defender](https://www.microsoft.com/microsoft-365/roadmap?id=567472) | In development | December CY2026 | 2026-07-09 / 2026-07-09 | - | Insider risk triage agent summaries appear in the Defender alert queue to speed up investigations. |
| rm18 | Microsoft 365, Microsoft 365 admin center, Microsoft Entra | [Microsoft 365: Entra ID Backup & Recovery](https://www.microsoft.com/microsoft-365/roadmap?id=567885) | In development | December CY2026 | 2026-09-01 / 2026-09-01 | - | Entra objects get 30-day point-in-time backup and restore through Microsoft 365 Backup or its storage APIs. |
| rm19 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention - Data Security for non-Microsoft connected apps](https://www.microsoft.com/microsoft-365/roadmap?id=568075) | In development | December CY2026 | 2026-07-21 / 2026-11-03 | - | DLP and auto-labeling extend to connected non-Microsoft apps such as Google Workspace, Box, Dropbox and Salesforce. |
| rm20 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention-Apply Purview network data security DLP policies to all websites, or …](https://www.microsoft.com/microsoft-365/roadmap?id=575285) | In development | December CY2026 | 2026-10-12 / 2026-10-12 | - | Network DLP policies enforced through Entra Internet Access can target every website, or every site except chosen cloud apps. |
| rm21 | Microsoft Purview | [Microsoft Purview compliance portal: Communication Compliance - Alert improvements](https://www.microsoft.com/microsoft-365/roadmap?id=181825) | In development | January CY2027 | 2023-10-16 / 2026-10-22 | 529852 (GCC/GCC High/DoD) | Communication Compliance alerting gains more options and customisation. |
| rm22 | Microsoft Purview | [Microsoft Purview compliance portal: Data Lifecycle Management - Introduction of secure workflow to bypass legal …](https://www.microsoft.com/microsoft-365/roadmap?id=392838) | In development | January CY2027 | 2024-05-22 / 2026-11-17 | 473493 (GCC/GCC High/DoD) | Priority cleanup lets admins, through a separate secured approval, delete Exchange items despite retention or legal hold. |
| rm23 | Microsoft Purview | [Microsoft Purview compliance portal: Data Lifecycle Management - Automatic data preservation for high-risk users](https://www.microsoft.com/microsoft-365/roadmap?id=392839) | In development | January CY2027 | 2024-05-06 / 2026-11-17 | 566324 (GCC/GCC High/DoD) | Adaptive Protection can automatically preserve data belonging to users flagged as high insider risk. |
| rm24 | Microsoft Purview | [Microsoft Purview compliance portal: Scanner data export for custom reporting](https://www.microsoft.com/microsoft-365/roadmap?id=494839) | In development | January CY2027 | 2025-05-22 / 2026-10-29 | - | Information protection scanner results can be exported from its SQL tables for custom reporting. |
| rm25 | Microsoft Purview | [Microsoft Purview: Compliance Manager-Purview Compliance Manager integration with Microsoft Foundry for automated mapping of AI …](https://www.microsoft.com/microsoft-365/roadmap?id=536576) | In development | January CY2027 | 2025-12-04 / 2026-10-19 | - | Compliance Manager can assess Foundry-built agents against regulations and track their compliance posture. |
| rm26 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention- Adaptive Scopes for DLP for SharePoint](https://www.microsoft.com/microsoft-365/roadmap?id=549288) | In development | January CY2027 | 2026-01-21 / 2026-08-27 | - | SharePoint DLP policies can target sites dynamically by attributes such as URL, name or custom properties. |
| rm27 | Microsoft Purview | [Microsoft Purview: Information Protection- File Labeler and File Viewer for MacOS](https://www.microsoft.com/microsoft-365/roadmap?id=561327) | In development | January CY2027 | 2026-05-07 / 2026-10-13 | - | The Information Protection File Labeler and Viewer apps come to macOS. |
| rm28 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention - Reusable Global List for Exchange Online](https://www.microsoft.com/microsoft-365/roadmap?id=561919) | In development | January CY2027 | 2026-05-13 / 2026-08-11 | - | Exchange DLP rules can share centrally managed lists of keywords, domains and addresses. |
| rm29 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention - AI Powered Data Loss Prevention Policy Optimizer](https://www.microsoft.com/microsoft-365/roadmap?id=564616) | In development | January CY2027 | 2026-06-02 / 2026-07-15 | - | An AI policy optimizer reviews DLP rules and activity to flag overlaps, misconfigurations and noisy conditions with suggested fixes. |
| rm30 | Microsoft Purview | [Microsoft Purview: Information Protection - Rights Management connector – Certificate-based authentication](https://www.microsoft.com/microsoft-365/roadmap?id=564617) | In development | January CY2027 | 2026-06-03 / 2026-10-13 | - | The Rights Management connector moves from shared-secret to certificate-based authentication using an admin-owned Entra app. |
| rm31 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention - Endpoint DLP now detects sensitivity labels on files inside …](https://www.microsoft.com/microsoft-365/roadmap?id=566617) | In development | January CY2027 | 2026-06-25 / 2026-07-06 | - | Endpoint DLP changes how .zip and similar archives are classified, detecting labels on files inside them. |
| rm32 | Microsoft Purview | [Microsoft Purview: Information Protection - Sensitivity Labels for Microsoft Entra Security Groups](https://www.microsoft.com/microsoft-365/roadmap?id=568217) | In development | January CY2027 | 2026-07-28 / 2026-11-17 | - | Sensitivity labels can be applied to Entra cloud security groups, extending existing group classification. |
| rm33 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention - SLA Based Alert Reporting Dashboard](https://www.microsoft.com/microsoft-365/roadmap?id=568372) | In development | January CY2027 | 2026-07-28 / 2026-10-21 | - | A built-in DLP alert dashboard tracks time to acknowledge, detect and resolve against custom SLAs by severity. |
| rm34 | Microsoft Purview | [Microsoft Purview: Data Lifecycle Management-Legacy Teams retention policies covering Copilot will be treated as Teams-only](https://www.microsoft.com/microsoft-365/roadmap?id=571306) | In development | January CY2027 | 2026-09-18 / 2026-10-28 | - | Legacy Teams retention policies will become Teams-only and no longer implicitly cover Copilot interactions. |
| rm35 | Microsoft Purview | [Microsoft Purview: Data Lifecycle Management-Enable version trimming for data covered by retention policies in OneDrive …](https://www.microsoft.com/microsoft-365/roadmap?id=575284) | In development | January CY2027 | 2026-11-05 / 2026-11-05 | - | Admins can trim excess OneDrive and SharePoint file versions kept by retention policies to reclaim storage, without breaking holds or records commitments. |
| rm36 | Microsoft Purview | [Microsoft Purview: Introducing IRM Alert classification](https://www.microsoft.com/microsoft-365/roadmap?id=576710) | In development | January CY2027 | 2026-10-22 / 2026-10-22 | - | Insider risk analysts can mark alerts as true positive, benign or false positive with set reasons, to improve reporting and tuning. |
| rm37 | Microsoft Purview | [Microsoft Purview: Endpoint Data Loss Prevention-View-only access to device onboarding with the View-Only Device Management …](https://www.microsoft.com/microsoft-365/roadmap?id=577187) | In development | January CY2027 | 2026-10-20 / 2026-11-11 | - | A view-only device management role lets staff see Endpoint DLP device onboarding without needing broad admin roles. |
| rm38 | Microsoft Purview | [Microsoft Purview compliance portal: Communication Compliance - Ability to set a retention period for a …](https://www.microsoft.com/microsoft-365/roadmap?id=68688) | In development | January CY2027 | 2020-09-14 / 2026-06-25 | - | Communication Compliance policies can set how long captured content is retained. |
| rm39 | Microsoft Purview | [Microsoft Purview compliance portal:  eDiscovery (Premium) – Hold reports](https://www.microsoft.com/microsoft-365/roadmap?id=93268) | In development | January CY2027 | 2022-06-02 / 2026-08-17 | 93269 (GCC/GCC High/DoD) | eDiscovery Premium adds built-in reports listing all legal holds across cases, with filtering and export. |
| rm40 | Microsoft Purview | [Microsoft Purview compliance portal: eDiscovery (Premium) - CMK (Customer Managed Keys) encryption support for data …](https://www.microsoft.com/microsoft-365/roadmap?id=117569) | In development | February CY2027 | 2023-03-15 / 2026-04-09 | - | Data in eDiscovery Premium review sets can be encrypted with customer-managed keys. |
| rm41 | Microsoft Copilot (Microsoft 365), Microsoft Purview | [Microsoft Purview compliance portal: Data Lifecycle Management - Retention based on Last Accessed for files …](https://www.microsoft.com/microsoft-365/roadmap?id=472030) | In development | February CY2027 | 2024-12-11 / 2026-10-13 | 565866 (GCC/GCC High/DoD) | Retention can be applied to SharePoint and OneDrive items based on when a user last opened them. |
| rm42 | Microsoft Purview | [Microsoft Purview: Insider Risk Management – Policy Recommendation Panel in IRM](https://www.microsoft.com/microsoft-365/roadmap?id=560600) | In development | February CY2027 | 2026-04-28 / 2026-09-29 | - | Insider risk management adds a panel that recommends policies where coverage is missing. |
| rm43 | Microsoft Purview | [Microsoft Purview: Data Lifecycle Management - Insights and policy recommendations on sensitive M365 data for …](https://www.microsoft.com/microsoft-365/roadmap?id=562343) | In development | February CY2027 | 2026-05-18 / 2026-09-21 | - | Purview will surface sensitive OneDrive and SharePoint data and recommend retention policies for it. |
| rm44 | Microsoft Purview | [Microsoft Purview: Endpoint Data Loss Prevention – Ability to protect files stored in the excluded …](https://www.microsoft.com/microsoft-365/roadmap?id=562992) | In development | February CY2027 | 2026-05-26 / 2026-10-28 | - | Endpoint DLP extends protection to files in commonly excluded Windows folders such as Temp and AppData. |
| rm45 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention - Collection and DLP Policies for Intune-Policy Managed Apps](https://www.microsoft.com/microsoft-365/roadmap?id=567311) | In development | February CY2027 | 2026-07-08 / 2026-10-06 | - | Purview DLP policies can protect content inside Intune MAM-protected mobile apps. |
| rm46 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention - Rule-based tagging and auto-resolution of alerts based on business …](https://www.microsoft.com/microsoft-365/roadmap?id=568371) | In development | February CY2027 | 2026-07-28 / 2026-10-12 | - | Admins can predefine rules that tag or auto-resolve predictable DLP alerts as they arrive. |
| rm47 | Microsoft Purview | [Microsoft Purview: Data Loss Prevention-Expanded inline protection for unmanaged apps in Edge for Business](https://www.microsoft.com/microsoft-365/roadmap?id=571396) | In development | February CY2027 | 2026-09-15 / 2026-11-06 | - | Inline browser protection in Edge for Business extends Purview DLP to many more unmanaged generative AI apps. |
| rm48 | Microsoft Intune | [Scope tags support for Endpoint Privilege Management reports](https://learn.microsoft.com/en-us/intune/whats-new/in-development#scope-tags-support-for-endpoint-privilege-management-reports) | In development | not stated | - (Learn) | - | EPM reports will honour scope tags, so each viewer sees only the users and devices they are allowed to manage. |
| rm49 | Microsoft Intune | [Declarative VPP app download in Company Portal](https://learn.microsoft.com/en-us/intune/whats-new/in-development#declarative-vpp-app-download-in-company-portal) | In development | not stated | - (Learn) | - | Company Portal on iPhone and iPad will install volume-purchased apps the declarative way: faster installs, overnight updates and live progress. |
| rm50 | Microsoft Intune | [View eSIM profiles and deployment status for Windows devices](https://learn.microsoft.com/en-us/intune/whats-new/in-development#view-esim-profiles-and-deployment-status-for-windows-devices-) | In development | not stated | - (Learn) | - | The Properties Catalog will show Windows eSIM profiles and whether they deployed, making follow-up on failed devices easier. |
| rm51 | Microsoft Intune | [Support for the KEYENCE OEMConfig app on Android Enterprise](https://learn.microsoft.com/en-us/intune/whats-new/in-development#support-for-the-keyence-oemconfig-app-on-android-enterprise-) | In development | not stated | - (Learn) | - | Intune's OEMConfig workflow will accept KEYENCE's app, letting admins set that vendor's device options on Android Enterprise. |
| rm52 | Microsoft Intune | [Disable MAC address randomization on macOS Wi-Fi profiles](https://learn.microsoft.com/en-us/intune/whats-new/in-development#disable-mac-address-randomization-on-macos-wi-fi-profiles) | In development | not stated | - (Learn) | - | macOS Wi-Fi profiles gain a switch to turn off randomized hardware addresses where networks depend on a fixed one. |
| rm53 | Microsoft Intune | [Just-in-time registration automatically enabled for eligible iOS/iPadOS tenants](https://learn.microsoft.com/en-us/intune/whats-new/in-development#just-in-time-registration-automatically-enabled-for-eligible-iosipados-tenants-) | In development | 2611 release | - (Learn) | - | Intune will switch on JIT registration for eligible iPhone/iPad tenants by updating their existing SSO extension policy; no admin step needed. |
| rm54 | Microsoft Intune | [Updated minimum supported version for macOS](https://learn.microsoft.com/en-us/intune/whats-new/in-development#updated-minimum-supported-version-for-macos) | In development | not stated | - (Learn) | - | Once macOS 27 ships, new enrollments need macOS 15 or later; older Macs already enrolled stay managed. |
| rm55 | Microsoft Intune | [Device query for multiple devices for app inventory on Windows](https://learn.microsoft.com/en-us/intune/whats-new/in-development#device-query-for-multiple-devices-for-app-inventory-on-windows) | In development | not stated | - (Learn) | - | Advanced Analytics will let admins run KQL over installed-app data across many Windows devices at once to find outdated or unwanted software. |
| rm56 | Microsoft Intune | [Agentic identity for the Policy Configuration Agent (public preview)](https://learn.microsoft.com/en-us/intune/whats-new/in-development#agentic-identity-for-the-policy-configuration-agent-public-preview) | In development | not stated | - (Learn) | - | The Policy Configuration Agent will move from a human account to its own Entra agent identity, set up from its Settings tab. |
| rm57 | Microsoft Intune | [New endpoint security template for Microsoft Defender for Endpoint safe deployment settings](https://learn.microsoft.com/en-us/intune/whats-new/in-development#new-endpoint-security-template-for-microsoft-defender-for-endpoint-safe-deployment-settings) | In development | not stated | - (Learn) | - | A dedicated endpoint security template will control which update channel each Windows device uses for Defender for Endpoint updates. |
| rm58 | Microsoft Intune | [Controlled Configuration for Microsoft Defender Antivirus on Windows](https://learn.microsoft.com/en-us/intune/whats-new/in-development#controlled-configuration-for-microsoft-defender-antivirus-on-windows) | In development | not stated | - (Learn) | - | Antivirus settings pushed by Intune or Defender settings management will win over Group Policy, Configuration Manager or local scripts. |
| rm59 | Microsoft Intune | [Configure Quality Update approvals and policies for Quick Machine Recovery (QMR)](https://learn.microsoft.com/en-us/intune/whats-new/in-development#configure-quality-update-approvals-and-policies-for-quick-machine-recovery-qmr) | In development | not stated | - (Learn) | - | Autopatch will let admins approve, reject or schedule specific Windows quality updates by type instead of only expediting the newest fix. |
| rm60 | Microsoft Intune | [New Linux antivirus settings for Microsoft Defender for Endpoint](https://learn.microsoft.com/en-us/intune/whats-new/in-development#new-linux-antivirus-settings-for-microsoft-defender-for-endpoint) | In development | not stated | - (Learn) | - | A Linux antivirus template will add four settings to pick update channels and timing for the Defender engine, platform and signatures. |
| rm61 | Microsoft Intune | [Mark Windows devices noncompliant when prohibited AI agents are discovered](https://learn.microsoft.com/en-us/intune/whats-new/in-development#mark-windows-devices-noncompliant-when-prohibited-ai-agents-are-discovered) | In development | not stated | - (Learn) | - | Windows compliance policy will flag devices running banned local AI agents, so Conditional Access blocks them until the agent is removed. |
| rm62 | Microsoft Intune | [Support for Intune Device control policy for devices managed by Microsoft Defender for Endpoint](https://learn.microsoft.com/en-us/intune/whats-new/in-development#support-for-intune-device-control-policy-for-devices-managed-by-microsoft-defender-for-endpoint) | In development | not stated | - (Learn) | - | Intune device control rules will also apply to Windows machines managed only through Defender for Endpoint security settings management. |
| rm63 | Microsoft Intune | [JIT registration reminder during Apple MDM push certificate renewal for iOS and iPadOS](https://learn.microsoft.com/en-us/intune/whats-new/in-development#jit-registration-reminder-during-apple-mdm-push-certificate-renewal-for-ios-and-ipados-) | In development | November 2026 release | - (Learn) | - | Renewing the Apple MDM push certificate will show a prompt to set up JIT registration ahead of web-based enrollment becoming the default. |

## Retiring and changing soon

Plan-for-change and upcoming-change notices on the Step 5 products' Learn pages (Intune In development Notices, Entra releases, Defender for Cloud release notes, Sentinel What's new). Only notices still current are listed: any whose stated change date is before 9 Nov 2026 was dropped. change_type follows the notice; change_date only where the notice states one. Full notice text is in the JSON details field (Microsoft Learn, CC BY 4.0).

| id | product | title | change_type | change_date | summary |
|---|---|---|---|---|---|
| ch01 | Microsoft Entra ID | [Plan for change - Switch from basic auth to workload identity based auth for SAP SuccessFactors provisioning integrations](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#plan-for-change---switch-from-basic-auth-to-workload-identity-based-auth-for-sap-successfactors-provisioning-integrations) | deprecation | 2026-11 | SAP is ending basic auth for SuccessFactors APIs, so Entra provisioning to and from SuccessFactors must move to workload identity. |
| ch02 | Defender for Cloud | [Upcoming deprecation of the Machines should have a vulnerability assessment solution recommendation](https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes#upcoming-deprecation-of-the-machines-should-have-a-vulnerability-assessment-solution-recommendation) | deprecation | 2026-12-14 | The single grouped vulnerability assessment recommendation for machines goes away; use the individual recommendations instead. |
| ch03 | Microsoft Sentinel | [Updated date: Microsoft Sentinel in the Azure portal to be retired March 2027](https://learn.microsoft.com/en-us/azure/sentinel/whats-new#updated-date-microsoft-sentinel-in-the-azure-portal-to-be-retired-march-2027) | retirement | 2027-03-31 | Sentinel will only be supported in the Defender portal after the Azure portal experience is retired; plan the move now. |
| ch04 | Defender for Cloud | [Classic Defender for SQL APIs retirement](https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes#classic-defender-for-sql-apis-retirement) | retirement | 2027-08-16 | The classic SQL vulnerability assessment and threat protection APIs are being shut down; migrate integrations to the supported configuration. |
| ch05 | Microsoft Intune | [Plan for Change: Intune is moving to support iOS/iPadOS 18 and later](https://learn.microsoft.com/en-us/intune/whats-new/in-development#plan-for-change-intune-is-moving-to-support-iosipados-18-and-later) | deprecation | not stated | After Apple ships iOS/iPadOS 27, Intune, Company Portal and app protection stop supporting older iPhone and iPad versions; check device reports for stragglers. |
| ch06 | Microsoft Intune | [Plan for change: Intune is moving to support macOS 15 and higher later this year](https://learn.microsoft.com/en-us/intune/whats-new/in-development#plan-for-change-intune-is-moving-to-support-macos-15-and-higher-later-this-year) | deprecation | not stated | Shortly after macOS 27 ships, new Macs on macOS 14 or older can no longer enroll; enrolled ones stay managed. |
| ch07 | Microsoft Intune | [Plan for Change: New settings for Apple AI features; Genmojis, Writing tools, Screen capture](https://learn.microsoft.com/en-us/intune/whats-new/in-development#plan-for-change-new-settings-for-apple-ai-features-genmojis-writing-tools-screen-capture) | enforcement | not stated | App protection gets separate block switches for screen capture, Genmoji and Writing Tools; tenants that restrict data sharing start with all three blocked. |
| ch08 | Microsoft Intune | [Plan for change: User alerts on iOS for when screen capture actions are blocked](https://learn.microsoft.com/en-us/intune/whats-new/in-development#plan-for-change-user-alerts-on-ios-for-when-screen-capture-actions-are-blocked) | enforcement | not stated | iOS SDK 20.3.0 will show users a message when a protected app blocks a screenshot, recording or mirroring attempt. |
| ch09 | Microsoft Intune | [Plan for Change: Blocking screen capture in the latest Intune App SDK for iOS and Intune App Wrapping Tool for iOS](https://learn.microsoft.com/en-us/intune/whats-new/in-development#plan-for-change-blocking-screen-capture-in-the-latest-intune-app-sdk-for-ios-and-intune-app-wrapping-tool-for-ios) | enforcement | not stated | Apps rebuilt with the newer iOS SDK or wrapper block screen capture whenever data sharing is restricted; an app config setting re-allows it. |
| ch10 | Microsoft Intune | [Update to the latest Intune App SDK and Intune App Wrapper for Android 15 support](https://learn.microsoft.com/en-us/intune/whats-new/in-development#update-to-the-latest-intune-app-sdk-and-intune-app-wrapper-for-android-15-support) | enforcement | not stated | Apps that target Android 15 (API 35) must move to Intune App SDK 11.0.0 or the matching wrapper build. |
| ch11 | Microsoft Entra ID | [Upcoming change - Enhanced admin authorization for Microsoft Entra Connect Sync configuration changes](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#upcoming-change---enhanced-admin-authorization-for-microsoft-entra-connect-sync-configuration-changes) | enforcement | not stated | Changing Entra Connect Sync settings, via wizard or PowerShell, will need an interactive sign-in by an authorised cloud admin. |
| ch12 | Microsoft Entra ID | [Upcoming Change - Migrate from Microsoft Entra Connect Sync to Microsoft Entra Cloud Sync](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#upcoming-change---migrate-from-microsoft-entra-connect-sync-to-microsoft-entra-cloud-sync) | enforcement | not stated | Microsoft will move tenants from Entra Connect Sync to Cloud Sync in phases, contacting each one with its own transition window. |
| ch13 | Microsoft Entra ID | [Plan for change - Update SCIM provisioning applications to use modern authentication](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new#plan-for-change---update-scim-provisioning-applications-to-use-modern-authentication) | enforcement | not stated | SCIM provisioning apps on the OAuth authorization code grant must switch to client credentials or workload identity; some gallery apps may go. |
| ch14 | Defender for Cloud | [Breaking change: Unused actions no longer included in AWS and GCP overprovisioned identity assessments](https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes#breaking-change-unused-actions-no-longer-included-in-aws-and-gcp-overprovisioned-identity-assessments) | deprecation | not stated | CIEM stops listing unused actions in AWS and GCP overprovisioned identity findings; check permission use with each cloud provider's IAM tools instead. |

## Community

Community discussion only, not Microsoft. Source: public Reddit pages. Commenters are not named.

| id | subreddit | title | upvotes | comments | date (IST) | what it is about | asset |
|---|---|---|---|---|---|---|---|
| r01 | r/sysadmin | [Windows 0-day "SignDrop" published, "this makes this vulnerability unique as it can be used to …](https://www.reddit.com/r/sysadmin/comments/1xw1mub/windows_0day_signdrop_published_this_makes_this/) | 763 | 86 | 2026-11-14 18:19 | Shares a published Windows zero-day, SignDrop, said to allow privilege escalation and switching off AV/EDR. Top comments note a registry precondition that few machines meet and ask about an out-of-band fix. | [png](assets/reddit-sysadmin-1xw1mub.png) |
| r02 | r/sysadmin | [Patch Tuesday Megathread - (November 10, 2026)](https://www.reddit.com/r/sysadmin/comments/1xsp3bk/patch_tuesday_megathread_november_10_2026/) | 128 | 350 | 2026-11-10 20:31 | Monthly Patch Tuesday megathread. Comments flag a PowerShell signature-validation change, a confirmed printing issue and jokes about patching before Friday the 13th. | [png](assets/reddit-sysadmin-1xsp3bk.png) |
| r03 | r/entra | [Now its time - my new tool 'GSAClientDiagnosticsToolkit' is out!](https://www.reddit.com/r/entra/comments/1xtr7er/now_its_time_my_new_tool/) | 52 | 12 | 2026-11-12 01:00 | Open-source PowerShell module that runs Global Secure Access client connectivity checks in one command; commenters welcome it for troubleshooting. | [png](assets/reddit-entra-1xtr7er.png) |
| r04 | r/entra | [How to make Passkey Registration default to Authenticator App Passkey](https://www.reddit.com/r/entra/comments/1xrx9vz/how_to_make_passkey_registration_default_to/) | 33 | 16 | 2026-11-09 22:36 | Admin asks how to make passkey registration default to the Authenticator app; replies point to passkey profiles with attestation, while noting the Windows prompt itself cannot be changed. | [png](assets/reddit-entra-1xrx9vz.png) |
| r05 | r/entra | [A new version of the Microsoft Entra private network connector is out! (1.5.5130.0)](https://www.reddit.com/r/entra/comments/1xth1u4/a_new_version_of_the_microsoft_entra_private/) | 33 | 6 | 2026-11-11 18:26 | Post on a new Entra private network connector release with stability, DNS and logging changes; replies note it auto-updates. | [png](assets/reddit-entra-1xth1u4.png) |

## Themes

1. **Securing AI agents moves to the front**: Most official output this week was about governing AI agents: Entra Agent ID, egress limits and traces in Foundry, Purview labels enforced on agents at runtime, Defender blocking malicious agent tool calls, MCP server governance, and a 19-part Zero Trust AI pillar video series, all ahead of Ignite (17-20 Nov).
   Items: x33, x31, x28, x26, x25, x22, x19, x13, x08, x06, x03, x01, x27, x23, v02, v03, v04, v05, v06, v07, v08, v09, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v01, b09
2. **Active campaigns: ScreenConnect/SCKit, GSocket, Storm-3350, outage-themed phishing**: Microsoft Threat Intelligence covered four live threats: SCKit spreading through ScreenConnect at MSPs, GSocket backdoors that keep access to Linux servers after patching, the Brazil-focused Storm-3350 cluster abusing password reset, and phishing that reused the 12 Nov M365 outage incident number.
   Items: t01, t02, t03, t04, t05, t06
3. **AI model supply chain and AI-found vulnerabilities**: Microsoft research showed that models can be backdoored through a few neuron edits or poisoned fine-tuning, and that its own agentic tools (MDASH/Hyenas) found Rust standard-library and Linux kernel bugs, with 33 kernel CVEs assigned.
   Items: b02, b08, b01, b03, x24, x14, x17, x05
4. **November Patch Tuesday: one exploited Outlook bug, 64 Critical**: The November release has 1,098 Microsoft-assigned CVEs. One is exploited (an Outlook spoofing flaw that leaks NTLM hashes), and the Critical RCEs in LDAP, Windows Search, Exchange and AD DS stand out. On Reddit, practitioners discussed the release and a separately published Windows zero-day, SignDrop.
   Items: CVE-2026-124194, CVE-2026-119958, CVE-2026-116928, CVE-2026-118207, CVE-2026-118146, CVE-2026-109469, x10, x11, v23, r02, r01
5. **Identity, data and endpoint hardening (Entra, Purview, Intune, Azure Backup)**: Day-to-day controls also got attention: Entra Private Access and Internet Access in place of VPNs, tenant configuration snapshots, Connect Sync anchor migration, Purview classification and DSPM, Intune compliance with Autopatch, Edge extension control, and Azure Backup cyber recovery. Community threads covered passkey rollout and GSA tooling.
   Items: x32, x20, x15, x07, x04, x02, x18, x16, x12, x09, x30, x29, x21, x35, x34, b11, b07, b04, b05, b06, b10, v25, v26, v28, v29, v22, v24, v21, r03, r04, r05

## Gaps

- X: @MicrosoftEntra does not exist on X (lookup returned not found), so no Entra-branded X posts were collected.
- X: the practitioner search (Defender/Sentinel/Entra/Purview/Security Copilot with min_faves:100, also tried as min_likes:100) returned unfiltered results because the connector ignored the like-count operator. None of 50 sampled posts had 100 or more likes, so no practitioner posts are listed.
- X screenshots: on 18 Nov I retried the direct x.com/<handle>/status/<id> URL for all 39 posts (35 X items and 4 threat items) in headless Chromium, not signed in. Every one returned HTTP 403. Each post was then captured from the public embed (platform.twitter.com/embed/Tweet.html?id=<id>), cropped to 600px wide and at most 900px tall. The embed shows only the post with a 'Read N replies' link, so no screenshot shows replies; seeing them needs a signed-in session, which I don't use. 23 of the 39 posts are taller than 900px in the embed, so their screenshots are cut at 900px, usually just above or through the like/reply bar. The 'what replies say' text still comes from X connector data.
- X replies: replies were re-read on 18 Nov with one query per conversation (replacing the earlier batched MSFTMechanics queries), first page only (up to 25 replies per post). Self-replies from the posting account are excluded. Replies posted after the read are not counted.
- Threat intelligence: no in-window items from Security Insider (latest is the 1 Oct 2026 Digital Defense Report piece), the Microsoft Threat Intelligence podcast (latest episode 5 Nov 2026, 'PHP2Shell') or the MSRC blog. The MSRC Advisories page (msrc.microsoft.com/update-guide/advisory) returned 'The request is blocked' to the headless browser on 18 Nov, so it could not be re-read; the November CVRF (revised 17 Nov) has no ADV entries. The Security Blog posts on ARTEX abuse (6 Nov) and agentic-AI secret abuse (5 Nov) fall before the window.
- Threat fields: as instructed, threat items now carry only cves beyond the common fields (actor, aliases, sectors, geo/region and ATT&CK techniques have been removed). SCKit (t04) and GSocket (t02) cite one CVE each; the four X-sourced threat items cite none.
- X: non-security posts from @Microsoft were excluded (Ignite promotion, F1, community grants, a customer story), as were its two posts on the 12-13 Nov M365 outage (an availability incident, not a security item). The outage is covered here only through the @MsftSecIntel phishing post.
- YouTube: the RSS feeds (feeds/videos.xml) worked on 18 Nov but list only each channel's latest 15 uploads, which does not reach back to 9 Nov for the busier channels, and the Microsoft 365 feed is empty. Videos were therefore enumerated from each channel's videos/shorts/live tabs with yt-dlp, with date, views and description read from each watch page; the RSS lists were used as a cross-check (every in-window RSS video was found).
- YouTube: the 'Microsoft 365' channel (@Microsoft365, UCFRTnnjxixyjrGPe2OpdSHw) has no videos and its description sends viewers to @Microsoft.Copilot. It was not substituted.
- YouTube: the watch page of one Microsoft Azure live stream (uydwDk91Y9Y) could not be read after five attempts. It sits among July-September uploads in the live tab, so it is very likely outside the window, but this is unconfirmed. Ten other unreadable videos were dated from RSS (all outside the window except pZzzoluFlt0, which was read on retry).
- YouTube: non-security videos from Microsoft, Microsoft Developer and Microsoft Mechanics were excluded, including Foundry and agent-building tutorials, a Mechanics Foundry short and an Elevate customer story.
- YouTube descriptions: the 'description' field holds the first prose paragraph of each video's YouTube description exactly as written, skipping paragraphs that are only hashtags, links, chapter timestamps or short list headers. Two paragraphs were longer than 60 words and are cut after the 60th word with nothing added: 'Build agents you can trust...' (4vCbQMUVV-I) and the Azure Backup Bulk Restore video (caW13LqRrQw).
- GIFs: none produced. Retried on 18 Nov for the top video (Copilot harness): in headless Chromium the YouTube embed player stays paused at 0 seconds (readyState 0), so the recording has no video frames; yt-dlp downloads remain blocked by YouTube's bot check. The top 3 videos by views (Copilot harness, November release summary, Azure Backup cyber recovery) have no GIF.
- YouTube thumbnails: video assets are the official i.ytimg.com thumbnails, re-downloaded on 18 Nov. maxresdefault.jpg returned HTTP 404 for 23 of 29 videos, so hqdefault.jpg (480x360) is used for them: nflmD2D9T4k, B_Ecumz451U, RkTaet71ZaU, P34pqLKWH88, _Ja51-0LVy0, oUBW4DYVnvA, TrskCxNNgiE, TAO6uk2ksMU, 9ZhoV8dzZBc, tCgBYrQqI-8, 6fKLT6O4NLE, CghlABVbgRY, g0aKWuu_ktY, 8i4C3zs_a6Y, JbYr5ijo9Hc, wTVTWFVBV48, E149ztL7OwY, pZzzoluFlt0, 4Z1yruxmXVE, vkEXYb2gdq4, xvzmzbE58F4, caW13LqRrQw, cKqeTw5mBfM. The other 6 use maxresdefault (1280x720).
- MSRC blog (microsoft.com/en-us/msrc/blog): the latest post is from October 2026 ('Using risk cohorts to prioritize security updates'), so nothing falls in the window.
- CVEs: only the 1,098 CVEs with Microsoft as CNA are listed. The 668 third-party CVEs in the same CVRF document (Chrome 291; VulnCheck 86, PostgreSQL 55, GitHub 50, Linux 48, Red Hat 33 and 26 other CNAs; 2 carry no CNA note) are omitted. CVSS is null for 9 CVEs with no published score. The CVRF was revised on 17 Nov, adding two SharePoint CVEs dated 16 Nov (CVE-2026-124222, CVE-2026-124223); they are listed because the CVE section covers the whole calendar month.
- Blogs: Tech Community RSS returns only the latest 20 items per board. The Defender for Endpoint board (MicrosoftDefenderATPBlog) and the old Security Copilot board id returned empty feeds; the active Security Copilot board (securitycopilotblog) had no posts in the window.
- Blogs: two Tech Community posts showed in-window RSS dates but were published earlier and only updated in the window, so they were excluded: 'Microsoft Purview Referential Architecture Diagrams' (published 13 Apr 2026) and 'AI is changing access: Catch Microsoft Entra at Ignite 2026' (published 5 Nov 2026). 'Capping tempdb in SQL Server 2025' (Core Infrastructure and Security) was excluded as not security-related.
- Learn (Defender Threat Intelligence): no Learn What's new page found. Tried learn.microsoft.com/en-us/defender/threat-intelligence/whats-new and /whats-new-in-microsoft-defender-threat-intelligence (both 404), a Learn search for 'what's new Microsoft Defender Threat Intelligence' and 'Defender Threat Intelligence documentation' (no MDTI docs among results), and the toc.json for /defender/threat-intelligence and /defender-threat-intelligence (none exists).
- Learn (Azure network security (Firewall, WAF, DDoS)): Azure Firewall's 'Preview features' page is now used as its release notes (4 entries). The page lists current previews with no release dates, so these 4 items carry the capture day 2026-11-18 with date_precision 'captured' and in_window false. Web Application Firewall and DDoS Protection have no What's new or preview page on Learn (/azure/web-application-firewall/whats-new, /waf-whats-new, /azure/ddos-protection/ddos-protection-whats-new and /whats-new all return 404).
- Learn (Perception): Perception docs exist (learn.microsoft.com/en-us/security/agentic-security/, 'What is Perception?'), but their toc.json has no What's new or release-notes page. /security/agentic-security/whats-new and /release-notes are 404.
- Coming soon (Roadmap): mrcwall.com's public feed (8,773 entries, re-fetched 18 Nov; the 17 entries new since the earlier fetch are Dynamics, Azure infrastructure and Message Center items, none security) was used only to discover items; it was not used for any status or date. Every Roadmap item is confirmed against the official Microsoft 365 Roadmap API (microsoft.com/releasecommunications/api/v1/m365, 2,374 entries, re-fetched 18 Nov; the selection matched the earlier run), and title, status, rollout, added_date (API 'created') and last_modified (API 'modified') are copied from it. Inclusion is rollout-only: 47 Roadmap items have a published rollout month from Nov 2026 to Feb 2027 and are not Launched. added_date/last_modified are informational. Dropped under this rule: 7 items that qualified only through an edit date in 9-15 Nov (571157, 569363, 568935, 562016, 561032, 560820, 422501) and 1 Launched item with a November 2026 rollout (570445). One cancelled item stays out.
- Coming soon (US Government IDs): US Government Roadmap IDs are merged into their worldwide twin (worldwide ID is roadmap_id and url; the government ID and its cloud labels go in also_ids). Twins were matched on the normalised title, on an identical description (566324 -> 392839), or by hand where only the title prefix differs (562345 -> 561208). 13 of the 47 listed items carry one also_id each. Dropped: 6 qualifying items that exist only for US Government clouds (560075, 558859, 528978, 401127, 336046, 410247), and US Government IDs whose worldwide version has already shipped, since this feed is for worldwide commercial customers (572676, 575283, 573701, 571309, 567010, 561036, 386901, plus the government twins of the dropped edit-only items).
- Coming soon (coverage re-check): the Roadmap API was searched by product tag (Microsoft Defender, Microsoft 365 Defender, Microsoft Defender for Office 365, Microsoft Entra, Microsoft Intune, Microsoft Purview, Exchange) and by title prefix (Microsoft Defender, Defender for, Defender XDR, Microsoft Sentinel, Security Copilot, Copilot for Security, Microsoft Intune, Microsoft Entra, Exchange Online Protection/EOP). The Roadmap has no Sentinel or Security Copilot tag or titled entry, no Exchange Online Protection entry, 15 Defender entries (14 tagged Defender for Office 365, 1 Defender for Identity) and 23 Intune entries, but none has a rollout from Nov 2026 to Feb 2027 or an official date in the window (latest Defender rollout is Sep 2026; Intune rollouts run from Oct 2025 to Aug 2026). Entra has 2 qualifying entries. Description-only mentions (e.g. Copilot or Teams items that mention Purview or Defender) were not counted. So the Roadmap side stays Purview-heavy: 45 Purview, 2 Entra.
- Coming soon (Learn in development): Microsoft Learn's 'In development for Microsoft Intune' page (learn.microsoft.com/en-us/intune/whats-new/in-development; the intune-service/fundamentals URL redirects there) gives 16 feature entries, all added with source 'Microsoft Learn: In development for Microsoft Intune', status 'In development' and url = page + anchor. The page gives no Roadmap ID, MC ID or per-entry added/modified date, so those are null. Only 2 entries state a release ('Beginning with the November 2026 release'; 'with the 2611 release'), copied as rollout; the other 14 state no month and are included because the page itself says they are in development and not yet released. The page's 'Notices' section (plan-for-change and support notices, several from 2024) was not treated as in-development features. No equivalent page was found for Defender, Entra, Purview or Sentinel: Defender for Cloud's upcoming-changes URL redirects to its release notes; Defender XDR, Defender for Office 365, Entra and Sentinel guesses return 404; Learn search found none; Purview's 'What's planned' section only links to the M365 Roadmap and a PDF.
- Retiring and changing soon (sources): 45 notices were captured: the Notices section of 'In development for Microsoft Intune' (14; the same 14 appear word for word under Notices on Intune's What's new page, so only the In development anchors are used), Entra releases entries titled 'Plan for change' or 'Upcoming change' (8), Defender for Cloud release-note entries for upcoming billing, deprecation, retirement or breaking changes (4), Sentinel retirement and call-to-action notices (3), and one Security Exposure Management deprecation (1). Defender XDR, Defender for Endpoint, Office 365, Identity, Cloud Apps, Purview and Security Copilot What's new pages have no plan-for-change or upcoming-change notice (searched headings and body text for plan for change, upcoming change, deprecation, retire, breaking change, end of support). Defender for Cloud's old 'upcoming changes' page now redirects to its release notes. Learn pages are the copies fetched on 17 Nov (Intune In development on 18 Nov). One Intune What's new release entry ('Setup Assistant legacy deprecation', week of 26 Oct, support already ended) was not treated as a notice.
- Retiring and changing soon (still-current rule): a notice is kept unless its stated change date is before the window start (9 Nov 2026; a month date counts as the whole month). 16 were dropped: Intune iOS SDK warnings (late June 2026), Company Portal/SDK update (2026-01-19), new network endpoints (2025-12-02), Windows 10 support (2025-10-14), Play strong integrity (2026-10-31), old Autopilot connector (June 2025), SCEP/PKCS strong mapping (2025-02-11), Android 10 (October 2024); Entra iOS passkey restore (August 2026), Agent Registry (2026-05-01), hard-match block (2026-06-01), Authenticator jailbreak detection (February 2026); Defender for Servers billing (2026-11-01); Sentinel repositories APIs (2026-06-01) and the superseded July 2026 Azure-portal retirement; Exposure Management AzureADConnectServer role (December 2025). 14 are kept, 10 of them with no stated change date. change_type: deprecation or retirement where the notice says so or where support or a feature is removed; 'default change' was not used because no kept notice says a default is changing; other mandatory behaviour changes (new blocks, sign-in requirements, forced migrations, required SDK updates) are tagged enforcement. date is the notice's own date where it states one (Defender for Cloud entries), else null.
- Dates on roadmap and change items: every item now has a date and a date_precision (day, week, month or captured). Change items use the first day of the Learn section month they sit under (month); Intune notices sit under 'Notices', which has no month, so they use the stated change_date if any, else the capture day. Defender for Cloud notices also follow the section-month rule, even where the notice states its own day. Roadmap items use Microsoft's published added_date (day); Learn in-development items have none, so they use the first day of a stated rollout month ('November 2026 release' -> 2026-11-01, month), else the capture day. 'captured' dates (2026-11-18) are the day this run captured the page, not dates Microsoft published. Video, X, threat, blog, Reddit and CVE items carry date_precision 'day'.
- Change dates: change_date/change_type are set only where Microsoft writes the date. b07: Purview Data Governance support ends 'Nov. 12, 2027' (retirement). l07: the iOS passkey restore flow changes 'Starting August 2026'; the Learn text does not say a default is changing ('users will see an improved restore experience'), so it is tagged enforcement (month precision). The Defender for Cloud Apps SaaS-accounts entry (15 Oct 2026, default change) is no longer under that page's latest heading, which is now November 2026, so it dropped out. No Learn entry under a latest heading has status Deprecation or Retirement, no Roadmap description in scope states an end or enforcement date, and the Intune in-development entries name only releases ('2611', 'November 2026 release', 'after Apple releases macOS 27'), not dates. Every other item carries change_date and change_type as null.
- Key dates: covers 16 Nov 2026 to 14 Jan 2027. It lists two Patch Tuesdays (8 Dec 2026 and 12 Jan 2027, computed as the second Tuesday) and the two dated events stated in this week's items: Security Pre-Day on 16 Nov and Ignite 17-20 Nov. The Purview Data Governance end date (12 Nov 2027) is outside the 60 days. Added: 14 Dec 2026, deprecation of the Defender for Cloud 'Machines should have a vulnerability assessment solution' recommendation (ch02). SAP SuccessFactors basic auth ends 'by November 2026' (month only), so it is not listed as a key date.
- Learn: no entry under any latest heading has a date inside 9-15 Nov 2026. Only two entries give their own day (Defender for Cloud 4 Nov, Security Exposure Management 28 Oct), both before the window. Every other Learn item is dated to the first day of its section heading (date_precision month, or week for Intune's 'Week of November 16, 2026', i.e. 16-22 Nov), except the 4 Azure Firewall preview items (captured). Rule: in_window is true only for a day-precision date in 9-15 Nov 2026 IST, or a week whose Monday-Sunday is exactly 9-15 Nov; month-precision and captured items are always false. Since the previous run, Defender XDR, Defender for Cloud Apps and Sentinel moved to new November 2026 headings, Defender for Endpoint and Intune added entries, and a Windows security What's new page appeared (November 2026 (Ignite 2026), 20 entries). Several latest headings are still months old (Entra June 2026, Security Copilot April 2026).
- Reddit: the public .json endpoints and Reddit search returned HTTP 403 from the box. On 18 Nov the top-of-week pages cover 11-18 Nov, so in-window candidates were read from the rendered top-of-week and top-of-month pages (each loads at most about 50 posts), and the five chosen threads were re-read one by one for current upvotes and comments. r/AzureSentinel showed no posts on either page. The same five threads lead.
- Reddit screenshots: old.reddit.com sends all 5 threads to its login page, so each thread was captured from the public embed (embed.reddit.com/r/<sub>/comments/<id>/, headless, not signed in) at 600px wide and at most 900px tall. The first request for r/sysadmin 1xw1mub returned 403 ('blocked by network security'), and a retry 20 seconds later succeeded. The embed shows the title, a shortened body with 'Read more', the original poster's name and the vote count, but no comments ('View N comments' only). So the top comments are not in any screenshot; the 'what it is about' text comes from the earlier read of the rendered thread pages.
- Reddit: the many r/sysadmin threads on the 12-13 Nov M365 outage (several with 400-600 upvotes) were treated as availability discussion, not Microsoft security, and are not in the top 5.
- Run: this is a one-off end-to-end re-run of W46 on 18 Nov 2026 with every source re-fetched. Counts that changed against the previous W46 run: CVEs 1,096 -> 1,098 (CVRF revised 17 Nov) and Learn 35 -> 66 (Windows security page +20, Azure Firewall preview page +4, new or changed headings on Defender XDR, Defender for Endpoint, Defender for Cloud Apps, Sentinel and Intune). Engagement numbers (views, likes, replies, upvotes) are as read on 18 Nov.
