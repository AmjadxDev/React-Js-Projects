import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'

import { About, Contact, Home, User, Github } from './components/Index.jsx'
import { githubInfoLoader } from "./components/Github/Github.jsx"

// first Method
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

// New Method
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' Component={App}>
      <Route path='' Component={Home}></Route>
      <Route path='about' Component={About}></Route>
      <Route path='contact' Component={Contact}/>
      <Route path='user/:userId' element={<User />}/>

      <Route
      loader= {githubInfoLoader}
       path='github' element={<Github />}/>
    </Route>
  )

  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
