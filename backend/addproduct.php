<?php
    include_once('config.php');
    $data = [];
    if(!$conn){
            $data['db'] ="Connection Error";
            die("Connection failed: ");
            echo json_encode($data);
    }else{
        $input             = json_decode(file_get_contents('php://input'),true);
        $product_name      = $_POST["product_name"];
        $category_id       = $_POST["category_id"];
        $price             = $_POST["price"];
        $quantity          = $_POST["quantity"];
        $create_on         = '1';
        // $target_dir_image  = "productimage/";
        // $target_dir_image  = "";
        // var_dump(count($_FILES['product_img']['name']));exit;  
        // $target_file_first = $target_dir_image . basename($_FILES["product_img"]["name"]);
        // multipal file upload
        if(count($_FILES['product_img']['name']) > 0){
            //Loop through each file
            for($i=0; $i<count($_FILES['product_img']['name']); $i++) {
                    //Get the temp file path
                     $tmpFilePath = $_FILES['product_img']['tmp_name'][$i];
                     //Make sure we have a filepath
                    if($tmpFilePath != ""){
                        //save the filename
                        $shortname = $_FILES['product_img']['name'][$i];
                        //save the url and the file
                         $filePath = "productimage/" . date('d-m-Y-H-i-s').'-'.$_FILES['product_img']['name'][$i];
                         //Upload the file into the temp dir
                            if(move_uploaded_file($tmpFilePath, $filePath)) {

                                $product_img[] = $shortname;
                                //insert into db 
                                //use $shortname for the filename
                                //use $filePath for the relative url to the file

                            }
                    }
            }
        }
        // if (move_uploaded_file($_FILES["product_img"]["tmp_name"], $target_file_first )) {
        //     $product_img = basename( $_FILES["product_img"]["name"]);
        // } 

        // var_dump(implode(',',$product_img));exit;
         $allImg =   implode(',',$product_img);
        $check1    =   mysqli_query($conn, "SELECT * FROM tbl_product WHERE category_id='$category_id' AND product_name='$product_name'");
        if(mysqli_num_rows($check1) > 0){
                $row         = mysqli_fetch_array($check1);
                $exist_id    = $row['id'];
                $getquantity    = $row['quantity'];
                $gettotalRemain = $row['totalRemain'];
                $getquantity    = $getquantity + $quantity;
                $gettotalRemain = $gettotalRemain + $quantity;
                $result = mysqli_query($conn, "UPDATE tbl_product SET price='$price', quantity='$getquantity', totalRemain='$gettotalRemain' WHERE id='$exist_id'");
                if($result){
                    $data['status'] = "200";
                    $data['message'] = "Product Updated Successfully";
                    echo json_encode($data);
                }else{
                    $data['status'] = "500";
                    $data['message'] = "Somthing Went Wrong!!";
                    echo json_encode($data);
                }
        }else{
            $sql  = "INSERT INTO tbl_product (category_id,product_name,product_img,price,create_on,quantity,totalRemain,totalsale)
                     VALUES ('$category_id','$product_name','$allImg','$price','$create_on','$quantity','$quantity','0')";
            if(mysqli_query($conn,$sql)){
                $data['status'] = "200";
                $data['message'] = "Product Added Successfully";
                echo json_encode($data);
            }else{
                $data['status'] = "500";
                $data['message'] = "Somthing Went Wrong!!";
                echo json_encode($data);
            }
        }
    }

?>