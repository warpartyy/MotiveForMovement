import { products } from "@/lib/content/products";

export function ProductsPage() {
  return (
    <main className="products-page">
      <div className="container">
        <div className="products-header">
          <h1>Our Work</h1>

          <p>
            Motive For Movement develops software, resources, and
            operational tools that help organizations and communities
            move forward.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article
              key={product.name}
              className="product-card"
            >
              <span className="product-status">
                {product.status}
              </span>

              <h2>{product.name}</h2>

              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}