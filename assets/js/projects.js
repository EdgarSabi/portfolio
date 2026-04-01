$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/krwebshop.png',
            link: 'https://github.com/EdgarSabi/Backend_KRWebshop',
            title: 'Korean Webshop Backend',
            demo: false,
            technologies: ['Java', 'Docker'],
            description: "The backend of a Korean webshop that I made. It was done in Spring Boot Java and the main theme was Korean snacks. User can safely create an account and place orders",
            categories: ['featured', 'backend']
        },
        {
            image: 'assets/images/krwebshop.png',
            link: 'https://github.com/EdgarSabi/Frontend_KRWebshop',
            title: 'Korean Webshop Frontend',
            demo: false,
            technologies: ['TypeScript', 'Angular', 'HTML', 'CSS'],
            description: "The frontend of a Korean webshop that I made. Users can create an account, place items in their cart, translate the webshop to English, Dutch and Korean and order the items",
            categories: ['featured', 'frontend']
        },
        {
            image: 'assets/images/tedx.png',
            link: 'github.com/EdgarSabi/TEDX_Clustering_Classification',
            title: 'TEDX Clustering and Classification',
            demo: false,
            technologies: ['Python', 'Jupyter Notebook', 'Looker Studio'],
            description: "A project in which data from TEDx youtube videos is analyzed based on: views, likes and comments. Based on that, their popularity is determined. Aside from that, a classification is done to investigate wether using certain words has any positive or negative effect on the popularity of the videos",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/luxury.png',
            link: 'https://github.com/EdgarSabi/Fullstack_webshop',
            title: 'Luxury Products Webshop Full Stack',
            demo: false,
            technologies: ['Spring Boot Java', 'SCSS', 'HTML', 'Angular'],
            description: "A luxury products webshop in which users can place (expensive) orders. My part in this was to add translation, 'glamify' the design, and add the functionality of giftcards. Users can use giftcards in order to pay for their order.",
            categories: ['featured', 'security']
        },
        
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}