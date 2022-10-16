import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  quillConfig={
    //toolbar: '.toolbar',
     toolbar: {
       container: [
        // ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
       //  ['code-block'],
       //  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
       //  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
         [{ 'list': 'ordered'}],
       //  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        // [{ 'direction': 'rtl' }],                         // text direction

        // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
       //  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      //   [{ 'font': [] }],
      //   [{ 'align': [] }],

      //   ['clean'],                                         // remove formatting button

          ['link'],
       //  ['link', 'image', 'video'],
      //   ['emoji'], 
       ],
    //   handlers: {'emoji': function() {}}
     },
    autoLink: true,

    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ["@", "#"],
      
    },
    "emoji-toolbar": true,
    "emoji-textarea": false,
    "emoji-shortname": true,
    keyboard: {
      bindings: {
        // shiftEnter: {
        //   key: 13,
        //   shiftKey: true,
        //   handler: (range, context) => {
        //     // Handle shift+enter
        //     console.log("shift+enter")
        //   }
        // },
        
      }
    }
  }
}
