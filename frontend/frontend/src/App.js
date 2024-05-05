import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import HomePage from "./Pages/HomePage";
import ReviewDetails from "./Pages/ReviewDetails";
import Category from "./Pages/Category";
import SiteHeader from "./Components/SiteHeader";

//Apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
<Router>
  <ApolloProvider client={client}>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route path="/details/:id" element={<ReviewDetails />} />

          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
