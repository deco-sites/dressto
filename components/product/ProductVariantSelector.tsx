import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
  selectorType: string;
}

function VariantSelector({ product, selectorType }: Props) {
  const possibilities = useVariantPossibilities(product);
  const { url: currentUrl } = product;

  return (
    <ul class="flex flex-col gap-4">
      {Object.keys(possibilities).map((name) => (
        <li class="flex flex-col gap-2 justify-center">
          <Text variant="caption">
            {selectorType === "cor" ? <span>Cor</span> : <span>Tamanho</span>}
          </Text>
          <ul class="flex flex-row gap-2 ml-8">
            {Object.entries(possibilities[name]).map(([url, value]) => (
              <li>
                <a href={url}>
                  <Avatar
                    // deno-lint-ignore no-explicit-any
                    content={value as any}
                    disabled={url === currentUrl}
                    variant={selectorType === "cor" ? "color" : "abbreviation"}
                  />
                </a>
              </li>
            ))}
          </ul>
          {
            /* <ul class={selectorType === "cor"
              ? "flex flex-row gap-2 ml-8"
              : "hidden"}>
                <li></li>
          </ul> */
          }
        </li>
      ))}
    </ul>
  );
}

export default VariantSelector;
