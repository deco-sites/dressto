import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col sm:flex-col gap-3 sm:gap-3">
      <div class="flex flex-col gap-2">
        <Text class="text-black" variant="heading-2" tone="default-inverse">
          Assine a nossa newsletter
        </Text>
        <Text class="text-black" variant="caption" tone="default-inverse">
          Receba nossas novidades e promoções exclusivas
        </Text>
      </div>
      <form class="flex flex-col items-center gap-2 font-body text-body w-full sm:w-[408px]">
        <input
          class="w-full outline-none py-4 px-3 text-black flex-grow text-default-inverse border-b-1 border-default"
          placeholder="Nome"
        />
        <input
          class="w-full outline-none py-4 px-3 text-black flex-grow text-default-inverse border-b-1 border-default"
          placeholder="E-mail"
        />
        <button
          class="text-black border-b-1 border-black"
          // prevent form's default behavior
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
