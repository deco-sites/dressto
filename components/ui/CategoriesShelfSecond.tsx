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
        class="mx-auto block gap-6 col-span-full row-start-2 row-end-5"
        snap="snap-center block sm:first:ml-0  sm:last:mr-0"
      >
        {highlights.map(({ href, src, alt, label }) => (
          <a
            href={href}
            class="mx-auto p-4 bg-cover object-contain"
          >
            <Image
              class="object-contain overflow-hidden"
              src={src}
              alt={alt}
              width={300}
              height={600}
            >
            </Image>
          </a>
        ))}
      </Slider>
    </Container>
  );
}

export default CategoriesShelfSecond;
