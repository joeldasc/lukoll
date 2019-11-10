import React, { Component } from 'react';

class GenerateFile extends Component {
    
    render() {
        return(
            <div className="lukoll__content lukoll__getinf">
                <div className="lukoll__container">
                    <h1 className="lukoll__title">Generar Archivo</h1>
                    <div className="lukoll__grid">
                        <div className="lukoll__grid__col lukoll__grid__col-6">
                            <h2 className="lukoll__sub-title">Exactus</h2>
                        </div>
                        <div className="lukoll__grid__col lukoll__grid__col-6">
                            <h2 className="lukoll__sub-title">Elvis</h2>
                        </div>
                        <div className="lukoll__grid__col lukoll__grid__col-12">
                            <h2 className="lukoll__sub-title">Historial</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GenerateFile;
