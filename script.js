//Dom manipulation

//1. Get element by id.
// const heading = document.getElementById("heading").textContent
// console.log(heading);


//2. by tag name
// const tagname = document.getElementsByTagName('h1')
// console.log(tagname[0]);


//3. by class name
// const heading = document.getElementsByClassName('heading')
// console.log(heading);


//4. queryselector
      //----takes id as in css with a # (hash) ----//
// const heading = document.querySelector('#heading')
// console.log(heading);
       //----takes class as in css with a .(dot) ---//
// const heading2 = document.querySelector('.heading')
// console.log(heading2);

//5. queryselectorAll
// const heading = document.querySelectorAll('.heading')
// console.log(heading);   //returns NodeList

//======================================================================

//--------------now how to get parts of elements seperately--//
//how to get child element or parent element or nested etc //



//traverse DOM

//1. Parent node       //it is a property not menthod or function so avoid brackets after parentNode     // 
// const heading = document.querySelector('.heading')
// const parent = heading.parentNode                     //no brackets
// console.log(parent);


//2. child Nodes      // also a property            // childNodes is different than children 
// const parent2 = document.querySelector('.parent')
// const children2 = parent2.children                  //returns html collection
// console.log(children2);

// const children3 = parent2.childNodes                //returns nodelist
// console.log(children3);


//3. NextElement Sibling
// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);



//4. previousElement Sibling
// const heading2 = document.querySelector('.h3Element');
// console.log(heading2.previousElementSibling);



//=====================================================================================================================
//                                                  MANIPULATION                                                       
//=====================================================================================================================

// const heading = document.querySelector('.heading')


//1. innerHTML              == to change the text of heading

// heading.innerHTML = 'Web dev is awesome'


// //2. style.(anyCssProperty)          == to change css
// heading.style.color = 'purple'
// heading.style.fontSize = '100px'
// heading.style.fontFamily = 'sans-serif'
// heading.style.fontWeight = '400'

// //3. .classList.add()                       == add class to the element
// heading.classList.add('title')


// //4. .classList.remove()                    == to remove class
// heading.classList.remove('heading')





//=============================================================================================================================================
//                                                              ADVANCED MANIPULATION
//=============================================================================================================================================


//1. Creating elements            == creating tags and insert in parent tags


//------------------------step 1.---- create tag
// const heading = document.createElement('h1')


// //------------------------step 2.---- Add text in the tag created
// heading.innerHTML = 'javascript is awesome'


// //------------------------step 3.---- Append tag in position we wanted
// //    ----step(a)----- select the parent 
// const parent = document.querySelector('.parent')
// //    ----step(b)----- append tag using append child
// parent.appendChild(heading)


// //-------------------------step 4----- add class to the tag
// heading.classList.add('heading')


// // // console.log(heading);
// // // ==============    ============//
// // //     Problem with using append
// // // ==============    ============//

// // // problem is that it appends at the last index like a stack
// // // so if we add <h3> tag again, it will be under <h1> which we had created before

// // // ==============    ============//
// // //     solution to this
// // // ==============    ============//

// // // if we need to add the elements before anything
// // .insertAdjacentElement     is used
// const subHeading = document.createElement('h3')
// subHeading.innerHTML = 'web dev is awesome'
// subHeading.classList.add('subHeading')
// // console.log(subHeading);
// // adding <h3> before <h1>
// heading.insertAdjacentElement("beforebegin",subHeading)
// heading.insertAdjacentElement("afterend",subHeading)      //--this adds after the element heading



//==========================================================================================
//                                DOM EVENTS
//==========================================================================================

//click event etc...... check MDN DOC FOR ALL EVENTS

//1. click event

//we need to select when to do and where to do.

// const button = document.querySelector('#btn')
// const heading = document.querySelector('#heading')


// button.addEventListener('click',function(event){
//       //here we set what to do...
//       heading.style.color = 'purple'
//       heading.style.fontSize = '60px'

//       console.log('button clicked', event)
// })





////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                PROJECT -> BULB OFF AND ON
//
////////////////////////////////////////////////////////////////////////////////////////////////

const bulbSwitch = document.querySelector('#bulbSwitch');
const bulb = document.querySelector('#bulb')

// console.log(bulbSwitch);
bulbSwitch.addEventListener('click',function(){
      // for image tag, scr is a property so we need to change the src //
      // console.log(bulb.src);
      //in src we have the source of image and we will change the source //
      if (bulb.src.match('off')){
            bulb.src = '/bulb-on.gif'
            bulbSwitch.innerHTML = 'Turn Off'
      }else{
            bulb.src ='/pic_bulboff.gif'
            bulbSwitch.innerHTML = 'Turn On'
      }
      // bulb.src = '/bulb-on.gif'          
})






















