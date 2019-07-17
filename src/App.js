import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import styles from './styles';

const App = () => {
  /**
   * ============================================================================
   *                                 ⌒(❀>◞౪◟<❀)⌒
   *                                  App State
   * ============================================================================
   */
  const [loggedIn, setLoggedIn] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  /**
   * ============================================================================
   *                                   (๑˃̵ᴗ˂̵)و
   *                                Logged In Screen
   * ============================================================================
   */
  if (loggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Logged In Successful!</Text>
      </View>
    );
  }

  /**
   * ============================================================================
   *                                   (/^▽^)/
   *                                  Validator
   * ============================================================================
   */
  const validate = ({ email, password }) => email === 'sanjeev@gmail.com' && password === 'password';

  /**
   * ============================================================================
   *                                  (۶* ‘ヮ’)۶”
   *                                  Button Click
   * ============================================================================
   */
  const onClick = () => {
    const valid = validate(form);
    if (valid) {
      setLoggedIn(true);
    }
  };

  /**
   * ============================================================================
   *                                 ヽ/❀o ل͜ o\ﾉ
   *                                  Login Form
   * ============================================================================
   */
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Sign In!</Text>
        <TextInput
          style={styles.textInput}
          placeholder="sanjeev@gmail.com"
          textContentType="emailAddress"
          onChangeText={email => setForm({ ...form, email })}
          value={form.email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          textContentType="password"
          onChangeText={password => setForm({ ...form, password })}
          value={form.password}
        />
        <Button
          onPress={onClick}
          title="Login"
          color="#841584"
          accessibilityLabel="Login"
        />
      </View>
    </View>
  );
};

export default App;
