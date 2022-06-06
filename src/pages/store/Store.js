// This is my store but not work the localStorage
import {writable} from 'svelte/store';


const storedTheme = localStorage.getItem("darkmode");
export let darkmode=writable(storedTheme);
darkmode.subscribe(value => {
    localStorage.setItem("darkmode", value===false ? writable(false) : writable(true));
});