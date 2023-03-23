import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Sort from "$store/components/search/Sort.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";
import { useState } from "preact/hooks";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
  title: string;
}

function NotFound() {
  return <div />;
}

function Controls(
  { page, title }: { page: ProductListingPage; title: string },
) {
  const open = useSignal(false);
  const filters = page?.filters;
  const breadcrumb = page?.breadcrumb;
  const [colsShowing, setColsShowing] = useState(0);

  return (
    <>
      <div class="flex w-full justify-center min-w-full my-10 lg:justify-start lg:px-10 lg:my-0 lg:mt-16">
        <Text variant="heading-1" class="block">vestidos</Text>
      </div>
      <Container class="mx-0 flex flex-row justify-between  mb-4 md:mb-0 lg:px-10 px-5 sm:gap-4 sm:flex-row sm:h-[53px]  w-full min-w-full">
        <div class="items-center  sm:p-0 mb-2 hidden lg:flex">
          <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
        </div>
        <div class="flex flex-row sm:gap-4 items-center justify-between border-b-1 border-default md:border-none gap-2">
          <Button
            variant="secondary"
            class="p-5"
            onClick={() => {
              open.value = true;
            }}
          >
            Filtrar
          </Button>
          <span class="hidden lg:inline ">
            <Sort />
          </span>
          <div class="border-1 border-default h-[40px] w-[89px] hidden lg:flex justify-center">
            <Button
              variant="icon"
              class={colsShowing === 3 ? "text-yellow-500" : ""}
              onClick={() => {
                setColsShowing(3);
              }}
            >
              3
            </Button>
            <span class="self-center pb-1">|</span>
            <Button
              variant="icon"
              class={colsShowing === 4 ? "text-yellow-500" : ""}
              onClick={() => {
                setColsShowing(4);
              }}
            >
              4
            </Button>
          </div>
        </div>
        <span class="lg:hidden">
          <Sort />
        </span>
        <div class="border-1 border-default h-[40px] w-[89px] flex lg:hidden justify-center">
          <Button
            variant="icon"
            class={colsShowing === 3 ? "text-yellow-500" : ""}
            onClick={() => {
              setColsShowing(3);
            }}
          >
            3
          </Button>
          <span class="self-center pb-1">|</span>
          <Button
            variant="icon"
            class={colsShowing === 4 ? "text-yellow-500" : ""}
            onClick={() => {
              setColsShowing(4);
            }}
          >
            4
          </Button>
        </div>

        <Modal
          title="Filtrar"
          mode="sidebar-right"
          open={open.value}
          onClose={() => {
            open.value = false;
          }}
        >
          <Filters filters={filters} />
        </Modal>
      </Container>
    </>
  );
}

function SearchControls({ page, title }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Controls page={page} title={title} />;
}

export default SearchControls;
