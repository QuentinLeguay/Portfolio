import React from 'react';

const CVPage: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="/CV/CV_Quentin_Leguay.pdf"
                style={{ width: '100%', height: '100%' }}
                frameBorder="0"
            />
        </div>
    );
};

export default CVPage;