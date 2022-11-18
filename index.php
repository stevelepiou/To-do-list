<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDoList CRUD</title>
    <link rel="stylesheet" href="style.css">
   
</head>
<body>
    <div class="container">
        <form action="" method="POST">
            <input type="text" name="tache" class="txtAjout">
            <input type="submit" id="btnAjout">
        </form>
    </div>

    <div class="affTaches">
        <h3 class="titreTaches">Taches</h3>
        <h3 class="titreModif">modifier</h3>
        <h3 class="titreSupp">Supprimer</h3>
    </div>
    
   <?php
    session_start();

    //connexion à la BDD

    require_once './connexionBDD.php';

    $req = $pdo -> query('select * from todolist');
    $res = $req ->fetchAll();

    // echo '<pre>' .print_r($res) .'</pre>';

    foreach ($res as $tache){
        echo '
        <div class="ligne">
            <p class="tache">'.$tache['tache'].'</p>
           
            <a href="modifier.php" class="modif"  name="updateId" value="'.$tache['id'].'"><img src="img/modifier.png" alt=""></a>
           
            <a href="#" class="supp"><img src="img/croix.png" alt=""></a>
        </div>
        ';
    }

     if(isset($_POST['tache'])){
        $tacheTropLong = false;
        if ($_POST['tache']==="") $tache = "Aucune tâche";
        if (strlen($_POST['tache']) > 50) $tacheTropLong = true;

        if(!$tacheTropLong) {

            $sql = "insert into todolist values(null, :tache)";

            $req = $pdo ->prepare($sql);
            $res = $req -> execute(
                [
                    ':tache' => $_POST['tache'],
                ]
                );

                

                $_SESSION['resultat'] = 'Tâche enregistrée avec succès !';

            


        }else{
            $_SESSION['resultat'] = 'Tâche trop longue';
        }
     }
   ?>

    
</body>
</html>
<!-- <form action="modifier.php" class="modif">
                <input type="hidden" name="updateId" value="'.$tache['id'].'">
                <a href="#" class="modif"><img src="img/modifier.png" alt=""></a>
            </form> -->