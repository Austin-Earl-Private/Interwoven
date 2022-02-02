// <!--
// *************Map created by Simplemaps.com********************		
// *************Attribution is highly appreciated!***************
// *************http://simplemaps.com****************************

// The MIT License (MIT)

// Copyright (c) 2020 Pareto Softare, LLC DBA Simplemaps.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// -->


//Used this to make the options for our dropdown in the form on the profile page
// var svg = document.getElementById('worldMap');
// var elements = document.getElementsByClassName("image-path");
// var ids = '';
// for(var i=0; i<elements.length; i++){
//     //<option value="Gabon">Gabon</option>
//     ids += '<option value="' + elements[i].id + '">' + elements[i].id + '</option>';
// }
// console.log(ids);

// var elements = document.getElementsByClassName("image-path");
// var ids = '';
// for(var i=0; i<elements.length; i++){
//     //<option value="Gabon">Gabon</option>
//     ids += '{"countryId":"' + elements[i].id + '","countryName":"' + elements[i].id + '"},';
// }
// console.log(ids);

document.addEventListener('click', doThing);

function doThing(event) {
    if (event.srcElement.id == ""){
        //if no id, go to parent element and get that id
        console.log(event.srcElement.parentElement.id);
    }
    else{
        console.log(event.srcElement.id);
    }
    
}

//change the fill color of the path if there are stories from that country
//populate the next page using the country reaching back to the database