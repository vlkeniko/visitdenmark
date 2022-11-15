import React from "react";
import Nav from "../components/nav"

export default function Quiz() {
  return (
    <div>
        <br/>
        <br/>
        <br/>
      <h1>In which city was Hans Christian Andersen born? </h1>
      <div className="answers">
        <div className="answer-cards">Aalborg</div>
        <div className="answer-cards-right">Odense</div>
        <div className="answer-cards">Copenhagen</div>
        <div className="answer-cards">Aarhus</div>
      </div>
      <div>
        Hans Christian Andersen was a Danish author born in the city of Odense
        on the 2nd of April, 1805. He is best remembered for his literary fairy
        tales, such as "The little mermaid", "The snow queen", "The princess and
        the pea" and "The steadfast tin soldier". Andersen spent most of his
        life in Copenhagen and several of the places that were the centre of his
        life can still be visited today. On H.C. Andersens Boulevard you can see
        one of the two statues of the writer in Copenhagen. The other one you
        will find in The King’s Garden. The most famous statue in Copenhagen is
        also linked to H.C. Andersen: The Little Mermaid, which today is a
        significant symbol of Copenhagen.
      </div>
      <Nav/>
    </div>
    
  );
}
