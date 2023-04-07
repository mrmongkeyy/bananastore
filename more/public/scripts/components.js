const app = {}
const button = function(spanText,onspanClicked){
	return makeElement('div',{
		spanText,
		innerHTML:`
			<span style=font-size:30px;color:white;cursor:pointer></span>
		`,
		onadded(){
			this.style.background = (this.spanText===1?'green':'red');
			this.style.padding = '10px';
			this.find('span').innerText = (this.spanText===1?'YA':'TIDAK');
			this.find('span').onclick = onspanClicked;
		}
	})
}

const akunPage = function(login){
	return makeElement('div',{
		style:`
			left:0;
			width:100%;
			height:100%;
			display:flex;
			justify-content:center;
			align-items:center;
		`,
		onadded(){
			(login?this.showData():this.forceLogin());
		},
		showData(){

		},
		forceLogin(){
			let state = 0;
			const form = makeElement('div',{
				style:`
					width:${(innerWidth>900?50:90)}%;
					height:60%;
					background:white;
					display:flex;
					justify-content:center;
					align-items:center;
					flex-direction:column;
				`,
				innerHTML:`
					<div id=header
					style="
						display:flex;
						justify-content:space-around;
						font-size:20px;
						border-bottom:2px solid black;
						width:100%;
						height:10%;
						padding:10px 0;
						"
					>
						<div>
							<span>Masuk</span>
						</div>
						<div>
							<span>Daftar</span>
						</div>
					</div>
					<div id=body
					style="
						width:90%;
						height:90%;
						display:flex;
						flex-direction:column;
						align-items:center;
						justify-content:center;
						font-size:20px;
					"
					>
						<div
						style="
							padding-bottom:20px;
						"
						>
							Username
							<input>
						</div>
						<div
						style="
							padding-bottom:10px;
						"
						>
							Password
							<input>
						</div>
						<div>
							<button
							style="
								padding:10px;
							"
							>${(state==0?'MASUK':'DAFTAR')}</button>
						</div>
					</div>
				`,
				onadded(){

				}
			});
			this.addChild(form);
		}
	})
}

const header = function(){
	return makeElement('header',{
		style:`
			width:100%;
			background:white;
			height:10%;
			align-items:center;
			display:flex;
			justify-content:space-around;
		`,
		onadded(){
			this.addChild(makeElement('div',{
				innerHTML:`
					<img src=/file?fn=findmore.png
					style="
						width:32px;
						height:32px;
						margin-right:5px;
						padding:5px;
						background:#ff7d0a;
					"
					>
					<span style=cursor:pointer;color:orange;>
						BANANASTORE
					</span>
				`,
				style:`
					font-size:20px;
					display:flex;
					align-items:center;
					background:white;
					height:80%;
					padding:0 10px;
				`
			}));
			this.addChild(makeElement('div',{
				style:`
					display:flex;
					flex-direction:column;
					cursor:pointer;
				`,
				innerHTML:`
					<span
					style="
						border-radius:5px;
						cursor:pointer;
						text-align:center;
					">
						<img src=/file?fn=carts.png
						style="
							width:32px;
							height:32px;
						"
						>
					</span>
				`
			}))
		}
	})
}

const container = function(){
	return makeElement('div',{
		id:'container',
		style:`
			height:auto;
			display:flex;
			flex-wrap:wrap;
			max-width:${(innerWidth>900?50:90)}%;
			justify-content:space-between;
			align-items:center;
			height:90%;
			overflow:auto;
			padding:10px;
		`,
		onadded(){
			reqON(this);
		}
	})
}
const item = function(item){
	return makeElement('div',{
		item,
		style:`
			width:${(innerWidth<600?'100%':'200px')};
			background:white;
			margin:10px;
			display:flex;
			flex-direction:column;
			align-items:center;
			cursor:pointer;
		`,
		innerHTML:`
			<div
			style="
				width:90%;
				text-align:center;
				display:flex;
				align-items:center;
				justify-content:center;
				margin:10px 0;
			"
			>
				<img src=${item.icon_url}
				style="
					object-fit:cover;
				"
				>
			</div>
			<div
			style="
				font-size:19px;
				width:90%;
				padding:10px 0;
				text-align:center;
			"
			>
				<span>${item.pulsa_nominal}</span>
			</div>
			<div
			style="
				font-size:12px;
				width:90%;
				padding-bottom:10px;
				text-align:center;
			"
			>
				<span>${item.pulsa_details}</span>
			</div>
			<div
			style="
				font-size:15px;
				width:100%;
				padding:10px 0;
				text-align:center;
				border-top:2px solid #ff7d0a;
			"
			>
				<span>RP.${item.pulsa_price}</span>
			</div>
		`,
		onclick(){
			find('main').addChild(previewItem(this.item));
		}
	})
}

