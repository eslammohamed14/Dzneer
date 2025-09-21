import { colors } from "@/src/common";
import { ImageItem, PostImage } from "@/src/features/timeline";
import React, { useCallback, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { styles } from "./styles";

interface PostImagesProps {
  images: PostImage[];
}

const { width: screenWidth } = Dimensions.get("window");
const imageWidth = screenWidth - 32;

export const PostImages = React.memo<PostImagesProps>(({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const renderImage = useCallback(
    ({ item }: { item: PostImage }) => (
      <ImageItem image={item} width={imageWidth} />
    ),
    []
  );

  const renderDot = useCallback(
    (index: number) => (
      <View
        key={index}
        style={[
          styles.dot,
          {
            backgroundColor:
              index === currentIndex ? colors.text.white : colors.text.muted,
          },
        ]}
      />
    ),
    [currentIndex]
  );

  if (images.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        decelerationRate="fast"
        snapToInterval={imageWidth}
        snapToAlignment="start"
      />
      {images.length > 1 && (
        <View style={styles.dotsContainer}>
          {images.map((_, index) => renderDot(index))}
        </View>
      )}
    </View>
  );
});

PostImages.displayName = "PostImages";
