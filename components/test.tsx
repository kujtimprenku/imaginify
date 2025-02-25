"use client"

export const Test = () => {

    const handleShare = async () => {
        if (navigator?.share) {
            navigator.share({
                title: "MDN",
                text: "Learn web development on MDN!",
                url: "https://developer.mozilla.org",
            }).then((result) => {
                console.log({result})}).catch((err) => {
                console.log({err})})
        } else  {
            alert('wrong')
        }
    }

    const html = `<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" nonce="ab216c76-7166-4c68-8bfe-3be0eae4183e"></script>
    <style>  </style>
<meta http-equiv="Content-Security-Policy" content=" default-src 'self'; script-src 'self' 'nonce-ab216c76-7166-4c68-8bfe-3be0eae4183e' https://cdnjs.cloudflare.com; style-src 'self' 'nonce-ab216c76-7166-4c68-8bfe-3be0eae4183e' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; "></head>
<body>
    <div class="mockup">
        
<nav class="light-blue lighten-1" role="navigation">
  <div class="nav-wrapper container">
    <a id="logo-container" href="#" class="brand-logo">Logo</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>

<div class="container">
  <div class="row">
    <div class="col s12 m8 offset-m2 l6 offset-l3">
      <div class="card-panel">
        <h4 class="center-align">Login</h4>
        <form>
          <div class="row">
            <div class="input-field col s12">
              <input id="username" type="text" class="validate">
              <label for="username">Username or Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate">
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <label>
                <input type="checkbox">
                <span>Remember me</span>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col s12 center-align">
              <button class="btn waves-effect waves-light" type="submit" name="action">Login
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <a href="#" class="left">Forgot password?</a>
            </div>
            <div class="col s6">
              <a href="#" class="right">Sign up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<footer class="page-footer orange">
  <div class="footer-copyright">
    <div class="container">
    © 2023 Your Company Name
    <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
    </div>
  </div>
</footer>

<!-- Materialize css initialization JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" nonce="ab216c76-7166-4c68-8bfe-3be0eae4183e"></script>
<script src="" nonce="ab216c76-7166-4c68-8bfe-3be0eae4183e">
  document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
  });
</script>

    </div>

</body></html>`
    return (
        <>
            <iframe srcDoc={html} />
            <button onClick={handleShare}>Share</button>
        </>
    )
}