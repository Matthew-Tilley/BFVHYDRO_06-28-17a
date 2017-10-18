function compute_formula()
{
	
	/********* INSTANTIATE VARIABLES *********/
	
	var container_volume;
	var masterblend;
	var calcium_nitrate;
	var magnesium_sulfate;
	var crop_type;
	
	
	
	/********* INPUTS & DATA LINKS *********/
	
	container_volume = 	document.getElementById("container_volume").value;
	
	crop_type = document.getElementById("dropdown").value;
	
	
	
	/********* CALCULATIONS SECTION *********/
	
	if (crop_type == "greens")
		{
			masterblend = 		(container_volume * 2).toFixed(1);
			calcium_nitrate =	(container_volume * 2).toFixed(1);
			magnesium_sulfate = (container_volume * 1).toFixed(1);
		}
	
		
	if (crop_type == "veggies")
		{
			masterblend = 		(container_volume * 2.4).toFixed(1);
			calcium_nitrate = 	(container_volume * 2.4).toFixed(1);
			magnesium_sulfate =	(container_volume * 1.2).toFixed(1);
		}
	
	
	if (crop_type == "flowers")
		{
			masterblend = 		(container_volume * 2.4).toFixed(1);
			calcium_nitrate = 	(container_volume * 0.8).toFixed(1);
			magnesium_sulfate =	(container_volume * 1.2).toFixed(1);
		}
	
	
	
	/********* OUTPUTS *********/
	
	document.getElementById("masterblend").innerHTML = masterblend;
	document.getElementById("calcium_nitrate").innerHTML = calcium_nitrate;
	document.getElementById("magnesium_sulfate").innerHTML = magnesium_sulfate;
}



/********* RESET BUTTON *********/

$(document).ready(function()
{
	
	$("#reset_input").on("click", function()
	{
		$("#container_volume").reset();	
	});
	
});