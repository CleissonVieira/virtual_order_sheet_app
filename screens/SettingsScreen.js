import React from 'react'
import { Container, Content, Header, List, ListItem, Text, Body, Right } from 'native-base'

export default function SettingsScreen() {
  const products = [
    {
      id: 1,
      name: 'Cerveja',
      price: 6.90,
    }, {
      id: 2,
      name: 'Caipirinha',
      price: 20.00,
    }, {
      id: 3,
      name: 'Refrigerante',
      price: 5.00,
    },
  ]
  
  return (
    <Container>
      <Content>
        <List>
          {products.map(product => (
            <ListItem key={product.id}>
              <Body>
                <Text>{product.name}</Text>
              </Body>
              <Right>
                <Text>
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                </Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  )
}

SettingsScreen.navigationOptions = {
  header: null,
  title: 'Cardápio',
  headerVisible: false,
}