import React from 'react';

const DispositivosEntrada: React.FC = () => {
    
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                {/* Left side: Conteúdo */}
                <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        O que são os <span className="font-extrabold">DISPOSITIVOS DE ENTRADA?</span> 
                    </h2>
                    <p className="mb-4 font-light text-justify">
                        São <span className="font-extrabold">componentes</span> que permitem ao Arduino receber informações do ambiente externo ou da interação do usuário.
                    </p>
                    <p className="mb-4 font-light text-justify"> 
                        Geralmente são subcategorizados em: <span className="font-extrabold">Sensores e Controles</span>
                    </p>
                    <div className="space-y-8">
                        <div>
                            <div className="flex  items-center mb-4 w-10  rounded-full bg-primary-100 lg:w-12 dark:bg-primary-900">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM6 6a1 1 0 0 1-.707-.293l-1-1a1 1 0 0 1 1.414-1.414l1 1A1 1 0 0 1 6 6Zm-2 4H3a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2Zm14-4a1 1 0 0 1-.707-1.707l1-1a1 1 0 1 1 1.414 1.414l-1 1A1 1 0 0 1 18 6Zm3 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Sensores
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-justify">
                                Dispositivos que detectam mudanças físicas e as convertem em sinais elétricos.
                            </p>
                            <ul className="max-w-md space-y-1 text-gray-500 p-2 list-disc list-inside dark:text-gray-400">
                                <li>Sensores de Temperatura</li>
                                <li>Sensores de Luminosidade</li>
                                <li>Sensores de Proximidade</li>
                                <li>Sensores de Toque</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center mb-4 w-10  rounded-full bg-primary-100  lg:w-12 dark:bg-primary-900">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Controles
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-justify">
                                Componentes usados ​​para entrada manual.
                            </p>
                            <ul className="max-w-md space-y-1 text-gray-500 p-2 list-disc list-inside dark:text-gray-400">
                                <li>Potenciômetros</li>
                                <li>Botões de Pressão</li>
                                <li>Teclados</li>
                                <li>Joysticks</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default DispositivosEntrada;