<script lang="ts">
    import {localStorageStore} from "@skeletonlabs/skeleton"
    import type {Writable} from "svelte/store"


let inputName = "";

    interface Contact {
name: string

    }

    const contactStore: Writable <Contact[]> = localStorageStore("contactStore", [])
    function addContact(){
        $contactStore =[
{
                name: inputName
},
...$contactStore

        ]

}
function deleteContact(index:number){
$contactStore = $contactStore.filter((contact, contactIndex) => contactIndex !== index)

}

</script>

<div class="todos">
  <input class="input" type="text" placeholder="추천의 말" bind:value={inputName}/>
  <button type="button" on:click={addContact}>남기기</button>
  {#each $contactStore as contact, index}
  <div class="list">
    <h1>{contact.name}</h1>
    <button type="button" on:click={() => deleteContact(index)}>지우기</button>
  </div>
  {/each}
</div>