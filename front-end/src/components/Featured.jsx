import React from 'react';
import CardContainer from './card';
    
function Featured(props) {
    return (
      <section className=" flex gap-2 lg:gap-4 flex-wrap  justify-center pb-20 pt-10">
        {[...Array(4)].map((el, key) => (
          <CardContainer key={key} />
        ))}
      </section>
    );
}

export default Featured;