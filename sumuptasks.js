var sum = 0;

function incrementSumBy(value) {
	sum += value;
	$('#sum').text(sum.toFixed(2));
	$('#sum-bar').effect("highlight", { color : '#ffffff' }, 200);
}
function decrementSumBy(value) {
	incrementSumBy(-value);
}

$(document).ready(function(){
   incrementSumBy(0);

   $("#quarter .plus").click(function(event){
	incrementSumBy(.25);
   });
   $("#quarter .minus").click(function(event){
	decrementSumBy(.25);
   });
   $("#half .plus").click(function(event){
	incrementSumBy(.5);
   });
   $("#half .minus").click(function(event){
	decrementSumBy(.5);
   });
   $("#full .plus").click(function(event){
	incrementSumBy(1);
   });
   $("#full .minus").click(function(event){
	decrementSumBy(1);
   });
   $("#reset-sum").click(function(event){
	sum = 0;
	incrementSumBy(0);
   });
 });

