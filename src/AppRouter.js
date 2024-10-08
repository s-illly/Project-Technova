import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from 'react-router-dom';

  import App from './App';
  import CelestialHackathon from './screens/technova';

  export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path = '/' element = {<App />}>
            <Route index = {true} path='/' element = {<CelestialHackathon/>}/>
        </Route>
    )
  );