<script>
  import { ButtonGroup, Spinner, InputAddon, Input, Button } from "flowbite-svelte";
  import { searchQuizCollection } from "../utils/http";
  import SearchCard from "../components/SearchCard.svelte";
  let data = [];
  data = searchQuizCollection("");
</script>

<h1 class="text-4xl md:text-5xl lg:text-6xl">LeoK Quiz</h1>

<div class="flex flex-row justify-center items-center my-10">
  <ButtonGroup>
    <InputAddon>🔍</InputAddon>
    <Input id="input-addon" placeholder="Search..." on:keydown={(e) => (data = searchQuizCollection(e.target.value))} />
  </ButtonGroup>
  <Button color="alternative" class="ml-1" on:click={() => (location.href = "/#/make")}>퀴즈등록</Button>
</div>
<div class="flex flex-row flex-wrap justify-center mb-10">
  {#await data}
    <Spinner />
  {:then mydata}
    {#each mydata as item}
      <SearchCard searchData={item} />
    {/each}
  {/await}
</div>
