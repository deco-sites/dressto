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

  return (
    <>
      <div class="flex w-full justify-center min-w-full my-10">
        <Text variant="heading-2" class="block font-bold">Vestidos</Text>
      </div>
      <Container class="mx-0 flex flex-row justify-between  mb-4 md:mb-0 px-10 sm:gap-4 sm:flex-row sm:h-[53px]  w-full min-w-full">
        <div class="flex items-center sm:p-0 mb-2">
          <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
        </div>
        <div class="flex flex-row sm:gap-4 items-center justify-between border-b-1 border-default md:border-none">
          <Button
            variant="tertiary"
            onClick={() => {
              open.value = true;
            }}
          >
            Ordenar
            <Icon id="FilterList" width={16} height={16} />
          </Button>
        </div>
        <Sort />

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
  if (!page || !page.filters || page.filters.length === 0) {
    return <NotFound />;
  }

  return <Controls page={page} title={title} />;
}

export default SearchControls;
