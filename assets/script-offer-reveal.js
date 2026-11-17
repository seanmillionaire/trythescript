/* Shared ten-minute offer reveal. Arrival timer, not video watch time. */
(function () {
  'use strict';
  var key = 'trythescript-checkout-first-visit-v1';
  var now = Date.now(), start = now, timer, revealed = false, scrolled = false;
  try {
    var saved = Number(localStorage.getItem(key));
    if (Number.isFinite(saved) && saved > 0 && saved <= now) start = saved;
    else localStorage.setItem(key, String(start));
  } catch (e) {}
  function moveToOrder() {
    if (scrolled || document.visibilityState === 'hidden') return;
    var button = document.getElementById('script-order-button');
    if (!button) return;
    scrolled = true;
    requestAnimationFrame(function () {
      button.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
    });
  }
  function check() {
    clearTimeout(timer);
    var left = Math.max(0, 600000 - (Date.now() - start));
    var seconds = Math.ceil(left / 1000);
    document.querySelectorAll('[data-cta-countdown]').forEach(function (el) {
      el.textContent = Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0');
    });
    if (left <= 0) {
      document.documentElement.classList.add('script-checkout-unlocked');
      if (!revealed) {
        revealed = true;
        var status = document.getElementById('script-offer-status');
        if (status) status.textContent = 'The full offer is now available below the video.';
      }
      moveToOrder();
      return;
    }
    timer = setTimeout(check, Math.min(left, 1000));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', check, {once:true});
  else check();
  document.addEventListener('visibilitychange', check);
})();
