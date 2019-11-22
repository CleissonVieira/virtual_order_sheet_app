import React from 'react'
//import { View } from 'react-native'
import { Content, Container, Form, Item, Input, Label } from 'native-base'

export default function LoginScreen() {
    return (
      <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Senha</Label>
            <Input secureTextEntry={true}/>
          </Item>
        </Form>

        <Button block style={{ marginTop: 40 }} success iconLeft>
          <Icon name='people' />
          <Text> Entrar </Text>
        </Button>
        <Button block style={{ marginTop: 10 }} primary>
          <Icon name='paper' />
          <Text> Cadastrar </Text>
        </Button>

      </Content>
    </Container>
    );
}

LoginScreen.navigationOptions = {
  title: 'Login',
}