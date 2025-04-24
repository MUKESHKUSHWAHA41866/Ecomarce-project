// import React, { use, useState } from 'react';
 
 

// function App() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const handleAdd = () => {
//     if (task.trim() =="") return;
//     setTasks([...tasks, task]);
//     setTask("");
//   }

//   const handleDelete = (index) => {
//     const newTasks = tasks.filter((_, i)=> i !==index);
//     setTasks(newTasks);
//   }
//   return (
//     <div className=' p-4 m-3 '>
//       <h1>To do list</h1>
//       <input  type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter the task'/>

//       <button onClick={handleAdd} > Add</button>

//       <ul>
//         {tasks?.map((t, index) => {
//           <li key={index} className='p-2 m-2'>
//             <input type='checkbox' checked={t.completed} 
//             onChange={()=>handleToggle()}
//             />
//           </li>
//         })}
//         {tasks?.map((t,index) => (
//           <li key={index}>
//             {t}
//             <button onClick={() => handleDelete(index)} className='ml-8'> Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;







// import React, { useState, useEffect } from 'react';

// function App() {
//   const [cart, setCart] = useState([]);
//   const [form, setForm] = useState({ name: '', price: '', quantity: '' });
//   const [total, setTotal] = useState(0);

//   // Fetch cart items
//   const fetchCart = async () => {
//     const res = await fetch('http://localhost:5000/cart');
//     const data = await res.json();
//     setCart(data);
//   };

//   // Fetch total price
//   const fetchTotal = async () => {
//     const res = await fetch('http://localhost:5000/cart/total');
//     const { total } = await res.json();
//     setTotal(total);
//   };

//   useEffect(() => {
//     fetchCart();
//     fetchTotal();
//   }, []);

//   // Add item handler
//   const handleAdd = async e => {
//     e.preventDefault();
//     await fetch('http://localhost:5000/cart/add', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         name: form.name,
//         price: parseFloat(form.price),
//         quantity: parseInt(form.quantity, 10),
//       }),
//     });
//     setForm({ name: '', price: '', quantity: '' });
//     fetchCart();
//     fetchTotal();
//   };

//   // Remove item handler
//   const handleRemove = async id => {
//     await fetch(`http://localhost:5000/cart/remove/${id}`, { method: 'DELETE' });
//     fetchCart();
//     fetchTotal();
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

//       {/* Add to Cart Form */}
//       <form onSubmit={handleAdd} className="flex space-x-2 mb-4">
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={form.name}
//           onChange={e => setForm({ ...form, name: e.target.value })}
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={form.price}
//           onChange={e => setForm({ ...form, price: e.target.value })}
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Quantity"
//           value={form.quantity}
//           onChange={e => setForm({ ...form, quantity: e.target.value })}
//           className="border p-2 rounded"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Add Item
//         </button>
//       </form>

//       {/* Cart Items List */}
//       <ul>
//         {cart.map(item => (
//           <li key={item._id} className="flex justify-between items-center border-b py-2">
//             <span>{item.name} — ${item.price} × {item.quantity}</span>
//             <button onClick={() => handleRemove(item._id)} className="text-red-500">
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* Total Price */}
//       <div className="mt-4 text-xl font-semibold">
//         Total: ${total}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';

// export default function App() {
//   const [cart, setCart] = useState([]);
//   const [form, setForm] = useState({ name: '', price: '', quantity: '' });
//   const [total, setTotal] = useState(0);

//   const fetchCart = async () => {
//     const res = await fetch('http://localhost:5000/cart');
//     const data = await res.json();
//     setCart(data);
//   };

//   const fetchTotal = async () => {
//     const res = await fetch('http://localhost:5000/cart/total');
//     const { total } = await res.json();
//     setTotal(total);
//   };

//   useEffect(() => {
//     fetchCart();
//     fetchTotal();
//   }, []);

//   const handleAdd = async e => {
//     e.preventDefault();
//     await fetch('http://localhost:5000/cart/add', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         name: form.name,
//         price: parseFloat(form.price),
//         quantity: parseInt(form.quantity, 10),
//       }),
//     });
//     setForm({ name: '', price: '', quantity: '' });
//     fetchCart();
//     fetchTotal();
//   };

//   const handleRemove = async id => {
//     await fetch(`http://localhost:5000/cart/remove/${id}`, { method: 'DELETE' });
//     fetchCart();
//     fetchTotal();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-3xl mx-auto">
//         {/* Header */}
//         <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
//           Shopping Cart
//         </h1>

