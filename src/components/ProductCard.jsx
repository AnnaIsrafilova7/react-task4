export default function ProductCard({ product }) {
  const { title, price, image, rating } = product;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="flex h-56 items-center justify-center border-b border-gray-200 p-5">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
          {title}
        </h3>
        <div className="mt-auto flex items-baseline justify-between">
          <span className="text-lg font-bold text-blue-700">${price}</span>
          <span className="text-sm text-gray-700">
            ★ {rating.rate} ({rating.count})
          </span>
        </div>
      </div>
    </article>
  );
}