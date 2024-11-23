import React from 'react';

const Prototipacao: React.FC = () => {
    
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                     {/* Left side: Conteúdo */}
                     <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                            O que é <span className="font-extrabold">PROTOTIPAÇÃO?</span> 
                        </h2>
                        <p className="mb-4 font-light text-justify">
                            <span className="font-extrabold">Prototipação</span>  é o processo de criar um modelo simples de um projeto, como se fosse um <span className="font-extrabold">"rascunho"</span> de uma ideia, para testar e ver como ele funciona antes de construir a versão final. Isso ajuda a encontrar problemas e fazer melhorias.
                        </p>
                        <div className="space-y-8">
                            <div>
                                <div className="flex  items-center mb-4 w-10  rounded-full bg-primary-100 lg:w-12 dark:bg-primary-900">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">
                                    Objetivo de Aprendizado
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-justify">
                                    Identificar e compreender o processo de criação e teste de soluções tecnológicas a partir da experimentação, fomentando a resolução de problemas.
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center mb-4 w-10  rounded-full bg-primary-100  lg:w-12 dark:bg-primary-900">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11 21V2.352A3.451 3.451 0 0 0 9.5 2a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 4.04 8.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.017 4.017 0 0 0 2.3 12.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 2 14c.003.24.027.48.072.716a4 4 0 0 0 .235.832c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.285.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 11 21Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 14.5 2a3.451 3.451 0 0 0-1.5.352V21a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 20 17.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z"/>
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">
                                    Exemplo
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-justify">
                                    Imagine que você quer criar uma ponte de papel para sustentar um peso. Primeiro, você faz um protótipo usando tiras de papel para ver qual formato é mais forte antes de construir a ponte final com materiais mais robustos.
                                </p>
                            </div>
                        </div>
                    </div>

                      {/* Right side: YouTube Video */}
                      <div className="flex justify-center">
                        <iframe 
                            className="w-full h-64 md:h-80 lg:h-96"
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/wAlWUYvqUdI?si=stzrkmV-KrcPk14-"
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        >
                        </iframe>
                    </div>    
                </div>
                
               
            </div>
        </section>
    );
};

export default Prototipacao;