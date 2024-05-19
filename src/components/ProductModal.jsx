export function ProductModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white  text-gray-900   dark:bg-gray-900  dark:text-white p-6 rounded-lg max-w-md w-full bg-opacity-80">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="max-w-56 mb-4 rounded-3xl"
        />
        <p className="text-lg mb-2">{product.color}</p>
        <p className="text-lg font-semibold mb-4">{product.price}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 ml-80 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
