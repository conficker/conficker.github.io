document.querySelector('.datepicker-here').addEventListener('change', (e) =>
{
  document.querySelector('.time span').innerText = e.target.value;
});
