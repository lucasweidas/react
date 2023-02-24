import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root, { loader as rootLoader, action as rootAction } from './routes/Root';
import ErrorPage from './ErrorPage';
import Contact, { loader as contactLoader, action as contactAction } from './routes/Contact';
import EditContact, { action as editAction } from './routes/Edit';
import { action as destroyAction } from './routes/Destroy';
import Index from './routes';

// Configuring Routes with objects
/* const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: 'contacts/:contactId/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: 'contacts/:contactId/destroy',
            action: destroyAction,
            errorElement: <div>Oops! There was an error</div>,
          },
        ],
      },
    ],
  },
]); */

// Configuring Routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />} loader={rootLoader} action={rootAction}>
      <Route errorElement={<ErrorPage />}>
        <Route index={true} element={<Index />} />
        <Route path="contacts/:contactId" element={<Contact />} loader={contactLoader} action={contactAction} />
        <Route path="contacts/:contactId/edit" element={<EditContact />} loader={contactLoader} action={editAction} />
        <Route path="contacts/:contactId/destroy" errorElement={<div>Oops! There was an error</div>} action={destroyAction} />
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
