import $ from 'jquery'


$(function () {
  $('li:odd').css('backgroundColor','red');
  $('li:even').css('backgroundColor','blue');
})

class Person {

  static info = { name: 'zs', age: 20 }
}


console.log(Person.info)