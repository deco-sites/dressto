import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import { useState } from "preact/hooks";
import ProductCategorieCard from "./ProductCategorieCard.tsx";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
  footerTitle: string;
  footerDesc: string;
  url: string;
  imageUrl: string;
  imageName: string;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <Text>Not Found!</Text>
    </div>
  );
}

function Gallery(
  { page, footerTitle, footerDesc, url, imageUrl, imageName }: {
    page: ProductListingPage;
    footerTitle: string;
    footerDesc: string;
    url: string;
    imageUrl: string;
    imageName: string;
  },
) {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Container class="lg:max-w-full px-6 lg:mx-auto sm:py-10">
        <div class="relative grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-0 items-center lg:grid-cols-4 lg:gap-10 ">
          <div class="w-full list-none row-start-3 col-span-2 lg:col-span-2 lg:row-start-2 ">
            <ProductCategorieCard
              url={url}
              imageUrl={imageUrl}
              imageName={imageName}
            />
          </div>
          <div class="w-full list-none row-start-8 col-span-2 lg:col-span-2 lg:row-start-4 lg:col-start-3">
            <ProductCategorieCard
              url={url}
              imageUrl={imageUrl}
              imageName={imageName}
            />
          </div>
          <div class="w-full list-none row-start-12 col-span-2 lg:col-span-2 lg:row-start-6">
            <ProductCategorieCard
              url={url}
              imageUrl={imageUrl}
              imageName={imageName}
            />
          </div>
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
          <Text variant="heading-2" class="font-bold">
            title: {footerTitle}
          </Text>
        </div>
        <div class="px-3 lg:px-48 mb-24">
          desc:
          <p>
            {footerDesc}
          </p>
        </div>
      </div>
    </>
  );
}

function ProductGallery(
  { page, footerTitle, footerDesc, url, imageUrl, imageName }: Props,
) {
  if (!page) {
    return <NotFound />;
  }

  return (
    <Gallery
      page={page}
      footerTitle={footerTitle}
      footerDesc={footerDesc}
      url={url}
      imageUrl={imageUrl}
      imageName={imageName}
    />
  );
}

export default ProductGallery;
