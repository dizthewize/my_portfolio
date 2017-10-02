function openSideMenu() {
  document.getElementById('side-menu').style.width = '180px';
  document.getElementById('side-btn').style.marginLeft = '185px';
}

function closeSideMenu() {
  document.getElementById('side-menu').style.left = '0px';
  document.getElementById('side-btn').style.marginLeft = '0px';
}

document.addEventListener('DOMContentLoaded', function() {
  let wrapped = document.getElementById('wrapped');
  let topLayer = wrapped.querySelector('.top');
  let handle = wrapped.querySelector('.handle');
  let delta = 0;

  wrapped.addEventListener('mousemove', function(e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width = e.clientX + delta + 'px';
  });
});
