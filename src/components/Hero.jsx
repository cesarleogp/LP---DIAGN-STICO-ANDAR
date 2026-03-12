import React from 'react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-100/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-100/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-medium text-sm tracking-wide shadow-sm">
                        🚀 O Futuro da sua Empresa Começa Aqui
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
                        Transforme suas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Ideias em Realidade</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Nós ajudamos empresas a crescerem de forma exponencial com soluções de tecnologia de ponta, design inovador e estratégias focadas em conversão real.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:shadow-slate-900/30 transition-all duration-300 transform hover:-translate-y-1">
                            Começar Agora
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
                            Falar com Consultor
                        </button>
                    </div>

                    <div className="mt-14 flex items-center justify-center gap-8 text-sm text-slate-500 font-medium">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Suporte 24/7
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Garantia de 30 dias
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
