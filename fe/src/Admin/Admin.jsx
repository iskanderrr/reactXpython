import React, { useEffect, useState } from 'react';
import "../css/pages/admin.css";
import { Circles } from 'react-loader-spinner';
import api from "../utils/api";

export default function Admin() {
  const [donations, setDonations] = useState([
    { id: 1, name: "John Doe", amount: 100, date: "2025-01-01" },
    { id: 2, name: "Jane Smith", amount: 150, date: "2025-01-02" },
    { id: 3, name: "Alice Johnson", amount: 200, date: "2025-01-03" },
  ]);
  const [loading, setLoading] = useState(false);
  const [newDonation, setNewDonation] = useState({
    id: "",
    name: "",
    amount: "",
    date: "",
  });

  const fetchDonations = async () => {
      try {
          const response = await api.get('/donations');
          setDonations(response.data);
      } catch (error) {
          console.error('Error fetching donations:', error);
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDonation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addDonation = async () => {
      if (!newDonation.name || !newDonation.amount || !newDonation.date) {
          alert("Please fill in all fields before adding a donation.");
          return;
      }
      try {
          const response = await api.post("/donations", {
              name: newDonation.name,
              amount: parseFloat(newDonation.amount),
              date: newDonation.date,
          });
          fetchDonations();
          setNewDonation({ id: "", name: "", amount: "", date: "" });
      } catch (error) {
          console.error("Error adding donation:", error);
      }
  };

  const deleteDonation = async (id) => {
    try {
        await api.delete(`/donations/${id}`);
        setDonations((prev) => prev.filter((donation) => donation.id !== id));
    } catch (error) {
        console.error("Error deleting donation:", error);
    }
  };

  const editDonation = (donation) => {
    setNewDonation(donation);
    setIsEditing(true);
  };

  const updateDonation = async () => {
    if (!newDonation.name || !newDonation.amount || !newDonation.date) {
        alert("Please fill in all fields before updating the donation.");
        return;
    }
    try {
        await api.put(`/donations/${newDonation.id}`, {
            name: newDonation.name,
            amount: parseFloat(newDonation.amount),
            date: newDonation.date,
        });
        setDonations((prev) =>
            prev.map((donation) =>
                donation.id === newDonation.id ? { ...newDonation, amount: parseFloat(newDonation.amount) } : donation
            )
        );
        setNewDonation({ id: "", name: "", amount: "", date: "" });
        setIsEditing(false);
    } catch (error) {
        console.error("Error updating donation:", error);
    }
  };

  return (
    <main className='main'>
      <h1 className='admin-heading'>Admin - Manage Donations</h1>
      <section className='donations-section'>
        <h2 className='section-heading'>{isEditing ? "Edit Donation" : "Add Donation"}</h2>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            value={newDonation.name}
            onChange={handleInputChange}
            placeholder='Donor Name'
            className='form-input'
          />
          <input
            type='number'
            name='amount'
            value={newDonation.amount}
            onChange={handleInputChange}
            placeholder='Amount'
            className='form-input'
          />
          <input
            type='date'
            name='date'
            value={newDonation.date}
            onChange={handleInputChange}
            className='form-input'
          />
          {isEditing ? (
            <button onClick={updateDonation} className='button-filled'>
              Update Donation
            </button>
          ) : (
            <button onClick={addDonation} className='button-filled'>
              Add Donation
            </button>
          )}
        </div>
      </section>
      <section className='donations-list'>
        <h2 className='section-heading'>Donation List</h2>
        {loading?
          <Circles width={30} />
        :
        <table className='donations-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id}>
                <td>{donation.id}</td>
                <td>{donation.name}</td>
                <td>${donation.amount}</td>
                <td>{donation.date}</td>
                <td>
                  <button
                    onClick={() => editDonation(donation)}
                    className='button-edit'>
                    Edit
                  </button>
                  <button
                    onClick={() => deleteDonation(donation.id)}
                    className='button-delete'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>}
      </section>
    </main>
  );
}
