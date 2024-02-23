// import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import "./App.css";
import Home from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import MoviePage from "./pages/MoviePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   legacy_createStore as createStore,
//   applyMiddleware,
//   Store,
// } from "redux";
// import { createEpicMiddleware } from "redux-observable";
// import { Provider } from "react-redux";
// import { MovieAction, MovieState, DispatchType } from "./common/Interfaces";
// // import thunk from "redux-thunk";
// import reducer from "./store/reducer";

// const epicMiddleware = createEpicMiddleware();

function App() {
  // const [count, setCount] = useState(0)
  // const store: Store<MovieState, MovieAction> & {
  //   dispatch: DispatchType;
  // } = createStore(
  //   reducer,
  //   applyMiddleware(epicMiddleware, () => (next) => (action) => {
  //     try {
  //       next(action);
  //     } catch (e) {
  //       console.error(e);
  //       setTimeout(() => {
  //         throw e;
  //       });
  //     }
  //   })
  // );
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MoviePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="login" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>

      {/*
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Movie Review App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
      {/* <Home /> */}
    </>
  );
}

export default App;
