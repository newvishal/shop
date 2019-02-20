<?php
    include_once('config.php');
    $data = [];
    if(!$conn){
            $data['db'] ="Connection Error";
            die("Connection failed: ");
            echo json_encode($data);
    }else{
//         SELECT tbl_product.id,tbl_product.product_name,tbl_product.product_img,
// tbl_product.price,tbl_product.quantity,tbl_product.totalRemain,tbl_product.totalsale,
// tbl_category.category_name
// FROM tbl_product 
// JOIN tbl_category ON tbl_category.id=tbl_product.category_id;

        $query = "SELECT tbl_product.id,tbl_product.product_name,tbl_product.product_img,
        tbl_product.price,tbl_product.quantity,tbl_product.totalRemain,tbl_product.totalsale,
        tbl_category.category_name FROM tbl_product JOIN tbl_category ON tbl_category.id=tbl_product.category_id;";
        $result = mysqli_query($conn , $query);
        $rows = array();
        while($r = mysqli_fetch_array($result)) {
            $rows[] = $r;
        }
        echo json_encode($rows);
    }
?>