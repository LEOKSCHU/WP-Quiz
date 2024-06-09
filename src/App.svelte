<script>
  import Router from "svelte-spa-router";
  import { Footer, Modal, Button } from "flowbite-svelte";

  import Header from "./components/Header.svelte";
  import Home from "./routes/Home.svelte";
  import Quiz from "./routes/Quiz.svelte";
  import QuizMake from "./routes/QuizMake.svelte";

  import { openInfoModal, infoModalContent, user } from "./utils/store";

  const routes = {
    "/": Home,
    "/quiz/:quizId/:quizCount": Quiz,
    "/make": QuizMake,
    //"/edit/:quizId": QuizEdit,
  };
</script>

<Header></Header>

<main>
  <div class="flex-col flex justify-center items-center mt-20">
    <Router {routes} />
  </div>
</main>

<Footer footerType="default" class="fixed bottom-0 left-0 w-full z-20 justify-between">
  <span class="block text-sm text-gray-700 sm:text-center"> {$user.name ? `로그인됨 : ${$user.name}(${$user.email})` : "로그인해주세요"} </span>
  <span class="block text-sm text-gray-700 sm:text-center"> 웹프로그래밍 과제 | 20243555 김동현 </span>
</Footer>

<Modal bind:open={$openInfoModal} size="xs" autoclose={true}>
  <div class="flex flex-col items-center space-y-4">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">{$infoModalContent.title}</h3>
    <p class={`text-${$infoModalContent.color}-500 text-sm`}>{$infoModalContent.message}</p>
    <Button on:click={() => ($openInfoModal = false)} class="w-full">확인</Button>
  </div>
</Modal>
