import Image from "deco-sites/std/components/Image.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  label: string;
}

export interface Props {
  highlights?: Highlight[];
  title: string;
}

function Highlights({ highlights = [], title }: Props) {
  return (
    <Container class="grid grid-cols-1 grid-rows-[48px_1fr] py-10 overflow-hidden">
      <h2 class="text-center">
        <Text variant="heading-2">{title}</Text>
      </h2>

      <Slider
        class=""
        snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
      >
        {highlights.map(({ href, src, alt, label }) => (
          <a
            href={href}
            class="flex flex-col relative items-center min-w-[120px]"
          >
            <Image
              class="rounded-full"
              src={src}
              alt={alt}
              width={100}
              height={100}
            >
              <Text
                variant="body"
                class="absolute pt-9 z-50 text-white font-thin text-lg tracking-widest"
              >
                PP
              </Text>
            </Image>
          </a>
        ))}
      </Slider>
    </Container>
  );
}

export default Highlights;
