# Historical Dates Animation

An interactive React component featuring a circular navigation system for historical events, built with GSAP animations and Redux state management.

[**Live Demo**](https://66ef166fef2bafa39d23fa78--unique-croquembouche-5e63fb.netlify.app)

---

### 🚀 Key Features

-   **Circular Navigation**: A unique, interactive circle interface for switching between historical categories.
-   **Smooth Animations**: Fluid transitions and rotational effects powered by GSAP and `@gsap/react`.
-   **Dynamic Year Counter**: Animated year transitions when switching categories.
-   **Responsive Design**: Fully optimized for mobile and desktop views using `useMediaQuery`.
-   **Automated Content**: Dynamic event generation using `@ndaidong/txtgen` for realistic testing.

### 🛠 Technical Highlights

-   **State Management**: Implemented with **Redux Toolkit** to handle complex category and event states.
-   **Animations**: Leverages **GSAP** for high-performance, complex UI animations.
-   **Styling**: Modularized **Sass** for clean, scoped styling and maintainable architecture.
-   **Performance**: Built with **Webpack** and **TypeScript** for a robust development environment and optimized production builds.

### 📦 Technologies Used

-   **Core**: React 18, TypeScript
-   **State**: Redux Toolkit, React Redux
-   **Animations**: GSAP, @gsap/react
-   **UI/UX**: Swiper, Sass (Modules), classnames
-   **Utilities**: @uidotdev/usehooks, @ndaidong/txtgen
-   **Tooling**: Webpack, ESLint, Prettier

### ⚙️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TechZaurus/HistoricalDates.git
   cd HistoricalDates
   ```

2. **Install dependencies:**
   ```bash
   # Recommended: bun (fastest)
   bun install

   # Alternatively:
   npm install
   # or
   yarn install
   ```

3. **Start development server:**
   ```bash
   bun run dev # or npm run dev / yarn dev
   ```
   The site will be available at [http://localhost:8080/](http://localhost:8080/)

4. **Build for production:**
   ```bash
   bun run build # or npm run build / yarn build
   ```
   The production-ready files will be in the `dist` folder.

### 📝 Project Notes & Assumptions

-   **Data Generation**: The project uses a random data generator for visual testing. Each page refresh provides a new set of categories and events to demonstrate the component's flexibility.
-   **Performance Focus**: Animations are optimized for 60fps performance across modern browsers.
