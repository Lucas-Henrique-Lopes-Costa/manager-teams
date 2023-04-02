import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  const navigation = useNavigation() 
  
  function handleNew() {
    navigation.navigate("players", { group: "Time A" })
  }
  
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="Crie sua turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da Turma" />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
