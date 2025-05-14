import { Transition } from "@components/Transition/Transition";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import { FaIdCard } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export function FloatedForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ruc: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir el cuerpo del mensaje
    const subject = `Consulta de ${formData.name}${formData.ruc ? ` (RUC: ${formData.ruc})` : ''}`;
    const body = `Nombre/Empresa: ${formData.name}
  ${formData.ruc ? `RUC: ${formData.ruc}\n` : ''}Correo electrónico: ${formData.email}

  Mensaje:
  ${formData.message}`;

    // Codificar los componentes para URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Abrir el cliente de correo predeterminado
    window.location.href = `mailto:comercial@plastigesa.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <Transition>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full p-6 bg-white/90 rounded-xl shadow-md backdrop-blur-md border border-gray-100"
      >
        <div className="mb-6 text-center">
            <h3 className="mb-2 text-2xl font-semibold">
          ¿Listo para empezar?
        </h3>
        <span className="text-muted">Envíanos un mensaje</span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FiUser className="text-muted" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                placeholder="Nombre / Empresa"
                required
              />
            </div>
            
            <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaIdCard className="text-muted" />
            </div>
            <input
              type="tel"
              name="ruc"
              value={formData.ruc}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
              placeholder="RUC"
            />
          </div>
          </div>
          
          <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FiMail className="text-muted" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                placeholder="Correo electrónico"
                required
              />
            </div>
          
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <FiMessageSquare className="text-muted" />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
              placeholder="Tu mensaje..."
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full button-base"
          >
            Enviar mensaje
          </motion.button>
        </form>
      </motion.div>
    </Transition>
  );
}