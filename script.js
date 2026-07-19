const button = document.querySelector("button");
button.addEventListener("click", function () {
    alert("Welcome to Arun Cafe!");
});
<script>
function orderItem(item){
    alert(item + " ordered successfully!");
    window.location.href="order.html?item="+encodeURLComponent(item);
}
</script>