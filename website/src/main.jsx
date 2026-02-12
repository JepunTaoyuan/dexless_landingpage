import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { OrderlyConfigProvider } from '@orderly.network/hooks'; // 引入 Provider
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 1. 路由 Provider */}
    <BrowserRouter>
      {/* 2. Orderly 配置 Provider */}
      <OrderlyConfigProvider 
        brokerId="your_broker_id" // 替換為你的 Broker ID，測試可用 "orderly"
        networkId="testnet"       // "testnet" 或 "mainnet"
      >
        <App />
      </OrderlyConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);