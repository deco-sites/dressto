import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, image } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-4 py-3">
        <Text
          class="group-hover:text-black font-bold transition-all hover:border-yellow-400 border-solid border-b border-transparent"
          variant="menu"
        >
          {label}
        </Text>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`fixed invisible opacity-90 hover:visible group-hover:visible bg-default z-50 flex justify-around justify-center gap-6 border-t-1 border-b-2 border-default w-screen mt-[${headerHeight}]`}
            style={{ top: "0px", left: "0px" }}
          >
            <ul class="flex ml-28 items-start justify-center gap-48">
              {children.map((node) => (
                <li class="p-6">
                  <a class="hover:border-b-2 hover:border-yellow-500 transition" href={node.href}>
                    <Text class="text-[14px] font-bold hover:text-yellow-500 transition" variant="menu">{node.label}</Text>
                  </a>

                  <ul class="flex flex-col gap-4 mt-4 mr-3.5">
                    {node.children?.map((leaf) => (
                      <li>
                        <a class="hover:border-b-2 hover:border-yellow-500 transition" href={leaf.href}>
                          <Text class="text-[14px] font-bold hover:text-yellow-500 transition" variant="caption">{leaf.label}</Text>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            {image?.src && (
              <Image
                class="p-6 object-cover"
                src={image.src}
                alt={image.alt}
                width={260}
                height={360}
                loading="lazy"
              />
            )}
          </div>
        )}
    </li>
  );
}

export default NavItem;
