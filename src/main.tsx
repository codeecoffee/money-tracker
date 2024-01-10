import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import {Model, createServer} from 'miragejs'

createServer({
  models:{
    transaction: Model
  },
  
  seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Example 1',
            type:'deposit',
            category:"Dev",
            amount: 600,
            createdAt: new Date('2024-01-05 09:00:00'),
          },
          {
            id: 2,
            title: 'Example 2',
            type:'withdraw',
            category:"Rent",
            amount: 1100,
            createdAt: new Date('2024-01-06 11:00:00'),
          }

        ]
      })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions',()=>{
      return this.schema.all('transaction')
      
    })
    
    this.post('/transactions',(schema, request)=>{
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
  // <React.StrictMode>
  // </React.StrictMode>,
)
