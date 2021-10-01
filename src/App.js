import { Card } from './components/Card';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="flex w-full min-h-screen bg-no-repeat bg-blobs bg-blobPosition flex-col">
      <Card />
      <Footer />
    </main>
  );
}

export default App;
