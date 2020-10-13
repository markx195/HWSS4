const dictionary ={
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    perfect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
}
// const {debug, done, perfect, pm, uiux} = dictionary;
// console.log('Debug:'+" " + debug);
// console.log('Done:'+" "+done);
// console.log('Perfect:' + " "+ perfect);
// console.log('Pm:'+" "+pm);
// console.log('Uxui'+" "+ uiux);

let q = alert('Hi there, this is dev dictionary');
let p = prompt("Enter a key word");
if(p == 'debug'){
    alert(dictionary.debug);
}
else if(p == 'done'){
    alert(dictionary.done)
}
else if(p == 'perfect'){
    alert(dictionary.perfect)
}
else if(p == 'pm'){
    alert(dictionary.pm)
}
else if(p == 'uiux'){
    alert(dictionary.uiux)
}
else{let u = prompt('We could not find your word, leave your explanation')
    dictionary[p]=u;
    alert("Done");
    alert(u);
};

