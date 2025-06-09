
Deploy link = https://tiny-bienenstitch-4f97c2.netlify.app

Author = Saurabh Sawade

🛠️ Enhancement Decisions

During the enhancement process of the To-Do List full-stack application, the following key decisions were made:
	•	Context API for State Management: Used React’s Context API to manage the global state of todos efficiently, enabling shared access to CRUD operations across components.
	•	REST API Integration: Connected the React frontend to a Node.js + Express backend using Axios for seamless communication with MongoDB via Mongoose.
	•	Component Structure: Divided the UI into reusable components like TodoForm, TodoItem, and TodoList for better readability and maintainability.
	•	Error Handling: Implemented try-catch blocks and user input validation to ensure smoother user experience and improved backend stability.
	•	UI Feedback: Added basic visual feedback (e.g., input clearing, checkbox toggle, background color changes) to indicate completed vs. pending tasks.
	•	Deployment:
	•	Backend deployed on Render to provide a reliable API endpoint.
	•	Frontend deployed on Netlify for fast, globally available access.

These decisions improved both user experience and codebase scalability, making the application easier to maintain and expand in the future.

