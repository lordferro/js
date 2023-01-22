<form id="form">
      <fieldset>
        <legend>Sign in</legend>  
        <label> Name
          <input type="text" id="inputName" placeholder="name">
        </label>
        <label> password
          <input type="password" id="inputPassword" placeholder="password">
        </label>
      </fieldset>
</form>
 <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js" integrity="sha256-qXBd/EfAdjOA2FGrGAG+b3YBn2tn5A6bhz+LSgYD96k=" crossorigin="anonymous"></script>


     * {
  padding: 0;
  margin: 0;
}

form {  
  width: 200px;
  margin-left: 50px;
  text-align: center;
}

legend {
  font-style: 30px;
}

fieldset {
  border-radius: 10px;
  border-color: lime;

}

form label{
  display: block;
  margin: 10px;
}

form label input {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  border-color: orange;
  padding: 8px;
}

.correct{
  background-color: green;
}

.wrong {
  background-color: red;
}



const form = document.getElementById("form");
const classes = {
    wrong: "wrong",
    correct: "correct",
}
form.addEventListener("input", _.debounce(({ target }) => {
    if (target.value.length <= 3 || target.value.length >= 10) {
        target.classList.add(classes.wrong)
        target.classList.remove(classes.correct)
    } else {
        target.classList.add(classes.correct);
        target.classList.remove(classes.wrong);
    }
},1000))