<script>
  import { Spinner, Card, Button, Radio, Modal, Progressbar } from "flowbite-svelte";
  import { getQuiz, submitQuiz } from "../utils/http";

  export let params;
  let quizCount = params.quizCount || 5;
  console.log(quizCount);
  let quizCollection = getQuiz(params.quizId, params.quizCount);
  let myAnswers = {};
  let currentQuiz = 1;
  let submitModalOpen = false;
  let resultModalOpen = false;
  let result = {};
  let onRadioChange = (e) => {
    myAnswers[currentQuiz] = e.target.value;
  };
  let submit = async (session, answers) => {
    result = await submitQuiz(session, answers);
    resultModalOpen = true;
  };
</script>

{#await quizCollection}
  <Spinner />
{:then quizData}
  {#each quizData.quiz as quiz}
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4/6 w-3/4 md:h-3/5 md:w-2/3 lg:h-3/4 lg:w-1/2 {currentQuiz !== quiz.id && 'hidden'}">
      <Card size="xl" padding="xl" class="h-full">
        <h5 class="mb-4 text-xl md:text-2xl text-black text-left">#{quiz.id}. {quiz.question}</h5>
        <p class="mb-5 text-md md:text-lg font-medium text-gray-900 dark:text-white">답을 선택하세요:</p>
        <div class="grid gap-6 w-full">
          {#each quiz.answers as answer}
            <Radio name="custom" custom on:change={onRadioChange} value={quiz.answers.indexOf(answer)}>
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
            class="mt-4 {currentQuiz == quizData.quiz.length && 'hidden'}">다음→</Button
          >
          <Button
            color="primary"
            on:click={() => {
              submitModalOpen = true;
            }}
            class="mt-4 {currentQuiz != quizData.quiz.length && 'hidden'}">제출</Button
          >
        </div>
      </Card>
    </div>
  {/each}
  <Modal title={`제출하시겠습니까?`} bind:open={submitModalOpen} autoclose>
    <div>
      <p class="text-gray-900 font-bold text-lg mb-0.5">{quizData.name}</p>
      <p class="text-gray-500 font-normal mb-0.5 text-sm">세션ID: {quizData.session}</p>
      <p class="text-gray-500 font-normal mb-0.5 text-sm">출제문항수: {quizData.quiz.length}개</p>
      <p class="text-gray-500 font-normal mb-0.5 text-sm">답변문항수: {Object.keys(myAnswers).length}개</p>
    </div>
    <Button
      on:click={() => {
        submit(quizData.session, myAnswers);
      }}>제출하기</Button
    >
  </Modal>
  <Modal title={`결과`} bind:open={resultModalOpen} dismissable={false}>
    <div>
      <p class="text-gray-900 font-bold text-lg mb-0.5">{quizData.name}</p>
      <p class="text-gray-500 font-normal mb-0.5 text-sm">세션ID: {quizData.session}</p>
      <p class="text-gray-500 font-normal mb-0.5 text-sm">정답률: {Math.round((result.correct / result.total) * 100)}%</p>
      <Progressbar progress={Math.round((result.correct / result.total) * 100)} />
      <hr class="mb-0.5" />
      <p class="text-gray-500 font-normal mb-0.5 text-sm">총문항수: {result.total}개</p>
      <p class="text-gray-500 font-normal mb-0.5 text-sm">정답문항수: {result.correct}개</p>
      <p class="text-gray-500 font-normal mb-0.5 text-sm">오답문항수: {result.total - result.correct}개</p>
    </div>
    <Button
      on:click={() => {
        location.href = "/";
      }}>메인으로 돌아가기</Button
    >
  </Modal>
{/await}
