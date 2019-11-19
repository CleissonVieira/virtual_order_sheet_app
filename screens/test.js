<CreditCard style={{marginBottom:10}}
                  number={card_number}/>
                <InputScrollView>
                  <Item floatingLabel>
                    <Label>Número do Cartão</Label>
                    <Input value={card_number} onChangeText={setCardNumber} />
                  </Item>
                  <Item floatingLabel>
                    <Label>Data de Expiração</Label>
                    <Input value={expiring_date} onChangeText={setExpiringDate} />
                  </Item>
                  <Item floatingLabel>
                    <Label>Nome do Títular</Label>
                    <Input value={name} onChangeText={setName} />
                  </Item>
                  <Item floatingLabel>
                    <Label>Sobrenome do Títular</Label>
                    <Input value={last_name} onChangeText={setLastName} />
                  </Item>
                  <Item floatingLabel>
                    <Label>CPF do títular</Label>
                    <Input value={cpf_holder} onChangeText={setCpfHolder} />
                  </Item>
                  <Button block style={{ marginTop: 5 }} primary>
                    <Text> Cadastrar </Text>
                  </Button>
                  <Button block style={{ marginTop: 5 }} title="Hide modal" onPress={()=>setRegisterOn(false)} primary>
                    <Text>Cancelar</Text>
                  </Button>
                </InputScrollView>