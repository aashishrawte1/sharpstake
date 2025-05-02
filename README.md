# sharpstake

# Real-Time Dashboard (React + Node.js + WebSocket + REST API)

This project implements a responsive real-time dashboard using **React.js (frontend)** and **Node.js (backend)**. It features:

- Real-time metrics updates via WebSocket
- Historical data polling via REST API every 30 seconds
- Toggle between WebSocket and polling data fetch modes
- Full Docker-based deployment with Docker Compose

---

## Setup and Running Instructions

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) and Docker Compose installed

### 🚀 Quick Start

1. **Clone this repository**:

   ```bash
   git clone https://github.com/aashishrawte1/sharpstake.git


## Run this application (both fronend and backend together) using docker
> docker-compose up --build

## Stop this application
> docker-compose down


## Technical Choices
### Frontend (React)
- React.js with hooks: Used functional components and hooks (useEffect, useState) for cleaner and modern code.

- WebSocket: Integrated for receiving live data push from the server.

- Fetch: For fetching historical data via polling every 30 seconds.

- Responsive Design: Made responsive for desktop and mobile with CSS. All styles are custom CSS.

### Backend (Node.js)
- Express.js: Lightweight framework to expose RESTful endpoints.

- ws: Simple and efficient WebSocket implementation in Node.js.

- Data Generation: Simulates random metric values every 5 seconds.

- Logging: Custom logger for request and error logs.

### Docker
- Each service (frontend and backend) is containerized using its own Dockerfile.

- A single docker-compose.yml file ties the services together and manages networking.


## Assumptions and Limitations
- No persistent data: Random data is generated in-memory. Restarting the server resets all data.

- Polling interval: Historical data polling is set at 30 seconds — can be adjusted in frontend code.

- No database: For simplicity and portability, this version does not include a database.

- No authentication: Anyone can connect to the WebSocket or use the REST API.

- Basic error handling: Error messages are logged to console and responded with HTTP status codes.



