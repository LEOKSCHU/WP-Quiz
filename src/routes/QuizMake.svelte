<script>
  import { Button, ButtonGroup, Input, InputAddon, Spinner, Modal } from "flowbite-svelte";
  import { createQuiz, loginWithToken } from "../utils/http";
  import { user } from "../utils/store";
  import { onMount } from "svelte";
  let openModal = false;
  onMount(async () => {
    let token = localStorage.getItem("token");
    if (token) {
      $user = await loginWithToken(token);
    } else {
      openModal = true;
    }
  });
</script>

<Modal bind:open={openModal} size="xs" dismissable={false}>
  <div class="flex flex-col items-center space-y-4">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">로그인 필요</h3>
    <p class={`text-red-500 text-sm`}>로그인이 필요한 서비스입니다.</p>
    <Button on:click={() => (location.href = "/")} class="w-full">확인</Button>
  </div>
</Modal>
