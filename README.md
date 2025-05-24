# Portfolio Project Manager

A simple Node.js CRUD application for managing portfolio projects. This app uses **Express.js**, **MongoDB**, and **Zod** for backend validation, and a plain **HTML + Bootstrap** frontend (no templating engine like EJS).

## 🔗 Live Demo

👉 [View Live Application](https://crud-application-server-zeta.vercel.app/)
## Features

- Add new projects with form validation
- Edit existing projects using modals with pre-filled data
- Delete projects (soft delete with `isDeleted`)
- View all active projects
- Toast notifications for feedback
- Bootstrap UI for simplicity and responsiveness

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Zod
- **Frontend**: HTML, Bootstrap 5, JavaScript (Vanilla)

## Project Schema

```ts
// Mongoose Schema
{
  title: string,
  project: string,
  status: string,
  imgURL: string, // optional
  description: string,
  isDeleted: boolean // default: false
}
