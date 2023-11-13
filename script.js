function showMenu() {
    document.getElementById("nav").innerHTML = `
    <div class="nav">
    <div class="logo">
      <img src="./images/logo.svg" alt="logo">
    </div>
   <nav id="drop">
   <div class="ul">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careeer</a></li>
        </div>
   </nav>
  
    <button class="re">Request Invite</button>
    <button class="menu">
    <a href="" onclick="goBack()"> 
      <img src="./images/icon-close.svg" alt="icon-close">
      </a>
    </button>
        `
}