<script>
  import schLogo from "../assets/sch.svg";
  import lkLogo from "../assets/lk.svg";
  import { user } from "../utils/store";
  import LoginModal from "./LoginModal.svelte";
  import { openLoginModal, openInfoModal, infoModalContent } from "../utils/store";
</script>

<header class="p-6 !pb-2 rounded-xl flex items-center md:p-6 fixed top-0 left-0 w-full h-15 z-20 justify-between shadow-sm bg-white bg-opacity-60">
  <div class="h-12 w-12">
    <a href="/" class="w-full h-full flex hover:scale-105">
      <img src={lkLogo} class="w-10 h-10 object-contain drop-shadow-sm" alt="LK Logo" />
      <img src={schLogo} class="ml-2 w-10 h-10 object-contain drop-shadow-sm" alt="SCH Logo" />
    </a>
  </div>

  <!-- svelte-ignore a11y-invalid-attribute -->
  <div class="h-12 items-center">
    {#if $user.email}
      <a
        on:click={() => {
          localStorage.removeItem("token");
          $user = {};
          $infoModalContent = { title: "로그아웃 성공", message: "로그아웃 되었습니다!", color: "green" };
          $openInfoModal = true;
        }}
        href="#"><p class="py-2 md:py-px">로그아웃</p></a
      >
    {:else}
      <a
        on:click={() => {
          $openLoginModal = true;
        }}
        href="#"><p class="py-2 md:py-px">로그인</p></a
      >
    {/if}
  </div>
</header>

<LoginModal></LoginModal>
