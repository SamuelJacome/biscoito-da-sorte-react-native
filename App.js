import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity } from 'react-native'; 

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      textoFrase: '',
      img: require('./src/biscoito.png')
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);


    this.frases = [
      'Siga os bons e aprenda com eles',
      'Não é errado, se vc está fazendo o que é certo',
      'Peça perdão sempre',
      'Acredite em milagres, mas não dependa deles',
      'A maior barreira para o sucesso é o medo do fracasso'
    ]
  }
  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()* this.frases.length )
    this.setState({
      textoFrase:  ' "' + this.frases[numeroAleatorio] +'"',
      img: require('./src/biscoitoAberto.png')
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Image 
          source = {this.state.img}
          style={styles.image}
        />   
        
        <Text style = {styles.textoFrase}> {this.state.textoFrase} </Text>

        <TouchableOpacity style = {styles.botao} onPress = {this.quebraBiscoito}>
          <View style = {styles.btnArea}>
            <Text style = {styles.btnTexto}> Quebrar Biscoito </Text>
          </View>
        </TouchableOpacity>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    width: 250,
    height: 250,  
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});



export default App;