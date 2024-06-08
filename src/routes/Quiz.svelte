<script>
  import { Spinner, Card, Button, Radio } from "flowbite-svelte";
  import { getQuiz } from "../utils/http";
  import QuizBlock from "../components/QuizBlock.svelte";

  export let params;
  let URLParams = new URLSearchParams(window.location.search);
  let quizCount = URLParams.get("quizCount") || 5;
  let quizCollection = getQuiz(params.quizId, quizCount);
  let myAnswers = {};
  let currentQuiz = 1;
</script>

{#await quizCollection}
  <Spinner />
{:then quizData}
  {#each quizData as quiz}
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4/6 w-3/4 md:h-3/5 md:w-2/3 lg:h-3/4 lg:w-1/2 {currentQuiz !== quiz.id && 'hidden'}">
      <Card size="xl" padding="xl" class="h-full">
        <h5 class="mb-4 text-xl md:text-2xl text-black text-left">#{quiz.id}. {quiz.question}</h5>
        <p class="mb-5 text-md md:text-lg font-medium text-gray-900 dark:text-white">답을 선택하세요:</p>
        <div class="grid gap-6 w-full">
          {#each quiz.answers as answer}
            <Radio name="custom" custom>
              <div class="justify-between items-center p-4 lg:p-6 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div>
                  <div class="w-full text-sm md:text-md lg:text-lg font-semibold">{answer}</div>
                </div>
              </div>
            </Radio>
          {/each}
        </div>
        <div class="buttons">
          <Button
            color="alternative"
            on:click={() => {
              currentQuiz = quiz.id - 1;
            }}
            class="mt-4 {currentQuiz === 1 && 'hidden'}">←이전</Button
          >
          <Button
            color="alternative"
            on:click={() => {
              currentQuiz = quiz.id + 1;
            }}
            class="mt-4 {currentQuiz == quizData.length && 'hidden'}">다음→</Button
          >
          <Button
            color="primary"
            on:click={() => {
              //Submit Answer
            }}
            class="mt-4 {currentQuiz != quizData.length && 'hidden'}">제출</Button
          >
        </div>
      </Card>
    </div>{/each}
{/await}
