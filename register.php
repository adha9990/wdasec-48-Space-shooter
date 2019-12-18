<?php
    $data = file_get_contents("php://input");
    $data = json_decode($data);
    $db = new mysqli("127.0.0.1","root","","module_c_db");
    $db->query("set names utf8");
    $db->query("INSERT INTO `users`(`name`, `time`, `score`) VALUES ('$data->name','$data->time','$data->score')");
    $result = $db->query("SELECT * FROM `users`");
    $data = [];
    while($i = $result->fetch_assoc()){
        $data[] = $i;
    }
    echo json_encode($data);