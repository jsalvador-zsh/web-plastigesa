import { useState } from 'react';
import { Transition } from './Transition';

interface Product {
  title: string;
  image: string;
  description: string;
  tag: string;
  features?: string[];
  slug?: string;
}

interface ProductsGridProps {
  products: Product[];
  images: Record<string, any>;
}

export default function ProductsGrid({ products, images }: ProductsGridProps) {
  const [activeFilter, setActiveFilter] = useState('todos');
  
  // Filtrar productos según la categoría seleccionada
  const filteredProducts = products.filter(product => {
    if (activeFilter === 'todos') return true;
    if (activeFilter === 'bolsas') return product.tag === 'Bolsa';
    if (activeFilter === 'cintas') return product.tag === 'Cinta';
    if (activeFilter === 'films') return product.tag === 'Plástico';
    return true;
  });

  return (
    <>
      {/* Filtros por categoría */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          onClick={() => setActiveFilter('todos')}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            activeFilter === 'todos' 
              ? 'bg-green-600 text-white' 
              : 'bg-muted/20 hover:bg-muted/30'
          }`}
        >
          Todos
        </button>
        <button 
          onClick={() => setActiveFilter('bolsas')}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            activeFilter === 'bolsas' 
              ? 'bg-green-600 text-white' 
              : 'bg-muted/20 hover:bg-muted/30'
          }`}
        >
          Bolsas
        </button>
        <button 
          onClick={() => setActiveFilter('cintas')}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            activeFilter === 'cintas' 
              ? 'bg-green-600 text-white' 
              : 'bg-muted/20 hover:bg-muted/30'
          }`}
        >
          Cintas
        </button>
        <button 
          onClick={() => setActiveFilter('films')}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            activeFilter === 'films' 
              ? 'bg-green-600 text-white' 
              : 'bg-muted/20 hover:bg-muted/30'
          }`}
        >
          Films
        </button>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {filteredProducts.map((product) => (
          <Transition>
            <article 
            key={product.title}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-muted/20 hover:-translate-y-1"
          >
            {/* Contenido de la card (igual que antes) */}
            <div className="relative h-60 overflow-hidden">
              <img 
                src={product.image.replace('src/img/', '/img/')} 
                alt={`Imagen del producto ${product.title}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={600}
                height={400}
              />
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-accent/20 text-accent">
                  {product.tag}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{product.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {product.features?.slice(0, 3).map((feature) => (
                  <span key={feature} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-muted/20 text-foreground">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </article>
          </Transition>
        ))}
      </div>
    </>
  );
}