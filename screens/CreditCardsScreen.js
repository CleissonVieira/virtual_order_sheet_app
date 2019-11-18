import React, { useState, useEffect }  from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content, Header, List, ListItem, Text, Body, Right } from 'native-base'
import { FlatList } from 'react-native-gesture-handler'
import axios from 'axios';
import backendApi from '../services/backendApi';
import CreditCard from 'react-native-credit-card';

export default function CreditCardsScreen() {
    const [cards, setCards] = useState([])

    const mock = [
      {
        name: 'wesley',
        email: 'wesley.burlanI@hub2b.com.br',
        password: 'D422D97190D0DA72CA0EB0C36C1244B5',
        cpf: '44842704802',
        phone: 'string',
        credit_cards: [
          {
            card_number: "4449911424784865",
            expiring_date: "02/27",
            name: "Wesley",
            last_name: "Burlani",
            cpf_holder: "44842704802"
          }
        ]
      }
    ]

    const getCreditCards = () => {
        setCards(mock[0].credit_cards)
        return
        backendApi.get("/api/client")
        .then(result => { console.log(result); setCards(result.data[0].credit_cards)})
        .catch(err => console.log(err));
    }

    useEffect(getCreditCards, [])

    return (
      <Container>
      <Content>
        <List>
          {cards.map(card => (
            <ListItem key={card.card_number}>
              <Body>
              <CreditCard
                number={card.card_number}
                name={card.name + " " + card.last_name}
                expiry={card.expiring_date}/>
              </Body>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  )
}

CreditCardsScreen.navigationOptions = {
  title: "Cartões",
}

