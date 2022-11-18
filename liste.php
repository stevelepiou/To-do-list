<?php


//connexion à la BDD

    require_once './connexionBDD.php';

    $req = $pdo -> query('select * from todolist');
    $res = $req ->fetchAll();

    echo '<pre>' .print_r($res) .'</pre>';

    foreach ($res as $tache){
        echo '<br>'.$tache;
    }