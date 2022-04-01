# Mutant Games

<img src="./public/Mutant-Games-Logo.jpg" style="max-width: 300px"/>

From the dev team that brought you *Duck Duck Shoe*.

Mutant Games is an open source video game lobby service! Users can create and join lobbies to connect with their friends and chat about their favorite video games.

## Getting Started:

Here are links to the [deployed applcation](https://mutant-games.herokuapp.com/) and a [Trello Board](https://trello.com/b/K7ydDNPv/tmnt) containing planning materials.

To run the project locally:

1. Clone and initiate the [back-end repository](https://github.com/Team-Mutant/Mutant-games-back-end) (following the step-by-step setup guide in the README)

2. Navigate to the directory you want to clone this app into and run the command 

 ```bash 
 git clone git@github.com:Team-Mutant/Mutant-games-front-end.git
 ```

3. After cloning the front-end project directory, run the command 

```bash
touch .env
```

4. Add the following line of code to the .env file you just created.

```bash
REACT_APP_BACKEND_SERVER_URL=http://localhost:3001
```

5. Install all dependencies by running the command 

```bash
npm i
```

6. Spin up the app by running the command 

```bash
npm start
```
## Screenshots:

Home Screen

<img alt="Homepage" src="https://i.imgur.com/XiOlgSb.png" width="600px" >

Log In Screen

<img alt="Lobby Detail View" src="https://i.imgur.com/zt1nUqc.png" width="600px">

## Technologies Used:

This full-stack MERN application was built using:

![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=whit)
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1)
![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=whit)
![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=whit)
![](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=whit)
![](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=whit)
![](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=whit)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=whit)

## Next Steps:

On the next version of Mutant Games, we are excited to introduce real-time communication via Socket.io!  We will also be implementing the ability for users to keep up with their friend's with an "Add Friend" feature.