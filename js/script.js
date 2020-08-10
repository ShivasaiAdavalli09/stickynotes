/**whenever thr button is clicked or submitted which is one other the same the function is triggered */
/*always declare function with () */
/*prevent default prevents the default action of form on submission or click as we want some thing else to happen */
/*once we delete element we unable to add elements so thats why using count concept */
/*the count was first count=0,but we want to store data in local so declaring in windows storge and then initialise to 0 */
/*we using Number(----) because if not used the appends of count++ will be 11 instead of 2 for example */

let count=Number(window.localStorage.getItem("count"));
if(!count){
    window.localStorage.setItem("count","0");
}

function createNote(noteTitle,noteBody){
    // count+=1; //using this in createnotefrominput function //increment count whenever new note is created
    //that is whenever u add element the no-notes found text will be erased
    //this line equals <id="no-notes" class="hidden"----- but in html its static but here in js when note is created the line is hidden 
   document.getElementById("no-notes").classList.add("hidden");// .hidden in css is class(this logic to delete)

    let li=document.createElement("li");
    let a=document.createElement("a");
    let h2=document.createElement("h2");
    let p=document.createElement("p");
    let xButton=document.createElement("button");
    
    xButton.classList.add("delete");//adding delete class declared in css
    
    let xText=document.createTextNode("X");
    let h2TN=document.createTextNode(noteTitle);//some notes is static we are using dynamic here
    let pTN=document.createTextNode(noteBody);

    h2.appendChild(h2TN);
    p.appendChild(pTN);
    xButton.appendChild(xText);
    a.appendChild(h2);
    a.appendChild(xButton);
    a.appendChild(p);
    a.setAttribute("href","#"); //we are setting href as # as did in html

    li.appendChild(a);

    //getting the ul list notes decalerd in html and appending to li
    document.getElementById("notes").appendChild(li);


}

function createNoteFromInput(e){
    e.preventDefault();

    let noteTitle=document.getElementById("new-note-title-input").value;
    let noteBody=document.getElementById("new-note-body-input").value;
    /*console.log(noteTitle,noteBody)  (this comment is to check linkage in page)*/
    //the below step is to remove the title and notes from textbox once notes created
    document.getElementById("new-note-title-input").value= "";
    document.getElementById("new-note-body-input").value= "";
    
    count+=1;
    window.localStorage.setItem("count",count);
    
    //so that the repeated key i.e noteTitle are not deleted and are stored asnoteTitle-1 and noteTitle-1-1 etc.....
    while(window.localStorage.getItem(noteTitle)){
        noteTitle+=" - 1";
    }
    window.localStorage.setItem(noteTitle,noteBody); //the values being stored as key,value pair

    /*now to create note on clicking cretaenote */
    createNote(noteTitle,noteBody);

}
function removeItem(e){
    
    if(e.target.classList.contains("delete")){
    if(confirm("Are you sure wanna delete?")){
        let li=e.target.parentElement.parentElement;
        let ul=document.getElementById("notes");
        ul.removeChild(li);
    }
}
count--;      //decrement whener there is notes deleted
//if we dont remove notes from local storage then on deleting and refreshing the deleting element reappears
window.localStorage.setItem("count",count);
window.localStorage.removeItem(e.target.previousElementSibling.innerText) //in this function we are in delete element hence trying to get previous sibling whcih is h2 and deleteing it
if(count<1){
    document.getElementById("no-notes").className="";
}
}

//fetching the storage to loal storage because if we dont do this on refresh the data erased
// we are using count +1 because we want to skip count key value data and are avoding in condition below as a data here in fetching
for(i=0;i<count + 1;i++){
    let noteTitle=window.localStorage.key(i);// we donno which values stored bcoz we are storing noteTitle only as key so all the keys are fetched
    let noteBody=window.localStorage.getItem(noteTitle);
    
    if(noteTitle!=="count" && noteTitle)  //along with not considering count data also noteTitle should not be empty
    createNote(noteTitle,noteBody);

}

document.getElementById("inputForm").addEventListener("submit",createNoteFromInput,false);
document.getElementById("notes").addEventListener("click",removeItem);