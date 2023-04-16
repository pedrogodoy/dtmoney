import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(response => console.log(response))
  }, []);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Desenvolvimento de site
            </td>
            <td className="deposit">
              R$ 12.000,00
            </td>
            <td>Desenvolvimento</td>
            <td>20/12/2022</td>
          </tr>
          <tr>
            <td>
              Aluguel
            </td>
            <td className="withdraw">
              - R$ 1.000,00
            </td>
            <td>Desenvolvimento</td>
            <td>10/12/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}