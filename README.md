# Keep-Watching
Keep-Watching is a movie recommendation and review app build using React for the front-end, express for the back-end, 
flask for handelling the recommendations and similar movies section, mongoDB for the database<br />
## Here is the final website : https://movie-node.onrender.com/

This project uses SurpriseLib for dealing with Cosine similarity based nearest neighbours algorithm for generating recommendations. <br />
For implimentation purpose dummy users are created using moviewlens 100K dataset. Each user has at least 20 movie ratings. 


## Admin View
<hr/>


##  User's page
  <img src="https://github.com/yashodeepchikte/Keep-Watching/blob/master/Images/userpage.PNG" /><br/>
   
  <hr/>




# Setup And Usage
Clone the repo or download and unzip it <br />
Use command propmt to navigate to the extracted folder<br />
Run <br />
<code> npm install </code><br />
navigate to the Client folder and run <br />
<code> npm install </code> <br />

For Developement <br />

#### For deployment npm was used so avoid using yarn to avoid the .loc file conflicts in deployment

in the root folder<br/>
<code>
// in  the root folder in the cmd run <br/>
npm run dev   <br/>// this will run both the client and the server in the same command prompt
</code> <br />
Otherwise to run the client and server seperately <br />
in the root folder run<br />
<code>nodemon server.js</code><br />
in another command prompt in the client folder run<br />
<code>npm start </code><br />

# Login Credentials
You can use either one of these methods 
<ul>
<li>
you can login with your Google or GitHub account
</li>
<li>
you can Sign up using any valid email (dosent have to be a valid email)
</li>
<li>
you can use this dummy user<br />
email : abcd@gmail.com <br />
Password : 123456
</li>
</ul>
## To be done 
<ul>
  <li>Admin view, admin should be able to see all the activity on the website</li>
  <li>At this point styling is a mess it need to be counverted to a class oriented fashon like bootstrap unkine what we have now that is componenet based styling</li>
  <li>Optimize the manifest files ot work proprly with Add to homescreen progressive app</li>
  <li>Implement the notifications </li>
  <li>Implement chat with other users </li>
</ul>
##### PS:- i don't own or claim the egg logo used for the favicon it was copied from google images

