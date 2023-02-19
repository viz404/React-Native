import { StyleSheet, StatusBar, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Footer from "./components/Footer";

const posts = [
  {
    id: 1,
    authorImage:
      "https://media.licdn.com/dms/image/C5603AQFd2qx3pVkviQ/profile-displayphoto-shrink_100_100/0/1651600648291?e=1682553600&v=beta&t=atQuEI1113hriw7w7GMseo6BdMuQ2GlxRCpIa9uDyTk",
    authorName: "Riddhi Dutta",
    authorConnection: "2nd",
    authorBio:
      "SDE-2 | ex SDE-Amazon | Youtube 40K+ | Teacher | Codechef 5* | Java | Angular",
    content: {
      title:
        "Java Collections Framework covered in Depth in 3 Hours 🔥🔥 , for FREE : https://lnkd.in/gE-REWsX So in this recent video , I covered all the important concepts of the Collection Framework in Java , that would not only be helpful for your dsa interviews , but also for cracking interviews , and in your day to day job role , if your company involves you to know Java. I covered , Iterables , Iterators , Lists , ArrayLists , LinkedList , Queue , Deque , PriorityQueue , Stack , Custom Sorting using Comparator and Comparable , Sets , HashSet , NavigableSet , TreeSet , HashMap , TreeMap , equals() and hashCode() and a lot more. The ONLY Collection Framework you need. No fluff. Only things that you need to get started , from scratch : https://lnkd.in/gE-REWsX Next video would be on Multithreading. Just need your support. Thank You. \n #java #softwaredevelopment #sde #dsa #softwareengineerjobs #collections",
      postType: "image",
      images: [
        "https://media.licdn.com/dms/image/C5622AQGy_hwTCFADLg/feedshare-shrink_800/0/1676788532049?e=1679529600&v=beta&t=go48vPf6lD3uhNKfUeMdEiCMJeXzEOD4zTcbjQc1bAs",
      ],
    },
    numberOfInteractions: 200,
    numberOfComments: 50,
    numberOfReposts: 20,
  },
  {
    id: 2,
    authorImage:
      "https://media.licdn.com/dms/image/C5603AQH6YLJNpKYptw/profile-displayphoto-shrink_100_100/0/1645321272614?e=1682553600&v=beta&t=y7iGLcKjEOpcd0tDwUDZSfCFZqr4C1DuX8Pxl_pKT7k",
    authorName: "Prateek Shukla",
    authorConnection: "1st",
    authorBio: "Transforming Higher Education | Tedx Speaker",
    content: {
      title:
        "I am always so proud to hear about the incredible journey of our Masai students. 😍 \n	It takes hard work, dedication, and a lot of courage to embark on a new career path - and our students have all of those qualities in spades. I want to give a special shoutout to some of the students every week.\n	So to all of our students - never forget that you have what it takes to succeed. You have the grit, the determination, and the talent to achieve anything you set your mind to. Keep striving for excellence, keep taking risks, and never give up on your dreams. You've got this! 🚀 \n And to any employers who haven't hired our students yet - don't miss out! #FOMO 😛",
      postType: "image",
      images: [
        "https://media.licdn.com/dms/image/C5622AQFjM_9QlkFsyg/feedshare-shrink_800/0/1676632968737?e=1679529600&v=beta&t=uxDG3nrmQEC2JNJAjoJSR8dj_E5dH7kBsVkhN-pqjvU",
      ],
    },
    numberOfInteractions: 277,
    numberOfComments: 11,
    numberOfReposts: 2,
  },
  {
    id: 3,
    authorImage:
      "https://media.licdn.com/dms/image/D4D03AQH7vAfaSK5CAg/profile-displayphoto-shrink_100_100/0/1664257678973?e=1682553600&v=beta&t=BX1VNgyt_lr-ctwykELxKOsi63FF9C44xvF12XoBK4g",
    authorName: "Pradeep Pandey",
    authorConnection: "1st",
    authorBio:
      "32k+ @Twitter| Frontend Developer | Content Creator | Technical writer | Open for collaboration",
    content: {
      title:
        "5 Best CSS Generators for web developers🔥 🔥\n ♥️ If you find it useful, give it a like! \n Follow Pradeep Pandey  For More ✨ \n Hashtags : \n #webdeveloper  #programming #programmer #coding #coder #code #web #website #design #designer #development #developer #webdesign #webdesigner #webdevelopment #webdeveloper #frontend #backend #frontenddeveloper #backenddeveloper #html5 #html #css3 #css #javascript #js #reactjs",
      postType: "image",
      images: [
        "https://media.licdn.com/dms/image/C4D1FAQFvORS-GEYuUg/feedshare-document-images_480/1/1676729265465?e=1677715200&v=beta&t=rfip-9397NMcyRSQsplZATvZFxEwhKmFRY_bxMV8IQI",
        "https://media.licdn.com/dms/image/C4D1FAQFvORS-GEYuUg/feedshare-document-images_480/2/1676729265465?e=1677715200&v=beta&t=8cC0C75xnroOmjxu6MDkIKu_1IcD7J7-FfjXoIizvDg",
        "https://media.licdn.com/dms/image/C4D1FAQFvORS-GEYuUg/feedshare-document-images_480/3/1676729265465?e=1677715200&v=beta&t=Oz6em8BczY_x7xl610Vx5TvO9qpyyDezhI7NsjjQmDk",
      ],
    },
    numberOfInteractions: 277,
    numberOfComments: 11,
    numberOfReposts: 2,
  },
];

export default function App() {
  const renderItem = ({ item }) => {
    return <Post post={item} />;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Navbar />
      <FlatList
        style={{ backgroundColor: "#eae6df", flex: 1 }}
        data={posts}
        renderItem={renderItem}
        keyExtractor={({ id }) => id}
      />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
