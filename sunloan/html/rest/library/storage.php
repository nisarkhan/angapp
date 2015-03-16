<?php
namespace sunloans\library{
		
	define( "session_key", "session".md5(__DIR__ . "session-application") );
	 
	class storage {
	  
	  public function __construct() {
	      
	      @session_start();
	      
	  }
	  
	  public function __set($name,$value) {
	  
	    $_SESSION[session_key][$name] = $value;
	  
	  }
	  
	  public function & __get($name) {
	  
	    return $_SESSION[session_key][$name];
	  
	  }
	  
	  public function __toString() {
	  
	    return isset($_SESSION[session_key]) ? print_r($_SESSION[KEY],true) : "null";
	  
	  }
	  
	  public function __isset($name) {
	  
	    return isset($_SESSION[session_key][$name]);
	  
	  }
	  
	  public function __unset($name) {
	  
	    unset($_SESSION[session_key][$name]);
	  
	  }
	  
	}
	
}	
?>
