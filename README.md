# newsletter_mail_server

Project uses Nodejs and Express to create Newsletter Email server with MailChimp Api along with signup form.

This email platform helps you manage and talk to your clients, customers, and other interested parties.

Use newsletter services to send out ,at the same time, automated email to your audience,that has subscribed to your newsletter via signup form.

Signup form will submit your info into Nodejs server,then post request with your data will send to api,along with the api key.

This will sign user into our audience,if user already exists it won't signup him again.

It's possible to monitor your audience,check their info (only authorized users).Automatically notify them for an upcoming campaign with messages via email server of MailChimp.

## Stack
+ NodeJS
+ Expresss
+ MailChimp Api


### Run

As project was dockerized,simply execute run.sh script to call docker-compose file to create container and image.

        ./run.sh

Alternatively:

    $ git clone https://github.com/BillXr/newsletter_mail_server.git
    $ cd newsletter_mail_server
    $ npm install # Install Node modules listed in ./package.json
    $ node app.js # Compile and launch on port 3000


