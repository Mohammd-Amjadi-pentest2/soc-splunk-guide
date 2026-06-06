# 🛡️ SOC Splunk Reference Guide

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-00e5c3?style=flat-square&logo=github)](https://mohammd-amjadi-pentest2.github.io/detection-as-code-pipeline/)
[![Scenarios](https://img.shields.io/badge/Scenarios-10-blue?style=flat-square)](https://mohammd-amjadi-pentest2.github.io/detection-as-code-pipeline/)
[![SPL Queries](https://img.shields.io/badge/SPL%20Queries-20%2B-green?style=flat-square)](https://mohammd-amjadi-pentest2.github.io/detection-as-code-pipeline/)
[![MITRE ATT&CK](https://img.shields.io/badge/MITRE%20ATT%26CK-Mapped-red?style=flat-square)](https://attack.mitre.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

A comprehensive threat detection playbook for SOC analysts working with **Splunk Enterprise Security**. Covers 10 core attack scenarios with production-ready SPL queries, operational runbooks, and full MITRE ATT&CK mapping.

---

## 🌐 Live Site

**[https://mohammd-amjadi-pentest2.github.io/detection-as-code-pipeline/](https://mohammd-amjadi-pentest2.github.io/detection-as-code-pipeline/)**

---

## ✨ Features

| Feature | Description |
|---|---|
| **10 Core Scenarios** | Brute Force, DNS, Lateral Movement, Exfiltration, Triage, UEBA, PowerShell, IOC Hunting, Persistence, Reporting |
| **Copy SPL Queries** | One-click copy to clipboard for every SPL query |
| **3-Layer Structure** | UNDERSTAND → DETECT → ACT for each scenario |
| **Operational Runbooks** | Step-by-step response checklists with interactive checkboxes |
| **TP/FP Decision Trees** | Structured logic for alert triage decisions |
| **MITRE ATT&CK Links** | Click any technique ID to open it directly in ATT&CK Navigator |
| **Reading Progress Bar** | Track where you are in each scenario |
| **Dark / Light Mode** | Toggle with button or persisted via localStorage |
| **Mobile Responsive** | Full sidebar navigation on desktop, collapsible on mobile |
| **Keyboard Shortcuts** | `Ctrl+K` to search, `←/→` to navigate scenarios |
| **Print / Export** | Print any scenario to PDF with clean formatting |

---

## 📋 Scenarios

| # | Scenario | Severity | Key EventIDs / SPL |
|---|---|---|---|
| 01 | Authentication & Brute Force | 🔴 CRITICAL | EventID 4625, 4740 |
| 02 | DNS Tunneling & DGA | 🔴 CRITICAL | DNS Logs, NXDOMAIN |
| 03 | Lateral Movement | 🔴 CRITICAL | EventID 4624, 7045, Logon_Type=10 |
| 04 | Data Exfiltration | 🔴 CRITICAL | Firewall/Proxy bytes_out |
| 05 | Alert Triage in Splunk ES | 🔴 CRITICAL | index=notable, urgency |
| 06 | User Behavior Analytics | 🟠 HIGH | strftime(), dc() baseline |
| 07 | PowerShell & LOLBins | 🟠 HIGH | Sysmon EventID 1, -EncodedCommand |
| 08 | IOC Hunting | 🟠 HIGH | earliest=-90d, SHA256 |
| 09 | Persistence Mechanisms | 🟠 HIGH | Sysmon EventID 13, EventID 4698 |
| 10 | Incident Documentation | 🟡 MEDIUM | Timeline SPL, index=notable stats |

---

## 🚀 Quick Start (GitHub Pages)

### 1. Fork or Clone this repository

```bash
git clone https://github.com/Mohammd-Amjadi-pentest2/detection-as-code-pipeline.git
cd detection-as-code-pipeline
```

### 2. Update references

Replace all occurrences of `USERNAME` with your actual GitHub username:

```bash
# On Linux/macOS
find . -name "*.html" -exec sed -i 's/USERNAME/Mohammd-Amjadi-pentest2/g' {} +
sed -i 's/USERNAME/Mohammd-Amjadi-pentest2/g' README.md
```

### 3. Push to GitHub

```bash
git add .
git commit -m "Initial commit — SOC Splunk Reference Guide"
git push origin main
```

### 4. Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select **main** branch and **/ (root)** folder
4. Click **Save**
5. Your site will be live at `https://YOUR_mohammd-amjadi-pentest2.github.io/detection-as-code-pipeline/` in ~60 seconds

---

## 📁 Project Structure

```
soc-splunk-guide/
├── index.html                     ← Main dashboard with all 10 scenario cards
├── README.md
├── LICENSE
├── assets/
│   ├── css/
│   │   └── style.css              ← Global styles (dark theme, components)
│   └── js/
│       └── main.js                ← Copy SPL, search, theme toggle, runbook checkboxes
└── scenarios/
    ├── 01-brute-force.html        ← CRITICAL: Brute Force & Password Spraying
    ├── 02-dns-analysis.html       ← CRITICAL: DNS Tunneling & DGA
    ├── 03-lateral-movement.html   ← CRITICAL: SMB/RDP/WMI/PsExec
    ├── 04-data-exfiltration.html  ← CRITICAL: Volume Anomaly & Protocol Abuse
    ├── 05-alert-triage.html       ← CRITICAL: Splunk ES Notable Events
    ├── 06-ueba.html               ← HIGH: Insider Threat / UEBA
    ├── 07-powershell-lolbins.html ← HIGH: PowerShell & LOLBins
    ├── 08-ioc-hunting.html        ← HIGH: Threat Intel IOC Hunting
    ├── 09-persistence.html        ← HIGH: Registry / Scheduled Tasks
    └── 10-incident-reporting.html ← MEDIUM: Documentation & Reporting
```

---

## ⚙️ Customization

### Update indexes

All SPL queries use `index=*` by default. Replace with your production indexes:

```bash
# Replace index=* with your actual index names
find scenarios/ -name "*.html" | xargs sed -i 's/index=\*/index=windows,sysmon,dns/g'
```

### Update GitHub URL

```bash
find . -name "*.html" | xargs sed -i 's|https://github.com/Mohammd-Amjadi-pentest2/detection-as-code-pipeline|https://github.com/Mohammd-Amjadi-pentest2/detection-as-code-pipeline|g'
```

---

## 🧰 Technology Stack

- **Pure HTML/CSS/JS** — no build tools, no npm, no dependencies
- **Google Fonts** — Syne (display) + JetBrains Mono (code) + DM Sans (body)
- **GitHub Pages** — free static hosting directly from this repository
- **Zero backend** — works offline after first load

---

## 📚 References

- [MITRE ATT&CK Framework](https://attack.mitre.org/)
- [Splunk Documentation](https://docs.splunk.com/)
- [Splunk Enterprise Security](https://www.splunk.com/en_us/products/enterprise-security.html)
- [Sysmon Configuration](https://github.com/SwiftOnSecurity/sysmon-config)
- [CISA Alerts](https://www.cisa.gov/news-events/cybersecurity-advisories)

---

## 📄 License

MIT License — free to use, modify, and distribute. See [LICENSE](LICENSE) for details.

---

> **⚠️ Disclaimer:** All SPL queries are provided for educational and defensive security purposes only.
> Replace `index=*` with your actual production indexes before deploying.
> Always test queries in a non-production environment first.
