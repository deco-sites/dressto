import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  url: string;
  imageUrl: string;
  imageName: string;
}

function ProductCategorieCard({ url, imageUrl, imageName }: Props) {
  return (
    <div class="w-full">
      <a href={url} aria-label="product categorie link">
        <div class="">
          <Image
            src={imageUrl}
            alt={imageName}
            width={400}
            height={279}
            class="rounded w-full"
            sizes="(max-width: 640px) 50vw, 20vw"
          />
        </div>
      </a>
    </div>
  );
}

export default ProductCategorieCard;
