import React, { useState } from 'react';

interface Props {
  onSubmit: (name: string) => void;
}

const NameForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      onSubmit(name.trim());
    }
  };

  return (

    <div className="col-md-7 col-lg-6">
        <h4 className="mb-3">Formulario de estadísticas</h4>
        <form onSubmit={handleSubmit}>
          
          <div className="col-sm-6">
            <label htmlFor="firstName" className="form-label">Nombre</label>
            <input 
                type="text" 
                className="form-control" 
                id="firstName" 
                placeholder="Nombre" 
                onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="col-sm-6 mt-3">
            <button className="w-100 btn btn-primary btn-lg" type="submit">Enviar</button>
          </div>

        </form>
      </div>
  );
};

export default NameForm;
