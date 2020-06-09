
// create an element
const createNode = (elem) => {
    return document.createElement(elem);
};

// append an element to parent
const appendNode = (parent, elem) => {
    parent.appendChild(elem);
}

// List Element
const ul = document.querySelector('#repos');

// GitHub API URL
const url = 'https://api.github.com/users/salina-k/repos?page=1&per_page=10';


// make the API call
fetch(url)
    .then(res => res.json())
    .then(data => {
        // iterate over users
        data.map((user) => {
            // create the elements
            let li = createNode('li'),
                span = createNode('span'),
                anchor = createNode('a');
            span.innerText = user.name;
            anchor.href = repos.html_url; // create link to each repos
            // append all elements
            appendNode(li, span);
            appendNode(ul, li);
            appendNode(span, anchor);
        });
    }).catch(err => {
        console.error('Error: ', err);
    });


