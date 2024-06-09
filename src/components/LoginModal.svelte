<script>
  import { Button, Modal, Label, Input, Spinner } from "flowbite-svelte";
  import { openLoginModal, user, openInfoModal, infoModalContent } from "../utils/store";
  import { getTokenWithCredentials, loginWithToken, registerAccount } from "../utils/http";
  import { onMount } from "svelte";

  let token = null;
  let infoDetails = { title: "", message: "", color: "" };
  let openRegisterModal = false;
  const processLogin = async (e) => {
    try {
      token = await getTokenWithCredentials(e.target.form.email.value, e.target.form.password.value);
      if (token) {
        localStorage.setItem("token", token);
        $user = await loginWithToken(token);
        $openLoginModal = false;
        $infoModalContent = { title: "로그인 성공", message: "로그인에 성공했습니다!", color: "green" };
      }
    } catch (e) {
      console.error(e);
      $infoModalContent = { title: "로그인 오류", message: "로그인에 과정에서 오류가 발생했습니다.", color: "red" };
    } finally {
      $openInfoModal = true;
    }
  };
  const processRegister = async (e) => {
    try {
      let res = await registerAccount(e.target.form.email.value, e.target.form.password.value, e.target.form.name.value);
      if (res) {
        openRegisterModal = false;
        $infoModalContent = { title: "회원가입 성공", message: "회원가입에 성공했습니다!", color: "green" };
      }
    } catch (e) {
      console.error(e);
      $infoModalContent = { title: "회원가입 오류", message: "회원가입에 과정에서 오류가 발생했습니다.", color: "red" };
    } finally {
      $openInfoModal = true;
    }
  };

  onMount(async () => {
    token = localStorage.getItem("token");
    if (token) {
      $user = await loginWithToken(token);
    }
  });
</script>

<Modal bind:open={$openLoginModal} size="xs" autoclose={false} class="w-full">
  <form class="flex flex-col space-y-6" action="#">
    <div>
      <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">로그인</h3>
      <p class="text-gray-500 text-sm">로그인하여 퀴즈를 등록할 수 있습니다!</p>
      <p class="text-gray-500 text-sm">회원가입하거나 아래 테스트계정으로 로그인해보세요</p>
    </div>
    <Label class="space-y-2">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="space-y-2">
      <span>Password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <Button on:click={processLogin} class="w-full1">로그인</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      계정이 없으신가요? <a
        href="#"
        on:click={() => {
          openRegisterModal = true;
        }}
        class="text-primary-700 hover:underline dark:text-primary-500"
      >
        회원가입
      </a>
    </div>
    <p class="text-gray-500 text-xs">*Test Account: test@example.com / test1234</p>
  </form>
</Modal>

<Modal bind:open={openRegisterModal} size="xs" autoclose={true} class="w-full">
  <form class="flex flex-col space-y-6" action="#">
    <div>
      <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">회원가입</h3>
      <p class="text-gray-500 text-sm">닉네임은 퀴즈를 등록할때 전체공개로 표시됩니다.</p>
      <p class="text-gray-500 text-sm">비밀번호는 SHA256로 해싱되어 안전하게 저장됩니다.</p>
    </div>
    <Label class="space-y-2">
      <span>Nickname</span>
      <Input type="text" name="name" placeholder="홍길동" required />
    </Label>
    <Label class="space-y-2">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="space-y-2">
      <span>Password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <Button on:click={processRegister} class="w-full1">회원가입</Button>
  </form>
</Modal>
