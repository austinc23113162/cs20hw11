var http = require('http');
var fs = require("fs");
var url = require('url');
var MongoClient = require("mongodb").MongoClient;
var connStr = "mongodb+srv://austinchang:cs20password@cluster0.es2brva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

var port = process.env.PORT || 3000;
http.createServer(function (req, res) {   
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write ("Success!  This app is deployed online");
    res.end();
    /*var urlObj = url.parse(req.url, true);
    var path = urlObj.pathname;
    if (path == "/" || path == "/home") {
        //display individual file pages in a multi-page app
        file = 'form.html';
        fs.readFile(file, function(err, txt) {
            if(err) {
                console.log("Error: " + err);
            }
            res.write(txt);
            res.end();      
        });
    }
    else if (path == "/process") {         
        var qObj = url.parse(req.url, true).query;
        var input = qObj.name;

        display(input, qObj.choice);
        res.end();
    } 
    else {
        res.write ("Unknown page request");
        res.end();      
    }*/
}).listen(port);

/*
client = new MongoClient(connStr);
async function display(input, choice) {
    try {
        await client.connect();
        var dbo = client.db("Stock");
        var coll = dbo.collection("PublicCompanies");

        if(choice == "company-name") {
            var theQuery = {company: input}
        }
        else if(choice == "ticker-symbol") {
            var theQuery = {ticker: input}
        }
        var result = await coll.find(theQuery).toArray();
        await result.forEach(function(item) {
            console.log("Name: " + item.company + "\nStock Ticker: " + item.ticker + "\nPrice: " + item.price + "\n");
        })

    }
    catch(err) {
        console.log("Error: " + err);
    }
    finally {
        client.close();
    }
}*/
