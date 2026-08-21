
function ConfirmModal({ onConfirm, onCancel }) {
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-[#101b39]">
        <h2 className="text-xl font-semibold">
          Delete Task?
        </h2>

        <p className="mt-2 text-gray-600">
          Are you sure you want to delete all tasks?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-lg px-4 py-2 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={() => {onConfirm(); onCancel()}}
            className="rounded-lg hover:bg-[#991B1B] bg-[#B91C1C] cursor-pointer px-4 py-2 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ConfirmModal;