//         {/* Add to Cart Card */}
//         <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
//           <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
//           <form onSubmit={handleAdd} className="grid grid-cols-1 gap-4">
//             <div>
//               <label htmlFor="product-name" className="block text-sm font-medium text-gray-700 mb-1">
//                 Product Name
//               </label>
//               <input
//                 id="product-name"
//                 type="text"
//                 placeholder="Product Name"
//                 value={form.name}
//                 onChange={e => setForm({ ...form, name: e.target.value })}
//                 className="border w-1/2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
//                 Price ($)
//               </label>
//               <input
//                 id="price"
//                 type="number"
//                 placeholder="Price"
//                 value={form.price}
//                 onChange={e => setForm({ ...form, price: e.target.value })}
//                 className="border rounded-lg p-3 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
//                 Quantity
//               </label>
//               <div className=" items-center space-x-2">
//                 <input
//                   id="quantity"
//                   type="number"
//                   placeholder="Quantity"
//                   value={form.quantity}
//                   onChange={e => setForm({ ...form, quantity: e.target.value })}
//                   className="flex-1 border w-1/2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   required
//                 />

//               </div>
//                    <div className='items-center pt-3 flex justify-center'><button
//                   type="submit"
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl transition"
//                 >
//                   Add
//                 </button></div>

//             </div>
//           </form>
//         </div>

//         {/* Cart Items Grid */}
//         <div className="grid gap-6">
//           {cart.map(item => (
//             <div
//               key={item._id}
//               className="bg-white shadow-md rounded-2xl p-5 flex justify-between items-center hover:shadow-lg transition"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                 <p className="mt-1 text-gray-600">
//                   ${item.price} × {item.quantity}
//                 </p>
//               </div>
//               <button
//                 onClick={() => handleRemove(item._id)}
//                 className="text-red-600 hover:text-red-800 font-semibold"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Total Price Card */}
//         <div className="mt-8 bg-white shadow-lg rounded-2xl p-6 text-center">
//           <span className="text-xl font-semibold text-gray-700">
//             Total: <span className="text-2xl text-green-600">${total}</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, ShoppingCart } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', quantity: '' });
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const fetchCart = async () => {
    const res = await fetch('http://localhost:5000/cart');
    const data = await res.json();
    setCart(data);
  };

  const fetchTotal = async () => {
    const res = await fetch('http://localhost:5000/cart/total');
    const { total } = await res.json();
    setTotal(total);
  };

  useEffect(() => {
    fetchCart();
    fetchTotal();
  }, []);

  const handleAdd = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('http://localhost:5000/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          price: parseFloat(form.price),
          quantity: parseInt(form.quantity, 10),
        }),
      });
      setForm({ name: '', price: '', quantity: '' });
      await fetchCart();
      await fetchTotal();
      toast.success('Item added to cart!');
      setShowCart(true); // show cart after adding
    } catch (err) {
      toast.error('Failed to add item.');
    }
    setLoading(false);
  };

  const handleRemove = async id => {
    setLoading(true);
    try {
      await fetch(`http://localhost:5000/cart/remove/${id}`, { method: 'DELETE' });
      await fetchCart();
      await fetchTotal();
      toast.info('Item removed.');
    } catch (err) {
      toast.error('Failed to remove item.');
    }
    setLoading(false);
  };

  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://www.shutterstock.com/image-vector/creative-modern-abstract-ecommerce-logo-260nw-2134594701.jpg" alt="Company Logo" className="h-8 mr-2" />
            <span className="text-xl font-semibold text-gray-800">E-commerce Cart Management</span>
          </div>
          <button
            onClick={() => setShowCart(prev => !prev)}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            <ShoppingCart className="w-5 h-5 mr-1" />
            {showCart ? 'Hide Cart' : 'View Cart'}
          </button>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Shopping Cart
        </h1>

        {/* Conditionally render Add Form or Cart Items */}
        {!showCart ? (
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 mb-8"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
            <form onSubmit={handleAdd} className="grid gap-4">
              <div>
                <label htmlFor="product-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  id="product-name"
                  type="text"
                  placeholder="Enter product name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="border w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Price ($)
                </label>
                <input
                  id="price"
                  type="number"
                  placeholder="Enter price"
                  value={form.price}
                  onChange={e => setForm({ ...form, price: e.target.value })}
                  className="border w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  placeholder="Enter quantity"
                  value={form.quantity}
                  onChange={e => setForm({ ...form, quantity: e.target.value })}
                  className="border w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className=" w-1/6 mx-auto flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded-md transition disabled:opacity-50"
              >
                <Plus className="w-4 h-4 mr-1" /> Add
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <>
            <div className="grid gap-6 mb-6">
              {cart.map(item => (
                <motion.div
                  key={item._id}
                  className="bg-white shadow-md rounded-2xl p-5 flex justify-between items-center hover:shadow-lg transition"
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <h4 className="text-lg text-gray-800">Quantity : {item.quantity}</h4>

                    <p className="mt-1 text-gray-600">${item.price} × {item.quantity}</p>
                  </div>
                  <motion.button
                    onClick={() => handleRemove(item._id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={loading}
                    className="flex items-center text-red-600 hover:text-red-800 font-semibold disabled:opacity-50 text-sm"
                  >
                    <Trash2 className="w-4 h-4 mr-1" /> Remove
                  </motion.button>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-xl font-semibold text-gray-700">
                Total: <span className="text-2xl text-green-600">${total}</span>
              </span>
            </motion.div>
          </>
        )}

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
}

