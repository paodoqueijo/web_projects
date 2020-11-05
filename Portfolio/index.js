var about_h1 = document.getElementById('about-h1');
var about_p1 = document.getElementById('about-p');
var skills_h2 = document.getElementById('skills-h2');
var skills_h3 = document.getElementById('skills-h3');
var skills_list = document.getElementById('skills-list');
var about_btn = document.getElementById('about-btn');
var welcome_sct = document.getElementById('welcome-section');
var skills = document.getElementById('skills');
var ab1 = document.getElementById('ab1');
var ab2 = document.getElementById('ab2');

var age_span = document.getElementById('age');

function getAge() {
  var birthdate = new Date(1996, 11, 26, 23, 45).getTime();
  var now = new Date().getTime();
  var age = Math.floor((now - birthdate) / (1000 * 60 * 60 * 24 * 365));
  age_span.innerHTML = age;
}



function slideIn(el) {
  var top_of_element = el.offset().top;
  var bottom_of_element = el.offset().top + el.outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if (
    bottom_of_screen > top_of_element &&
    top_of_screen < bottom_of_element
  ) {
    console.log(el);

    el.addClass('inview');
  } else {
    el.removeClass('inview');
  }
}

var about_visible = false;
var skills_visible = false;

getAge();

$(window).scroll(() => slideIn($('#first-tile')));
$(window).scroll(() => slideIn($('#second-tile')));
$(window).scroll(() => slideIn($('#third-tile')));

about_h1.addEventListener('click', () => {
  if (about_visible) {
    about_visible = false;
    ab1.classList.remove('disabled');
    about_p1.classList.remove('inscope');
    skills.classList.remove('move-down');
  } else {
    about_visible = true;
    ab1.classList.add('disabled');
    about_p1.classList.add('inscope');
    skills.classList.add('move-down');
  }
});

skills_h2.addEventListener('click', () => {
  if (skills_visible) {
    skills_visible = false;
    ab2.classList.remove('disabled');
    skills_h3.classList.remove('inscope');
    skills_list.classList.remove('inscope');
    setTimeout(function () {
      skills_h3.classList.add('disabled');
      skills_list.classList.add('disabled');
    }, 1000);
  } else {
    skills_visible = true;
    ab2.classList.add('disabled');
    skills_h3.classList.remove('disabled');
    skills_list.classList.remove('disabled');
    setTimeout(function () {
      skills_h3.classList.add('inscope');
      skills_list.classList.add('inscope');
    }, 500);
  }
});

about_btn.addEventListener('click', () => {
  ab1.classList.add('disabled');
  ab2.classList.add('disabled');
  skills.classList.add('move-down');
  about_p1.classList.add('inscope');

  if (!skills_visible) {
    skills_visible = true;
    skills_h3.classList.remove('disabled');
    skills_list.classList.remove('disabled');
    setTimeout(function () {
      skills_h3.classList.add('inscope');
      skills_list.classList.add('inscope');
    }, 100);
  }
});