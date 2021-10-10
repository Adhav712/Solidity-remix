import React from 'react'
import {useState} from 'react'
import Web3 from 'web3'
import './App.css'
import { Hashnotes_ABI, Hashnotes_ADDRESS } from './config'
import Hashnotes from './contracts/Hashnotes.json'

function App() {

  const[message, setmessagevalue, data] = useState('')
  // const[accounts] = useState('')

  async function requestaccouts(){
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts(); 
  }

  async function fetchData() {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
      const Hashnotes = new web3.eth.Contract(Hashnotes_ABI, Hashnotes_ADDRESS)
      try {
        const data = await Hashnotes.methods.get().call()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }
  async function setData() {
    if (typeof window.ethereum !== 'undefined') {
      await requestaccouts()
   
      // var Accounts = require('web3-eth-accounts');
      // var accounts = new Accounts('ws://localhost:8545');
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
        const accounts = await web3.eth.getAccounts(); 
      const Hashnotes = new web3.eth.Contract(Hashnotes_ABI, Hashnotes_ADDRESS)
      const SetData = await Hashnotes.methods.set(message).send({from: accounts[0]})
      fetchData()
    }
  }

return (
   <div>
      <p className="text-center">Welcome To Web3</p>
      <input onChange = {e => setmessagevalue(e.target.value)} placeholder="Add task..."/>
      <input type="submit"  onClick = {setData}/>
      <button type = 'button' onClick = {fetchData}> GetInfo</button>
      <p>Hey this what you typed {data}</p>
   </div>
  );
}
export default App;


  
  // constructor(props) {
  //   super(props)
  //   this.state = { 
  //     account: '' , 
  //     input: 0,
  //     SetData: 0,
  //     Datacall: 0
  //   }
  // }


  // componentDidMount() {
  //   this.loadBlockchainData()
  // }

  // async loadBlockchainData() {
  //   const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    
  //   const accounts = await web3.eth.getAccounts()
  //   this.setState({ account: accounts[0] })
    
  //   const SimpleStorage = new web3.eth.Contract(SimpleStorage_ABI, SimpleStorage_ADDRESS)
  //   this.setState({ SimpleStorage })
    
  //   const Datacall = await SimpleStorage.methods.retrieve().call()
  //   console.log("Success")
  //   this.setState({ Datacall })
    
  //   const SetData = await SimpleStorage.methods.store(this.state.input).send({ from: this.state.account })
  //   this.setState({SetData})
  //   // setDataValue(0)
  //   console.log("Success")
  //   Datacall()

    
  // }

  
  // onInputChange = (event) => {
  //   this.setState({input: event.target.value})
  //   console.log(event.target.value)
  // } 