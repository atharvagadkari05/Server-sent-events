# Server-sent-events
Design Pattern - Server Sent Events


To Test this API:

Create an Event Source object in client side or your:

`var sse_source = new EventSource("Your server endpoint url")`


Create a onmessage method which will run whenever server sends an event:

`sse_source.onmessage = console.log`

simultaneously run the server.
