import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
        <div role="listbox">
            <paper-item>Inbox</paper-item>
            <paper-item>Starred</paper-item>
            <paper-item>Sent mail</paper-item>
        </div>
        <paper-input label="text input"></paper-input>
    `
})
export class AppComponent { }
