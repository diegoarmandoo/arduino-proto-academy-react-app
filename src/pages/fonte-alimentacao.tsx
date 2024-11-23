import React from 'react';

const FonteAlimentacao: React.FC = () => {
    
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                {/* Left side: Conteúdo */}
                <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        O que são os componentes da <span className="font-extrabold">FONTE DE ALIMENTAÇÃO?</span> 
                    </h2>
                    <p className="mb-4 font-light text-justify">
                        Esses componentes são responsáveis ​​por <span className="font-extrabold">fornecer energia</span> ao Arduino e outros componentes.
                    </p>
                    <div className="space-y-8">
                        <div>
                            <div className="flex  items-center mb-4 w-10  rounded-full bg-primary-100 lg:w-12 dark:bg-primary-900">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z"/>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Fontes
                            </h3>
                            <ul className="space-y-1 text-gray-500 p-2 list-disc list-inside dark:text-gray-400">
                                <li>Baterias</li>
                                <li>Reguladores de voltagem</li>
                                <li>Placas de distribuição de energia</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default FonteAlimentacao;