const previewItem = function(data){
	return makeElement('div',{
		style:`
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			background:RGBA(0,0,0,0.5);
			display:flex;
			justify-content:center;
			align-items:center;
		`,
		innerHTML:`
			<div
			className="
				responsiveWidth
			"
			style="
				max-height:90%;
				background:white;
				padding:10px;
				font-size:11px;
			"
			>
				<div
				style="
					display:flex;
					align-items:center;
					justify-content:center;
				"
				>
					<div
					style="
						padding:2px;
						display:flex;
						align-items:center;
						justify-content:center;
					"
					>
						<img src=${data.icon_url}>
					</div>
					<div style=padding:2px;>
						<div style=font-size:15px;>
							<span>${data.pulsa_nominal}</span>
						</div>
						<div>
							<span>RP${data.pulsa_price}</span>
						</div>
					</div>
				</div>
				<div
				style="
					display:flex;
					align-items:center;
					justify-content:center;
					flex-direction:column;
					border-top:2px outset;
				"
				>
					<div
					style="
						margin-top:10px;
					"
					>
						<div>
						Name
						</div>
						<input>
					</div>
					<div
					style="
						margin-top:10px;
					"
					>
						<div>
						Number
						</div>
						<input>
					</div>
					<div
					style="
						margin-top:10px;
					"
					>
						<div>
						Dana Id
						</div>
						<input>
					</div>
					<div
					style="
						margin-top:10px;
						display:flex;
						justify-content:space-around;
						width:100%;
						border-top:2px outset;
						padding-top:10px;
					"
					>
						<div
						style="
							background:rgb(255, 125, 10);
							padding:5px;
							font-size:15px;
							color:white;
							cursor:pointer;
						"
						id=orderButton
						>
						Pesan
						</div>
						<div
						style="
							background:rgb(255, 125, 10);
							padding:5px;
							font-size:15px;
							color:white;
							cursor:pointer;
						"
						id=cancelButton
						>
						Batal
						</div>
					</div>
				</div>
			</div>
		`,
		onadded(){
			this.find('#orderButton').onclick = ()=>{

			}
			this.find('#cancelButton').onclick = ()=>{this.remove()};
		}
	})
}

const finder = function(){
	return makeElement('div',{
		style:`
			background:#ff7d0a;
			width:100%;
			height:50px;
			display:flex;
			justify-content:space-around;
			align-items:center;
		`,
		innerHTML:`
			<div>
				<span>
					<input
					style="
						padding:10px;
						border:none;
						outline:none;
					" placeholder="Telusuri..."
					>
				</span>
				<span>
					<button
					style="
						padding:10px;
						border:none;
						outline:none;
						background:orange;
						color:white;
						cursor:pointer;
					"
					>Cari</button>
				</span>
			</div>
		`,
	})
}
const footer = function(){
	return makeElement('footer',{
		style:`
			width:100%;
			background:white;
			height:10%;
			align-items:center;
			display:flex;
			font-size:12px;
			justify-content:space-around;
		`,
		innerHTML:`
			<div
			style="
				height:100%;
				display:flex;
				align-items:center;
				padding:0 10px;
				cursor:pointer;
				flex-direction:column;
				justify-content:center;
			"
			id=game
			>
				<img src=/file?fn=gameicon.png
				style="
					width:24px;
					height:24px;
				"
				>
				<span>Game</span>
			</div>
			<div
			style="
				height:100%;
				display:flex;
				align-items:center;
				padding:0 10px;
				cursor:pointer;
				flex-direction:column;
				justify-content:center;
			"
			id=pulsa
			>
				<img src=/file?fn=smartphone.png
				style="
					width:24px;
					height:24px;
				"
				>
				<span>Pulsa</span>
			</div>
			<div
			style="
				height:100%;
				display:flex;
				align-items:center;
				padding:0 10px;
				cursor:pointer;
				flex-direction:column;
				justify-content:center;
			"
			id=data
			>
				<img src=/file?fn=smartphone.png
				style="
					width:24px;
					height:24px;
				"
				>
				<span>Data</span>
			</div>
			<div
			style="
				height:100%;
				display:flex;
				align-items:center;
				padding:0 10px;
				cursor:pointer;
				flex-direction:column;
				justify-content:center;
			"
			id=pln
			>
				<img src=/file?fn=flash.png
				style="
					width:24px;
					height:24px;
				"
				>
				<span>Listrik</span>
			</div>
			<div
			style="
				height:100%;
				display:flex;
				align-items:center;
				padding:0 10px;
				cursor:pointer;
				flex-direction:column;
				justify-content:center;
			"
			id=etoll
			>
				<img src=/file?fn=money.png
				style="
					width:24px;
					height:24px;
				"
				>
				<span>TopUP</span>
			</div>
		`,
		onadded(){
			this.findall('div').forEach((div)=>{
				div.onclick = function(){
					getData(find('#container'),this.id);
				}
			})
		}
	});
}

const reqON = function(parent,commands='pricelist',type='etoll',operator=''){
	parent.innerHTML = '';
	const display = (data)=>{
		data.forEach((i)=>{
			parent.addChild(item(i))
		})
	}
	cOn.post({
		url:'https://testprepaid.mobilepulsa.net/v1/legacy/index/',
		someSetting:[['setRequestHeader','content-type','application/json']],
		data:JSON.stringify({
			commands,
			username:'0895605801484',
			sign:'7ad0dabf608f08ace635ece4d5393b3d',
			status:'active',
			type,operator
		}),
		onload(){
			app.dataS = JSON.parse(this.response);
			display(app.dataS.data);
		}
	})
}
