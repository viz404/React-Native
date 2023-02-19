import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { styles } from '../styles/Navbar.style'

export default function Navbar() {
  return (
    <View style={styles.nav}>
      <Image 
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        }}
        style={styles.profileIcon}
      />
      <TouchableOpacity style={styles.searchBar}>
        <Image 
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/149/149852.png"
          }}
          style={styles.searchIcon}
        />
        <TextInput placeholder='Search' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.messageIconContainer}>
        <Image 
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1370/1370907.png"
          }}
          style={styles.messageIcon}
        />
      </TouchableOpacity>
    </View>
  )
}