#Super cat

This project explores the javascript observer pattern with ES6 features and Google [Incremental DOM](https://github.com/google/incremental-dom), written in ES6.

## Requirements

* [Node.js/NPM](http://nodejs.org/) (v6.9.5)
* [Gulp](http://nodejs.org/) (v6.9.5)


## Overview
The framework is written in ES6 and uses SystemJs for dependencies management, Gulp for pre-compiling ES6 script into ES5 script, 
and the html view templates into incremental dom view functions.

The framework introduces a data service to handle communication between components and other modules. More information 
about the component example and the data service is provided below.


## Setup
To get started on this project, you will need to install a list of the libraries:

**Install Node version manager (NVM)**
Recommend to use node version manager [NVM](https://github.com/creationix/nvm/blob/master/README.md), it is easier to
switch different versions of nodeJs for different projects. After the installation, to use node 6.9.x 
```
nvm install 6.9.5
```
Then run 
```
node -v 
```
to check whether the node version is 6.9.x

### Global nodejs packages ###
Once you have Node.js installed you'll need to install node modules [JSPM](http://jspm.io/), [Gulp](http://gulpjs.com/). 
We recommend a global install since these tools are not project-specific:

```
$ [sudo] npm install -g jspm jspm-git gulp jspm-github
```

config github registry
```
jspm registry config github
```

### Connect to Bitbucket ###
You'll also want to make sure you have SSH keys configured for your Bitbucket account so JSPM can access the private repositories it needs. You can find more details [instructions for doing this on the BitBucket website](https://confluence.atlassian.com/bitbucket/set-up-ssh-for-git-728138079.html). Or you can follow this video [BitBucket - Set up SSH key pair for Git](https://www.youtube.com/watch?v=-ElU6WhNLn4) to generate key-pair.

Once you finish the above steps, you will need to ask the Bitbucket administrator or the project manager to add you in the University of Sydney bitbucket team and give you `read & write` access to this project and `read` access to Garfield ([https://bitbucket.org/sydneyuni/garfield](https://bitbucket.org/sydneyuni/garfield))

After you can access the project you can install the project's dependencies inside the project directory:

```
$ jspm config registries.bitbucket.baseurl ssh://git@bitbucket.org
$ jspm config registries.bitbucket.handler jspm-git
```


### Install node modules ###
Now you can install dependencies

```
$ npm install
$ jspm install
```

When it finishes, you should see the directory `node_modules` and directory `jspm_packages` under the root of the project directory.
You should now be ready to start using the project.


## Component examples
Base example:
http://localhost:9000/demo/examples/cat-list-counter.html

With data service:
http://localhost:9000/demo/examples/cat-clicker.html

Component examples
```
src/components/_cat-clicker
src/components/audio-player
```

## Component Folder structure ##
```
a-component.js          controller
a-component-tpl.html    SuperviewJs view template
a-component-tpl.js      `gulp build-view-templates` compiles tpl.html into Incremental DOM tpl.js
a-component.scss        scss file
demo.a-component.html   component demo html
```

## Flows ##
### Static view ###

```
controller -> view
```
Example
```src/components/_cat-clicker/cat-list-counter/cat-list-counter.js```



### Dynamic view ###
```
controller -> View model -> view
```

Example
```
src/components/_cat-clicker/cat-list
src/components/_cat-clicker/cat-detail-panel
src/components/_cat-clicker/cat-description-panel
```

A component controller has different views or view models
```
controller 1 -> view model 1 -> view 1
                             -> view 2
                         
controller 1 -> view model 1 -> view 1
             -> view model 2 -> view 2

controller 1 -> view model 1 -> view 1
controller 2 -> view model 2 -> view 1
```


## Data service ##
The data service takes the responsibility to
handle communication between components, state changes or sync data with other modules including server and local storage etc. 
The flow is much clear and it is easy and effective to write test code for the complex logic in the data service as 
it doesn't need to get DOM elements.

![](./doc/assets/data-flow-with-data-service.png)


Base: ```src/js/lib/data-service.js```
Example: ```src/components/_cat-clicker/cat-service.js```



### Flow ###

Subscribe to object
```
cat-list | this._data.selectedCat                       cat-service                            cat-detail-panel | this._data.selectedCat
_subscribeToData("selectedCat") ->     subscriber | this._data.selectedCat | subscriber     <- _subscriberToData("selectedCat")

```

Observer and broadcast data changes
```
cat-service                                                  cat-list
_handleObserverDataChanges() -> broadcastDataChanges() ->    handleNotification() -> this._dynamicPartial.view.render() / update dynamic view

                                                             cat-detail-panel
                                                       ->    handleNotification() -> update static view dom element values
```

Use data service if you face one of these situations:

Shared functions or data between components

**Example**
```
international student   ->
                            student-data-service (addStudent(), deleteStudent())
domestic student        ->
```

Components fetch or send data from the same data source (local storage, server API)

**Example**
```
international student -> 
                         student-service                ->  server API/local storage
                         (post, update, get, delete)
domestic student      ->
```

Nested components

**Example**
```
current student
    - international student   
    - domestic student       

current student ->  student-service             <- international student
                   (list, add, find, delete)    <- domestic student

```

Components states have dependencies with each other

**Example**
```
current student ->  student-service                             <- international student
                   (setSelectedStudent, setAvaiableStudents)    <- domestic student

```

Service talk to service

**Example**
```
international student   ->                                     
                            student-sevice <-> teacher-service <- teacher 
domestic student        ->
```
OR

```
international student   ->                                     
                            student-sevice <- student-teacher-service -> teacher-service <- teacher 
domestic student        ->

```


## SuperviewJs and Incremental DOM ##
The framework uses [Incremental DOM](https://github.com/google/incremental-dom) for the dynamic view. 
[SuperviewJs](https://github.com/davidjamesstone/superviews.js/) is a 
template engine to convert a html template into an incremental-dom render function. 

The SuperviewJs playground
http://davidjamesstone.github.io/superviews.js/playground/index.html

Hide the implement details from the view with handlers and keep the view clean and easy to read

**Example**

View

```html
<ul each="student in students">
    <li><h3 class="{vm.handlers.getStudentState(student)}">{student.name}</h3></li>
    <li><h3 class="{vm.handlers.getStudentState(student)}">{student.name}</h3></li>
</ul>
```

Handler for the implement details
```javascript
getStudentState(student) {
    return (selectedStudent === student) ? 
                student.type === "international" ? 
                    "b-student--internal b-student--selected" :
                    "b-student--domestic b-student--selected" :
                student.type === "international" ? 
                "b-student--internal" : 
                "b-student--domestic" ;
}
```

The benefit is the view can be used with different handlers from the same or different controllers

```javascript
getStudentState(student) {
    return (loginUser === student) ? "b-user--login" : "b-user" ;
}    
```

## Component examples
Base example:
http://localhost:9000/demo/examples/cat-list-counter.html

With data service:
http://localhost:9000/demo/examples/cat-clicker.html

Sources
```
src/components/_cat-clicker
src/components/audio-player
```
