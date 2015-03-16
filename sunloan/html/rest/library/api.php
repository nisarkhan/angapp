<?php
namespace sunloans\library{

	class rest{

		public $method = "",
				   $base,
				   $url,
				   $parameters;


		public function __construct( $base ){

			$this->method = "GET";
			$this->base = $base;
			$this->parameters = array();
			$this->login = false;


		}

		public function set_url( $url ){
		  if( strpos($url, "member/login") > -1 ){
				$this->login = true;
			}
			$this->url = $this->base.$url;
		}

		public function set_parameters( $data ){

			$this->parameters = $data;
			
		}

		public function request(){

			$postdata = http_build_query($this->parameters);


			ini_set("display_errors", 1);
			error_reporting(E_ALL);

			$http  = curl_init();

			curl_setopt($http , CURLOPT_URL, $this->url);
			curl_setopt($http , CURLOPT_VERBOSE, 0);
			curl_setopt($http , CURLOPT_HEADER, 0);
			curl_setopt($http , CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($http , CURLOPT_FOLLOWLOCATION, 0);
			curl_setopt($http , CURLOPT_USERAGENT, 'Willyelm');

		  if( $_SERVER['REQUEST_METHOD'] != 'GET' ){		
				curl_setopt($http, CURLOPT_CUSTOMREQUEST, $_SERVER['REQUEST_METHOD']);
			}

			if( count($this->parameters) > 0 ){
      	curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
      }
			
			$result = curl_exec($http );

			if(curl_errno($http )) {
				header(' ', true, 503);
        echo curl_error($http );
      };

      $http_status = curl_getinfo($http, CURLINFO_HTTP_CODE);
      header(' ', true, $http_status);

			curl_close($http );

			return $result;

		}



	}

}
?>
