import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/Post.style";

export default function Post({ post }) {
  const [numberOfLines, setNumberOfLines] = useState(1);

  const handleReadMoreClick = () => {
    if (numberOfLines == 1) {
      setNumberOfLines(0);
    } else {
      setNumberOfLines(1);
    }
  };

  const renderImage = ({ item }) => {
    return <Image style={styles.postImage} source={{ uri: item }} />;
  };

  return (
    <View style={styles.post}>
      <View style={styles.authorContainer}>
        <View style={styles.authorInfo}>
          <TouchableOpacity>
            <Image
              source={{
                uri: post.authorImage,
              }}
              style={styles.authorImage}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.authorName}>{post.authorName}</Text>
              <Text style={styles.authorConnection}>
                {post.authorConnection}
              </Text>
            </View>
            <Text style={styles.authorBio} numberOfLines={1}>
              {post.authorBio}
            </Text>
          </TouchableOpacity>
        </View>
        {post?.authorConnection != "1st" && (
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/8345/8345422.png",
              }}
              style={styles.connectIcon}
            />
            <Text
              style={{ fontSize: 18, color: "#41619e", marginHorizontal: 5 }}
            >
              Connect
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <Text numberOfLines={numberOfLines}>{post.content.title}</Text>
        <TouchableOpacity onPress={handleReadMoreClick}>
          <Text style={{ color: "grey" }}>
            {numberOfLines == 1 ? "Read more.." : "Read less"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 10 }}>
        {post.content.postType == "image" && (
          <FlatList
            horizontal
            data={post.content.images}
            renderItem={renderImage}
            keyExtractor={(_, index) => index}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3670/3670153.png",
              }}
              style={styles.interactionIcon}
            />
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3128/3128313.png",
              }}
              style={styles.interactionIcon}
            />
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2017/2017868.png",
              }}
              style={styles.interactionIcon}
            />
          </View>
          <Text style={{ color: "grey", paddingHorizontal: 8 }}>
            {post.numberOfInteractions}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "grey", paddingHorizontal: 5 }}>
            {post.numberOfComments} Comments
          </Text>
          <Text style={{ color: "grey", paddingHorizontal: 5 }}>
            {post.numberOfReposts} Reposts
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 30,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/126/126473.png",
            }}
            style={styles.bigIcon}
          />
          <Text style={styles.bigIconText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/13/13673.png",
            }}
            style={styles.bigIcon}
          />
          <Text style={styles.bigIconText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/8944/8944289.png",
            }}
            style={styles.bigIcon}
          />
          <Text style={styles.bigIconText}>Repost</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3171/3171060.png",
            }}
            style={styles.bigIcon}
          />
          <Text style={styles.bigIconText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
