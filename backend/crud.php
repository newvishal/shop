<?php
    include('config.php');
    // Get values from form
    // $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
    $input = json_decode(file_get_contents('php://input'),true);
    $email      =   $_POST['email']; 
    $password   =   $_POST['password'];
    $address    =   $_POST['address'];
    $city       =   $_POST['city'];
    $state      =   $_POST['state'];
    $zipcode    =   $_POST['zipcode'];
    // Insert data into mysql 
    
    $sql = "INSERT INTO employee (email,password,address,city,state,zipcode)
         VALUES ('$email','$password','$address','$city','$state','$zipcode')";
    $result = mysqli_query($conn,$sql);
    if (!$result) {
        http_response_code(404);
        die(mysqli_error($conn));
      }else{
            echo json_encode($result);
      }
?>