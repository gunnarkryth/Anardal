@echo off

start "" cmd /c "npm install && npm install sass && npm install react-router-dom && npm install @tanstack/react-query && npm install graphql-request && npm install contentful && npm audit fix && npm run dev"
timeout /t 10

start http://localhost:5173/