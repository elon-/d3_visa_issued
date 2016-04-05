/*function chart(data){
	var margin = { top: 10, right: 10, bottom: 10, left: 30 },
	    width =  960- margin.left - margin.right,
	    height = 740 - margin.top - margin.bottom;

	//grouping by country and find sum of visa//     
	var nest = d3.nest()
	    .key(function(d) { return d.COUNTRY; })
	    //.key(function(d) {return d.year;})//
	    .rollup(function(leaves){
	    	return d3.sum(leaves,function(d){
	    		return d["TOURIST VISA"];
	    	});})
	    .entries(dataset);

	// values and country name variable//

	var countrys_name=nest.map(function(d){return d.key;});
	var visa_count=nest.map(function(d){return d.values});

	// scaling visa count into pixcel
	var x=d3.scale.linear()
	.domain([0,d3.max(nest,function(d){return d.values;})])
	.range([0,width]);
	
	// scaling country to pixcle
	var y=d3.scale.ordinal()
			.domain(nest.map(function(d){
				return d.key;}))
			.rangeRoundBands([0,height],.1);

	// creating svg element tag
	var svg = d3.select('body').append('svg')
	    .attr('width', width + margin.left + margin.right+100)
	    .attr('height', height + margin.top + margin.bottom)
	
	// create x-Axis
	var xAxis=d3.svg.axis()
				.scale(x)
				.orient("bottom")
	
	// create y-Axis
	var yAxis=d3.svg.axis()
				.scale(y)
				.orient("right");
				
	//creating svg axis element 
	/*svg.append("g")
		.attr("class","x_axis")
		.attr('transform', 'translate(' + 0 + ',' + height + ')')
		.call(xAxis)
		.attr('class', 'x class');

	svg.append("g")
		.attr('class',"y axis" )
		.attr('transform', 'translate(' + width+ ',' + 0 + ')')
		.call(yAxis);

	// creating drop box//
	function changer(event){
		var target_name=event.target.value;
		alert(target_name);
	}

	// creating country dropdown//
	d3.select("body").append("select")
	.selectAll('select').data(countrys_name).enter()
	.append("option")
	.attr('value', function(d){return d;})
	.text(function(d){return d;});

	// create bar chart   
	 svg.selectAll('bar').data(nest).enter()
	 .append('rect')
	     .attr('x',function (d) {	     	
	     	return width-x(d.values);
	     } )
	     .attr('y',function(d){
	     	return y(d.key);
	     } )
	     .attr('width', function(d){
	     	return x(d.values);
	     })
	     .attr('height', y.rangeBand())
	     .attr('fill', '#000');
};
*/
/*var dataset;
var format=d3.time.format("%d-%m-%Y");

d3.csv("visa_issued.csv",function (error,data){
	if (error){
		console.log(error);
	}else{
		data["DATE"]=format.parse(data["DATE"]);
		dataset=data;
		
	}	
	
	
	
});*/
var format = d3.time.format("%d/%m/%Y");

 d3.csv("visa_issued.csv", function(d) {
        
        d["DATE"]=format.parse(d["DATE"]);//
        return d;
      });
   
   