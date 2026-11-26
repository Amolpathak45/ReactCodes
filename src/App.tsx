
// const App = () => {
//   const name = "Rahul"

import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"

// import Counters from "./Counters"

// import UseCallbackExample from "./UseCallbackExample"

// import UseMemoExample from "./UseMemoExample"

// import UseEffectExample from "./UseEffectExample"


// import RegistrationForm from "./RegistrationForm"

// import OnSubmitExample from "./OnSubmitExample"

// import OnChangeExample from "./OnChangeExample"

// import Counter from "./Counter"

// import Props from "./Props"

// import List from "./List"

// import Student from "./Student"

//   return (
//     <div>
//       <h1>Hello {name}</h1>
//       <p>Welcome to React</p>
//     </div>
//   )
// }

// export default App


// const App = () => {
//   return (
//     <div>

//       <Counter/>
//       {/* <List/> */}

    

      {/* <Student name="Amol" /> */}

   {/* <Props
   name="Amol"
   department="aids"
   roomnumber={123}/>


    <Props
   name="Amol"
   department="aids"
   roomnumber={123}/>
      


       <Props
   name="Amol"
   department="aids"
   roomnumber={123}/>
      


       <Props
   name="Amol"
   department="aids"
   roomnumber={123}/>
      
      

//  */}

      

    
      
//     </div>
//   )
// }

// export default App


// import EventPerform from './EventPerform'

// const App = () => {
//   return (
//     <div>

//       <EventPerform/>
    
//     </div>
//   )
// }

// export default App



// const App = () => {
//   return (
//     <div>

//       {/* <UseMemoExample/> */}
//       {/* <OnChangeExample/> */}
//       {/* <OnSubmitExample/> */}
//       {/* <RegistrationForm/> */}
//       {/* <UseEffectExample/> */}
//       {/* <UseCallbackExample/> */}

//       <Counters/>
      


      
//     </div>
//   )
// }

// export default App


 import { Routes, Route,} from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'



// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home/>} />

//         <Route path="/about" element={<About/>} />

//         <Route path="/contact" element={<Contact/>} />
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />

         <Route path="/about" element={<About/>} />

         <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    </div>
  )
}

export default App
