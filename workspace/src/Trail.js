import React from 'react';
import './App.css'
import { slide as Menu } from 'react-burger-menu';

export default function prop()
{
  return (
   <div>
     
     <Menu className="trl">
      <a >
        Home
      </a>

      <a >
        Laravel
      </a>

      <a >
        Angular
      </a>
      </Menu>
      <a >
        React
      </a>

      <a >
        Vue
      </a>

      <a>
        Node
      </a>
  </div>
  )
}