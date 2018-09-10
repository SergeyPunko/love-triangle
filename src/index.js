/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  	var triangles=0;
  	for (var i=0;i<preferences.length;i++){
  		if(preferences[i]==i+1) continue;
   		if(i+1==preferences[(preferences[(preferences[i]-1)]-1)]){
     		triangles++;
   		}; 
  	};

 	return triangles/3;

};