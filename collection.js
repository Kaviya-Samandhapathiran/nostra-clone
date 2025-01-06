//sign up close
var closemark = document.getElementById("close")
var signup = document.querySelector(".signup")
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var products = document.querySelectorAll('.prod');

closemark.addEventListener("click", function () {
  signup.style.display = "none"
})


checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const checkedValues = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.id.replace('filter-', ''));

    products.forEach(prod => {
      const tags = prod.querySelector('tags').textContent.split(',');
      const matchesAll = checkedValues.every(value => tags.includes(value));

      prod.style.display = matchesAll ? 'block' : 'none';
      prod.style.width = matchesAll ? '30%' : 'none'
    });
  });
});