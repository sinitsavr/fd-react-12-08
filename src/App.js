// import React from "react";
// import LogInForm from "./components/forms/LogInForm";

// const App = () => {
//   const onSubmit = (values, formikBag) => {
//     formikBag.resetForm();
//   };
//   return <>
//     <LogInForm onSubmit={onSubmit}/>
//   </>;
// };

// export default App;
import './App.css';
import StopWatch from './components/StopWatch';

function App() {
  return (
    <>
    <StopWatch/>
    </>
  );
}

export default App;