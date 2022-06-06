<script>
    import {darkmode} from '../store/Store.js';
    const languajes=[
		{
			name:"Html",
		},
        {
            name:"Css",
        },
        {
            name:"Sass",
        },
        {
            name:"Javascript",
        },
        {
            name:"Java",
        },
        {
            name:"Python",
        },
        {
            name:"Php",
        },
        {
            name:"Mysql",
        },
        {
            name:"PostgreSQL",
        },
        {
            name:"Azure",
        },
    ];
    const frameworks=[
        {
            name:'laravel',
        },
        {
            name:'django',
        },
        {
            name:'springboot',
        },
        {
            name:'react',
        },
        {
            name:'svelte This portfolio is made in this',
        },
        {
            name:'bootstrap',
        },
        {
            name:'tailwind',
        }
    ];
    import Loading from '../components/Loading.svelte';
	let loading=setTimeout(() => {
        loading=false;
    }, 2000);
</script>
 {#if loading}
    <Loading/>
{:else}
<section class={$darkmode?'about darkmode':'about'}>
    <div class="information">
        <div><p class="especialFont">{$darkmode?'<section class="darkmode">':'<section>'}</p></div>
        <div><p class="especialFont">&lt;h1&gt;</p></div>
        <h1 class="tab-2">About me</h1>
        <h2 class="tab-2">My, Self</h2>
        <div><p class="especialFont">&lt;/h1&gt;</p></div>
        <div><p class="especialFont">&lt;p&gt;</p></div>
        <h4>
            I am a full stack developer located in Colombia. I consider that I have a great passion 
            for what I do in addition to learning on my own.
        </h4><br>
        <h4>
            Organized person and in addition to this I love reading, listening to music and in love with coffee.
        </h4><br>
        <h4>
            Interested in being a person who adds value and eager to continue learning charismatic and cheerful.
        </h4>
        <div><p class="especialFont">&lt;/p&gt;</p></div>
        <div><p class="especialFont">&lt;/section&gt;</p></div>
    </div>
    <div class="languajes">
        <section class="technologies">
            <div class="languaje">
                <h2 class="tab">Languages</h2>
                <div class="container">
                    {#each languajes as languaje}
                        <div class=" tab item">
                            <h5>{languaje.name}</h5>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="languaje">
                <h2 class="tab">Frameworks</h2>
                <div class="container">
                    {#each frameworks as framework}
                        <div class=" tab item">
                            <h5>{framework.name}</h5>
                        </div>
                    {/each}
                </div>
            </div> 
        </section>
    </div>
</section>
{/if}
<style>
    .about{
        background-color: var(--color-light);
        color: var(--color-dark);
        height: auto;
        padding-left:15%;
        overflow: hidden;
        width: 100%;
        display:grid;
        grid-template-columns: 50% 50%;
        padding-top:80px ;
        padding-bottom:90px ;
    }
    .darkmode{
        background-color: var(--color-dark);
    }
    .languajes{
        display:flex;
        justify-content: center;
        margin-top:70px;
        margin-bottom:70px;
    }
    .container{
        display:grid;
        grid-template-columns: 50% 50%;
        gap:10px;
    }
    .item{
        padding: 5px 5px;
        border-radius: 5px;
        background-color: var(--color-primary);
        text-align: center;
        color: var(--color-light);
    }
    @media(max-width: 1092px){
        .about{
            grid-template-columns: 80%;
            grid-template-rows: auto auto;
            place-content: center;
            place-items: center;
            gap:20px;
            padding-left:0 ;
            height: auto;
        }
    }
    @media(max-width: 500px){
        h1{
            font-size: 2.9em;
        }
        h2{
            font-size: 2.6em;
        }
        h4{
            font-size: 1.1em;
        }
        .container{
            grid-template-columns: 100%;
        }
    }
    @media (max-width: 315px) {
        h2{
            font-size: 2.1em;
        }
    }
</style>