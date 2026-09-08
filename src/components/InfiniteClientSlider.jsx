import { useState } from 'react';
import { motion } from 'framer-motion';
import { clients } from '../data/content';

// Referencia: 21st.dev @ibelick/infinite-slider
// Muestra el archivo de logo de cada cliente (ver `logo` en src/data/content.js
// y colócalos en public/logos/). Si un archivo aún no existe, cae de vuelta al
// nombre en texto para que la maqueta nunca se vea rota.
function ClientLogo({ client }) {
  const [errored, setErrored] = useState(false);

  if (errored || !client.logo) {
    return (
      <div
        className="flex items-center justify-center h-14 min-w-[160px] px-4 rounded-xl border border-xenco-teal/15 bg-white text-xenco-ink/50 font-display font-medium text-sm"
        title={client.name}
      >
        {client.name}
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center h-14 min-w-[180px] px-6 rounded-xl border border-xenco-teal/10 bg-white"
      title={client.name}
    >
      <img
        src={client.logo}
        alt={client.name}
        onError={() => setErrored(true)}
        className="max-h-8 max-w-[120px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
      />
    </div>
  );
}

export default function InfiniteClientSlider() {
  const loop = [...clients, ...clients];

return (
    /* 
       1. w-full o w-screen para forzar ancho completo.
       2. Se ajustó el gradient a 2% y 98% para que los logos no se oculten antes de tiempo 
          y aprovechen todo el ancho visible de la pantalla.
    */
    <div className="relative w-full overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent_0%,black_2%,black_40%,black_98%,transparent_100%)]">
      <motion.div
        className="flex items-center gap-6 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {loop.map((client, i) => (
          <ClientLogo key={client.name + i} client={client} />
        ))}
      </motion.div>
    </div>
  );
}