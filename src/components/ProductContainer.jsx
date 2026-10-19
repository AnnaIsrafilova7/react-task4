import { useGetProductsQuery } from "../sevices/productsApi";
import ProductCard from "./ProductCard";

export default function ProductContainer() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return <p className="text-gray-500">Məhsullar yüklənir...</p>;
  }

  if (isError) {
    return (
      <p className="rounded-lg bg-red-50 p-4 text-red-700">
        Xəta baş verdi. Məhsulları yükləmək mümkün olmadı.
      </p>
    );
  }

  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}