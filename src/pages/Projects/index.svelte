<script>
    import {Github} from "svelte-bootstrap-icons";
    import {darkmode} from '../store/Store';
    let projects=[
        {
            color:'#FE9A65',
            title:'Personal Portfolio',
            description:'A personal portfolio website made with Svelte...',
            link:'https://github.com/johngualteros/portfolio-svelte-personal'
        },
        {
            color:'#65B5FE',
            title:'Django PostgreSQL',
            description:'A web app made in django it are a web for make new task...',
            link:'https://github.com/johngualteros/django_postgree'
        },
        {
            color:'#F3FE65',
            title:'Svelte coin api',
            description:'A web made in svelte coin api it show the prices of the coins...',
            link:'https://github.com/johngualteros/svelte-coin-api'
        },
        {
            color:'#FE8165',
            title:'Svelte Crud',
            description:'web made in svelte crud for add new products...',
            link:'https://github.com/johngualteros/sveltecrud'
        },
        {
            color:'#8FFE65',
            title:'Shop Laravel',
            description:'Mini shop made in laravel, mysql and materialize..',
            link:'https://github.com/johngualteros/latiendaPHP'
        },
        {
            color:'#65FE90',
            title:'Javascript crud POO',
            description:'A crud made in javascript with POO programing oriented objects...',
            link:'https://github.com/johngualteros/javascript_poo_crud'
        },
        {
            color:'#65FEDF',
            title:'Landing page tailwind',
            description:'A landing page made in tailwind...',
            link:'https://github.com/johngualteros/Tailwind'
        },
        {
            color:'#6572FE',
            title:'Django Portfolio Blog',
            description:'web page made in django and sqllite blog and portfolio sample',
            link:'https://github.com/johngualteros/Django-portfolio-blog'
        },
        {
            color:'#D065FE',
            title:'Django generator',
            description:'web page that generates passwords with different filters in django',
            link:'https://github.com/johngualteros/Generator-django-password'
        },
    ];
    import Loading from '../components/Loading.svelte';
	let loading=setTimeout(() => {
        loading=false;
    }, 2000);
</script>
{#if loading}
    <Loading/>
{:else}
<section class={$darkmode?'projects-dark':'projects'}>
    <h2>My Projects</h2>
    <div class="project-container">
        {#each projects as project}
        <div class="project" style="border-top: 5px solid {project.color}">
            <div class="project-title">
                <h4 style="color: {project.color}">{project.title}</h4>
            </div>
            <div class="project-description">
                <p>{project.description}</p>
            </div>
            <div class="project-link">
                <a href={project.link} target="_blank">
                    <Github width={40} height={40} style="color:{project.color}"/>
                </a>
            </div>
        </div>
        {/each}
    </div>
    <a class="more" href="https://github.com/johngualteros" target="_blank">View More Projects...</a>
</section>
{/if}
<style>
    h2{
        margin-left: 330px;
        margin-bottom: 20px;
    }
    p{
        font-weight: bold;
    }
    .more{
        text-decoration: none;
        font-weight: bold;
        color: var(--color-secondary);
        transition: all 0.2s ease-in-out;
    }
    .more:hover{
        color: var(--color-primary);
        transition: all 0.2s ease-in-out;
    }
    .projects{
        width: 100%;
        height: 100vh;
        padding-left:17%;
    }
    .projects-dark{
        width: 100%;
        height: 100vh;
        padding-left:17%;
        background-color: var(--color-dark);
    }
    :global(.projects-dark h2, .projects-dark p){
        color: var(--color-light);
    }
    .project-container{
        width: 80%;
        display:grid;
        grid-template-columns: repeat(3, minmax(300px, 1fr));
        gap:3em;
        margin-bottom: 10px;
    }
    .project{
        box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
        border-radius: 5px;
        padding: 5px;
    }
    .project-link{
        text-align: right;
        cursor: pointer;
    }
</style>