var hacked = document.createElement('div');
hacked.style = "position: fixed; width: 80%; height: 250px; border: 4px solid red; color: red; font-size: 40px; z-index: 1; background: #fff; margin: 40px; text-align: center; line-height: 250px;";
hacked.appendChild(document.createTextNode("You've been PWNED"));
document.body.prepend(hacked);
