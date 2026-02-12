import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
const Form = ({ addToQueue }) => {
  const [title, setTitle] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !service) return;
    addToQueue({ title, service });
    setTitle('');
    setService('');
  };

  return (
    <form
      className="flex flex-col gap-3 shadow-2xl border border-gray-600 p-5 rounded-lg bg-slate-700 text-white"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold mb-2">Add to Queue</h2>

      <label htmlFor="title" className="text-sm font-medium">
        Title
      </label>
      <input
        id="title"
        type="text"
        placeholder="Pranto Paul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-3 py-2 rounded-md bg-slate-800 border border-gray-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="service" className="text-sm font-medium">
        Service
      </label>
      <select
        id="service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="px-3 py-2 rounded-md bg-slate-800 border border-gray-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">SELECT A SERVICE</option>
        <option value="payment">Payment</option>
        <option value="consultation">Consultation</option>
        <option value="support">Support</option>
      </select>

      <button
        disabled={!title || !service}
        type="submit"
        className={`mt-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed`}
      >
        <div className="flex justify-center items-center gap-2">
          Add <FaUserPlus />
        </div>
      </button>
    </form>
  );
};

export default Form;
