<script>
  import Router from "svelte-spa-router";
  import { Footer, Spinner } from "flowbite-svelte";
  import Home from "./routes/Home.svelte";
  const routes = {
    "/": Home,
    //"/quiz/:quizId": Quiz,
    //"/edit/:quizId": QuizEdit,
  };
</script>

<main>
  <Router {routes} />
</main>

<Footer footerType="default" class="fixed bottom-0 left-0 w-full z-20 justify-between">
  <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> 웹프로그래밍 과제 </span>
  <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> 20243555 김동현 </span>
</Footer>
