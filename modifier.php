<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <a href="index.html" class="btnBack"><img src="./img/back.png" alt="">retour</a>
    <?php
    require_once './connexionBDD.php';

    try {
        $id = intval($_POST['updateId']); // recupére l'id
        $stmt = $pdo->prepare('select * from todos where id = :id'); // requete avec parametre extérieur, je passe par la méthode prepare
        $stmt->execute(['id' => $id]); // execution de la requete
        $tache = $stmt->fetch(); // récuperation de la tâche à mettre à jour
    } catch (PDOException $error) {
        die(var_dump($error)); // en mode dev, j'affiche l'erreur (a modifier si mise en prod)
    }

    session_start();

    $req = $pdo -> query("SELECT * from todolist where id= $id ");
    $res = $req -> fetchAll();

    if(isset($_POST['button'])){
        extract($_POST);
        if(isset($tache)&& $tache!==""){
            $req = $pdo -> query("UPDATE tache SET tache = '$tache' WHERE id = $id");
            if($req){
                header('location:index.php');
            }else{
                $message = 'tâche non modifiée.';
                
            }

        }else{
            $message = "veuillez remplir le champs !";
        }
    }
    
    ?>

    <div class="blockModif">

    <h2>Vous souhaitez modifier<br>votre tâche?</h2>
    
    <form action="" method="POST" >
        <input type="text" class="txtModif" name="updateID" value="<?php echo $tache['id'] ?>">
        <input type="submit" class="validModif" name="button" id="" >
    </form>

    </div>  
</body>
</html>