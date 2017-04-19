let one = document.querySelector('[data-filter="skills"]');
let two = document.querySelector('[data-filter="exp"]');
let three = document.querySelector('[data-filter="school"]');

let skills = document.getElementById('skills');
let exp = document.getElementById('exp');
let school = document.getElementById('school');

one.addEventListener("click",function(e){
  //if you click on this button
    skills.style.display = 'block';
    exp.style.display = 'none';
    school.style.display = 'none';
});
two.addEventListener("click",function(e){
  //if you click on this button
    skills.style.display = 'none';
    exp.style.display = 'block';
    school.style.display = 'none';
});
three.addEventListener("click",function(e){
  //if you click on this button
    skills.style.display = 'none';
    exp.style.display = 'none';
    school.style.display = 'block';

});
