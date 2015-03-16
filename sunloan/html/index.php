<?php
namespace sunloans{

	require_once("rest/library/bootstrap.php");

	$get = new library\request( $_GET );
	$post = new library\request( $_POST );

	if( $get->api_request ){

		$url = $get->api_request;
		if(count($get->data) > 0){
			$get->remove("api_request");
			$url .= "?".http_build_query($get->data);
		};

		$api = new library\rest("http://149-979-829.local:8080/sunloans/");
		$api->set_url( rawurldecode($url) );
		$api->set_parameters( $post->data );

		$result = $api->request();
		header('Content-Type: application/json');
		echo $result;
	}

}
?>
