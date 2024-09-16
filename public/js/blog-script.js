'use strict'

//const { json } = require("body-parser");

let currentPage;

if (document.querySelector('.col-i-blog')) {
    let blogInner;

    async function ajaxPagination(pag = 0) {
        currentPage = pag;
        var req = await fetch(`http://localhost:4002/blog/${pag}`, {
            method: 'GET'
        });

        var json = await req.json();
        blogList(json);
    }

    function blogList(json) {
        blogInner = document.querySelector(".col-i-blog .center");
        blogInner.innerHTML = '';

        json.blog.forEach(item => {
            blogInner.insertAdjacentHTML("beforeEnd",
                `
             <div class="blog-item">
                 <div class="blog-img">
                     <img src="/images/${item.imagem}"/>
                 </div>
                  <div class="blog-info">
                       <a href=""><h3 class="fontsize">${item.titulo}</h3></a>
                        <p class="p-blue">${item.data}</p>
                        <p class="p-black">${item.descricao}</p>
                  </div>
              </div>
            `
            );
        });
        const totalPage = json.totalPage;;
        pagination(totalPage);
    }

    function pagination(totalPage) {
        
        blogInner.insertAdjacentHTML("beforeEnd",
            `<div class="col-pagination-items"></div>`
        );

        let paginationItems = document.querySelector('.col-pagination-items');

        let paginationItem = document.createElement('div');
        paginationItem.classList.add('pagination-i');
        let p = document.createElement('p');
        p.classList.add('p');
        let text1 = document.createTextNode(`Página ${currentPage} de ${totalPage}`);
        paginationItem.appendChild(text1);
        paginationItems.appendChild(paginationItem);


        for (let i = 0; i < totalPage; i++) {
            let div = document.createElement('div');
            div.classList.add('circle-pagination');
            div.setAttribute('data-pagination', i + 1);

            let h3 = document.createElement('h3');
            h3.classList.add('pagination-number');
            let text = document.createTextNode(i + 1);
            h3.appendChild(text);
            div.appendChild(h3);
            paginationItem.append(div)
        }

        document.querySelectorAll('.circle-pagination').forEach(button => {
            button.addEventListener('click', () => {
                let numPagination = button.getAttribute('data-pagination');
                ajaxPagination(numPagination);
            });
        });
    }
    ajaxPagination(0);
}



