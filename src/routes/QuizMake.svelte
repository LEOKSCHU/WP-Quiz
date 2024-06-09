<script>
  import { Button, ButtonGroup, Input, InputAddon, Radio, Label, Modal, Card, Fileupload } from "flowbite-svelte";
  import { createQuiz, loginWithToken } from "../utils/http";
  import { user, openInfoModal, infoModalContent } from "../utils/store";
  import { createEventDispatcher, onMount } from "svelte";
  let openModal = false;
  let questionCount = 5;
  let quizzes = {};
  let tags = [];
  let quizId;
  let resultModalOpen = false;
  const putAnswer = (qusetionIndex, index, answer) => {
    if (!quizzes[qusetionIndex]["answers"]) {
      quizzes[qusetionIndex]["answers"] = {};
    }
    quizzes[qusetionIndex]["answers"][index] = answer;
  };

  onMount(async () => {
    let token = localStorage.getItem("token");
    if (token) {
      $user = await loginWithToken(token);
    } else {
      openModal = true;
    }
  });
  const submit = async (title, author, img, tags, quizzes) => {
    let res = await createQuiz(title, author, img, tags, quizzes);
    quizId = res.quizId;
    resultModalOpen = true;
    console.log(quizzes);
  };
</script>

<h1 class="text-4xl md:text-5xl lg:text-6xl">LeoK Quiz</h1>
<p class="mt-1 mb-5 text-lg md:text-xl text-lime-500">퀴즈 등록</p>
<Card size="xl" padding="xl" class="h-full mb-14">
  <form class="flex flex-col space-y-4" action="#">
    <Label class="space-y-2 text-left">
      <span class="text-md md:text-lg">제작자</span>
      <Input type="text" name="author" value={$user.name} size="md" disabled required />
    </Label>

    <Label class="space-y-2 text-left">
      <span class="text-md md:text-lg">퀴즈 제목</span>
      <Input type="text" name="title" placeholder="캐릭터 맞추기 퀴즈" size="md" required />
    </Label>

    <Label class="space-y-2 text-left">
      <span class="text-md md:text-lg">썸네일 이미지</span>
      <Fileupload
        accept="image/*"
        size="md"
        on:change={(e) => {
          let reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = (r) => {
            e.target.form.image.value = r.target.result;
          };
        }}
        required
      />
      <input type="text" name="image" hidden required />
    </Label>
    {#each { length: questionCount } as _, i}
      <Card size="xl" padding="xl" class="h-full mt-10 space-y-4">
        <Label class="text-left space-y-2">
          <p>문제 #{i + 1}</p>
          <Input
            type="text"
            on:keydown={(e) => {
              quizzes[i + 1] = { title: e.target.value };
            }}
            placeholder="문제"
            required
          />
        </Label>
        <Label class="text-left space-y-2 ">
          <p>보기</p>
          <div class="grid grid-cols-2 lg:grid-cols-4">
            {#each { length: 4 } as _, j}
              <Input
                type="text"
                on:change={(e) => {
                  putAnswer(i + 1, j + 1, e.target.value);
                }}
                placeholder={`보기${j + 1}`}
                required
                disabled={quizzes[i + 1] ? false : true}
              />
            {/each}
          </div>
        </Label>
        <Label class="text-left space-y-2 ">
          <p>정답</p>
          <div class="grid grid-cols-2 lg:grid-cols-4">
            {#if quizzes[i + 1]}
              {#if quizzes[i + 1]["answers"]}
                {#each { length: 4 } as _, _}
                  <Radio
                    name="quiz-{i + 1}"
                    on:change={(e) => {
                      quizzes[i + 1]["answer"] = e.target.value;
                    }}
                    value={_ + 1}
                    class="p-3"
                    required>{quizzes[i + 1]["answers"][_ + 1] ? quizzes[i + 1]["answers"][_ + 1] : ""}</Radio
                  >
                {/each}
              {/if}
            {/if}
          </div>
        </Label>
      </Card>
    {/each}
    <div class="grid grid-col-2 gab-6 grid-flow-col">
      <Button
        color="alternative"
        class={questionCount == 5 && "hidden"}
        on:click={(e) => {
          questionCount--;
        }}>-</Button
      >
      <Button
        color="alternative"
        on:click={(e) => {
          questionCount++;
        }}>+</Button
      >
    </div>
    <Button
      color="primary"
      on:click={(e) => {
        e.preventDefault();
        let findEmpty = () => {
          let empty = false;
          document.querySelectorAll("input, select").forEach((el) => {
            if (!el.value) {
              empty = true;
            }
          });
          return empty;
        };
        console.log(findEmpty());
        if (findEmpty()) {
          $infoModalContent = { title: "퀴즈 등록 실패", message: "모든 항목을 입력해주세요.", color: "red" };
          $openInfoModal = true;
          return;
        } else {
          submit(e.target.form.title.value, e.target.form.author.value, e.target.form.image.value, tags, quizzes);
        }
      }}>퀴즈 등록</Button
    >
  </form>
</Card>
<Modal bind:open={openModal} size="xs" dismissable={false}>
  <div class="flex flex-col items-center space-y-4">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">로그인 필요</h3>
    <p class={`text-red-500 text-sm`}>로그인이 필요한 서비스입니다.</p>
    <Button on:click={() => (location.href = "/")} class="w-full">확인</Button>
  </div>
</Modal>
<Modal title={`퀴즈가 성공적으로 등록되었습니다!`} bind:open={resultModalOpen} dismissable={false}>
  <div>
    <p class="text-gray-900 font-bold text-lg mb-0.5">퀴즈ID: {quizId}</p>
  </div>
  <Button
    on:click={() => {
      location.href = "/";
    }}>메인으로 돌아가기</Button
  >

  <Button
    on:click={() => {
      location.href = "/#/quiz/" + quizId;
    }}>등록된 퀴즈 보러가기</Button
  >
</Modal>
