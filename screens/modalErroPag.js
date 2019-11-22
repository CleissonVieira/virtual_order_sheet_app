import React, { Component } from "react";
import Modal from "react-native-modal";
import { Container, Content, Button, Text, View } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
 
export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <Container>
        <Content >

            <Button title="Show modal" onPress={this.toggleModal} />
            <Modal isVisible={this.state.isModalVisible}>
              <View style={{ height: 180, backgroundColor: 'white', borderRadius: 10 }}>
                <Icon
                  name='exclamation-triangle'
                  color='#DC0E11'
                  size={60}
                  style={{ textAlign: 'center', padding: 18 }} 
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
                  Erro no pagamento.
                </Text>
                <Button transparent full onPress={this.toggleModal}>
                  <Text style={{ color: 'black' }} >
                    Ok
                  </Text>
                </Button>
              </View>
            </Modal>
          
        </Content>
      </Container>
      
    );
  }
}