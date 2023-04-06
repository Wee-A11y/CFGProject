import React from "react";

export default function Form(){

    return (
        <div>
            <head>
            <   title>Reservation</title>
            </head>
            <body id="form-overlay">
                <form id="form" action="https://formsubmit.io/send/alinaka2014@aol.co.uk" method="POST">
                    <h3 class="form-detail" id="form-text">Type your name, email, activity and date:</h3>
                    <label for="name">Name:</label>
                    <input class="form-detail" type="text" id="name" name="name" placeholder="Enter your name" required/>
                    <label for="email">Email:</label>
                    <input class="form-detail" type="email" id="email" name="email" placeholder="Enter your email" required/>
                    <label for="activity">Activity:</label>
                    <select class="form-detail" id="class" name="class">
                        <option value="Unicorn Riding">Unicorn Riding</option>
                        <option value="Haggis Hunting">Haggis Hunting</option>
                        <option value="Do Nothing Class">Do Nothing Class</option>
                    </select>
                    <label for="date">Date:</label>
                    <input class="form-detail" type="date" id="date" name="date" placeholder="Enter the date" required/>
                    <br/>
                    <input id="form-button" type="submit" value="Send"/>
                    
                </form>
            </body>  
        </div>
    )
};
