<script>
    let c1 ; 
    let c2 ;
    let c3 ; 
    $: value = `${c1} ${c2} ${c3}`;
</script>
<main>
    <select name="c1" id="" bind:value = {c1}>
        <option value="1">a</option>
        <option value="2">b</option>
        <option value="3">c</option>
        <option value="4">d</option>
        <option value="5">m</option>
    </select>
    <select name="c2" id="" bind:value = {c2}>
        <option value="1">d</option>
        <option value="2">e</option>
        <option value="3">f</option>
        <option value="4">g</option>
        <option value="5">l</option>
    </select>
    <select name="c3" id="" bind:value={c3}>
        <option value="1">k</option>
        <option value="2">f</option>
        <option value="3">j</option>
        <option value="4">i</option>
        <option value="5">p</option>
    </select>
    <br>
    <br>
    {value}
</main>