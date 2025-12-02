# MES - Advanced React

This list contains 10 practical exercises (MES) covering advanced React concepts, including React Router, React Query, advanced Hooks, Redux Toolkit and React Hook Form.

---

## 📋 Formal Structure of the Exercises

### Project Setup

Each exercise must follow the configuration below:

#### Required Technical Stack
- **React**: Version 18+ with TypeScript
- **Build Tool**: Vite
- **Package Manager**: npm, yarn or pnpm
- **Node.js**: Version 18+ LTS
- **TypeScript**: Version 5+

#### Project Initialization

```bash
# With Vite (recommended)
npm create vite@latest project-name -- --template react-ts

```

#### Required Folder Structure

```
project-name/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/             # Pages/views of the application
│   ├── hooks/             # Custom hooks
│   ├── context/           # Context providers
│   ├── services/          # API services
│   ├── types/             # TypeScript types
│   ├── utils/             # Utility functions
│   ├── styles/            # CSS/SCSS files
│   ├── App.tsx            # Main component
│   └── main.tsx           # Entry point
├── public/                # Static assets
├── tests/                 # Unit and integration tests
├── README.md              # Project documentation
├── package.json
└── tsconfig.json
```

---

### 🔍 Verification Tools

Before submitting your work, use these tools:

```bash
# Linting
npm run lint

# Tests
npm run test
npm run test:coverage

# Production build
npm run build

# Bundle analysis
npm run build -- --analyze

# Lighthouse (in Chrome DevTools)
# Performance, Accessibility, Best Practices, SEO
```

## MES 1: React Router - Navigation and Dynamic Routes

Objectives:
- Configure React Router v6 in an application
- Create nested routes and shared layouts
- Implement dynamic routes with parameters
- Use the hooks `useNavigate`, `useParams` and `useLocation`

Exercise:
Create a blog application with:
- Home page listing articles
- Article detail page (dynamic route `/article/:id`)
- "About" and "Contact" pages
- Navigation with active menu (NavLink)
- 404 route for not found pages

Key concepts: Routes, Outlet, NavLink, useParams, useNavigate, Navigate

---

## MES 2: React Router - Protected Routes and Authentication

Objectives:
- Implement a simulated authentication system
- Create protected routes that require login
- Redirect unauthenticated users
- Manage global authentication state

Exercise:
Extend the previous application with:
- Login/logout page
- Protected routes for creating/editing articles
- Reusable ProtectedRoute component
- Redirect after login to the original page
- Persistence of authentication (localStorage)

Key concepts: Context API, ProtectedRoute, Navigate, location.state

---

## MES 3: Advanced React Hooks - useReducer and useContext

Objectives:
- Master `useReducer` for complex state management
- Combine `useReducer` with `useContext` for global state
- Create typed actions and reducers (TypeScript)
- Understand when to use useReducer vs useState

Exercise:
Create a shopping cart with:
- Add/remove/update item quantities
- Automatic total calculation
- State management with useReducer
- State sharing via Context
- Actions: ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART

Key concepts: useReducer, useContext, reducer pattern, actions

---

## MES 4: Advanced React Hooks - useCallback, useMemo and Performance

Objectives:
- Optimize performance with `useMemo` and `useCallback`
- Understand re-rendering and memoization
- Use React DevTools Profiler
- Avoid premature optimization

Exercise:
Create a data filtering app with:
- List of 1000+ items
- Multiple filters (search, category, price)
- Customizable sorting
- Optimization with useMemo for expensive computations
- useCallback for functions passed to child components
- Measure performance before/after optimization

Key concepts: useMemo, useCallback, React.memo, performance optimization

---

## MES 5: Advanced React Hooks - useRef, useImperativeHandle and Custom Hooks

Objectives:
- Master `useRef` for DOM refs and mutable values
- Use `useImperativeHandle` with `forwardRef`
- Create reusable custom hooks
- Understand when to use useRef vs useState

Exercise:
Create a component library with:
- Input with auto-focus (useRef)
- Modal with focus trap management
- Custom hook `useLocalStorage`
- Custom hook `useDebounce`
- Custom hook `useOnClickOutside`
- Component exposing methods via useImperativeHandle

Key concepts: useRef, forwardRef, useImperativeHandle, custom hooks

---

## MES 6: React Query - Fetching and Caching Data

