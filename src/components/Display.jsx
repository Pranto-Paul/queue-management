import { MdDelete } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
const Display = ({
  queue,
  onUpdateStatus: updateStatus,
  onRemoveQueue: removeFromQueue,
}) => {
  return (
    <div>
      {queue.length <= 0 ? (
        <p className="text-gray-400 text-2xl text-center">
          No customer in queue
        </p>
      ) : (
        <div>
          {queue.map((customer) => (
            <div
              key={customer.id}
              className="flex justify-between items-center bg-slate-700 shadow-lg rounded-lg p-4 mb-4"
            >
              <div>
                <h3 className="text-3xl text-white font-semibold">
                  {customer.title}
                </h3>
                <div className="flex gap-2">
                  <p className="text-gray-400">{customer.service}</p>
                  <p
                    className={`${customer.status.toLowerCase() === 'pending' ? 'text-yellow-500' : 'text-green-600'}`}
                  >
                    {customer.status}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <TiTick
                  className="text-6xl hover:bg-slate-600 duration-150 rounded-xl cursor-pointer p-3 text-green-600"
                  onClick={() => updateStatus(customer.id, 'completed')}
                >
                  Completed
                </TiTick>
                <MdDelete
                  onClick={() => removeFromQueue(customer.id)}
                  className="text-6xl hover:bg-slate-600 duration-150 rounded-xl cursor-pointer p-3 text-red-600"
                ></MdDelete>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Display;
