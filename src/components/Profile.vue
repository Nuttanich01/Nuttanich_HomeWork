<template>
  <div>
    <h1 class="profile_text">Profile</h1>
    <br />
    <div class="profile_img">
      <img class="img" src="../assets/1001273.jpg" alt="profile" />
    </div>
    <br />
    <ul>
      <li class="profile_subtext">
        <span class="profile_text">Name : </span>Nuttanich Wangsotorn
      </li>
      <br />
      <li class="profile_subtext">
        <span class="profile_text">Ago : </span>21 years old
      </li>
      <br />
      <li class="profile_subtext">
        <span class="profile_text">Education : </span>Thai-Nichi Institute Of
        Technology - Computer Engineering
      </li>
      <br />
      <li class="profile_subtext">
        <span class="profile_text">Programming Skill : </span>Python, SQL, C,
        C++ ,Basic C# ,Basic java
      </li>
      <br />
    </ul>
  </div>
</template>

<style>
img {
  width: 250px;
  height: 250px;
  border: 2px solid palevioletred;
  border-radius: 50%;
}
.profile_subtext {
  color: white;
}
.profile_text {
  font-weight: bold;
  text-align: center;
  color: white;
}
.profile_img {
  width: 258px;
  display: block;
  margin: 0 auto 0 auto;
  overflow: hidden;
}
</style>