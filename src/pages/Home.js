import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';

import { Button } from "../components/Button.js";
import { SkillCard } from "../components/SkillCard.js";

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Tiago</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />

      <Button />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>
      {
        mySkills.map(skill => (
          <SkillCard />
        ))
      }
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
});