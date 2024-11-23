import React from 'react';
import SketchfabViewer from '../components/sketchfab-viewer';
import { useParams } from 'react-router-dom';

const Model3D: React.FC = () => {

  const { modelID } = useParams<{ modelID: string }>();
  const handleLoad = () => {};
  const handleViewerReady = () => {};

  return (
    <div className="flex-1 flex justify-center items-center h-[80vh]">
       {modelID && <SketchfabViewer modelID={modelID} onLoad={handleLoad} onViewerReady={handleViewerReady}/>}
    </div>
  );
};

export default Model3D;