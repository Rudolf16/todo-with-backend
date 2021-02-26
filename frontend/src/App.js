import { useEffect, useMemo, useState } from 'react'
import axios from "axios"
import Loader from "react-loader-spinner";
import { ListItem } from "./components/listItem"
import { Button, Input, Form, FormGroup, Card } from "reactstrap"

function App() {
  const [loading, setLoading] = useState(false)
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')


  const fecthData = async () => {
    console.log()
    setLoading(true)
    try {
      const response = await axios.get("http://localhost:5000/todo", {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log(response)
      setTodoList([...response.data])


    } catch (error) {

      console.log(error)
    }
    setLoading(false)

  }
  const createTodo = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (todo.trim()) {
        const data = { item: todo, id: Date.now() }
        await axios.post("http://localhost:5000/todo", data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        fecthData()
        setTodo("");

      }
    } catch (error) {
      setLoading(false)
      console.log(error);


    }
    setLoading(false)



  }

  const onHandleDelete = async (id) => {
    setLoading(true)
    try {

      const response = await axios.delete("http://localhost:5000/todo", {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          id
        }
      })
      fecthData()

    } catch (error) {
      console.log(error)

    }
    setLoading(false)
  }


  const changeTodo = (e) => {
    setTodo(e.target.value)
  }
  useEffect(() => {
    fecthData()
  }, [])


  return (
    // loading ? <Loader  type="Grid" color="#81d4fa" /> :
    <Card style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Form onSubmit={(e) => createTodo(e)}>
        <Input maxLength="60" value={todo} onChange={(e) => changeTodo(e)} placeholder="Add todo" />
        {loading ? <Loader style={{ padding: '30px 0 30px 250px', }} type="Grid" color="#81d4fa" />
          : todoList.map((todo, index) =>
            <ListItem key={index} todo={todo} onHandleDelete={onHandleDelete} />
          )}
        <Button color="primary" type="submit" style={{ marginTop: '15px' }}>Add todo</Button>
      </Form>
    </Card>

  );
}

export default App;
