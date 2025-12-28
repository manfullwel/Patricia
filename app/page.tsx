
"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Ship, Heart, Home, MapPin, Music, Coffee, Wind } from "lucide-react";
import Confetti from "react-confetti";

// Componente Partícula para o fundo
const Particle = () => {
  const style = {
    position: 'absolute',
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    backgroundColor: 'rgba(236, 72, 153, 0.5)', // Cor rosa com opacidade
    animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
  };
  return <div style={style} />;
};

// Componente do Card de Glassmorphism
const GlassmorphismCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 ${className}`}>
    {children}
  </div>
);


const HeroSection = () => {
    const tornadoPath = "polygon(50% 0%, 85% 100%, 15% 100%)";
    const heartPath = "polygon(50% 25%, 65% 0%, 100% 0%, 100% 40%, 50% 100%, 0% 40%, 0% 0%, 35% 0%)";
  
    return (
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ clipPath: tornadoPath, borderRadius: "0%", rotate: 0, scale: 0.8 }}
          animate={{ clipPath: [tornadoPath, heartPath], borderRadius: "10%", rotate: 720, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-64 h-64 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 flex items-center justify-center text-center p-4"
        >
          <div className="text-white font-bold text-xl">
            The Gem & The Anchor
          </div>
        </motion.div>
      </section>
    );
  };
  
const DaysCounter = () => {
    const [days, setDays] = useState(0);

    useEffect(() => {
        const firstContactDate = new Date("2024-11-22T00:00:00");
        const now = new Date();
        const differenceInTime = now.getTime() - firstContactDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
        setDays(differenceInDays);
    }, []);

    return (
        <section className="py-20 flex justify-center">
            <GlassmorphismCard className="text-center">
                <h2 className="text-5xl font-bold text-white">{days}</h2>
                <p className="text-slate-300 mt-2">dias desde o primeiro contato.</p>
            </GlassmorphismCard>
        </section>
    );
};

const timelineItems = [
    { icon: MessageCircle, title: "Primeiro Contato", text: "O início de tudo." },
    { icon: Ship, title: "O Navio", text: "Uma jornada inesperada." },
    { icon: Heart, title: "A Conexão", text: "Algo especial floresceu." },
    { icon: Home, title: "Cusco", text: "O sonho de um lar." },
];

const Timeline = () => {
    const [activeItem, setActiveItem] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveItem((prev) => (prev + 1) % timelineItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Nossa Jornada</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {timelineItems.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0.3, y: 20 }}
                        animate={{ opacity: activeItem >= index ? 1 : 0.3, y: activeItem >= index ? 0 : 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <GlassmorphismCard className="text-center flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                                <item.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-300">{item.text}</p>
                        </GlassmorphismCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const CuscoSection = () => (
    <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Cusco: A Joia e a Moldura</h2>
        <div className="flex justify-center mb-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-yellow-300 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-slate-900" />
            </div>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassmorphismCard>
                <h3 className="text-xl font-bold text-white mb-2">Montanhas Sagradas</h3>
                <p className="text-slate-300">Nossa casa, um refúgio com a energia dos Andes.</p>
            </GlassmorphismCard>
            <GlassmorphismCard>
                <h3 className="text-xl font-bold text-white mb-2">Vistas Infinitas</h3>
                <p className="text-slate-300">Onde o céu encontra a terra e nossos sonhos encontram o horizonte.</p>
            </GlassmorphismCard>
            <GlassmorphismCard>
                <h3 className="text-xl font-bold text-white mb-2">Nosso Lar</h3>
                <p className="text-slate-300">Onde cada pedra e cada planta conta uma história de amor.</p>
            </GlassmorphismCard>
        </div>
    </section>
);


const realityItems = {
    rain: { icon: Wind, text: "Está chovendo agora. Posso ouvir as gotas batendo na janela." },
    coffee: { icon: Coffee, text: "Café brasileiro forte, sem açúcar. A xícara ainda está quente na minha mão." },
    music: { icon: Music, text: "Alguma música que me faz pensar em você e em Cusco." },
};

const RealityTest = () => {
    const [revealed, setRevealed] = useState<string | null>(null);

    return (
        <section className="py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Carne e Osso</h2>
            <div className="flex justify-center gap-8">
                {Object.keys(realityItems).map((key) => {
                    const item = realityItems[key as keyof typeof realityItems];
                    return (
                        <motion.div key={key} whileHover={{ scale: 1.1 }}>
                            <GlassmorphismCard className="w-32 h-32 flex items-center justify-center cursor-pointer" onClick={() => setRevealed(revealed === key ? null : key)}>
                                <item.icon className="w-12 h-12 text-white" />
                            </GlassmorphismCard>
                        </motion.div>
                    );
                })}
            </div>
            <AnimatePresence>
                {revealed && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="mt-8"
                    >
                        <GlassmorphismCard className="max-w-md mx-auto">
                            <p className="text-white text-lg">{realityItems[revealed as keyof typeof realityItems].text}</p>
                        </GlassmorphismCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const ThoughtsForm = () => {
    const [message, setMessage] = useState("");
    const [plans, setPlans] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [showConfetti, setShowConfetti] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!message) return;
        setStatus("loading");

        try {
            const res = await fetch('/api/plans', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message, plans }),
            });

            if (res.ok) {
                setStatus("success");
                setShowConfetti(true);
                setMessage("");
                setPlans("");
                setTimeout(() => setShowConfetti(false), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className="py-20">
            {showConfetti && <Confetti width={typeof window !== 'undefined' ? window.innerWidth : 0} height={typeof window !== 'undefined' ? window.innerHeight : 0} />}
            <h2 className="text-4xl font-bold text-center text-white mb-12">Deixe sua Marca</h2>
            <GlassmorphismCard className="max-w-xl mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-slate-300 mb-2">Sua Mensagem *</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full bg-slate-900/70 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-pink-500 transition-all"
                            rows={4}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="plans" className="block text-slate-300 mb-2">Planos Concretos (Opcional)</label>
                        <input
                            id="plans"
                            type="text"
                            value={plans}
                            onChange={(e) => setPlans(e.target.value)}
                            className="w-full bg-slate-900/70 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-pink-500 transition-all"
                        />
                    </div>
                    <div className="text-center">
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={status === "loading"}
                            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg hover:shadow-pink-500/50"
                        >
                            {status === "loading" ? "Enviando..." : "Enviar Pensamento"}
                        </motion.button>
                    </div>
                    <AnimatePresence>
                        {status === "success" && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-green-400 text-center mt-4">Mensagem enviada com sucesso!</motion.p>
                        )}
                        {status === "error" && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-400 text-center mt-4">Ocorreu um erro. Tente novamente.</motion.p>
                        )}
                    </AnimatePresence>
                </form>
            </GlassmorphismCard>
        </section>
    );
};


export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (Math.random() < 0.05) {
        const newHeart = { id: Date.now(), x: e.clientX, y: e.clientY };
        setHearts((prev) => [...prev, newHeart]);
        setTimeout(() => {
          setHearts((currentHearts) => currentHearts.filter(h => h.id !== newHeart.id));
        }, 2000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const backgroundStyle = isClient ? {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.15), transparent 80%)`,
  } : {};

  return (
    <main className="bg-slate-900 text-white min-h-screen relative overflow-hidden">
      {/* Efeitos de Fundo */}
      <div className="absolute inset-0 z-0" style={backgroundStyle} />
      {isClient && Array.from({ length: 20 }).map((_, i) => <Particle key={i} />)}
      
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 2 }}
            className="absolute z-10"
            style={{ left: heart.x, top: heart.y, pointerEvents: 'none' }}
          >
            <Heart className="text-pink-500" fill="currentColor" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Conteúdo da Página */}
      <div className="relative z-10">
        <HeroSection />
        <DaysCounter />
        <Timeline />
        <CuscoSection />
        <RealityTest />
        <ThoughtsForm />
      </div>
    </main>
  );
}
