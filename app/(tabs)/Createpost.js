import { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, ScrollView } from "react-native";


const Createpost = () => {
 const [blog, setBlog] = useState({
    title: "",
    content: "",
    tags: "",
 });

 const [errorMessage, setErrorMessage] = useState("");

//  const handleChange = (_key, _value) => {
//     setBlog((prev) => ({
//       ...prev,
//       [_key]: _key === "tags" ?  _value.split(','):_value,
//     }));
//  };
const handleChange = (_key, _value) => {
   setBlog((prev) => ({
      ...prev,
      [_key]: _key === "tags" ? _value.split(',').filter(Boolean).join(',') : _value,
   }));
};

 const handleCreatePost = async () => {
    console.log(blog)
 };

 return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Create Blog Post</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={blog.title}
          onChangeText={(text) => handleChange('title', text)}
        />
        <TextInput
          style={[styles.input, { height: 150, textAlignVertical: "top" }]}
          placeholder="Content"
          multiline
          numberOfLines={20}
          value={blog.content}
          onChangeText={(text) => handleChange('content', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Tags (comma-separated)"
          value={blog.tags}
          onChangeText={(text) => handleChange('tags', text)}
        />
        <Button title="Create Post" onPress={handleCreatePost} />
        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      </View>
    </ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 16,
 },
 header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
 },
 input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
 },
 errorMessage: {
    color: "red",
    marginBottom: 16,
 },
});

export default Createpost;