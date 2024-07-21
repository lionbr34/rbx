// pages/like.js

import { useEffect, useState } from 'react';

export default function LikePage() {
    const [code, setCode] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        setCode(code);
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code).then(() => {
            alert('Código copiado para a área de transferência!');
        }).catch(err => {
            alert('Falha ao copiar o código: ' + err);
        });
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Gerador de Código</h1>
            <p>O código está abaixo:</p>
            <p id="code" style={{ fontFamily: 'monospace', background: '#f4f4f4', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>{code}</p>
            <button onClick={copyToClipboard} style={{ marginTop: '10px', padding: '10px 15px', fontSize: '16px', color: '#fff', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Copiar Código</button>
        </div>
    );
}
