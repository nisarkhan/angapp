<?php
namespace sunloans\library{
	
	class request{
		
		public function __construct( $data ){
			
			$this->data = array();
			
			foreach( $data  as $name => $value ){
				$this->data[$name] = $value;
			}
			
		}
		
		public function remove($name){
			unset($this->data[$name]);
		}

		public function __get($name){
			
			if( array_key_exists($name, $this->data) ){
				
				return $this->data[$name];
			}else{
				
				return false;
			}
			
		}
		
	}
	
	
}	
?>