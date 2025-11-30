import React, { Suspense } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';

// --- LAZY LOAD: AĞIR BİLEŞENLERİ AYIRIYORUZ ---
// Bu bileşenler sayfa ilk açıldığında değil, ihtiyaç duyuldukça yüklenecek.
const Timeline = React.lazy(() => import('./components/Timeline'));
const WarMap = React.lazy(() => import('./components/WarMap'));
const Principles = React.lazy(() => import('./components/Principles'));
const Hitabe = React.lazy(() => import('./components/Hitabe'));

// Yükleniyor animasyonu (Fallback)
const LoadingSpinner = () => (
  <div className="w-full h-96 flex items-center justify-center bg-zinc-950">
    <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-amber-500/30">
      {/* Hero her zaman hemen yüklenmeli (LCP için) */}
      <Hero />

      {/* Diğer bileşenler Suspense içine alınır */}
      <Suspense fallback={<LoadingSpinner />}>
        <Timeline />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <WarMap />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Principles />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Hitabe />
      </Suspense>
      
      <Footer />
    </main>
  );
}

export default App;