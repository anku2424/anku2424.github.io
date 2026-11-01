---
title: "Inbound Voice Agent for Patient Questions"
client: "US Healthcare Testing Firm"
kind: "Client Work"
summary: "Built a custom inbound voice AI agent for a healthcare testing company, handling 10,000+ calls per month from patients, doctors, attorneys, funding companies, and unknown callers. Rather than relying on third-party voice AI platforms like Vapi or Bland, the system was built directly on realtime LLM APIs using the Pipecat framework, enabling dynamic switching between OpenAI Realtime, xAI Realtime, and Gemini Realtime models. The agent answered caller questions by pulling from both a knowledge base and the company’s live ERP database, with strict identity verification to protect sensitive patient data — all self-hosted on AWS to dramatically cut per-call costs at scale."
image: "/project-images/inbound-voice-agent-patient-support.png"
imageAlt: "Abstract inbound voice support illustration"
tags: ["Voice AI", "Call Center", "RAG"]
stack: ["Voice Orchestration: Pipecat framework",
"Realtime AI Models: OpenAI Realtime, xAI (Grok) Realtime, Gemini Realtime — dynamically switchable",
"Data Sources: Internal knowledge base + ERP database integration",
"Identity Verification: Custom caller authentication (DOB, zip code, associated patient phone number)",
"Infrastructure: AWS VM (self-hosted, no third-party voice platform)"]
outcomes:
  - "Avoided the per-minute/per-call markups of platforms like Vapi and Bland by integrating directly with realtime model APIs, delivering major cost savings at high call volume"
  - "Protected sensitive patient data through a multi-factor caller verification step before any information was shared"
  - "Gained model flexibility — able to switch between OpenAI, xAI, and Gemini realtime models depending on performance, cost, or availability needs"
---

An inbound agent that understands intent, retrieves policy/FAQ answers where appropriate, retrieves ERP database values where needed and escalates edge cases to humans with conversation summaries.

- Voice Pipeline Architecture — Used the Pipecat framework to orchestrate real-time audio streaming, speech-to-text, LLM reasoning, and text-to-speech in a single low-latency pipeline, instead of a no-code voice platform.
- Multi-Model Flexibility — Integrated OpenAI Realtime, xAI Realtime, and Gemini Realtime APIs behind a common interface, allowing the system to switch models based on cost, latency, or capability needs.
- Caller Identity Verification — Before any patient data was discussed, callers were authenticated via a DOB + zip code + associated patient phone number check, preventing unauthorized data disclosure.
- Knowledge Integration — The agent queried both a static knowledge base (for general/policy questions) and the company’s live ERP database (for patient/case-specific information) to answer caller questions accurately.
- Caller Segmentation — The agent handled distinct caller types (patients, doctors, attorneys, funding companies, unknown callers) with appropriate context and conversation handling for each.
- Infrastructure & Hosting — Deployed on a self-managed AWS VM, avoiding the recurring per-call fees of platforms like Vapi/Bland, which was critical given the company’s volume of 10,000+ calls/month.
- Result — A production-grade voice agent operating at scale with strong data protection, significant cost savings over SaaS voice platforms, and the flexibility to adapt to new realtime models as they emerge.
