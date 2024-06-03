<script>
  import logo from "../assets/sch.svg";
  import { user } from "../utils/store";
</script>

<header class="p-6 !pb-2 rounded-xl flex items-center md:p-6 fixed top-0 left-0 w-full h-15 z-20 justify-between shadow-sm bg-white bg-opacity-60">
  <div class="h-12 w-12">
    <a href="/" class="w-full h-full flex hover:scale-105">
      <img src="/logo.svg" class="w-10 h-10 object-contain drop-shadow-sm" alt="LK Logo" />
      <img src={logo} class="ml-2 w-10 h-10 object-contain drop-shadow-sm" alt="SCH Logo" />
    </a>
  </div>

  <div class="h-12 items-center">
    {#if $user.id}
      <a href="/logout"><p class="py-2 md:py-px">{$user.name}({$user.id})</p></a>
    {:else}
      <a href="/login"><p class="py-2 md:py-px">로그인</p></a>
    {/if}
  </div>
</header>
