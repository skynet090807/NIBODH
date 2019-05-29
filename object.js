//creating object through literals
var person=
{
	f_name:"ram",
	l_name:"kumar",
	age:21,
	full_name:function(){
		return this.f_name+this.l_name
	}
}

console.log(person.full_name());
//creating objects through constructor
function batsman(name,runscored,ballfaced,average)
{
	this.name=name;
	this.runscored=runscored;
	this.ballfaced=ballfaced;
	this.average=average;
	this.strikerate=function()
	{
		return this.runscored/this.ballfaced;
	} 
}
console.log(batsman);


dhoni=new batsman("dhoni",10000,8000,50.0)
console.log(dhoni.strikerate());

undertaker=new batsman("undertaker",1000,80,50.0)
console.log(undertaker.strikerate());
//created new object using new keyword
virat=new batsman("virat",1000,800,50.0)
console.log(virat.strikerate());
