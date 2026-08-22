Node.js Microservices

A Node.js microservices application where each service is responsible for a specific business functionality. An API Gateway handles incoming requests and routes them to the appropriate service.

Architecture

Client
  │
  ▼
API Gateway
  │
  ├──► Task Service
  ├──► Workflow Service
  └──► Media Service

Services

- API Gateway – Entry point for clients. Handles authentication, routing, CORS, and rate limiting.
- Task Service – Handles tasks and task-related operations.
- Workflow Service – Handles workflows.
- Media Service – Handles file uploads and attachments.

Tech Stack

- Node.js
- TypeScript
- Express.js
- REST APIs
- Docker
- PostgreSQL / MongoDB
- API Gateway

Project Structure

microservices/
├── api-gateway/
├── task-service/
├── workflow-service/
├── media-service/
└── README.md

Installation

Clone the repository:

git clone <repository-url>
cd microservices

Install dependencies for each service:

cd api-gateway
npm install

cd ../task-service
npm install

cd ../workflow-service
npm install

cd ../media-service
npm install

Environment Variables

Create a ".env" file in each service.

Example:

PORT=3000
TASK_SERVICE_URL=http://localhost:3001
WORKFLOW_SERVICE_URL=http://localhost:3002
MEDIA_SERVICE_URL=http://localhost:3003

Do not commit ".env" files to Git.

Running the Services

Start each service in development mode:

npm run dev

Example ports:

API Gateway       → 3000
Task Service      → 3001
Workflow Service  → 3002
Media Service     → 3003

API Gateway Routing

The API Gateway routes requests based on the URL.

Example:

GET /tasks
      │
      ▼
API Gateway
      │
      ▼
Task Service

Attachments can be routed to the Media Service:

POST /tasks/attachments
          │
          ▼
     Media Service

Workflow requests are routed to the Workflow Service:

GET /tasks/workflows
          │
          ▼
    Workflow Service

API Examples

Get Tasks

GET /tasks

Create Task

POST /tasks
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the microservices project"
}

Development

Each microservice can be developed and deployed independently.

When adding a new service:

1. Create a new service directory.
2. Add its own "package.json".
3. Add its own environment variables.
4. Expose the required API endpoints.
5. Add the service to the API Gateway.
6. Update this README.

Testing

Run tests with:

npm test

Important

- Keep services independent.
- Do not share business logic directly between services.
- Use environment variables for service URLs and secrets.
- Never commit passwords, API keys, or ".env" files.
