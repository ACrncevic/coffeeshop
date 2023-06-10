const toggleButton=document.getElementById("idmenu");
const navilist=document.getElementById("navid");

toggleButton.addEventListener('click', () =>
{
	navilist.classList.toggle('active');
})
