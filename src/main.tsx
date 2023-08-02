import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { element } from './routes/AllRoutes'
// import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux/es/exports";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import IsLoading from './pages/homePages/IsLoading'
import { Store } from './hooks/global/Store'


const myclient = new QueryClient();
let persitstore = persistStore(Store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Suspense fallback={<IsLoading />}>
        <Provider store={Store}>
          <PersistGate persistor={persitstore}>
            <QueryClientProvider client={myclient}>
                <RouterProvider router={element} />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
    </Suspense>
  </React.StrictMode>,
)
