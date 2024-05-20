var quotes = [

     ` <p>“Be yourself; everyone else is already taken.”</p>
       <p>-- Oscar Wilde </p>` ,

       ` <p>“So many books, so little time.”</p>
       <p>--  Frank Zappa  </p>` ,

       ` <p>A room without books is like a body without a soul.”</p>
       <p>-- Marcus Tullius Cicero</p>` ,

       ` <p>“Be the change that you wish to see in the world.”</p>
       <p> ― Mahatma Gandhi
       </p>` ,

       ` <p>“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.””</p>
       <p> ― J.K. Rowling, Harry Potter and the Goblet of Fire</p>` ,

       ` <p>“If you tell the truth, you don't have to remember anything.” </p>
      
       <p>― Mark Twain </p>` ,

       ` <p>“A friend is someone who knows all about you and still loves you.”</p>
       <p> ―  Elbert Hubbard</p>`,

        
      
    
   
];



function getQuote() {

   
    var IndexQuotes = Math.floor(Math.random() * quotes.length);
    
    var ViewQuote = quotes[IndexQuotes];
    
 
    
    document.getElementById('quote').innerHTML=ViewQuote

  }
  