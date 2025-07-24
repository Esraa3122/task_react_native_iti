import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
  StatusBar,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm, Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';

export default function ToDoApp() {
  const { control, handleSubmit, reset } = useForm();
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    loadTodos();
  }, []);

  const saveTodos = async (todos) => {
    setTodos(todos);
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
  };

  const loadTodos = async () => {
    const data = await AsyncStorage.getItem('todos');
    if (data) {
      setTodos(JSON.parse(data));
    }
  };

  const onSubmit = (data) => {
    if (!data.todo.trim()) return;

    const updatedTodos = [...todos];

    if (editingIndex !== null) {
      updatedTodos[editingIndex].text = data.todo;
      setEditingIndex(null);
    } else {
      updatedTodos.push({ text: data.todo, completed: false });
    }

    saveTodos(updatedTodos);
    reset();
    setModalVisible(false);
  };

  const editTodo = (index) => {
    reset({ todo: todos[index].text });
    setEditingIndex(index);
    setModalVisible(true);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  };

//   const confirmDelete = (index) => {
//   Alert.alert(
//     'Delete Task',
//     'Are you sure you want to delete this task?',
//     [
//       {
//         text: 'Cancel',
//         style: 'cancel',
//       },
//       {
//         text: 'Delete',
//         onPress: () => {
//           deleteTodo(index); 
//         },
//         style: 'destructive',
//       },
//     ],
//     { cancelable: true }
//   );
// };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    saveTodos(newTodos);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => toggleComplete(index)}
      >
        {item.completed && <Ionicons name="checkmark" size={16} color="#1f1f1f" />}
      </TouchableOpacity>

      <Text style={[styles.todoText, item.completed && styles.completed]}>
        {item.text}
      </Text>

      <View style={styles.actionIcons}>
        <TouchableOpacity onPress={() => editTodo(index)}>
          <Ionicons name="create-outline" size={22} color="#FFC107" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteTodo(index)}>
          <Ionicons name="trash-outline" size={22} color="#FF5252" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.title}>All Tasks</Text>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.todoList}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          reset();
          setEditingIndex(null);
          setModalVisible(true);
        }}
      >
        <Ionicons name="add" size={36} color="white" />
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Controller
              control={control}
              name="todo"
              rules={{ required: 'Task cannot be empty' }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <>
                  <TextInput
                    placeholder="Enter task..."
                    placeholderTextColor="#999"
                    value={value}
                    onChangeText={onChange}
                    style={styles.input}
                  />
                  {error && <Text style={styles.error}>{error.message}</Text>}
                </>
              )}
            />

            <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.submitText}>
                {editingIndex !== null ? 'Update Task' : 'Add Task'}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    alignSelf: 'center',
  },
  todoList: {
    backgroundColor: '#ffffffee',
    borderRadius: 16,
    padding: 16,
  },
  todoItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: '#1f1f1f',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  fab: {
    backgroundColor: '#FFC107',
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 12,
    color: '#000',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1f1f1f',
  },
});
