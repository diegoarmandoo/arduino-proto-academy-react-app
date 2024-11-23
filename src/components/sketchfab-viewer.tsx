import React, { useEffect, useRef } from 'react';
import { loadSketchfabScript } from '../utils/loadSketchfabScript';
import { Annotation, model3DAnnotations } from '../utils/annotations'; 

interface SketchfabViewerProps {
    modelID: string;
    onLoad: () => void;
    onViewerReady: () => void;
};

const loadAnnotationsForModel = async (api: any, modelID: string) => {
    const annotations = model3DAnnotations[modelID];
  
    if (!annotations) {
      console.warn(`Não existem anotações para o modelo: ${modelID}`);
      return;
    }
  
    for (const annotation of annotations) {
      try {
        await createAnnotation(api, annotation);
      } catch (error) {
        console.error('EErro ao criar anotação do modelo: ', error);
      }
    }
};

const createAnnotation = (api: any, annotation: Annotation): Promise<void> => {
    return new Promise((resolve, reject) => {
      api.createAnnotationFromScenePosition(
        annotation.position,
        annotation.initialCameraPosition,
        annotation.initialTargetPosition,
        annotation.title,  
        annotation.description,
        (err: Error, index: number) => {
            if (!err) {
                console.log(`Anotação "${annotation.title}" criada no index: ${index}`);
                resolve();
            }
            else{
                reject(new Error(err.message));
            }
        }
      );
    });
};

const registerEventAnnotationMouseEnter = (api: any,modelID: string) => {
    const annotations = model3DAnnotations[modelID];
    api.addEventListener('annotationMouseEnter', function(index:any) {
        api.gotoAnnotation(index,  {preventCameraAnimation: true, preventCameraMove: true});
        api.getMaterialList(function(err:Error, materials:any) {
            if (!err) {
                api.getNodeMap(function(err:Error, nodes:any) {
                    if (!err) {
                        annotations[index].highlight.forEach(highlightObject => {
                            const node = nodes[highlightObject.nodeID];
                            if (node){
                                api.assignMaterial(node, materials[highlightObject.MaterialHLIndex].id);
                            }
                        });
                    }
                }); 
            }
        });
    });
};

const registerEventAnnotationdeMouseLeave = (api: any,modelID: string) => {
    const annotations = model3DAnnotations[modelID];
    api.addEventListener('annotationMouseLeave', function(index:any) {
        api.unselectAnnotation(function(err:Error) {});
        api.getNodeMap(function(err:Error, nodes:any) {
            if (!err) {
                annotations[index].highlight.forEach(highlightObject => {
                    const node = nodes[highlightObject.nodeID];
                    if (node) {
                        api.assignMaterial(node, highlightObject.OriginalMaterialID);
                    }
                });
            }
        });
    });
};

const registerEventViewerReady = (api: any,modelID: string, onViewerReady: Function) => {
    api.addEventListener('viewerready', function() {
        api.createMaterial({
            channels: {
                AlbedoPBR: {
                    color: [1.0, 0.0, 0.0]
                }
            }
        }, (err:Error) => {
            if (!err) {
                loadAnnotationsForModel(api, modelID);
                registerEventAnnotationMouseEnter(api, modelID);
                registerEventAnnotationdeMouseLeave(api, modelID);
                onViewerReady();
            }
        });
    });
};

const SketchfabViewer: React.FC<SketchfabViewerProps> = ({ modelID, onLoad, onViewerReady }) => {
   
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const apiRef = useRef<any>(null); 

    useEffect(() => {
        const initAPISketchfab = async (): Promise<void> => {
            try {
              await loadSketchfabScript();
              const iframe = iframeRef.current; if (!iframe) return;
              const client = new (window as any).Sketchfab('1.12.1', iframe);
              client.init(modelID, {
                annotation: 0,
                annotations_visible: 0,
                camera: 0,
                dnt: 1,
                preload: 0,
                scrollwheel: 1,
                ui_stop: 0,
                ui_theme: 'dark',
                success: function onSuccess(api: any) {
                    apiRef.current = api;
                    api.start();
                    onLoad();
                    registerEventViewerReady(api, modelID, onViewerReady);
                    
                    // Use the Sketchfab API to load a new model in the same iframe
                    apiRef.current.addEventListener('click', function (node:any) {
                        apiRef.current.getCameraLookAt(function(err:Error, camera:any) {
                            console.log('Camera Click'); // [x, y, z]
                            console.log(camera.position); // [x, y, z]
                            console.log(camera.target); // [x, y, z]
                        });
                    }, {
                        pick: 'fast'
                    });
                    
                    console.log(`Modelo ${modelID} Carregado com Sucesso!!`);
                },
                error: function onError() {
                  console.error('Erro ao Carregar o Sketchfab Viewer!!');
                },
              });
            } catch (error) {
              console.error('Erro ao Carregar Sketchfab:', error);
            }
        };
        
        if (iframeRef.current) {
            initAPISketchfab();
        }
    }, [onLoad]);

    
    useEffect(() => {
        if (iframeRef.current) {           
            iframeRef.current.src = `https://sketchfab.com/models/${modelID}/embed?autospin=1&autostart=1&preload=1&ui_theme=dark&dnt=1`;
        }
    }, [modelID]);
    
  
    return (
        <iframe
            ref={iframeRef}
            id="sketchfab-iframe"
            className="w-full h-full flex"
            title={`Sketchfab model ${modelID}`}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            xr-spatial-tracking 
            execution-while-out-of-viewport 
            execution-while-not-rendered
            allowFullScreen
        />
    );
};
  
export default SketchfabViewer;