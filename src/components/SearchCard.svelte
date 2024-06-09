<script>
  import { Modal, Button, Range } from "flowbite-svelte";
  export let searchData = {
    id: 0,
    name: "QuizCollection",
    description: "Quiz Description Here",
    author: "Quiz Author",
    image: "/",
    questionsCount: 15,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
  };
  let modalOpen = false;
  let quizCount = 5;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => {
    modalOpen = true;
  }}
  class="max-w-sm w-full h-full m-4 rounded-3xl overflow-hidden shadow-xl hover:cursor-pointer hover:scale-105"
>
  <div class="h-48 48 flex-none bg-cover rounded-t-2xl text-center overflow-hidden" style="background-image: url('{searchData.image}')" title="Quiz Image"></div>
  <div class=" p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-gray-900 font-bold text-md mb-0.5 lg:text-lg overflow-hidden">
        {searchData.title}
      </div>
      <span class="text-gray-500 font-normal mb-2 text-xs lg:text-sm overflow-hidden">
        By {searchData.author}
      </span>
    </div>
    <div class="flex items-center">
      {#each searchData.tags.slice(0, 4) as tag}
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 lg:text-sm">#{tag}</span>
      {/each}
    </div>
  </div>
</div>

<Modal title={`${searchData.title}(#${searchData.id})`} bind:open={modalOpen} autoclose>
  <div>
    <p class="text-gray-900 font-bold text-lg mb-0.5">{searchData.title}</p>
    <p class="text-gray-500 font-normal mb-0.5 text-sm">제작자: {searchData.author}</p>
    <p class="text-gray-500 font-normal mb-0.5 text-sm">총 문항수: {searchData.questionsCount}</p>
    <p class="text-gray-500 font-normal mb-0.5 text-sm">태그: {searchData.tags.join(", ")}</p>
  </div>
  <hr />
  <p class="text-gray-500 font-normal mb-2 text-sm">{searchData.description}</p>
  <hr />
  <div class="flex space-x-2 justify-center">
    <div class="w-max">
      <Range bind:value={quizCount} min="1" max={searchData.questionsCount} step="1"></Range>
      <p class="text-gray-500 text-sm">출제할 문제 수: {quizCount}</p>
    </div>
    <Button
      on:click={() => {
        location.href = `/#/quiz/${searchData.id}/${quizCount}`;
      }}>시작하기</Button
    >
  </div>
</Modal>
