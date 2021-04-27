# ToDoList
    
### A simple application to help you plan your day. 
[Deployed Site](https://knightmac19.github.io/ToDoList/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

## <a name="languages"></a> Languages & Technologies
[Contents](#contents)  
<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
                 <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
                 <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
                 <img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/>
                 <img alt="jQuery" src="https://img.shields.io/badge/jquery-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white"/>
                 <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>
                 <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
                 <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
                 <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
                

## <a name="contents"></a>  Contents
- [Languages](#languages)
- [Description](#description)
- [Motivation](#motivation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Challenges](#challenges)
- [Contributors](#contributors)  
- [License](#license)


## <a name="description"></a> Description
[Contents](#contents)  
Upon opening the [page](https://knightmac19.github.io/ToDoList/) users are presented with a list of timeblocks from 8:00 am to 10:00 pm. The current date and time (up to the second) is displayed and each timeblock allows users to enter text. Each timeblock has a clear button that removes that timeblock's text from local storage. Users don't have to worry about a save button as data is set in local storage on every keystroke. 

The `<textarea>` element of each timeblocks is dynamically styled to represent its relationship to the current hour. Past timeblocks are given a gray background. The present timeblock receives a dark purple background, and future timeblocks are styled with light purple backgrounds. 

![Main Page](https://github.com/knightmac19/ToDoList/blob/main/assets/browser_view.png)  

## <a name="motivation"></a> Motivation
[Contents](#contents)  
While life may be very hectic a simple list of to-do's can reduce anxiety and allow people to more efficiently use their time. This application features an intuitive and fully responsive interface that all users will be able to navigate on whichever device they choose.

## <a name="usage"></a> Usage
[Contents](#contents)  
Users can `clone` the repo then open `index.html` in the browser or they may visit [this link](https://knightmac19.github.io/ToDoList/).

## <a name="challenges"></a> Challenges & Lessons Learned
[Contents](#contents)  
In order to dynamically style the textareas, the element `id's` needed to increment by one. In other words, the two `id's` for the 12pm and 1pm timeblocks had to be `12` and `13`, respectively. However, the current time displayed at the top of the page was displayed in 12-hour time. Therefore it was necessary to build two time objects -- one for military time and one for 12-hour time for running the conditional styling checks and displaying the current timestamp to the page.  

![Military time function](https://github.com/knightmac19/ToDoList/blob/main/assets/set_date_time.png)  

## <a name="contributors"></a> Contributors
[Contents](#contents)  
- Patrick Dunn // [pmdunn78@gmail.com](mailto:pmdunn78@gmail.com) // [github.com/knightmac19](https://github.com/knightmac19)  

## <a name="questions"></a> Questions
[Contents](#contents)  
Please direct any questions to [pmdunn78@gmail.com](mailto:pmdunn78@gmail.com).

## <a name="license"></a> License
[Contents](#contents)  
Copyright 2021 Patrick Dunn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.