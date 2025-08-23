import React from 'react';
import { Link } from 'remix';  
import Header from '../components/Header';  
import ItemList from '../components/ItemList';  
import FooterLocation from '../components/FooterLocation';  



export const meta = () => {
  return [
    { title: 'Krakonošův bufet' },  
    { name: 'description', content: 'Nejlepší bufet v Krkonoších' }, 
  ];
};


export default function Index() {
  return (
    <div>
      <Header />  {/}
      <ItemList />  {}
      <FooterLocation />  {}
    </div>
  );
}
