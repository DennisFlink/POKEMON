import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeView } from './Layout/HomeView';
const router = createBrowserRouter([
   { path: '/', element: <HomeView /> }, // JSX for element
]);
function App() {
   return (
      <section className=" relative min-h-screen">
         <RouterProvider router={router}></RouterProvider>
      </section>
   );
}
export default App;
