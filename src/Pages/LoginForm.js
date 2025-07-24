import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    let valid = true;
    if (username.length==0) {
      newErrors.username = 'Username is required';
      valid = false
    }
    if (password.length == 0) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (!password || password.length <= 8) {
      newErrors.password = 'Password must be more than 8 characters.';
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length == 0) {
      newErrors.email = 'Email is required';
      valid = false;
    }else if (!emailRegex.test(email)){
        newErrors.email = "Email is not valid";
        valid = false
    }
    if (phone.length == 0) {
      newErrors.phone = 'Phone is required.';
      valid = false;
    }else if(isNaN(phone)){
        newErrors.phone = 'phone must be a number'
    }
    if (!age.length == 0) {
      newErrors.phone = 'age is required';
      valid = false;
    }else if(isNaN(age)){
        newErrors.age = 'Age must be a number'
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert('data is valid');
    }else {
        alert('data is not valid');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login Form</Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      {errors.username && <Text style={styles.error}>{errors.username}</Text>}

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.showHideBtn}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text style={styles.showHideText}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
        style={styles.input}
      />
      {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#1f1f1f',
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFC107',
    marginBottom: 30,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#2c2c2c',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 12,
  },
  passwordContainer: {
    position: 'relative',
  },
  showHideBtn: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
  showHideText: {
    color: '#FFC107',
    fontWeight: '600',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 4,
  },
  submitButton: {
    backgroundColor: '#FFC107',
    borderRadius: 10,
    paddingVertical: 14,
    marginTop: 20,
    alignItems: 'center',
  },
  submitText: {
    color: '#1f1f1f',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

