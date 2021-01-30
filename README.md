# Demo Project Repo

## Getting Started

```powershell
# Run a sample command
Invoke-SpecialCommand -Parameter1 Value1 -Parameter2 Value2
```

## Objectives

- Automatic mirroring between Azure DevOps and Github after a successful release
- Automatic release creation in GitHub after a successful release
- Automatic generation of Release Notes during Pull Request build
    - Publish Release Notes to all relevant locations:
        - Azure DevOps Wiki
        - Release Notes Teams App
    - Communicate the coming change to relevant stakeholders
        - Send Adaptive Card Message to MSTeams Release Notes channel 
- Automatic Visual Testing of a sample web application (Create React App)

## Tools & Technologies Used

- Development & Automation
    - VSCode
    - Windows PowerShell
    - Azure DevOps Repo (private)
    - GitHub Repo (public)
    - Azure DevOps Boards
    - Azure DevOps Pipelines
    - Terraform (infrastructure automation)
    - Posh-Acme (certification creation)
- Cloud
    - Azure Active Directory (authentication)
    - Azure Key Vault (secret storage)
    - Azure Storage Account (file/blob storage)
    - Azure Function Application (web host)
    - Azure App Insights (application monitoring)
- Web
    - React
    - MS Teams Tab (personal)
    - Adaptive Cards (MSTeams messages)
- Testing 
    - Jest
    - Puppeteer
