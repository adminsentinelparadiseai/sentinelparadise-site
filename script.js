// Mobile menu
document.querySelectorAll('.menu-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var links = document.getElementById('nav-links');
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});

// Fade-in sections as you scroll
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
}

// Booking calendar: 15 / 30 minute switch
(function () {
  var frame = document.getElementById('cal-frame');
  if (!frame) return;
  var base = 'https://cal.com/desirae-moore-n1dby6/';
  var status = document.getElementById('cal-status');
  var ext = document.getElementById('cal-ext');
  document.querySelectorAll('[data-cal]').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('[data-cal]').forEach(function (x) { x.classList.remove('active'); x.setAttribute('aria-pressed', 'false'); });
      b.classList.add('active'); b.setAttribute('aria-pressed', 'true');
      var slug = b.getAttribute('data-cal');
      frame.src = base + slug + '?embed=true';
      ext.href = base + slug;
      status.textContent = '● ' + b.textContent.trim() + ' Selected';
    });
  });
})();

// "Questions? Ask us!" — opens the visitor's email app with the question filled in
(function () {
  var form = document.getElementById('ask-form');
  if (!form) return;
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var email = form.email.value, site = form.website.value, q = form.question.value;
    var body = q + '\n\n— ' + email + (site ? '\nWebsite: ' + site : '');
    window.location.href = 'mailto:ops@sentinelparadise.ai?subject=' +
      encodeURIComponent('Website question') + '&body=' + encodeURIComponent(body);
  });
})();

document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
