import React from 'react';

const benefitCards = [
    {
        title: 'Desempenho Extremo',
        description: 'Nossas soluções são otimizadas para carregar em milissegundos, garantindo que seus clientes nunca esperem.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'group-hover:border-blue-200'
    },
    {
        title: 'Design Responsivo',
        description: 'Uma experiência impecável em qualquer dispositivo, do celular ao desktop, sem perder a qualidade visual.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        border: 'group-hover:border-indigo-200'
    },
    {
        title: 'Alta Conversão',
        description: 'Interface e experiência de usuário projetadas estrategicamente para transformar visitantes em clientes reais.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        color: 'text-purple-600',
        bg: 'bg-purple-50',
        border: 'group-hover:border-purple-200'
    }
];

const Benefits = () => {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-indigo-600 tracking-wider uppercase mb-3">
                        Por que nos escolher?
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Vantagens que Impulsionam seu Negócio
                    </h3>
                    <p className="text-lg text-slate-600">
                        Focamos no que realmente importa: resultados. Construímos plataformas rápidas, seguras e prontas para escalar com o seu sucesso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefitCards.map((benefit, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${benefit.border}`}
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${benefit.bg} ${benefit.color} transition-colors duration-300`}>
                                {benefit.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                                {benefit.title}
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
