// app/routes/index.jsx
import React from 'react';
import ItemList from '../krakonos/ItemList';  // Importování komponenty ItemList
import { useLoaderData } from '@remix-run/react';
import { getMeals } from '../krakonos/api/meals';

// Metadata pro tuto stránku
export const meta = () => {
  return [
    { title: 'Krakonošův bufet' },
    { name: 'description', content: 'Nejlepší bufet v Krkonoších' },
  ];
};

export async function loader() {
  let mealList = "";
  mealList = await getMeals();
  return mealList;
}

// Komponenta pro zobrazení obsahu na kořenové stránce
export default function Index() {
  let mealList = useLoaderData();
  return (
    <div>
      <h1>Vítejte v Krakonošově bufetu!</h1>
      <ItemList /> {/* Zobrazí seznam položek */}
    </div>
  );
}
