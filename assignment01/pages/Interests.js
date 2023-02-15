import {useState} from "react";
import {View, Text} from "react-native";

import Navbar from "../components/Navbar"; 
import InterestList from "../components/InterestList";
import Footer from "../components/Footer";

import {styles} from "../styles/Interests.style";

const interestsArray = [
  {
    id: 1,
    title: "Trying New Things",
    status: false,
  },
  {
    id: 2,
    title: "Art Galleries",
    status: false,
  },
  {
    id: 3,
    title: "Rave",
    status: false,
  },
  {
    id: 4,
    title: "Cafe Hopping",
    status: false,
  },
  {
    id: 5,
    title: "Boxing",
    status: false,
  },
  {
    id: 6,
    title: "Sake",
    status: false,
  },
  {
    id: 7,
    title: "Fencing",
    status: false,
  },
  {
    id: 8,
    title: "Gin Tonic",
    status: false,
  },
  {
    id: 9,
    title: "Baking",
    status: false,
  },
  {
    id: 10,
    title: "Environmentalism",
    status: false,
  },
  {
    id: 11,
    title: "League of Legends",
    status: false,
  },
  {
    id: 12,
    title: "Road Trips",
    status: false,
  },
  {
    id: 13,
    title: "Hockey",
    status: false,
  },
  {
    id: 14,
    title: "Reggaeton",
    status: false,
  },
  {
    id: 15,
    title: "DIY",
    status: false,
  },
  {
    id: 16,
    title: "Virtual Reality",
    status: false,
  },
  {
    id: 17,
    title: "Equestrian",
    status: false,
  },
  {
    id: 18,
    title: "Art",
    status: false,
  },
  {
    id: 19,
    title: "Tea",
    status: false,
  },
  {
    id: 20,
    title: "Coffee",
    status: false,
  },
  { id: 21, title: "Tarot", status: false },
  { id: 22, title: "Theater", status: false },
  { id: 23, title: "Pride", status: false },
  { id: 24, title: "Cooking", status: false },
  { id: 25, title: "Hiking", status: false },
  { id: 26, title: "Painting", status: false },
  { id: 27, title: "Gardening", status: false },
  { id: 28, title: "Knitting", status: false },
  { id: 29, title: "Reading", status: false },
  { id: 30, title: "Swimming", status: false },
  { id: 31, title: "Dancing", status: false },
  { id: 32, title: "Photography", status: false },
  { id: 33, title: "Traveling", status: false },
  { id: 34, title: "Gaming", status: false },
  { id: 35, title: "Yoga", status: false },
  { id: 36, title: "Singing", status: false },
  { id: 37, title: "Running", status: false },
  { id: 38, title: "Meditation", status: false }
]

export default function Interests () {
  const [interests, setInterests] = useState(interestsArray || []);

  const count = interests.filter(e => e.status == true).length;

  const onButtonclick = (id) => {
    const modified = interests.map((e) => {
      if (e.id == id) {
        e.status = !e.status;
      }
      return e;
    })

    setInterests([...modified]);
  }

  return (
    <View style={styles.main}>
      <Navbar/>
      <View style={{flex: 1}}>
        <Text style={styles.header}>Interests</Text>
        <Text style={styles.caption}>Let everyone know what {"you're"} passionate about, by adding it to your profile.</Text>
        <InterestList items={interests} onButtonclick={onButtonclick} /> 
      </View>
      <Footer count={count} />
    </View>
  );
}
