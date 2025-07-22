# PersonaHub

PeopleMangerApp is a single-page web application for managing a directory of people. It allows users to view, add, edit, and delete person entries with a modern and responsive interface.

## Features

- **People List:** View all people in a searchable, sortable table.
- **Create Person:** Add a new person using a modal form.
- **Edit Person:** Update details for any person via an edit modal.
- **Delete Person:** Remove a person entry with confirmation.
- **Responsive Design:** Works well on desktop and mobile devices.

## Technologies Used

- Angular
- TypeScript
- HTML & CSS (Tailwind for UI)
- RxJS (for data handling)
- [Other dependencies as needed]

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/personahub.git
   cd personahub
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   ng serve
   ```
   The app will be available at `http://localhost:4200`.

## Project Structure

- `src/app/`
  - `person-list/` – List and actions for people
  - `person-create/` – Modal for creating a person
  - `person-edit/` – Modal for editing a person
  - `person-delete/` – Modal for deleting a person
  - `app.component.*` – Main app shell

## Contributing

Feel free to open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under