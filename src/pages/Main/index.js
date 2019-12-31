import React, { useState, useEffect } from 'react';

import logo from '../../assets/footerLogo.png';
import api from '../../services/api';

import { Container } from './styles';

export default function Main() {
  const [data, setData] = useState([]);


  useEffect(() => {
    async function fecthData() {
      const result = await api.get('/oportunidades.json');

      setData(result.data);
    }

    fecthData();

  }, []);

  return (
    <Container>
      <header>
        <h3>Vagas: Trampo.co & Lorem Ipsum SID</h3>
      </header>
      <ul>

        {data.map(trampo => (
          <a href={trampo.opportunity.permalink} target="_blank" rel="noopener noreferrer">
            <li key={trampo.opportunity.id}>
              <div>
                <h3>{trampo.opportunity.name}</h3>
                <p>{trampo.opportunity.company_name}</p>
              </div>
            </li>
          </a>
        ))}

      </ul>
      <footer>
        <img src={logo} alt="Logo Footer" />
      </footer>
    </Container>
  );
}
