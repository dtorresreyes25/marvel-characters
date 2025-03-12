# 🦸 Marvel Characters App

A web application for exploring and managing Marvel characters, built with **React** and **TypeScript**, focusing on performance, scalability, and maintainability.

## 🚀 Technologies Used

This project leverages a modern web development stack:

- **React**: Component-based UI library for building interactive interfaces.
- **TypeScript**: Ensures type safety and improves developer experience.
- **Zustand**: Lightweight state management with a simple API, avoiding unnecessary re-renders.
- **MiniSearch**: Client-side fuzzy search for a fast and efficient search experience.
- **MSW (Mock Service Worker)**: Mocks API responses for testing and local development.
- **React Router**: Manages navigation and routing.
- **Styled Components**: Enhances styling through component encapsulation.

## 🏛️ Architecture and Design Patterns

This application follows **modular, scalable, and maintainable** architectural principles:

### 1️⃣ **Component-Based Architecture**
The UI is structured into reusable and independent components, ensuring:
- **Separation of concerns**: Each component is responsible for a single function.
- **Reusability**: Shared components (e.g., `ButtonWithIcon`, `LoadinSpinner`, `SearchFilter`) are designed for multiple use cases.

### 2️⃣ **State Management with Zustand**
Instead of using more complex solutions like Redux, Zustand provides:
- A simple, minimal API without boilerplate.
- Direct state updates (without reducers), improving performance.
- Lazy-loaded slices of state to optimize memory consumption.

### 3️⃣ **API Mocking with MSW**
To ensure **testability and offline development**, MSW intercepts network requests and provides:
- **Consistent API responses** for testing.
- **Faster development** without relying on external APIs.
- **Isolation of business logic** from API changes.

### 4️⃣ **Search with MiniSearch**
MiniSearch was chosen over larger alternatives (like Elasticsearch) due to:
- **Lightweight nature**: Runs entirely in the browser.
- **Efficient fuzzy search**: Allows searching by character names with typo tolerance.

### 5️⃣ **Routing with React Router**
- Nested routes provide better **component organization**.
- Dynamic parameters (`/character/:id`) enable **deep linking**.

---

## 🧪 Testing Strategy

This project follows a **comprehensive testing strategy**:

1. **Unit Tests**:
    - Ensures individual components work as expected.
    - Uses ViteTest and React Testing Library.

   Example:
   ```tsx
   import { render, screen } from "@testing-library/react";
   import { CharacterCard } from "../components/CharacterCard";

   test("renders character name", () => {
     render(<CharacterCard name="Spider-Man" />);
     expect(screen.getByText(/Spider-Man/i)).toBeInTheDocument();
   });
   ```

2. **Mock API Tests with MSW**:
    - Ensures API interactions return expected results.

   Example:
   ```tsx
   import { rest } from "msw";
   import { fetchCharacter } from "../api/characters";
   import { setupServer } from 'msw/node';
   
   export const handlers: HttpHandler[] = [
    http.get(
    `${API_URL}/${API_ENDPOINT.CHARACTERS}/:id/${API_ENDPOINT.COMICS}`,
    () => {
      return HttpResponse.json(characterComicsMock);
    })];

   export const server = setupServer(...handlers);
   
   test("fetches character by ID", async () => {
     const character = await fetchCharacter("1");
     expect(character.name).toBe("Hulk");
   });
   ```

---

## 🎯 Key Design Decisions

### ✅ **Why Zustand over Redux?**
- Redux requires **boilerplate reducers** and **actions**, while Zustand offers **direct state updates**.
- Zustand **avoids unnecessary re-renders** by updating only the relevant components.
- Better performance with **lazy state slices**.

### ✅ **Why MSW instead of mocking manually in Jest?**
- Jest mocks require **hardcoded responses**, which are harder to maintain.
- MSW **mimics real API behavior**, allowing **network-level testing**.
- Supports **testing in both browser and Node.js environments**.

### ✅ **Why Styled Components instead of CSS modules or Tailwind?**
- **Encapsulation**: Styles are tied directly to components.
- **Dynamic styling**: Uses props to control styles (`styled.button<{ primary: boolean }>`).
- **Removes unused CSS**: Eliminates unused styles via tree-shaking.

---

## 📂 Project Structure

```
marvel-characters/
│-- src/
│   ├── assets/           
│   ├── components/       
│   ├── constants/         
│   ├── hooks/            
│   ├── layout/   
│   ├── pages/          
│   ├── providers/        
│   ├── routes/           
│   ├── services/                  
│   ├── store/ 
│   ├── styles/           
│   ├── tests/  
│   ├── types/           
│   ├── App.tsx           
│   ├── main.tsx          
│-- public/              
│-- package.json
│-- tsconfig.json
│-- README.md
```

---

## 🔧 Installation & Usage

To set up the project, follow these steps:

1️⃣ **Clone the repository**:
```bash
git clone https://github.com/dtorresreyes25/marvel-characters.git
cd marvel-characters
```

2️⃣ **Install dependencies**:
```bash
npm install
```

3️⃣ **Run the app**:
```bash
npm run dev
```

---

