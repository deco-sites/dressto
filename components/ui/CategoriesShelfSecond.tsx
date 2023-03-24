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
    <Container class="grid grid-cols-1 grid-rows-[48px_1fr] min-w-full w-full py-10 overflow-hidden">
      <h2 class="text-center">
        <Text variant="heading-2">{title}</Text>
      </h2>

      {/* Mobile Version mx-auto block gap-6 col-span-full row-start-2 row-end-5 */}
      <Slider
        class="lg:hidden block min-w-full w-full mx-4"
        snap="snap-center block sm:first:ml-0  sm:last:mr-0"
      >
        {highlights.map(({ href, src, alt, label }) => (
          <a
            href={href}
            class=" p-4 bg-cover object-contain"
          >
            <Image
              class="object-contain overflow-hidden"
              src={src}
              alt={alt}
              width={915}
              height={1250}
            >
            </Image>
          </a>
        ))}
      </Slider>
      {/* Desktop Version */}
      <div class="hidden lg:flex flex-col min-w-full w-full">
        <div class="flex flex-row mx-5 justify-between mb-32">
          <a class="self-center mr-2" href={highlights[0].href}>
            <Image
              class="object-contain overflow-hidden"
              src={highlights[0].src}
              alt={highlights[0].alt}
              width={600}
              height={800}
            >
            </Image>
          </a>
          <a class="ml-2" href={highlights[1].href}>
            <Image
              class="object-contain overflow-hidden"
              src={highlights[1].src}
              alt={highlights[1].alt}
              width={800}
              height={1000}
            >
            </Image>
          </a>
        </div>
        <div class="flex flex-row mx-auto justify-center min-w-full w-full mx-2 mb-40">
          <a href={highlights[2].href}>
            <Image
              class="object-contain overflow-hidden"
              src={highlights[2].src}
              alt={highlights[2].alt}
              width={1220}
              height={670}
            >
            </Image>
          </a>
        </div>
        <div class="flex flex-row mx-auto justify-center min-w-full w-full">
          <a href={highlights[3].href}>
            <Image
              class="object-contain overflow-hidden"
              src={highlights[3].src}
              alt={highlights[3].alt}
              width={1520}
              height={634}
            >
            </Image>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default CategoriesShelfSecond;