Objectives:
- Configure React Query (TanStack Query)
- Perform GET requests with `useQuery`
- Handle loading, error and success states
- Understand caching and stale time
- Use React Query DevTools

Exercise:
Create an image gallery app with an API:
- Fetch photos from an API (e.g., JSONPlaceholder, Unsplash)
- Display with loading and error states
- Pagination or infinite scroll
- Configure cache (staleTime, cacheTime)
- Prefetching on hover
- Automatic retry on error

Key concepts: useQuery, QueryClient, caching, staleTime, refetchOnWindowFocus

---

## MES 7: React Query - Mutations and Cache Invalidation

Objectives:
- Perform mutations (POST, PUT, DELETE) with `useMutation`
- Invalidate and update cache after mutation
- Handle optimistic updates
- Synchronize UI with server

Exercise:
Create an advanced TODO app with an API:
- Full CRUD (Create, Read, Update, Delete)
- useMutation for POST/PUT/DELETE
- Cache invalidation after mutation
- Optimistic updates for smooth UX
- Error handling with rollback
- Toast notifications for success/errors

Key concepts: useMutation, queryClient.invalidateQueries, optimistic updates, onSuccess/onError

---

## MES 8: Redux Toolkit - Configuration and Slices

Objectives:
- Configure Redux Toolkit in a React app
- Create slices with `createSlice`
- Use `configureStore`
- Connect React with `useSelector` and `useDispatch`
- Understand Redux Toolkit advantages over classic Redux

Exercise:
Create a multi-project task management app:
- Redux store with multiple slices (projects, tasks, user)
- Actions and reducers with createSlice
- Selectors to retrieve data
- Dispatch actions from components
- Redux DevTools for debugging
- Manage complex state (projects containing tasks)

Key concepts: createSlice, configureStore, useSelector, useDispatch, Redux DevTools

---

## MES 9: Redux Toolkit - Async Thunks and RTK Query

Objectives:
- Handle async API calls with `createAsyncThunk`
- Use RTK Query for data fetching
- Configure API endpoints
- Manage cache with RTK Query
- Compare RTK Query vs React Query

Exercise:
Create an e-commerce app with:
- RTK Query for API calls (products, categories)
- createAsyncThunk for complex actions (checkout)
- Cart management with Redux Toolkit
- Endpoints: getProducts, getProductById, getCategories
- Automatic caching and invalidation
- Loading states and error handling

Key concepts: createAsyncThunk, createApi, RTK Query, endpoints, cache tags

---

## MES 10: React Hook Form - Complex Forms and Validation

Objectives:
- Configure React Hook Form
- Create performant uncontrolled forms
- Implement validation with Zod or Yup
- Manage multi-step forms
- Integrate with UI libraries (MUI, shadcn/ui)

Exercise:
Create a multi-step signup form:
- Step 1: Personal information (name, email, password)
- Step 2: Address (street, city, postal code, country)
- Step 3: Preferences (newsletter, notifications)
- Validation with Zod schema
- Custom error messages
- Save progress (localStorage)
- Final submission with summary
- Conditional fields handling
- Integration with custom UI components

Key concepts: useForm, register, handleSubmit, formState, validation schema, Controller, watch

---

## Integrated Final Project (Bonus)

Objective: Combine all concepts into a complete application

Exercise:
Create a project management app (simplified Trello/Asana):
- **React Router**: Navigation between projects, boards, settings
- **Redux Toolkit**: Global state (projects, tasks, user)
- **RTK Query**: Sync with backend API
- **React Hook Form**: Create/edit projects and tasks
- **Custom Hooks**: useLocalStorage, useDebounce, useOnClickOutside
- **Performance**: Optimization with useMemo/useCallback
- **Authentication**: Protected routes

Features:
- User authentication
- CRUD projects and tasks
- Drag & drop (react-beautiful-dnd)
- Filters and search
- Light/dark theme
- Responsive design

---

## Additional Resources

- [React Router Documentation](https://reactrouter.com/)
- [TanStack Query (React Query)](https://tanstack.com/query/latest)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

## Recommended Progression

1. Start with MES 1-2 (React Router)
2. Deepen hooks with MES 3-5
3. Master data fetching with MES 6-7 (React Query)
4. Explore Redux with MES 8-9
5. Finish with forms MES 10
6. Integrated final project to consolidate

Good practice! 🚀
