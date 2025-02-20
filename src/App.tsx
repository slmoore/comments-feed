import Comments from 'components/pages/comments';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Comments />
    </QueryClientProvider>
  );
}

export default App;
