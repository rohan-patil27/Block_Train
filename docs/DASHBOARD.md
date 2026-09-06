# Gatidhara Phase 6 Controller Dashboard

## Overview
Phase 6 introduces the Controller Dashboard, a frontend interface designed to present the optimized plans, safety validations, explanations, and audit logs. The dashboard provides an interactive and structured view of the Gatidhara system's capabilities.

## Technical Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Mapping:** Deck.gl for interactive topology rendering
- **Data Fetching:** SWR for seamless REST API integration with the backend

## Core Components
- **NetworkMap:** Renders the underlying Gatidhara synthetic topology (Nodes, Track Sections, Platforms, Level Crossings) using GeoJSON layers over a 3D canvas via `deck.gl`.
- **PlanView:** Displays key KPIs (Total Items, Solver Status, Horizon) and a timeline/grid of scheduled operations with a placeholder Time-Distance Stringline chart (`TimeDistanceChart.tsx`).
- **SafetyExplanationPanel:** Consolidates the deterministic Safety Validator output and Phase 5 explanation engine into an actionable panel, outlining Root Causes, Key Adjustments, and Recommendations.
- **AuditTimeline:** Renders the chronological sequence of system actions and human interactions (e.g., plan approval/rejection) utilizing the Phase 5 Audit Trial API.
- **ControllerActions:** Enables the human-in-the-loop workflow, allowing a controller to accept or reject the proposed, safe, and explained plan.

## Architecture Guidelines
- **API First:** The dashboard solely consumes the Gatidhara backend REST APIs and does not mock data on the frontend.
- **Authentication:** Uses the existing OAuth2 bearer token flow (simulated via an automated login for demo purposes).
- **Design Philosophy:** Clean, dynamic, and action-oriented for demonstration impact, steering clear of excessive enterprise boilerplate.
