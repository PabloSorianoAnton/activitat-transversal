<?php

class ParticipanteDAO{
    private $pdo;

    public function __construct(){
        include '../controller/connection.php';
        $this->pdo=$pdo;
    }

    public function adir(){
    	try {
            //insertamos participante
            // $fecha_nacimiento = new DateTime($_POST['edad']);
            // $hoy = new DateTime();
            // $edad = $hoy->diff($fecha_nacimiento);
            //     // echo $edad->y;
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

            //insertamos inscripcion
            $query2="INSERT INTO `inscripcion` (`dorsal_inscripcion`, `pagado_o_no`, `id_categoria`, `dni_participante`) VALUES (NULL, '', ?, ?)";
            $stmt=$this->pdo->prepare($query2);
            $dni=$_POST['dni'];
            $edad=$_POST['edad'];
            $cate= date_diff(date_create($edad), date_create('now'))->y;
            if ($_POST['sexo']=="Hombre" && $cate>=0 && $cate <=6) {
                $categoria = 1;         
            }if ($_POST['sexo']=="Hombre" && $cate>=7 && $cate <=14) {
                $categoria = 2;
            }if ($cate>=15 && $cate <=20 && $_POST['sexo']=="Hombre") {
                $categoria = 3;                 
            }if ($cate>=21 && $cate <=30 && $_POST['sexo']=="Hombre") {
                $categoria = 4;                
            }if ($cate>=31 && $cate <=60 && $_POST['sexo']=="Hombre") {
                $categoria = 5;                
            }if ($cate>=61 && $cate <=99 && $_POST['sexo']=="Hombre") {
                $categoria = 6;               
            }
            
            if ($cate>=0 && $cate <=6 && $_POST['sexo']=="Mujer") {
                $categoria = 7;              
            }if ($cate>=7 && $cate <=14 && $_POST['sexo']=="Mujer") {
                $categoria = 8;                
            }if ($cate>=15 && $cate <=20 && $_POST['sexo']=="Mujer") {
                $categoria = 9;            
            }if ($cate>=21 && $cate <=30 && $_POST['sexo']=="Mujer") {
                $categoria = 10;             
            }if ($cate>=31 && $cate <=60 && $_POST['sexo']=="Mujer") {
                $categoria = 11;            
            }if ($cate>=61 && $cate <=99 && $_POST['sexo']=="Mujer") {
                $categoria = 12;            
            }
            
            if ($cate>=0 && $cate <=6 && $_POST['sexo']=="Discapacidad") {
                $categoria = 14;
            }if ($cate>=7 && $cate <=14 && $_POST['sexo']=="Discapacidad") {
                $categoria = 15;
            }if ($cate>=15 && $cate <=20 && $_POST['sexo']=="Discapacidad") {
                $categoria = 16;
            }if ($cate>=21 && $cate <=30 && $_POST['sexo']=="Discapacidad") {
                $categoria = 17;
            }if ($cate>=31 && $cate <=60 && $_POST['sexo']=="Discapacidad") {
                $categoria = 18;
            }if ($cate>=61 && $cate <=99 && $_POST['sexo']=="Discapacidad") {
                $categoria = 19;
            }
            $stmt->bindParam(1,$categoria);
            $stmt->bindParam(2,$dni);
            $stmt->execute();
            //print_r($sentencia);
            $this->pdo->commit();
            echo "<p style='color: green; font-size: 130%'>Usuario inscrito correctamente!</p>";
            echo "<button><a href='../view/login.html'>Volver al inicio</a></button>";
        } catch (Exception $ex){
                $this->pdo->rollback();
                echo "<p style='color: red; font-size: 130%'>DNI existente o no válido</p>";
                // echo $ex->getMessage();
        }
    }

}

?>