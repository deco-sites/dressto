import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

import ProductSelector from "./ProductVariantSelector.tsx";
import QuantitySelector from "../ui/QuantitySelector.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Details({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);
  const [front, back] = images ?? [];

  return (
    <div class="py-0 sm:py-10">
      <div class="flex justify-between">
        <div class="w-full">
          {images && (
            <Image
              style={{ aspectRatio: "360 / 500" }}
              class=" w-full h-full"
              sizes="100vw, 30vw"
              src={images[0].url!}
              alt={images[0].alternateName}
              width={760}
              height={1140}
              // Preload LCP image for better web vitals
              loading={"eager"}
            />
          )}
        </div>
        {/* fazer um map de imagens aqui */}
        {
          /* <div class="flex flex-row overflow-auto snap-x snap-mandatory scroll-smooth sm:gap-2">
          {[front, back ?? front].map((img, index) => (
            <Image
              style={{ aspectRatio: "360 / 500" }}
              class="snap-center min-w-[100vw] sm:min-w-0 sm:w-auto sm:h-[600px]"
              sizes="100vw, 30vw"
              src={img.url!}
              alt={img.alternateName}
              width={360}
              height={500}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div> */
        }
        {/* Product Info */}
        <div class="flex-auto w-full">
          <div class="w-[28rem] mx-auto mt-16">
            {/* Breadcrumb */}
            <Breadcrumb
              itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
            />
            {/* Code and name  class="mt-4 sm:mt-8"*/}

            <div class="mt-4 sm:mt-8">
              <h1 class="flex items-center">
                <div>
                  <Text class="font-body text-3xl leading-[0.5rem]">
                    {name}
                  </Text>
                </div>
                <div>
                  <button class="border-none ml-8 mb-4">
                    <Icon id="Heart" width={20} height={20} strokeWidth={2} />
                  </button>
                </div>
              </h1>
              <div class="my-5">
                <Text tone="subdued" class="text-xs">
                  ref. {gtin}
                </Text>
              </div>
            </div>
            {/* Prices */}
            <div>
              <div class="flex flex-row gap-2 items-center">
                <Text
                  tone="default"
                  variant="heading-3"
                  class="font-bold text-[1rem] leading-10 h-[2rem]"
                >
                  {formatPrice(price, offers!.priceCurrency!)}
                </Text>
              </div>
              <Text
                tone="default"
                variant="caption"
                class="font-body leading-[0.4rem]"
              >
                ou {installments}
              </Text>
            </div>
            {/* Sku Selector */}
            <div class="mt-4 sm:mt-6">
              {/* Colocar para receber cor em vez de tamanho */}
              <ProductSelector product={product} />
            </div>
            <div class="mt-4 sm:mt-6">
              <ProductSelector product={product} />
            </div>
            {/* Add to Cart and Favorites button */}
            <div class="mt-4 sm:mt-10 flex flex-row gap-2">
              <QuantitySelector quantity={1} />
              {seller && (
                <AddToCartButton
                  skuId={productID}
                  sellerId={seller}
                />
              )}
            </div>
            <div class="mt-10">
              <div class="flex justify-between items-center border-b-1 py-2">
                <div class="ml-4">
                  <Icon id="Truck" width={50} height={40} strokeWidth={2} />
                </div>
                <div class="font-bold ml-8 text-md">
                  Frete grátis
                </div>
                <div class="font-caption text-xs">
                  nas compras acima de R$300,00 com código de vendedora *
                  consulte sua região
                </div>
              </div>
              <div class="flex justify-start items-center border-b-1 py-2">
                <div class="ml-4">
                  <Icon id="Return" width={50} height={40} strokeWidth={2} />
                </div>
                <div class="font-caption text-xs">
                  <span class="font-bold ml-8 text-md">
                    Primeira Troca grátis
                  </span>{" "}
                  em todos os pedidos
                </div>
              </div>
            </div>
            {/* Description card */}
            <div class="mt-4 sm:mt-6">
              <Text variant="caption">
                {description && (
                  <details>
                    <summary class="cursor-pointer py-8 px-1 border-b-1 items-center text-xl font-heading-1 flex justify-between">
                      <span>
                        Descrição
                      </span>
                      <span>+</span>
                    </summary>
                    <div class="ml-2 mt-2">{description}</div>
                  </details>
                )}
              </Text>
              <Text variant="caption">
                {description && (
                  <details>
                    <summary class="cursor-pointer py-8 px-1 border-b-1 items-center text-xl font-heading-1 flex justify-between">
                      <span>Composição</span>
                      <span>+</span>
                    </summary>
                    <div class="ml-2 mt-2">{description}</div>
                  </details>
                )}
              </Text>
              <Text variant="caption">
                {description && (
                  <details>
                    <summary class="cursor-pointer py-8 px-1 border-b-1 items-center text-xl font-heading-1 flex justify-between">
                      <span>Trocas e devoluções</span>
                      <span>+</span>
                    </summary>
                    <div class="ml-2 mt-2">{description}</div>
                  </details>
                )}
              </Text>
              <Text variant="caption">
                {description && (
                  <details>
                    <summary class="cursor-pointer py-8 px-1 border-b-1 items-center text-xl font-heading-1 flex justify-between">
                      <span>Medidas do Modelo</span>
                      <span>+</span>
                    </summary>
                    <div class="ml-2 mt-2">{description}</div>
                  </details>
                )}
              </Text>
            </div>
          </div>
        </div>
      </div>
      {/* Adicionar product shelf aqui */}
    </div>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;
