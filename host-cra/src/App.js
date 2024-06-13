// static import

// import "./App.css";

// import AppR1 from "remote1/AppR1";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>HOST - CREATE REACT APP</p>
//         <AppR1 />
//       </header>
//     </div>
//   );
// }

// export default App;

// dynamic import

import React from "react";
import FallbackComponent from "./FallbackComponent/FallbackComponent";
import { ErrorBoundary } from "react-error-boundary";

import "./App.css";

const AppR1 = React.lazy(() => import("remote1/AppR1"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>HOST - CREATE REACT APP</p>
        <ErrorBoundary
          FallbackComponent={FallbackComponent}
          resetKeys={["someKey"]}
        >
          <React.Suspense fallback={<div>Loading Remote App...</div>}>
            <AppR1 />
          </React.Suspense>
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
