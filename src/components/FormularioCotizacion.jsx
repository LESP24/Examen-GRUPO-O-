import React from 'react';
import './FormularioCotizacion.css';

function FormularioCotizacion() {
  return (
    <div className="form-container">
      <h2 className="form-title">Wz-Code</h2>
      <p className="form-subtitle">Obtén tu cotización personalizada en segundos.</p>
      
      <div className="section">
        <h3 className="section-title">Información de contacto</h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="Nombre"
            className="input-field"
          />
          <input
            type="email"
            placeholder="Correo"
            className="input-field"
          />
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Información adicional</h3>
        <div className="input-group">
          <input
            type="number"
            placeholder="Cantidad de productos"
            className="input-field"
          />
          <select className="input-field">
            <option>Seleccionar</option>
            <option>Entrega estándar</option>
            <option>Entrega express</option>
          </select>
        </div>
      </div>

      <div className="terms-container">
        <input type="checkbox" id="terms" className="checkbox" />
        <label htmlFor="terms">Acepto los términos y condiciones</label>
      </div>

      <button className="submit-button">
        Enviar cotización
      </button>
    </div>
  );
}

export default FormularioCotizacion;