


<?php

$dir = './parser_test/20131004/';


/* if ($handle = opendir('./parser_test/20131004/')) {
    echo "Directory handle: $handle\n";
    echo "Entries:\n";

    
    while (false !== ($entry = readdir($handle))) {
        echo "$entry\n";
    }


    closedir($handle);
} */


function createCSV($data){
  

$fp = fopen('./output.csv', 'wb');
foreach ( $data as $line ) {
    $val = explode(",", $line);
    fputcsv($fp, $val);
}
fclose($fp);
}




if ($handle = opendir($dir)) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != "..") {
            echo "$entry<br />";
           createCSV($entry);
        }
    }
    closedir($handle);
}






?>


