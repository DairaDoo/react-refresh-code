import React, { useState, useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import Loading from '../components/Loading';

function RootLayout() {
    const navigation = useNavigation(); // Hook para obtener el estado de la navegación
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (navigation.state === 'loading') {
            setIsLoading(true); // Mostrar loader cuando está cargando
        } else {
            setIsLoading(false); // Ocultar loader cuando no está cargando
        }
    }, [navigation.state]);

    return (
        <>
            <MainHeader />
            {isLoading && <Loading />} {/* Mostrar Loading mientras está cargando */}
            <Outlet /> {/* Contenido de la ruta actual */}
        </>
    );
}

export default RootLayout;
