<?php
    include_once('config.php');
    $data = [];
    if(!$conn){
            $data['db'] ="Connection Error";
            die("Connection failed: ");
            echo json_encode($data);
    }else{
        $input = json_decode(file_get_contents('php://input'),true);
        $username      =   $_POST['username']; 
        $password      =   $_POST['password'];
        $sql = "SELECT * FROM tbl_user WHERE username='" . $username . "' and password = '". $password ."'";
        $result = mysqli_query($conn , $sql);
        if(mysqli_num_rows($result) > 0)
        {
            $row  = mysqli_fetch_array($result);
                if(is_array($row)) {
                    if( $row['password'] != ''){
                        $data['token'] = md5($row['password']);
                        $data['status'] = "200";
                        $data['message'] = "Welcome Back Admin";
                    }
                }
        }else{
            $data['status'] = "404";
            $data['message'] = "Please Enter Valid Cridential";
        }
        echo json_encode($data);
    }
?>