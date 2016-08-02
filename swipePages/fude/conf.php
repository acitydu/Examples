<?php
mysqli_connect("locahost", "root", "")or ("数据库链接错误");;
mysqli_select_db("fude") or die("db链接错误");;
mysqli_query("set names 'utf-8'");
?>