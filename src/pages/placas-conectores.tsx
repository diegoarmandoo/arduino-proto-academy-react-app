import React from 'react';

const PlacasConectores: React.FC = () => {
    
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                {/* Left side: Conteúdo */}
                <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        O que são as <span className="font-extrabold">PLACAS DE PROTOTIPAGEM E CONECTORES?</span> 
                    </h2>
                    <p className="mb-4 font-light text-justify">
                         São usados ​​para <span className="font-extrabold">conectar fisicamente</span> componentes ao Arduino durante o desenvolvimento.
                    </p>
                    <div className="space-y-8">
                        <div>
                            <div className="flex  items-center mb-4 w-10  rounded-full bg-primary-100 lg:w-12 dark:bg-primary-900">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm5.01 1H5v2.01h2.01V8Zm3 0H8v2.01h2.01V8Zm3 0H11v2.01h2.01V8Zm3 0H14v2.01h2.01V8Zm3 0H17v2.01h2.01V8Zm-12 3H5v2.01h2.01V11Zm3 0H8v2.01h2.01V11Zm3 0H11v2.01h2.01V11Zm3 0H14v2.01h2.01V11Zm3 0H17v2.01h2.01V11Zm-12 3H5v2.01h2.01V14ZM8 14l-.001 2 8.011.01V14H8Zm11.01 0H17v2.01h2.01V14Z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Placas e Conectores
                            </h3>
                            <ul className="space-y-1 text-gray-500 p-2 list-disc list-inside dark:text-gray-400">
                                <li>Breadboards/Protoboads</li>
                                <li>Fios de ligação</li>
                                <li>Perfboards</li>
                                <li>Conectores (headers, terminais)</li> 
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default PlacasConectores;