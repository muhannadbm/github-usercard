import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

function Createuser({avatar_url, name,  login, location, html_url, followers, following, bio}){
const card = document.createElement('div')
card.classList.add('card')
const myimg = document.createElement('img')
myimg.src =avatar_url
const card_info = document.createElement('div')
card_info.classList.add('card-info')
const real_name = document.createElement('h3')
real_name.classList.add('name')
const username = document.createElement('p')
username.classList.add('username')
const user_location = document.createElement('p')
const profile = document.createElement('p')
const github_url = document.createElement('a')
const followerscount = document.createElement('p')
const followingcount = document.createElement('p')
const user_bio = document.createElement('p')


card.appendChild(myimg)
card.appendChild(card_info)
card_info.appendChild(real_name)
card_info.appendChild(username)
card_info.appendChild(user_location)
card_info.appendChild(profile)
profile.appendChild(github_url)
card_info.appendChild(followerscount)
card_info.appendChild(followingcount)
card_info.appendChild(user_bio)
real_name.textContent = name
username.textContent = login
user_location.textContent = `Location: ${location}`
profile.textContent = `Profile: `
github_url.href = html_url
github_url.textContent = html_url
followerscount.textContent = `Followers: ${followers}`
followingcount.textContent = `Followers: ${following}`
user_bio.textContent = `Bio: ${bio}`

}

axios.get('https://api.github.com/users/muhannadbm').then(res => {
  console.log(res.data.id)
  res.ava
}).catch(err => {
  console.log(err)
}).finally(() => console.log('finally reached'))


