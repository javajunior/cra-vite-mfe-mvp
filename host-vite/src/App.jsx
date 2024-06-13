// static import

// import "./App.css";

// import AppR2 from "remote2/AppR2";

// function App() {
//   return (
//     <>
//       <h1>HOST - VITE</h1>
//       <AppR2 />
//     </>
//   );
// }

// export default App;

// dynamic import

import React from "react";

import "./App.css";

const AppR2 = React.lazy(() => import("remote2/AppR2"));

function App() {
  return (
    <>
      <h1>HOST - VITE</h1>
      <React.Suspense fallback={<div>Loading Remote App...</div>}>
        <AppR2 />
      </React.Suspense>
    </>
  );
}

export default App;
