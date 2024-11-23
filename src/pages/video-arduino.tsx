import React from 'react';

const VideoArduino: React.FC = () => {
    
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <iframe 
                    width="1360" 
                    height="615" 
                    src="https://www.youtube.com/embed/79wCnru4Bh4?si=yeqhe8Xv8pJv0phu" 
                    title="🎬 Introdução ao Arduino - Produto Educacional" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                >
                </iframe>
            </div>
        </section>
    );
};

export default VideoArduino;