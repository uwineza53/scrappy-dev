import './App.css'
import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import LoadingComponent from './Components/LoadingComponent'
import { Route, Routes } from 'react-router-dom'
const RQComponent = lazy(()=>import('./Components/RQComponent'))
const OopsComponent = lazy(()=>import('./Components/OopsComponent'))
const FormComponent = lazy(()=>import('./Components/FormComponent'))

function App() {
  const queryClient = new QueryClient()

  console.log(navigator.onLine)

  return (
    <div className='container-fluid'>
      
      <ErrorBoundary FallbackComponent={ OopsComponent }>
        <Suspense fallback={<LoadingComponent />}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path='/' element={<RQComponent />} />
              <Route path='/form' element={<FormComponent />} />
            </Routes>
            <ReactQueryDevtools  />
          </QueryClientProvider>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
