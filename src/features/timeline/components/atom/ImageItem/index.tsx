import { PostImage } from "@/src/features/timeline";
import React from "react";
import { Dimensions, Image } from "react-native";
import { styles } from "./styles";

interface ImageItemProps {
  image: PostImage;
  width: number;
}

const { width: screenWidth } = Dimensions.get("window");

export const ImageItem = React.memo<ImageItemProps>(({ image, width }) => {
  const aspectRatio = image.width / image.height;
  const height = width / aspectRatio;

  return (
    <Image
      source={{ uri: image.uri }}
      style={[
        styles.image,
        {
          width,
          height: Math.min(height, 300),
        },
      ]}
      resizeMode="cover"
    />
  );
});

ImageItem.displayName = "ImageItem";
