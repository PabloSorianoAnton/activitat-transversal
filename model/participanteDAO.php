<?php

class ParticipanteDAO{
    private $pdo;

    public function __construct(){
        include '../controller/connection.php';
        $this->pdo=$pdo;
    }

    public function adir(){
    	try {
            $this->pdo->beginTransaction();
            $query1="INSERT INTO participante (`dni_participante`,`edad_participante`,`nombre_participante`,`papellido`, `sapellido`, `email`) VALUES (?, ?, ?, ?, ?, ?)";
            $sentencia=$this->pdo->prepare($query1);
            $dni=$_POST['dni'];
            $edad=$_POST['edad'];
            $nombre=$_POST['nombre'];
            $paellido=$_POST['papellido'];
            $sapellido=$_POST['sapellido'];
            $email=$_POST['email'];
            $sentencia->bindParam(1,$dni);
            $sentencia->bindParam(2,$edad);
            $sentencia->bindParam(3,$nombre);
            $sentencia->bindParam(4,$paellido);
            $sentencia->bindParam(5,$sapellido);
            $sentencia->bindParam(6,$email);
            $sentencia->execute();
            $categoria=$this->pdo->prepare("SELECT CONVERT(id_categoria, SIGNED) FROM categoria WHERE nombre_categoria LIKE ? AND sexo_categoria LIKE ?");
            $sexo=$_POST['sexo'];
            $rango=$_POST['rango'];
            $categoria->bindParam(1,$rango);
            $categoria->bindParam(2,$sexo);
            $categoria->execute();
            $query2="INSERT INTO `inscripcion` (`dorsal_inscripcion`, `pagado_o_no`, `id_categoria`, `dni_participante`) VALUES (NULL, '', ".$categoria.", ?)";
            $stmt=$this->pdo->prepare($query2);
            $dni=$_POST['dni'];
            // $stmt->bindParam(1,$categoria); 
            $stmt->bindParam(1,$dni);
            $stmt->execute();
            //print_r($sentencia);
            $this->pdo->commit();
        } catch (Exception $ex){
                $this->pdo->rollback();
                echo $ex->getMessage();
        }
    }

}

?>