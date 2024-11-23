import React from 'react';

const ModulosComunicacao: React.FC = () => {
    
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                {/* Left side: Conteúdo */}
                <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        O que são os <span className="font-extrabold">MÓDULOS DE COMUNICAÇÃO?</span> 
                    </h2>
                    <p className="mb-4 font-light text-justify">
                        Esses módulos permitem que o Arduino se <span className="font-extrabold">comunique</span> com outros dispositivos, computadores ou redes.
                    </p>
                    <div className="space-y-8">
                        <div>
                            <div className="flex  items-center mb-4 w-10  rounded-full bg-primary-100 lg:w-12 dark:bg-primary-900">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M15 4H9v16h6V4Zm2 16h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v16ZM4 4h3v16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Módulos
                            </h3>
                            <ul className="space-y-1 text-gray-500 p-2 list-disc list-inside dark:text-gray-400">
                                <li>Módulos Bluetooth</li>
                                <li>Módulos Wi-Fi</li>
                                <li>Módulos RF</li>
                                <li>Módulos GPS</li>
                                <li>Módulos Ethernet</li>
                                <li>Módulos NFC/RFID</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default ModulosComunicacao;