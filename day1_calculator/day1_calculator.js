function displayAns(ans) {
  console.log(ans);    
  document.getElementById("ans").value = ans;  
};

window.onload=function(){
  document.getElementById('add').addEventListener('click', function(){
    
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var ans = (+x) + (+y);

    displayAns(ans);
  });  
  
  document.getElementById('minus').addEventListener('click', function(){
    
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var ans = x - y;

    displayAns(ans);
  });

  document.getElementById('multiple').addEventListener('click', function(){
    
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var ans = x * y;

    displayAns(ans);
  });  
  
  document.getElementById('divide').addEventListener('click', function(){
    
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var ans = x / y;

    displayAns(ans);
  });

};

