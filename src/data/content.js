// Datos "quemados" (mock) para la demo de la landing de XENCO.
// Reemplaza cada bloque cuando tengas el contenido/imágenes reales.

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Conocimiento', href: '#conocimiento' },
  { label: 'Contacto', href: '#contacto' },
];

// Todo lo relacionado con políticas va en la navegación vertical (sidebar kinetic).
export const policyLinks = [
  { label: 'SGSST', href: '#sgsst' },
  { label: 'SIG', href: '#sig' },
  { label: 'Registros', href: '#registros' },
  { label: 'Política de Seguridad y Salud en el Trabajo', href: '#politicas' },
  { label: 'Política de Prevención de Consumo de Alcohol y SPA', href: '#politicas' },
  { label: 'Política de Tratamiento de Datos Personales', href: '#politicas' },
  { label: 'Política del Sistema Integrado de Gestión', href: '#politicas' },
  { label: 'Política General de Seguridad de la Información', href: '#politicas' },
  { label: 'Política de Prevención de Acoso Sexual', href: '#politicas' },
];

export const mission =
  'En XENCO desarrollamos e implementamos soluciones de software empresarial a través de un proceso continuo de innovación, que permite a nuestros clientes optimizar sus procesos. Con esto contribuimos al bienestar de nuestros colaboradores, garantizando nuestra competitividad, solidez y crecimiento.';

export const vision =
  'Para el año 2030, ser un proveedor líder de software empresarial especializado, con cobertura nacional, reconocido por la calidad, la mejora continua y la seguridad de la información, manteniendo y fortaleciendo plataformas seguras, confiables y tecnológicamente vigentes.';

export const values = [
  'Compromiso con el cliente',
  'Responsabilidad social',
  'Calidad',
  'Innovación',
  'Integridad y ética',
];

export const pillars = [
  'Mejorar eficiencias',
  'Mantener clientes actuales',
  'Expansión del mercado',
  'Seguridad de la información',
];

// Clientes reales de XENCO para el slider (solo logos, sin testimonios asociados).
// Coloca cada archivo de logo en `public/logos/` con el nombre indicado en `logo`
// (formato SVG o PNG con fondo transparente, idealmente monocromo o full color).
export const clients = [
  { name: 'Flamingo', logo: 'src/assets/logos/Group_2402.png' },
  { name: 'Yamaha Motors Finance', logo: 'src/assets/logos/1693241700yamaha-logo-transparent.png' },
  { name: 'EPM', logo: 'src/assets/logos/Epm-Nuevo-Logo-Vector.svg-.png' },
  { name: 'Ruta N', logo: 'src/assets/logos/logo_ruta.png' },
  { name: 'Plaza Mayor', logo: 'src/assets/logos/Logo_PlazaMayor_Medellín.png' },
  { name: 'Tecnológico de Antioquia', logo: 'src/assets/logos/TDEA.png' },
  { name: 'Metrosalud', logo: 'src/assets/logos/Logo-ESE-Metrosalud-Redes-scaled-e1757352258926-1536x804.jpg' },
];

export const services = [
  {
    title: 'ERP Empresarial a la medida',
    description:
      'Planeación de recursos empresariales adaptada a los procesos reales de tu compañía, sin módulos innecesarios.',
  },
  {
    title: 'Plataformas SaaS personalizadas',
    description:
      'Software como servicio diseñado desde cero para las necesidades específicas de cada cliente, con escalabilidad garantizada.',
  },
  {
    title: 'Gestión SGSST digital',
    description:
      'Digitalización del Sistema de Gestión de Seguridad y Salud en el Trabajo, con trazabilidad y reportes en tiempo real.',
  },
  {
    title: 'Consultoría SIG',
    description:
      'Acompañamiento en la implementación y mantenimiento del Sistema Integrado de Gestión bajo estándares vigentes.',
  },
];

// Testimonios genéricos de demo — deliberadamente NO atribuidos a los clientes
// reales del slider (Flamingo, Yamaha Motors Finance, EPM, Ruta N, Plaza Mayor,
// Tecnológico de Antioquia), ya que esas son citas inventadas para la maqueta.
// Si más adelante tienes testimonios reales de alguno de ellos, reemplázalos aquí.
export const testimonials = [
  {
    quote:
      'La plataforma que XENCO desarrolló para nosotros redujo nuestros tiempos administrativos a la mitad en menos de un año.',
    author: 'Gerente de Operaciones',
    company: 'Empresa del sector servicios',
  },
  {
    quote:
      'El acompañamiento fue cercano en cada etapa del proyecto y el resultado se ajustó exactamente a lo que necesitábamos.',
    author: 'Directora de TI',
    company: 'Empresa del sector industrial',
  },
  {
    quote:
      'Pasamos de procesos manuales dispersos a un solo sistema confiable. El soporte post-implementación ha sido excelente.',
    author: 'Jefe de Calidad',
    company: 'Entidad del sector público',
  },
];

// Placeholder — reemplazar con el equipo real (nombres, cargos, fotos).
export const team = [
  { name: 'Juliana', role: 'Directora administrativa', image: "src/assets/fotos/juliana.png" },
  { name: 'Santi', role: 'Programador', image: "src/assets/fotos/santi.png" },
  { name: 'Luz Marina', role: 'Gerente general', image: "src/assets/fotos/inge.png" },
  { name: 'Viviana', role: 'Coordinadora de proyectos', image: "src/assets/fotos/vivi.png" },
];

export const contact = {
  email: 'contacto@xenco.com.co',
  phone: '+57 300 000 0000',
  address: 'Medellín, Colombia',
};
