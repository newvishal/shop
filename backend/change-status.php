<?php
    include_once('config.php');
    $data = [];
    if(!$conn){
            $data['db'] ="Connection Error";
            die("Connection failed: ");
            echo json_encode($data);
    }else{
            if($_GET['id']){
                $input  =   json_decode(file_get_contents('php://input'),true);
                $id     =   $_GET['id'];
                $sql    =   mysqli_query($conn, "SELECT * FROM tbl_category WHERE id='$id'");
                $row    =   mysqli_fetch_array($sql);
                $checkstatus = '';
                // echo  $row['status'];
                if($row['status'] == 'true'){
                    $checkstatus = 'false';
                }else{
                    $checkstatus = 'true';
                }
                // echo  $checkstatus;exit;
                $result =   mysqli_query($conn, "UPDATE tbl_category SET status='$checkstatus' WHERE id='$id'");
                if($result){
                    $data['status'] = "200";
                    $data['message'] = "Status updated Successfully";
                    echo json_encode($data);
                }else{
                    $data['status'] = "500";
                    $data['message'] = "Somthing Went Wrong!!";
                    echo json_encode($data);
                }
            }else{
                $data['message'] ="Problem In Id?";
                echo json_encode($data);
            }
    }
?>