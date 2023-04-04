// import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { store, persistor } from "./store";

import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()));

const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
