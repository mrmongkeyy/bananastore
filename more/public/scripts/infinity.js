Array.prototype.getRandom = function(){
	return this[Math.floor(Math.random()*this.length)];
}
Object.prototype.len = function(){
	let x = 0;
	for(let i in this){x++}
	return x-2;
}
Object.prototype.forEach = function(callback){
	let i = 0;
	for(let key in this){
		callback(this[key],i);
		i++;
	}
}
Object.prototype.isVector = function(){
	if(
		this.x && typeof this.x === 'number' &&
		this.y && typeof this.y === 'number'
		)return true;
	return false;
}
Object.prototype.VSubstract = function(vector){
	if(this.isVector()){
		return {x:this.x-vector.x,y:this.y-vector.y}
	}
}
Object.prototype.getVector = function(){
	if(this.isVector()){
		const x = this.x;
		const y = this.y;
		return {x,y};
	}return null;
}
Object.prototype.moveTo = function(vector){
	if(this.isVector()){
		const nvector = this.VSubstract(vector);
		const theta = Math.atan2(nvector.y,nvector.x);
		this.x += Math.cos(theta);
		this.y -= Math.sin(theta);
		return this.getVector();
	}return false;
}
Object.prototype.sameVector = function(vector){
	if(this.isVector()&&vector.isVector()){
		if(Math.round(this.x) === Math.round(vector.x) && Math.round(this.y) === Math.round(vector.y))return true;
		return false;
	}
}
const vector2 = function(x=0,y=0){
	return {x,y};
}
const forIn = function(n,f){
	for(let i=0;i<n;i++)if(f)f(i);
}
const getRad = function(n){return n*Math.PI/180}
const vector2Dir = function(v1,v2){
	return Math.atan2(v2.x-v1.x,v2.y-v1.y);
}
const transformV = function(v1,v2){
	return vector2(v2.x-v1.x,v2.y-v1.y);
}
const getMagnitude = function(vector){
	return Math.hypot(vector.x,vector.y);
}
const random = function(len,min=0){
	return Math.floor(Math.random()*len)+min;
}
const find = function(p){
	return document.querySelector(p);
}
const findall = function(p){
	return document.querySelectorAll(p);
}
const flex = {
	components:[]	
}
const makeElement = function(name,optional={}){
	Object.assign(optional,{
		find(p){
			return this.querySelector(p);
		},
		findall(p){
			return this.querySelectorAll(p);
		},
		addChild(child){
			this.appendChild(child);
			flex.components.push(child);
			if(child.onstyling)child.onstyling();
			if(child.onadded)child.onadded();
		}
	})
	return Object.assign(document.createElement(name),optional);
}
document.body.addChild = function(child){
	this.appendChild(child);
	if(child.onstyling)child.onstyling();
	if(child.onadded)child.onadded();
}

window.onresize = function(e){
	flex.components.forEach(component=>{
		if(component.onscreenChange)component.onscreenChange(e);
	})
}
const cOn = {
	x:new XMLHttpRequest(),
	init(){
		this.x.someSetting = [];
	},
	post(config){
		this.init();
		Object.assign(this.x,config);
		this.x.open('POST',config.url);
		if(this.x.someSetting.length>0){
			this.x.someSetting.forEach(x=>{
				this.x[x[0]](x[1],[x[2]]);
			});
		}
		this.x.send(config.data);
	},
	get(config){
		this.init();
		Object.assign(this.x,config);
		this.x.open('GET',config.url);
		this.x.send();
	}
}