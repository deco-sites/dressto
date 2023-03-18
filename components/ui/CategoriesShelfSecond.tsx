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
  title?: string;
}

function CategoriesShelfSecond({ highlights = [], title }: Props) {
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
            class="flex flex-col relative items-center min-w-[320px]"
          >
            <Image
              class=""
              src={src}
              alt={alt}
              width={2000}
              height={3000}
            >
            </Image>
          </a>
        ))}
      </Slider>
    </Container>
  );
}

export default CategoriesShelfSecond;
