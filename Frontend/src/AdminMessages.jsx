import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./AdminMessages.module.css";

// ✅ Validation Schema using Zod
const messageSchema = z.object({
  user: z.string().min(2, "User name is required"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function AdminMessages() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Ali Khan",
      email: "ali@example.com",
      message: "The item I received was damaged.",
      date: "2025-10-18",
    },
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(messageSchema),
  });

  // ✅ Add Message Handler
  const onSubmit = (data) => {
    const newMessage = {
      id: Date.now(),
      ...data,
      date: new Date().toISOString().split("T")[0],
    };
    setMessages((prev) => [newMessage, ...prev]);
    reset();
  };

  // ✅ Delete Message Handler
  const handleDelete = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  return (
    <div className={styles.messagesContainer}>
      <h2 className={styles.heading}>
        <i className="bi bi-chat-dots-fill"></i> User Messages & Complaints
      </h2>

      {/* ✅ Form Section */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formBox}>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            className={`form-control ${errors.user ? "is-invalid" : ""}`}
            {...register("user")}
            placeholder="Enter user name"
          />
          {errors.user && (
            <div className="invalid-feedback">{errors.user.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email")}
            placeholder="Enter email"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Message / Complaint</label>
          <textarea
            rows="3"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            {...register("message")}
            placeholder="Enter complaint message"
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-warning w-100 fw-semibold">
          <i className="bi bi-send-fill me-1"></i> Submit Message
        </button>
      </form>

      {/* ✅ Messages List Section */}
      <div className={styles.cardList}>
        <h4 className="mt-4 mb-3">
          <i className="bi bi-inbox-fill"></i> All User Messages ({messages.length})
        </h4>

        {messages.length === 0 ? (
          <p className={styles.empty}>No messages available.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={styles.messageCard}>
              <div className={styles.cardHeader}>
                <strong>{msg.user}</strong> <span>({msg.email})</span>
              </div>
              <p className={styles.messageText}>{msg.message}</p>
              <div className={styles.cardFooter}>
                <small>{msg.date}</small>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(msg.id)}
                >
                  <i className="bi bi-trash3"></i> Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
