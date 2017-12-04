Deploy settings
- to bluehost
 key password: 123Apple//
 host: root@108.179.218.140

 1) Build project locally on your pc
  - open your terminal in project folder, and write command:
    npm run build
  - after that you need to copy 'cert' folder and paste to your build folder 'dist'

 2) Open ssh connection with your server
  - Write following command in terminal :
    ssh -i ~/keys/id_rsa.pem root@108.179.218.140
    cd /home/jgaockmy/www/fmp_front
    rm -rf dist

 3) send files to server
  - open terminal and write:
    scp -i ~/keys/id_rsa.pem -r ./WebstormProjects/fmp_js/dist root@108.179.218.140:/home/jgaockmy/www/fmp_front

 4) deploy process:
 - go to your server , where you have removed dist and write following:
   p2 restart 0 or pm2 start dist/server.js


 calendly settings:

 endpoint: /calendly/create
 description: Need to create weebhook subscription in calendly integration.

 gettings hooks: https://calendly.com/api/v1/hooks
 create weebhook:
 https://calendly.com/api/v1/hooks?
     events[]=invitee.created&
     events[]=invitee.canceled&
     url=${http://jga.ock.mybluehost.me || 'Domain name'}/calendly/create