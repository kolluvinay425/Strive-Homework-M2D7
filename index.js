 /*
        JS Exercises
        EX11) Write a function to add a new link into the navbar
        EX12) Write a function to change the color of the main title
        EX13) Write a function to change the background of the jumbotron
        EX14) Write a function to remove all the links under "Elsewhere"
        EX15) Write a function to change the column size for heading in jumbotron
        EX16) Write a function to remove the "Search" magnifying glass icon

        EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
        EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
        
        EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
        EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
    */
window.onload =function(){
    
    newLink()
    changeColor()
    changeBackgroundColor()
    removeLinks()
    changeColumnSize()
    removeSearchicon()
    authorNameOnHover()
    
}
        function newLink(){
            let className = document.querySelector('.nav')
            let link = document.createElement('a')
            
            link.href = 'https://www.google.com/'
            link.target ='_blank'
            link.style.color='white'
           
            link.innerHTML += 'NewLink'
            className.appendChild(link)
        }


        function changeColor(){
            let className = document.querySelector('.blog-post-title')
            className.style.color = 'red'
            

        }


        function changeBackgroundColor(){
            console.log('loading')
            let jumbotronClass = document.querySelector('.jumbotron')
            jumbotronClass.style.backgroundColor = 'grey'

        }

        function removeLinks(){
           
            let elseWhere = document.querySelector('.listunstyled')
            elseWhere.innerHTML = ''

        }

        function changeColumnSize(){
           
            let className = document.querySelector('.jumbotron h1')
            className.classList.add('col-12')
            

        }

        function removeSearchicon(){
           
            let className = document.querySelector('#removeSearchIcon')
            className.innerHTML=''
            

        }
        function addNewBlogPost(){
            console.log('loading')
            let className = document.querySelector('.blog-post')
            let newDiv = document.createElement('div')
            newDiv.classList.add('blogs-post-title')
            let para = document.createElement('p')
            para.style.color = 'blue'
            let newTitle = document.createElement('h2')
            newTitle.style.padding ='0px'
            newTitle.classList.add('display-4')
            para.innerHTML = 'this one is paragraph of the newly added blog post inside the blog-post section,which appears only after clicking on newer button which is located under the page ...i know, i can solve this shit'
            newTitle.innerHTML = 'This is newly created Blog post'
            newTitle.style.color='red'
            newDiv.appendChild(newTitle)
            newDiv.appendChild(para)
            className.appendChild(newDiv)
            

        }
   


        function removePrevioulyAddedPost(){
            let className = document.querySelector('.blogs-post-title')
            //let child = document.querySelector('.blog-post-title h1')
            className.innerHTML=''
        }


        function authorNameOnHover(){
            let className = document.querySelector('.blog-post-meta a').value
            className.style.hover = alert(className)
        }