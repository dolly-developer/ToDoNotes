var inputItem = document.getElementById("input_item");
var inputButton = document.getElementById("btn");
var outputContainer = document.getElementById("item_list");

inputButton.addEventListener("click", function () {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  var text = document.createTextNode(inputItem.value);

  li.appendChild(text);

  ul.appendChild(li);
  inputItem.value = "";

  /*---------adding line through-------*/
  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

  /*------------------deleting -----------*/
  li.addEventListener("dblclick", function () {
    ul.removeChild(li);
  });
});
