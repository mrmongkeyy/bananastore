document.body.onload = function(){
	document.body.style.margin = '0';
	const main = makeElement('main',{
		style:`
			display:flex;
			width:100%;
			height:100%;
			background:black;
			position:absolute;
			flex-direction:column;
			font-family:monospace;
			align-items:center;
		`,
		onadded(){
			const content = makeElement('content',{
				style:`
					width:100%;
					background:beige;
					height:80%;
					align-items:center;
					display:flex;
					flex-direction:column;
					justify-content:center;
				`,
				onadded(){
					this.addChild(finder());
					this.addChild(container());
				}
			});
			
			this.addChild(header());
			this.addChild(content);
			this.addChild(footer());
		}
	})
	document.body.addChild(main);
}
