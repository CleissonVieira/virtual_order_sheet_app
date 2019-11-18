import React from 'react'
//import { View } from 'react-native'
import { Content, Container, Form, Item, Input, Label } from 'native-base'

export default function LinksScreen() {
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
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
}

LinksScreen.navigationOptions = {
  title: 'Links',
}