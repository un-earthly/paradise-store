import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return <Navbar>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
    <Footer />
  </Navbar>
}

export default MyApp
