<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title> Sunloans - Login </title>
	<!-- CSS -->
	<link rel="stylesheet" href="/sunloans/html/assets/css/bootstrap.min.css" />
	<link rel="stylesheet" href="/sunloans/html/assets/css/font-awesome.min.css" />
	<link rel="stylesheet" href="/sunloans/html/assets/css/sunloan.css" />
	<!-- SCRIPTS -->
	<script src="/sunloans/html/assets/js/vendor/jquery.min.js"></script>
	<script src="/sunloans/html/assets/js/vendor/bootstrap.min.js"></script>

	<link rel="icon" href="/sunloans/html/favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="/sunloans/html/favicon.ico" type="image/x-icon">

</head>
<body class="login">

		<div class="login-left">
			<div class="login-overlay">
					<div class="col-xs-8 col-xs-offset-2 login-form">
						<h3 class="row title white"> <img src="/sunloans/html/assets/images/sunloan.png" height="32"> Sunloans </h3>
						<div class="row white">
							<p>Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur.</p>
						</div>
						<div class="row white">
							<p> <span class="strong">Version:</span> <span class="badge"><%@include file="/WEB-INF/jspf/version.jspf" %></span> </p>
						</div>
					</div>
			</div>
		</div>
		<div class="login-right">

			<div class="col-sm-6 col-sm-offset-3 login-form">
				<form name="form" class="form-horizontal" action="j_security_check" method="post">
						<h3 class="row title">Sign In</h3>
						<div class="row">
							<div class="form-group">
								<div class="col-xs-12">
									<input placeholder="Username" id="username" name="j_username" type="text" class="form-control" autocomplete="off" />
									<div class="alert alert-danger">
										<i class="fa fa-warning"></i> Invalid username and/or password.
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="form-group">
								<div class="col-xs-12">
									<input placeholder="Password" id="password" name="j_password" type="password" class="form-control" autocomplete="off" />
								</div>
							</div>
						</div>
						<div class="row text-right">
							<button type="submit" class="btn btn-default btn-block">
								<i class="fa fa-check"></i> Log In
							</button>
						</div>
				</form>
			</div>

		</div>

		<!--<%= version.getVersion() %><%= version.getLastUpdated() %>-->

</body>
</html>
