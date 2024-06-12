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

import "./App.css";

const AppR1 = React.lazy(() => import("remote1/AppR1"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>HOST - CREATE REACT APP</p>
        <React.Suspense fallback={<div>Loading Remote App...</div>}>
          <AppR1 />
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
