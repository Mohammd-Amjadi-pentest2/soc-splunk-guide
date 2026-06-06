# 🛡️ SOC Splunk Reference Guide

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-00e5c3?style=flat-square&logo=github)](https://mohammd-amjadi-pentest2.github.io/soc-splunk-guide/)
[![Scenarios](https://img.shields.io/badge/Scenarios-10-blue?style=flat-square)](https://mohammd-amjadi-pentest2.github.io/soc-splunk-guide/)
[![SPL Queries](https://img.shields.io/badge/SPL%20Queries-20%2B-green?style=flat-square)](https://mohammd-amjadi-pentest2.github.io/soc-splunk-guide/)
[![MITRE ATT&CK](https://img.shields.io/badge/MITRE%20ATT%26CK-Mapped-red?style=flat-square)](https://attack.mitre.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

A comprehensive threat detection playbook for SOC analysts working with **Splunk Enterprise Security**.
Covers 10 core attack scenarios with production-ready SPL queries, operational runbooks, and full MITRE ATT&CK mapping.

---

## 🌐 Live Site

**[https://mohammd-amjadi-pentest2.github.io/soc-splunk-guide/](https://mohammd-amjadi-pentest2.github.io/soc-splunk-guide/)**

---

## ✨ Features

| Feature | Description |
|---|---|
| **10 Core Scenarios** | Brute Force, DNS, Lateral Movement, Exfiltration, Triage, UEBA, PowerShell, IOC Hunting, Persistence, Reporting |
| **Copy SPL Queries** | One-click copy to clipboard for every SPL query |
| **3-Layer Structure** | UNDERSTAND → DETECT → ACT for each scenario |
| **Operational Runbooks** | Step-by-step response checklists with interactive checkboxes |
| **TP/FP Decision Trees** | Structured logic for alert triage decisions |
| **MITRE ATT&CK Links** | Click any technique ID to open directly in ATT&CK |
| **Dark / Light Mode** | Toggle with persistent localStorage |
| **Mobile Responsive** | Full sidebar on desktop, collapsible on mobile |
| **Keyboard Shortcuts** | `Ctrl+K` to search, `←/→` to navigate scenarios |
| **Print / Export** | Clean PDF export for any scenario |

---

## 📋 Scenarios

| # | Scenario | Severity | Key Detection |
|---|---|---|---|
| 01 | Authentication & Brute Force | 🔴 CRITICAL | EventID 4625, 4740 |
| 02 | DNS Tunneling & DGA | 🔴 CRITICAL | NXDOMAIN rate, subdomain length |
| 03 | Lateral Movement | 🔴 CRITICAL | EventID 4624 Logon_Type=10, 7045 |
| 04 | Data Exfiltration | 🔴 CRITICAL | bytes_out anomaly, unapproved upload |
| 05 | Alert Triage in Splunk ES | 🔴 CRITICAL | index=notable, urgency scoring |
| 06 | User Behavior Analytics | 🟠 HIGH | After-hours, impossible travel |
| 07 | PowerShell & LOLBins | 🟠 HIGH | Sysmon EventID 1, risk scoring |
| 08 | IOC Hunting | 🟠 HIGH | 90-day lookback, SHA256 hash |
| 09 | Persistence Mechanisms | 🟠 HIGH | Sysmon EventID 13, EventID 4698 |
| 10 | Incident Documentation | 🟡 MEDIUM | Timeline SPL, executive reporting |

---

## 📁 Repository Structure

```
soc-splunk-guide/
├── index.html                     ← Main dashboard
├── README.md
├── LICENSE
├── assets/
│   ├── css/style.css              ← Dark cybersecurity theme
│   └── js/main.js                 ← Copy SPL, search, dark mode
└── scenarios/
    ├── 01-brute-force.html
    ├── 02-dns-analysis.html
    ├── 03-lateral-movement.html
    ├── 04-data-exfiltration.html
    ├── 05-alert-triage.html
    ├── 06-ueba.html
    ├── 07-powershell-lolbins.html
    ├── 08-ioc-hunting.html
    ├── 09-persistence.html
    └── 10-incident-reporting.html
```

---

## 📚 References

- [MITRE ATT&CK Framework](https://attack.mitre.org/)
- [Splunk Documentation](https://docs.splunk.com/)
- [Sysmon Configuration](https://github.com/SwiftOnSecurity/sysmon-config)
- [CISA Alerts](https://www.cisa.gov/news-events/cybersecurity-advisories)

---

## 📄 License

MIT License — free to use, modify, and distribute.

> **⚠️ Disclaimer:** All SPL queries are for educational and defensive security purposes only.
> Replace `index=*` with your production indexes before deploying.
