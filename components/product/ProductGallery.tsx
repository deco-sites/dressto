import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <Text>Not Found!</Text>
    </div>
  );
}

function Gallery({ page }: { page: ProductListingPage }) {
  return (
    <>
      <Container class="px-4 sm:py-10">
        <div class="relative grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-0 items-center">
          {page.products?.map((product, index) => (
            <div class="w-full list-none">
              <ProductCard product={product} preload={index === 0} />
            </div>
          ))}
        </div>

        <div class="flex flex-row items-center justify-center gap-2 my-4">
          <a rel="prev" href={page.pageInfo.previousPage ?? "#"}>
            <Button disabled={!page.pageInfo.previousPage} variant="icon">
              <Icon id="ChevronLeft" width={20} height={20} strokeWidth={2} />
            </Button>
          </a>
          <Text variant="caption">
            {page.pageInfo.currentPage + 1}
          </Text>
          <a rel="next" href={page.pageInfo.nextPage ?? "#"}>
            <Button disabled={!page.pageInfo.nextPage} variant="icon">
              <Icon id="ChevronRight" width={20} height={20} strokeWidth={2} />
            </Button>
          </a>
        </div>
      </Container>
      <div class="flex flex-col w-full min-w-full items-center justify-center">
        <div class="py-6">
          <Text variant="heading-2" class="font-bold">Calças</Text>
        </div>
        <div class="px-3 mb-24">
          <p>
            Essenciais em qualquer guarda-roupa feminino, calça é um item
            confortável e prático. Vestir-se com uma calça jeans ou calça de
            alfaiataria mostra a sua personalidade, e aqui na categoria de
            calças da Dress to, você vai encontrar o modelo perfeito para
            representar o seu estilo. Você vai encontrar modelos de calça baggy,
            calça mom, pantalona, pantacourt, skinny, wide leg, em cores
            variadas, lisa, c
          </p>
        </div>
      </div>
    </>
  );
}

function ProductGallery({ page }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Gallery page={page} />;
}

export default ProductGallery;
