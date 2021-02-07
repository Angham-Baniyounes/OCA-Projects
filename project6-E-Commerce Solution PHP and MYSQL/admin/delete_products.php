<?php 
    include('includes/connection.php'); 
    $query = "DELETE from products where product_id = {$_GET['id']}";
    mysqli_query($conn, $query);
    header("location:manage_products.php");
?>