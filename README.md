# **REAL-TIME COLLABORATIVE WHITEBOARD TOOL**

*COMPANY: CODTECH IT SOLUTIONS*

*NAME: AHAMED ASFAR*

*INTERN ID: CT04DH245*

*DOMAIN: MERN STACK*

*DURATION: 4 WEEKS*

*MENTOR: NEELA SANTHOSH*

🎨 Real-Time Collaborative Whiteboard using MERN Stack & Socket.IO
🔧 Tools & Technologies Used:
Node.js (v22.x) — Backend JavaScript runtime

Express.js — HTTP server for WebSocket setup

Socket.IO — Real-time, bi-directional WebSocket communication

React.js — Frontend UI library

Socket.IO Client — WebSocket client for React frontend

VS Code — Integrated development environment

Command Prompt / VS Terminal — For executing server and client

HTML5 Canvas API — For rendering the collaborative drawing board

React Hooks (useEffect, useRef) — To manage lifecycle and canvas state

Git & GitHub — Version control and repository management

📜 Project Overview:
This project is a real-time collaborative whiteboard tool developed as part of the MERN Stack internship under CodTech. The goal of this task was to build a web application where multiple users can simultaneously draw and collaborate on a shared canvas using live WebSocket communication.

The tool demonstrates a powerful real-world use case for real-time communication using WebSockets. It features a fully synchronized whiteboard interface, where every user action is instantly reflected across all connected clients. The application was developed entirely from scratch, integrating React for the frontend and Socket.IO over an Express.js backend.

This project represents Task 3 of the internship, and was approached with attention to performance, customization, and clean design principles.

⚙️ Functionality Breakdown:
✅ 1. Backend (Node.js + Express + Socket.IO)
Express.js server created and runs on PORT 3001.

Configured CORS to allow frontend to connect.

On user connection, a unique socket ID is logged.

When a user draws a stroke, it emits a draw event to the server.

The server uses socket.broadcast.emit() to share the drawing data with all other connected users in real-time.

Gracefully handles user disconnects.

✅ 2. Frontend (React + Canvas + Socket.IO Client)
Built using Create React App boilerplate.

Contains a centralized canvas using <canvas> HTML5 element.

Mouse events are captured (mousedown, mousemove, mouseup) to detect drawing strokes.

Each stroke is immediately drawn locally and also emitted to the server.

Upon receiving remote draw events, the canvas renders incoming strokes in real time.

React Hooks manage canvas state and WebSocket lifecycle efficiently.

UI kept minimal for performance and collaboration clarity.

👨‍🔧 Procedure Followed:
Environment Setup:
Installed Node.js and React. Created asfar-whiteboard-backend and asfar-whiteboard-frontend folders.

Backend:
Initialized with npm init -y, installed express, cors, and socket.io. Configured index.js to handle draw events and broadcast them.

Frontend:
Bootstrapped React app, installed socket.io-client. Connected to backend server via WebSocket. Built drawing logic using HTML5 Canvas and React refs.

Testing & Debugging:
App was run in two browsers (normal + incognito) to simulate multiple users. Ensured that every stroke was synchronized. Console logs and hooks were used to trace socket behavior and correct message flow.

Customization:
Personalized all file and folder names with “Asfar” branding. UI titled as “Asfar’s Whiteboard”. Socket events use generic names for reuse.

GitHub Deployment:
Code pushed to GitHub under structured repository. Proper README, folder hierarchy, and test screenshots included.

🏁 Conclusion:
This whiteboard project fulfills the MERN internship Task 3 goal by demonstrating a live, real-time collaboration tool using Socket.IO and React. It showcases full-stack synchronization, efficient communication, and a hands-on grasp of live client-server architecture.

With personalized customization, modular folder structure, and real-time testing, this project serves as strong evidence of my capabilities as a MERN Stack developer building real-world, interactive applications.


*OUTPUT:*

<img width="1910" height="1079" alt="Image" src="https://github.com/user-attachments/assets/f778cba0-0610-413a-9af5-2b767d16be75" />

<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/ccf841ae-34a9-4f99-ac71-22e7d99cabd2" />
