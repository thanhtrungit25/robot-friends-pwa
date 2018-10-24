import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              id={user.id}
              name={user.name}
              email={user.email}
              key={i}
            />
          )
        })
      }
    </div>
  )
}

export default CardList;
