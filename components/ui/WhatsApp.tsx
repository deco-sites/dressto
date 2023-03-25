import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  phone?: number;
}

function WhatsApp({ phone }: Props) {
  if (!phone) {
    return null;
  }

  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=${phone}&text&type=phone_number&app_absent=0`}
      class="fixed bottom-6 right-6 z-40"
      aria-label="Chat on WhatsApp"
    >
      <button
        class="flex justify-center items-center text-[20px] bg-[#222] w-[110px] h-[40px] rounded-[20px] text-white p-4 shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <Icon id="WhatsApp" class="inline-block mr-1 text-yellow-500" size={28} />
        Ajuda
      </button>
    </a>
  );
}

export default WhatsApp;
