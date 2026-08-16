import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
<main className="flex-grow">
  {legalPage ? (
    <LegalPages
      page={legalPage}
      onBack={() => setLegalPage(null)}
    />
  ) : (
    <>
      {/* 保留你原本的網站頁面內容 */}
    </>
  )}
</main>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
