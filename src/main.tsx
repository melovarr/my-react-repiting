// import { createRoot } from 'react-dom/client';

// const techName = 'React';
// const imgUrl =
//   'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=640';

// createRoot(document.getElementById('root') as HTMLElement).render(
//   <div>
//     <h1>Welcome to {techName}</h1>
//     <p>
//       This is JSX — it looks like HTML, but it's not quite the same. It has its
//       own rules!
//     </p>
//     <img src={imgUrl} alt="Man, field and a mountain" width="640" />
//   </div>
// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css';
import App from './components/App.tsx';
import 'modern-normalize';
import './global.css';
// import { QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    {/* <App /> */}
    {/* <App /> */}
  </StrictMode>
);
