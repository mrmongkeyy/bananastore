module.exports = {
	make(config){
		return `
			<!doctype html>
			<html>
				<head>
					<title>bananastore</title>
					<meta name=viewport content=width=device-width,initial-scale=1>
					<style>
						.responsiveWidth{
							width:90%;
						}
						input{
							background:wheat;
							border:none;
							padding:10px;
							outline:none;
						}
						@media screen (min-width:900px){
							.responsiveWidth{
								width:50%;
							}
						}
					</style>
				</head>
				<body></body>
				<script src=/scripts?fn=infinity></script>
				<script src=/scripts?fn=components></script>
				<script src=/scripts?fn=flex></script>
			</html>
		`;
	}
}