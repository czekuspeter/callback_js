// function szamol(callback)
// {
//     osszead(function()
//     {
//         const data =  "osszead";
//         callback(data);
//     }, 2);
// }


function osszead(d1,d2)
{
    return d1 +d2;
}

function kivonas(d1,d2)
{
    return d1 - d2;
}

function szorzas(d1,d2)
{
    return d1 * d2;
}

function osztas(d1,d2)
{
    return d1 / d2;
}

function szamol(muv,v1,v2,kiir)
{
    let eredmeny = muv(v1,v2);
    kiir(eredmeny);

}

szamol(osszead, 5, 3, function (result) {
    console.log('Az összeadás eredménye: ' + result);
  });
  
  szamol(kivonas, 8, 2, function (result) {
    console.log('A kivonás eredménye: ' + result);
  });
  
  szamol(szorzas, 4, 6, function (result) {
    console.log('A szorzás eredménye: ' + result);
  });
  
  szamol(osztas, 9, 3, function (result) {
    console.log('Az osztás eredménye: ' + result);
  });