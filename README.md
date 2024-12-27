# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js where unhandled exceptions can crash the server.  The `bug.js` file showcases the problem, while `bugSolution.js` provides a robust solution incorporating error handling.

## Bug Description

The provided Node.js HTTP server lacks proper error handling.  This means that unexpected errors (like network issues or invalid requests) can cause the server to crash without any warning or graceful shutdown.

## Solution

The improved version includes comprehensive error handling using `server.on('error', ...)` to catch and manage potential issues.  This ensures the server remains responsive and prevents unexpected crashes.  The solution also logs errors for easier debugging and maintenance.