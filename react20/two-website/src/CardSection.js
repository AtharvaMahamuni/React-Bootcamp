import React from 'react'

import Card from "./Card"

const CardSection = () => {
    return(
        <section className="contact bg-success">
          <div className="container">
          <h2 className="text-white">We love new friends!</h2>
            <div className="row">
              <Card title='My First Custom Card' buttonText='Go man'/>
              <Card title='My Second Custom Card' buttonText='Hey man'/>
              <Card title='My 3rd Custom Card' buttonText='Press Here'/>
        </div>
      </div>
    </section>
    );
}

export default CardSection;