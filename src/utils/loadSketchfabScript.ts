let isScriptLoaded = false;

export const loadSketchfabScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (isScriptLoaded) {
      resolve();
      return;
    }
    console.log('Carregando Script');
    const script = document.createElement('script');
    script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
    script.onload = () => {
      isScriptLoaded = true; 
      resolve();
    };
    script.onerror = () => reject(new Error('Erro ao carregar a API do Sketchfab!!'));

    document.head.appendChild(script); 
  });
};

