import { useEffect, useState } from "react";
import {
  fetchAllUniversities,
  fetchUniversitiesByName,
  Universities,
} from "./services/universities";

/**
 * Tarefa 1 - Preencha o restante do map da tabela, para mostrar os dados de acordo com o cabeçalho da tabela.
 * Para te ajudar, veja o tipo Universities.
 *
 * Tarefa 2 - Faça o input de id name ser um input controlado a partir da lógica de estados name e setName
 *
 * Tarefa 3 - Escreva uma função que chama a função fetchUniversitiesByName (ela está no arquivo services/universities.ts), assim
 * como a função getUniversities chama a função fetchAllUniversities
 *
 * Tarefa 4 - Escreva um useEffect que chamará a função criada na tarefa anterior assim que name possuir pelo menos 4 caracteres,
 * de forma a filtrar a lista de universidades.
 *
 */

function App() {
  const [universities, setUniversities] = useState<Array<Universities>>([]);
  const [name, setName] = useState("");

  const getUniversities = async () => {
    setUniversities(await fetchAllUniversities());
  };

  useEffect(() => {
    getUniversities();
  }, []);

  return (
    <div>
      <label htmlFor="name">Nome da universidade</label>
      <input id="name" />
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Site principal</th>
            <th>Domínio principal</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((university, index) => (
            <tr key={index}>
              <td>{university.name}</td>
              <td>{university.web_pages.join("")}</td>
              <td>{university.domains.join("")}</td>
              <td>{university.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
