
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Details from './Details'
import SearchParams from './SearchParams'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, 
      cacheTime: Infinity,
    }
  }
})
function HaikuApp() {
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to="/">Read Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}
export default HaikuApp;