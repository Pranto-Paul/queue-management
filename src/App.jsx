import Display from './components/Display';
import Form from './components/Form';
const App = () => {
  return (
    <div className="h-screen w-full bg-slate-800">
      <header className="  text-white">
        <h2 className="text-4xl text-center pt-2.5">Queue Management system</h2>
        <p className="text-xl text-center text-gray-400">
          Manage your queue efficiently
        </p>
      </header>
      <main className="max-w-5xl pt-8 m-auto flex gap-4">
        <div className="w-2/5">
          <Form />
        </div>
        <div className="w-3/5">
          <Display />
        </div>
      </main>
    </div>
  );
};
export default App;
