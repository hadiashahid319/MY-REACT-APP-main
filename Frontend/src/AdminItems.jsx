import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./AdminItems.module.css";
import axios from "axios";

// Validation schema
const itemSchema = z.object({
  name: z.string().min(2, "Item name is required"),
  description: z.string().min(5, "Description too short"),
  price: z.number().positive("Enter a valid price"),
  category: z.string().min(1, "Select category"),
});

export default function AdminItems() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(itemSchema),
  });
  const [file, setFile] = useState(null);

const onSubmit = async (data) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);

    if (file) formData.append("image", file);

    const res = await axios.post(
      "https://my-react-app-main-llmi.vercel.app/api/items",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    alert(res.data.message);
    reset();
    setFile(null);

  } catch (err) {
    alert(err?.response?.data?.message || err.message);
  }
};


  return (
    <div className={styles.adminpage}>
      <div className={styles.adminCard}>
        <h3 className={styles.title}>🛋️ Admin — Add Product</h3>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input {...register("name")} placeholder="Item Name" className={styles.input} />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}

          <input type="number" {...register("price", { valueAsNumber: true })} placeholder="Price (Rs)" className={styles.input} />
          {errors.price && <p className={styles.error}>{errors.price.message}</p>}

          <input {...register("category")} placeholder="Category" className={styles.input} />
          {errors.category && <p className={styles.error}>{errors.category.message}</p>}

          <textarea {...register("description")} placeholder="Description..." className={styles.textarea} />
          {errors.description && <p className={styles.error}>{errors.description.message}</p>}

          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />

          <button type="submit" className={styles.addBtn}>➕ Add Item</button>
        </form>
      </div>
    </div>
  );
}
