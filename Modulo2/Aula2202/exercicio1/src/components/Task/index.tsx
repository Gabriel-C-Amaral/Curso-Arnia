/**
 * Tarefa 1 - Crie o tipo TaskProps e faça a tipagem das props abaixo
 * Tarefa 3 - Substitua as tags html pelos styled components criados no arquivo styles.ts
 */

import { TaskType } from "../../App";
import { Container, Button, Title, Text } from "./styles";

type taskProps = {
  title: string;
  description: string;
  onClickDelete?: () => void;
};

const Task = ({ title, description, onClickDelete }: taskProps) => (
  <Container>
    <div>
      <Title>{title}</Title>
      <Button onClick={onClickDelete}>X</Button>
    </div>
    <Text>{description}</Text>
  </Container>
);

export default Task;
