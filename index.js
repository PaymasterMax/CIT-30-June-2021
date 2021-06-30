let localStore = localStorage;
let signup_button = document.querySelector(".signup");
let login_button = document.querySelector(".login");
let container = document.querySelector(".wrapper");

const reset_dom = ()=>{
  container.innerHTML = "";
}

const build_login_form = ()=>{
 // title of the form
  let title = document.createElement("h1")
  title.innerHTML = "login to our page to get a better expierience."
  container.appendChild(title);

  // adding form
  let form = document.createElement("form");
  form.setAttribute("method","POST");
  form.setAttribute("action","");
  form.classList.add("form")

  // error label
  let error_label = document.createElement("p")
  error_label.classList.add("error_label")
  form.appendChild(error_label)

  // input fields email.
  let email = document.createElement("input");
  email.setAttribute("placeholder","Enter your address");
  email.setAttribute("type","email");
  email.classList.add("email");

  form.appendChild(email)

  // password input field
  let password = document.createElement("input");
  password.setAttribute("placeholder","Enter your password")
  password.setAttribute("type","password");

  form.appendChild(password)

  // submit button
  let submit_button = document.createElement("button")
  submit_button.setAttribute("type","submit");
  submit_button.innerHTML = "login"
  submit_button.classList.add("btn")
  form.appendChild(submit_button)

  container.appendChild(form)
}
const handle_form = ()=>{
 let all_fields = document.querySelectorAll("input");
 let error_label = document.querySelector(".error_label");
 if (all_fields[0].value=="" || all_fields[1].value =="" ) {
   error_label.innerHTML = "All the fields must be filled.";
   return
 }
 let response = localStore.getItem(all_fields[0].value);
 if (!response) {
    error_label.innerHTML = "No user with that email was found.";
    return
 }

 // TODO finish later
}

const build_signup_form = ()=>{
  let form = document.createElement("form")
  form.setAttribute("action","");
  form.setAttribute("method","POST")
  form.classList.add("form")

  let title = document.createElement("h1")
  title.innerHTML = "Signup to the application";
  container.appendChild(title)

  let error_label = document.createElement("p")
  error_label.classList.add("error_label");
  form.appendChild(error_label)

  let email = document.createElement("input");
  email.setAttribute("placeholder","Enter your address");
  email.setAttribute("type","email");
  email.classList.add("email");
  form.appendChild(email)

  let fname = document.createElement("input");
  fname.setAttribute("placeholder","Enter your first name");
  fname.setAttribute("type","text");
  form.appendChild(fname)

  let lname = document.createElement("input");
  lname.setAttribute("placeholder","Enter your last name");
  lname.setAttribute("type","text");
  form.appendChild(lname)

  let password_field = document.createElement("input");
  password_field.setAttribute("placeholder","Enter your password");
  password_field.setAttribute("type","password");
  form.appendChild(password_field)

  let confirm_password_field = document.createElement("input");
  confirm_password_field.setAttribute("placeholder","Confirm your password");
  confirm_password_field.setAttribute("type","password");
  form.appendChild(confirm_password_field)

  let submit_button = document.createElement("button")
  submit_button.classList.add("btn");
  submit_button.setAttribute("type","submit");
  submit_button.innerHTML = "sign up"

  form.appendChild(submit_button);

  container.appendChild(form)
}
login_button.addEventListener("click",(e)=>{
  reset_dom();
  build_login_form();
  let login_here = document.querySelector("button")
  login_here.addEventListener("click",(e)=>{
   e.preventDefault();
   handle_form();
  })
})

signup_button.addEventListener("click",(e)=>{
  reset_dom();
  build_signup_form();
  let signup_here = document.querySelector("button");
  signup_here.addEventListener("click",(e)=>{
    e.preventDefault();
  })
})
