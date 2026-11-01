---
title: "Discovery Analysis Automation"
client: "US Law Firm"
kind: "Client Work"
summary: "Built an end-to-end automation system for a law firm that eliminated the manual, hours-long process of analyzing discovery documents (questionnaires, Interrogatories, Requests for Admission, and Requests for Production). When opposing parties returned completed PDFs, the system automatically extracted and analyzed responses — flagging answered, unanswered, and misleadingly answered questions along with disclosed information — and generated a structured Excel report, fully integrated into the firm’s existing SharePoint workflow. In production for 2+ years."
image: "/project-images/discovery-analysis-automation.png"
imageAlt: "Abstract legal document analysis illustration"
tags: ["LegalTech", "Document Intelligence", "Automation"]
stack: ["AI/ML: OpenAI APIs (fine-tuned models + base models) for document analysis and response classification", "Automation: Microsoft Power Automate (two flows — ingestion and output delivery)", "Infrastructure: Microsoft Azure (VM-based processing pipeline)", "Storage/Integration: SharePoint (source and destination for documents)", "Output: Automated Excel report generation"]
outcomes:
  - "Reduced a multi-hour manual analysis task (per document) down to an automated process requiring no paralegal or attorney time"
  - "Freed up paralegals and lawyers to focus on higher-value legal work instead of manually reading and tabulating discovery responses"
  - "Zero-touch workflow: documents are ingested, analyzed, and delivered back without any manual intervention"
  - "In continuous production use for 2 years, demonstrating reliability and sustained value to the firm"
---

A workflow that ingests discovery material, normalizes and extracts text, and produces structured outputs tailored for legal review.

- Document Ingestion — A Power Automate flow monitors SharePoint for incoming completed discovery PDFs (questionnaires, ROGs, RFAs, RFPs) and automatically triggers the pipeline the moment a new file lands.
- AI-Powered Analysis — The PDF is sent to an Azure VM, where fine-tuned and base OpenAI models analyze the document to identify: which questions were answered, which were answered evasively or misleadingly, and what specific information was disclosed.
- Report Generation — Analysis results are structured and compiled into an Excel sheet matching the format paralegals previously built by hand.
- Delivery — A second Power Automate flow uploads the completed Excel analysis back to SharePoint, making it immediately available to the legal team.
- Result — A process that previously consumed hours per document per day now runs automatically, with no staff time required beyond reviewing the final output.