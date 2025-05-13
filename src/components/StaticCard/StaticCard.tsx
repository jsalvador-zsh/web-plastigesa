import { FaIndustry, FaStore, FaTruck, FaUsers, FaAward, FaRecycle } from "react-icons/fa";

export const features = [
  {
    icon: FaIndustry,
    title: "Somos fabricantes",
    description: "Utilizamos la mejor materia prima para la fabricación de bolsas.",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: FaStore,
    title: "Tienda de ventas",
    description: "Ventas al por mayor y menor con atención personalizada.",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: FaTruck,
    title: "Distribución",
    description: "Flota propia para entregas a clientes importantes.",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    icon: FaUsers,
    title: "Equipo experto",
    description: "Profesionales con más de 20 años de experiencia.",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: FaAward,
    title: "Calidad garantizada",
    description: "Certificaciones de calidad en todos nuestros procesos.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    icon: FaRecycle,
    title: "Sostenibilidad",
    description: "Línea de productos biodegradables y reciclables.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100"
  }
];

export default function StaticCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div 
          key={index}
          className={`relative p-6 rounded-md shadow-md overflow-hidden ${feature.bgColor} transition-all duration-300 hover:scale-[1.02] hover:shadow-md`}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            rotate: `${index % 2 === 0 ? '1deg' : '-1deg'}`
          }}
        >
          <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, currentColor 0%, transparent 70%)' }}></div>
          <feature.icon className={`text-4xl mb-4 ${feature.color}`} />
          <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
          <p className="text-foreground/80">{feature.description}</p>
          <div className={`absolute bottom-4 right-4 text-xs font-medium px-2 py-1 rounded-full ${feature.color} ${feature.bgColor}`}>
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
}