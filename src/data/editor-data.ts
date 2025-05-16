import { IconType } from "react-icons/lib";
import { SiTypescript } from "react-icons/si";

const initialReactCode = `import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";


const API_URL = 'http://api.coderoom.com/items';

interface Item {
  _id: string;
  name: string;
  description: string;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get<Item[]>(API_URL);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleCreateOrUpdateItem = async () => {
    if (editingItem) {
      // Update item
      try {
        const response = await axios.put<Item>(\`\${API_URL}/\${editingItem._id}\`, { name, description });
        setItems(items.map(item => (item._id === editingItem._id ? response.data : item)));
        resetForm();
      } catch (error) {
        console.error('Error updating item:', error);
      }
    } else {
      // Create item
      try {
        const response = await axios.post<Item>(API_URL, { name, description });
        setItems([...items, response.data]);
        resetForm();
      } catch (error) {
        console.error('Error creating item:', error);
      }
    }
  };

  const handleDeleteItem = async (id: string) => {
    try {
      await axios.delete(\`\${API_URL}/\${id}\`);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEditItem = (item: Item) => {
    setName(item.name);
    setDescription(item.description);
    setEditingItem(item);
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setEditingItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Item Management</h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Item Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-between">
          <button
            onClick={handleCreateOrUpdateItem}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            {editingItem ? 'Update Item' : 'Create Item'}
          </button>
          {editingItem && (
            <button
              onClick={resetForm}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      <ul className="max-w-md mx-auto mt-8 space-y-4">
        {items.map(item => (
          <li
            key={item._id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <strong className="text-lg text-gray-800">{item.name}</strong>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditItem(item)}
                className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteItem(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);`;

const initialNodeCode = `import express, { Request, Response } from 'express';
import mongoose, { Schema, Document } from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/abhiarya', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error: ', err));

// Define an interface for the item
interface IItem extends Document {
    name: string;
    description: string;
}

// Define a simple schema and model
const ItemSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});

const Item = mongoose.model<IItem>('Item', ItemSchema);

// Routes

// Create an item
app.post('/items', async (req: Request, res: Response) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read all items
app.get('/items', async (req: Request, res: Response) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read a single item by ID
app.get('/items/:id', async (req: Request, res: Response) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an item by ID
app.put('/items/:id', async (req: Request, res: Response) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an item by ID
app.delete('/items/:id', async (req: Request, res: Response) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
        res.json({ message: 'Item deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log("Server running on http://localhost:", PORT);
});
`;

interface EditorValueInterface {
  initialValue: string;
  currentValue: string;
  isDiff: boolean;
  language: string;
  fileName: string;
  icon: IconType;
}

export const files: EditorValueInterface[] = [
  {
    initialValue: initialReactCode,
    currentValue: initialReactCode,
    isDiff: false,
    language: "typescript",
    fileName: "react.tsx",
    icon: SiTypescript,
  },
  {
    initialValue: initialNodeCode,
    currentValue: initialNodeCode,
    isDiff: false,
    language: "typescript",
    fileName: "node.ts",
    icon: SiTypescript,
  },
];
