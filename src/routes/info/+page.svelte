<script lang="ts">
    import {setDoc, collection, deleteDoc, onSnapshot, doc} from 'firebase/firestore';
    import db from '../../firebase.js'
    import {onMount} from 'svelte';
let input;
let snap;
onMount (() => {
    onSnapshot(collection(db, 'todos'), (snapshot) => {
        snap = snapshot.docs
    })
})
const handleSubmit = async e => {
    e.preventDefault()
    const Id = crypto.randomUUID()

    await setDoc(doc(db, 'todos', Id), {

                todoText:input,
                Id,
    })
}
const handleClick = async id => {
await deleteDoc(doc(db, 'todos', id))

}
</script>

<form class="inputs" on:submit={handleSubmit}>
  <input class="input" type="text" placeholder="추천의 말" bind:value={input}/>
    <button type="submit">남기기</button>
</form>
<ul class="comments">
{#if snap}
{#each snap as snapshot (snapshot.data().Id) }
<li>{snapshot.data().todoText} <button on:click={() => handleClick(snapshot.data().Id)}>지우기</button></li>
{/each}
{/if}
</ul>